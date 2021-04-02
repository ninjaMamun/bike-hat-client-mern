import React from 'react';
import { Route, Router, Switch } from 'react-router';
import AddProducts from '../addproducts/AddProducts';
import DashMenu from '../DashMenu/DashMenu';
import PendingOrders from '../PendingOrders/PendingOrders';
import ProductManager from '../ProductManager/ProductManager';
import Spinner from '../Spinner/Spinner';
import './Dashboard.css'

const Dashboard = () => {
    return (

        <div className="row d-flex">
            <div className="col-3">
                <DashMenu></DashMenu>
            </div>
            <div className="col-8">
                <Switch>
                    <Route path="/dashboard/addproducts">
                        <AddProducts></AddProducts>
                    </Route>
                    <Route path="/dashboard/manage-products">
                        <ProductManager></ProductManager>
                    </Route>
                    <Route path="/dashboard/pending-orders">
                        <PendingOrders></PendingOrders>
                    </Route>
                </Switch>

            </div>

        </div>
    );
};

export default Dashboard;