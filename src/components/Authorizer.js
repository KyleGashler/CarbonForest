import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import Header from './Header';
import Login from './login';
import Dashboard from './Dashboard';
import ErrorModule from './error';
import LoadingBar from './LoadingBar';

export default function Authorizer() {
    let userEmail = useStoreState((state) => state.userEmail);
    const customer = useStoreState((state) => state.customer);
    const requestInFlight = useStoreState((state) => state.requestInFlight);
    const addEmailToStore = useStoreActions((actions) => actions.addEmailToStore);
    const saveCustInfo = useStoreActions(actions => actions.saveCustInfo);

    if (!userEmail) {
        const userEmailFromUrl = new URLSearchParams(document.location.search.substring(1)).get("cust");
        if (userEmailFromUrl) {
            addEmailToStore(userEmailFromUrl);
        }
    } else {
        if (!customer.first_name) {
            saveCustInfo(userEmail);
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
    } else if (requestInFlight) {
        return (
            <div>
                <Header />
                <div className="content">
                    <LoadingBar />
                </div>
            </div>
        )
    } else if (userEmail) {
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
        return (
            <div>
                <Header />
                <Login />
            </div>
        )
    }
};

