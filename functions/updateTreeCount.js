const fetch = require('node-fetch');
const functions = require('firebase-functions');
const admin = require('firebase-admin');

exports.updateTreeCount = functions.pubsub.schedule('every 24 hours').onRun((context) => {
    const db = admin.firestore();

    const doIt = async () => {
        let treeCount = 2500;
        const response = await fetch(
            `https://${functions.config().shopify.key}:${
                functions.config().shopify.password
            }@carbonforest.myshopify.com/admin/api/2021-01/customers.json`
        );
        const shopifyCustomers = await response.json();

        for (let customer of shopifyCustomers.customers) {
            updateCount(treeCount, customer.total_spent, customer.orders_count);
        }

        db.collection('treeCount').document('current').update({
            total: treeCount,
        });
    };

    doIt();
});

function updateCount(treeCount, totalSpend, ordersCount) {
    const productCost = totalSpend / ordersCount;

    if (productCost >= 30) {
        treeCount += 11;
    } else if (productCost >= 16) {
        treeCount += 6;
    } else {
        treeCount += 2;
    }

    return treeCount;
}
