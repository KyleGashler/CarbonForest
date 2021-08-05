const fetch = require('node-fetch');
const functions = require('firebase-functions');

exports.customerOrders = async (customerId) => {
    const orderListResponse = await fetch(
        `https://${functions.config().shopify.key}:${
            functions.config().shopify.password
        }@carbonforest.myshopify.com/admin/api/2021-04/customers/${customerId}/orders.json`
    );
    return await orderListResponse.json();
};

exports.shopifyCustomers = async () => {
    const response = await fetch(
        `https://${functions.config().shopify.key}:${
            functions.config().shopify.password
        }@carbonforest.myshopify.com/admin/api/2021-01/customers.json?limit=250`
    );
    return await response.json();
};