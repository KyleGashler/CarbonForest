const functions = require("firebase-functions");
const fetch = require('node-fetch');
const cors = require('cors');


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.getShopData = functions.https.onRequest(async (req, res) => {
    // // Grab the text parameter.
    // const original = req.query.text;
    // Push the new message into Firestore using the Firebase Admin SDK.
    // const writeResult = await admin.firestore().collection('messages').add({original: original});
    // Send back a message that we've successfully written the message

    return cors()(req, res, async () => {
        const response = await fetch(`https://${functions.config().shopify.key}:${functions.config().shopify.password}@carbonforest.myshopify.com/admin/api/2021-01/customers.json`);
        const resData = await response.json();

        res.json({ ...resData });
    });


});