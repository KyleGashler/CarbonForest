import React, { useEffect } from "react";
import logo from '../images/thumb-carbon.png';
import Header from './Header';
import { useStoreActions } from "easy-peasy";

const Dashboard = () => {

    const saveCustInfo = useStoreActions(actions => actions.saveCustInfo);

    useEffect(() => {
        saveCustInfo();
    });

    return (
        <div className="App">
            <Header />
            <div>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    CARBON FOREST FOREVER!!!
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
