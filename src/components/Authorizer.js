import React from "react";
import { useStoreState } from "easy-peasy";
import Header from './Header';
import Login from './login';
import Dashboard from './Dashboard';
import qs from 'qs';

export default function Authorizer() {
    let userEmail = useStoreState((state) => state.userEmail);
    if (!userEmail) {
        console.log("no user email");
        //userEmail = qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).cust;
    }


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

