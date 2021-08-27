const functions = require('firebase-functions');
const admin = require('firebase-admin');

const { updateHubspot } = require('./clients/hubspot');
const { customerOrders, shopifyCustomers } = require('./clients/shopify');
const { treeLocator } = require('./utils/treeLocator');
const { clacTreeCount } = require('./utils/getTreeCount');

exports.updateAllCustomers = functions.pubsub.schedule('every 24 hours').onRun((context) => {
    const db = admin.firestore();
    return (async () => {
        const customers = await shopifyCustomers();

        for (let customer of customers.customers) {
            const customerEmail = customer.email.trim().toLowerCase();
            let treeLocation = '';

            if (customer?.addresses.length > 0) {
                treeLocation = treeLocator(customer.addresses[0].province);
            }

            try {
                const orderList = await customerOrders(customer.id);
                let { product, treeCount, treesPerMonth } = clacTreeCount(orderList.orders);
                const userRef = db.collection('users').doc(customerEmail);
                const doc = await userRef.get();
                let userFBRec = doc.data();

                if (userFBRec?.migrated_trees) {
                    treeCount += parseInt(userFBRec.migrated_trees);
                }

                let offsetPercentage = ((treeCount / 680) * 100).toFixed(0);

                if (product === 0) {
                    product = userFBRec?.product;
                }
                updateHubspot(
                    customerEmail,
                    treeCount,
                    treeLocation,
                    treesPerMonth,
                    offsetPercentage
                );

                if (product) {
                    await db.collection('users').doc(customerEmail).set(
                        {
                            product: product,
                            tree_count: treeCount,
                            tree_location: treeLocation,
                            email: customer.email,
                            first_name: customer.first_name,
                            shopify_id: customer.id,
                            offset_percentage: offsetPercentage,
                        },
                        { merge: true }
                    );
                }
            } catch (err) {
                console.log(`Failure on customer ${customerEmail}`, err);
            }
        }
    })();
});
