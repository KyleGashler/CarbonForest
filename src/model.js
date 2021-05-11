import { action, thunk } from 'easy-peasy';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    userEmail: '',
    customer: {},
    error: '',
    requestInFlight: false,
    // Actions
    loadCustomerState: action((state, data) => {
        state.customer = data;
    }),
    addEmailToStore: action((state, email) => {
        if (email) {
            state.userEmail = email.trim().toLowerCase();
        }
    }),
    toggleRequestInFlight: action((state, val) => {
        state.requestInFlight = val;
    }),
    //thunks
    saveCustInfo: thunk(async (actions, userEmail) => {
        actions.toggleRequestInFlight(true);

        const encodedEmail = encodeURIComponent(userEmail);
        const response = await fetch(
            `https://profile.carbonforest.org/appData?email=${encodedEmail}`
        );
        const data = await response.json();

        actions.loadCustomerState(data);
        actions.toggleRequestInFlight(false);
    }),
};
