import { action, thunk } from 'easy-peasy';




// eslint-disable-next-line import/no-anonymous-default-export
export default {
    userEmail: "",
    customer: {},
    error: "",
    requestInFlight: false,
    // Actions
    fetchDataBasedOnEmail: action((state, customers) => {
        if (customers) {
            for (let cust of customers) {
                if (cust.email === state.userEmail) {
                    state.customer = cust;
                }
            }
        }

        // update State with all the vals from fb
    }),
    addEmailToStore: action((state, email) => {
        console.log("Updating the Email")
        state.userEmail = email;
    }),
    toggleRequestInFlight: action((state, val) => {
        console.log("Updating the Email")
        state.requestInFlight = val;
    }),
    //thunks
    saveCustInfo: thunk(async (actions) => {
        actions.toggleRequestInFlight(true);

        const response = await fetch('https://us-central1-carbon-forest-b3740.cloudfunctions.net/getShopData');
        const data = await response.json();

        actions.fetchDataBasedOnEmail(data.customers);
        actions.toggleRequestInFlight(false);
    }),
}
