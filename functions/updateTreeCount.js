const functions = require('firebase-functions');
const admin = require('firebase-admin');

const { shopifyCustomers } = require('./clients/shopify');

exports.updateTreeCount = functions.pubsub.schedule('every 24 hours').onRun((context) => {
    const db = admin.firestore();

    return (async () => {
        let treeCount = 3000;
        const customers = await shopifyCustomers();

        for (let customer of customers.customers) {
            treeCount = updateCount(treeCount, customer.total_spent, customer.orders_count);
        }
        try {
            await db.collection('company_metrics').doc('tree_count').update({
                total: treeCount,
            });
            await db.collection('company_metrics').doc('user_count').update({
                total: customers.length,
            });
        } catch (e) {
            console.log('Tree Count error: ' + treeCount, e);
        }
    })();
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
