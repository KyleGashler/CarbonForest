import React, { useEffect } from "react";
import logo from '../images/thumb-carbon.png';
import Header from './Header';
import { useStoreActions, useStoreState } from "easy-peasy";


const Dashboard = () => {
    const user = useStoreState((state) => state.customer);
    const saveCustInfo = useStoreActions(actions => actions.saveCustInfo);

    if (!user.first_name) {
        saveCustInfo();
    }

    useEffect(() => {
        if (!user.first_name) {
            saveCustInfo();
        }
    });

    return (
        <div className="App">
            <Header />
            <div>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Hello! {user.first_name}
                </p>
                <a
                    className="App-link"
                    href="https://carbonforest.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    CarbonForest
                    </a>
            </div>
        </div>
    );
};

export default Dashboard;
