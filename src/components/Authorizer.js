import React, { useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import Header from './Header';
import Login from './login';
import Dashboard from './Dashboard';

export default function Authorizer() {
    const userEmail = useStoreState((state) => state.userEmail);
    //const fetchDataBasedOnEmail = useActions(actions => actions.fetchDataBasedOnEmail);
    const fetchTest = useStoreActions(actions => actions.fetchTest);

    useEffect(() => {
        if (userEmail) {
            //   fetchDataBasedOnEmail();
            console.log("We have an email!", userEmail);
        }
        fetchTest();
        // eslint-disable-next-line
    }, []);


    if (userEmail) {
        return (
            <div>
                <Header />
                <Dashboard />
            </div>

        )
    } else {
        return (
            <div>
                <Header />
                <Login />
            </div>
        )
    }
};

