const functions = require('firebase-functions');
const fetch = require('node-fetch');
const cors = require('cors');
const admin = require('firebase-admin');

admin.initializeApp();

exports.getShopData = functions.https.onRequest(async (req, res) => {
    const custEmail = req.query.email.trim().toLowerCase();
    const db = admin.firestore();
    const snapshot = await db.collection('users').get();
    let dataFromFb;

    snapshot.forEach((doc) => {
        if (doc.id.toLowerCase() === custEmail) {
            dataFromFb = doc.data();
        }
    });

    return cors()(req, res, async () => {
        const response = await fetch(
            `https://${functions.config().shopify.key}:${
                functions.config().shopify.password
            }@carbonforest.myshopify.com/admin/api/2021-01/customers.json`
        );
        const shopifyCustomers = await response.json();
        let retVal = {};
        if (shopifyCustomers.customers) {
            retVal.customerCount = shopifyCustomers.customers.length;

            for (let customer of shopifyCustomers.customers) {
                if (customer.email.trim().toLowerCase() === custEmail) {
                    if (customer.addresses.length > 0) {
                        console.log('CUSTOMER ADDRESS IS HERE');
                        console.log(
                            'customer.addresses[0].province',
                            customer.addresses[0].province
                        );
                        retVal.treeLocation = findTreeLocation(customer.addresses[0].province);
                    }

                    if (customer.last_order_id) {
                        const orderDetailRes = await fetch(
                            `https://${functions.config().shopify.key}:${
                                functions.config().shopify.password
                            }@carbonforest.myshopify.com/admin/api/2021-01/orders/${
                                customer.last_order_id
                            }.json?fields=current_subtotal_price,created_at`
                        );
                        const orderDetail = await orderDetailRes.json();
                        console.log(orderDetail);
                        const orderTotal = parseFloat(orderDetail.current_subtotal_price);

                        if (orderTotal >= 30) {
                            retVal.product = 5;
                        } else if (orderTotal >= 16) {
                            retVal.product = 10;
                        } else {
                            retVal.product = 30;
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

function findTreeLocation(state) {
    try {
        let location = treeLocationMap[state.toLowerCase()];
        if (!location) location = 'California';
        return location;
    } catch (e) {
        return 'California';
    }
}

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
