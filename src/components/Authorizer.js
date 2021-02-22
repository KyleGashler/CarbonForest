import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import Header from './Header';
import Login from './login';
import Dashboard from './Dashboard';
import ErrorModule from './error';

export default function Authorizer() {
    let userEmail = useStoreState((state) => state.userEmail);
    const customer = useStoreState((state) => state.customer);
    const addEmailToStore = useStoreActions((actions) => actions.addEmailToStore);
    const saveCustInfo = useStoreActions(actions => actions.saveCustInfo);

    if (!userEmail) {
        const userEmailFromUrl = new URLSearchParams(document.location.search.substring(1)).get("cust");
        console.log("userEmailFromUrl = ", userEmailFromUrl);
        if (userEmailFromUrl) {
            addEmailToStore(userEmailFromUrl);
        }
    } else {
        if (!customer.first_name) {
            saveCustInfo();
        }
    }


    if (userEmail && customer.email) {

        return (
            <div>
                <Header />
                <div className="content">
                    <Dashboard />
                </div>
            </div>

        )
    } else if (userEmail) {
        // set email failure modal

        return (
            <div>
                <Header />
                <div className="content">
                    <ErrorModule />
                </div>
            </div>
        )
    }
    else {
        console.log("Forcing login")
        return (
            <div>
                <Header />
                <Login />
            </div>
        )
    }
};

