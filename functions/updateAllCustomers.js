const functions = require('firebase-functions');
const admin = require('firebase-admin');
const fetch = require('node-fetch');

exports.updateAllCustomers = functions.pubsub.schedule('every 24 hours').onRun((context) => {
    const db = admin.firestore();

    const doIt = async () => {
        const customers = await shopifyCustomers();

        for (let customer of customers.customers) {
            const customerEmail = customer.email.trim().toLowerCase();
            let treeLocation = '';

            if (customer?.addresses.length > 0) {
                treeLocation = treeLocator(customer.addresses[0].province);
            }

            try {
                const orderList = await customerOrders(customer.id);
                const userFBRec = db.collection('users').doc(customerEmail);
                let { product, treeCount } = clacTreeCount(orderList.orders);

                if (userFBRec && userFBRec.migrated_trees) {
                    treeCount += parseInt(userFBRec.migrated_trees);
                }

                let offsetPercentage = ((treeCount / 680) * 100).toFixed(0);

                await db.collection('users').doc(customerEmail).update({
                    product,
                    tree_count: treeCount,
                    tree_location: treeLocation,
                    email: customer.email,
                    first_name: customer.first_name,
                    shopify_id: customer.id,
                    offset_percentage: offsetPercentage,
                });
            } catch (err) {
                console.log(`Failure on customer ${customerEmail}`, err);
            }
        }
    };

    return doIt();
});

const clacTreeCount = (orders) => {
    let treeCount = 0;
    let product;

    orders.forEach((order) => {
        if (order.line_items) {
            order.line_items.forEach((lineItem) => {
                if (
                    lineItem.product_id === 5985588871362 ||
                    lineItem.name === '30 Years To Carbon Free'
                ) {
                    treeCount += 2;
                    product = 30;
                } else if (
                    lineItem.product_id === 5985587167426 ||
                    lineItem.name === '10 Years To Carbon Free'
                ) {
                    treeCount += 6;
                    product = 10;
                } else {
                    treeCount += 11;
                    product = 5;
                }
            });
        }
    });
    return { product, treeCount };
};

const treeLocator = (state) => {
    try {
        let location = treeLocationMap[state.toLowerCase()];
        if (!location) location = 'California';
        return location;
    } catch (e) {
        return 'California';
    }
};

const treeLocationMap = {
    alabama: 'Pennsylvania',
    alaska: 'California',
    arizona: 'California',
    arkansas: 'Colorado',
    california: 'California',
    colorado: 'California',
    connecticut: 'Pennsylvania',
    delaware: 'Pennsylvania',
    florida: 'Colorado',
    georgia: 'Colorado',
    hawaii: 'California',
    idaho: 'California',
    illinois: 'Colorado',
    indiana: 'Colorado',
    iowa: 'Colorado',
    kansas: 'Colorado',
    kentucky: 'Colorado',
    louisiana: 'Colorado',
    maine: 'Pennsylvania',
    maryland: 'Pennsylvania',
    massachusetts: 'Pennsylvania',
    michigan: 'Colorado',
    minnesota: 'Colorado',
    mississippi: 'Colorado',
    missouri: 'Colorado',
    montana: 'California',
    nebraska: 'Colorado',
    nevada: 'California',
    'new hampshire': 'Pennsylvania',
    'new jersey': 'Pennsylvania',
    'new mexico': 'California',
    'new york': 'Pennsylvania',
    'north carolina': 'Colorado',
    'north dakota': 'Colorado',
    ohio: 'Colorado',
    oklahoma: 'Colorado',
    oregon: 'California',
    pennsylvania: 'Pennsylvania',
    'rhode island': 'Pennsylvania',
    'south carolina': 'Colorado',
    'south dakota': 'Colorado',
    tennessee: 'Colorado',
    texas: 'Colorado',
    utah: 'Colorado',
    vermont: 'Pennsylvania',
    virginia: 'Pennsylvania',
    washington: 'California',
    'west virginia': 'Colorado',
    wisconsin: 'Colorado',
    wyoming: 'Colorado',
};

const customerOrders = async (customerId) => {
    const orderListResponse = await fetch(
        `https://${functions.config().shopify.key}:${
            functions.config().shopify.password
        }@carbonforest.myshopify.com/admin/api/2021-04/customers/${customerId}/orders.json`
    );
    return await orderListResponse.json();
};

const shopifyCustomers = async () => {
    const response = await fetch(
        `https://${functions.config().shopify.key}:${
            functions.config().shopify.password
        }@carbonforest.myshopify.com/admin/api/2021-01/customers.json?limit=250`
    );
    return await response.json();
};
