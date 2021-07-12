const functions = require('firebase-functions');
const cors = require('cors');
const admin = require('firebase-admin');
const fetch = require('node-fetch');

admin.initializeApp();

exports.getShopData = functions.https.onRequest(async (req, res) => {
    const custEmail = req.query.email.trim().toLowerCase();
    const db = admin.firestore();
    const userSnapshot = await db.collection('users').get();
    let dataFromFb;
    let treeCountTotal = 0;

    const treeCount = db.collection('treeCount').doc('current');
    const doc = await treeCount.get();
    if (!doc.exists) {
        console.log('No such document!');
    } else {
        treeCountTotal = doc.data().total;
    }

    userSnapshot.forEach((doc) => {
        if (doc.id.toLowerCase() === custEmail) {
            dataFromFb = doc.data();
        }
    });

    return cors()(req, res, async () => {
        const customers = await shopifyCustomers();
        let retVal = {};

        retVal.treeCountTotal = treeCountTotal;

        if (customers.customers) {
            retVal.customerCount = customers.customers.length;

            for (let customer of customers.customers) {
                if (customer.email.trim().toLowerCase() === custEmail) {
                    if (customer.addresses.length > 0) {
                        retVal.treeLocation = treeLocator(customer.addresses[0].province);
                    }

                    if (customer.last_order_id) {
                        try {
                            const orderList = await customerOrders(customer.id);
                            let { product, treeCount } = clacTreeCount(orderList.orders);

                            if (dataFromFb && dataFromFb.migrated_trees) {
                                treeCount += parseInt(dataFromFb.migrated_trees);
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

        if (dataFromFb && dataFromFb.created_date) {
            retVal.product = dataFromFb.product;
            retVal.created_at = dataFromFb.created_date;
        }

        res.json({ ...retVal });
    });
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
