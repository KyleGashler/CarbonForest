const functions = require('firebase-functions');
const cors = require('cors');
const admin = require('firebase-admin');
const fetch = require('node-fetch');

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
        console.log('No such document for tree count!');
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
