const functions = require('firebase-functions');
const admin = require('firebase-admin');
const fetch = require('node-fetch');

exports.updateTreeCount = functions.pubsub.schedule('every 24 hours').onRun((context) => {
    const db = admin.firestore();

    const doIt = async () => {
        let treeCount = 3000;
        const customers = await shopifyCustomers();

        for (let customer of customers.customers) {
            treeCount = updateCount(treeCount, customer.total_spent, customer.orders_count);
        }
        await db.collection('treeCount').doc('current').update({
            total: treeCount,
        });
    };

    return doIt();
});

function updateCount(treeCount, totalSpend, ordersCount) {
    const productCost = parseFloat(totalSpend) / parseFloat(ordersCount);

    if (productCost >= 30) {
        treeCount += 11;
    } else if (productCost >= 16) {
        treeCount += 6;
    } else {
        treeCount += 2;
    }

    return treeCount;
}

const shopifyCustomers = async () => {
    const response = await fetch(
        `https://${functions.config().shopify.key}:${
            functions.config().shopify.password
        }@carbonforest.myshopify.com/admin/api/2021-01/customers.json?limit=250`
    );
    return await response.json();
};
