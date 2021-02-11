import { action } from 'easy-peasy';
import firebase from 'firebase';

// const firebaseConfig = {
//     apiKey: "AIzaSyCSds_MAN_WleCSzlefOJTiOP-bOnV8nJU",
//     authDomain: "carbon-forest-b3740.firebaseapp.com",
//     projectId: "carbon-forest-b3740",
//     storageBucket: "carbon-forest-b3740.appspot.com",
//     messagingSenderId: "186306113236",
//     appId: "1:186306113236:web:70755d0ca1077ee2891541",
//     measurementId: "G-14WJZ7H3BH"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    userEmail: "aaaaaaaa",
    customer: {},
    // Actions
    fetchDataBasedOnEmail: action((state, email) => {
        // fetch data from fb
        const getCustomerList = firebase.functions().httpsCallable('getShopData');
        getCustomerList()
            .then((result) => {
                // Read result of the Cloud Function.
                const customers = JSON.parse(result.data.text);
                for (const cust in customers) {
                    if (cust.email === email) {
                        state.customer = cust;
                    }
                }
            });
        // update State with all the vals from fb
    }),
    fetchTest: action((state, email) => {
        console.log("Updating the Email")
        state.userEmail = email;
    })
}