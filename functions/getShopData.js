const functions = require('firebase-functions');
const cors = require('cors');
const admin = require('firebase-admin');

const { customerOrders, shopifyCustomers } = require('./clients/shopify');
const { treeLocator } = require('./utils/treeLocator');
const { clacTreeCount } = require('./utils/getTreeCount');

admin.initializeApp();

exports.getShopData = functions.https.onRequest(async (req, res) => {
    const custEmail = req.query.email.trim().toLowerCase();
    const db = admin.firestore();
    const treeCount = await db.collection('company_metrics').doc('tree_count').get();
    const userCount = await db.collection('company_metrics').doc('user_count').get();
    let treeCountTotal = 0;
    let customerCount = 0;

    if (treeCount.exists) {
        treeCountTotal = treeCount.data().total;
    } else {
        console.log('No such document for tree count!');
    }

    if (userCount.exists) {
        customerCount = userCount.data().total;
    } else {
        console.log('No such document for user count!');
    }

    const userFBQuery = db.collection('users').doc(custEmail);
    const userDocuments = await userFBQuery.get();
    const userFBRec = userDocuments.data();

    return cors()(req, res, async () => {
        let retVal = {
            treeCountTotal,
            customerCount,
        };

        if (userFBRec?.tree_count && userFBRec?.first_name && userFBRec?.tree_location) {
            retVal = {
                ...retVal,
                product: userFBRec.product,
                treeCount: userFBRec.tree_count,
                first_name: userFBRec.first_name,
                email: userFBRec.email,
                created_at: userFBRec.created_date,
                treeLocation: userFBRec.tree_location,
            };
        } else {
            retVal = await fetchAndPopulateDataFromShopify(retVal, userFBRec, custEmail);
        }
        res.json({ ...retVal });
    });
});


// ideally this never happens but if there is a new user who is not picked up in the cache update, we'll have to
// make these 2 calls to get all the data we need bc they are not in our firestore yet.
const fetchAndPopulateDataFromShopify = async (retVal, userFBRec, custEmail) => {
    const customers = await shopifyCustomers();

    if (customers.customers) {
        for (let customer of customers.customers) {
            if (customer.email.trim().toLowerCase() === custEmail) {
                if (customer.addresses.length > 0) {
                    retVal.treeLocation = treeLocator(customer.addresses[0].province);
                }

                if (customer.last_order_id) {
                    try {
                        const orderList = await customerOrders(customer.id);
                        let { product, treeCount } = clacTreeCount(orderList.orders);

                        if (userFBRec && userFBRec.migrated_trees) {
                            treeCount += parseInt(userFBRec.migrated_trees);
                        }

                        retVal.product = product;
                        retVal.treeCount = treeCount;
                    } catch (err) {
                        console.log('error**', err);
                    }
                } else {
                    retVal.product = 0;
                }

                retVal.first_name = customer.first_name;
                retVal.created_at = customer.created_at;
                retVal.email = customer.email;

                break;
            } else {
                retVal.noShopifyCustomerFound = true;
            }
        }
    }

    if (userFBRec?.created_date) {
        retVal.product = userFBRec.product;
        retVal.created_at = userFBRec.created_date;
    }

    return retVal;
};
