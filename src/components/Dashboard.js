import React from "react";
import Header from './Header';
import { useStoreState } from "easy-peasy";


const Dashboard = () => {
    const user = useStoreState((state) => state.customer);

    return (
        <div className="App">
            <Header />
            <div>
                <p>
                    Hello! {user.first_name}
                </p>

            </div>
        </div>
    );
};

export default Dashboard;
