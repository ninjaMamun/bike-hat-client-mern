import React from 'react';
import { Link } from 'react-router-dom';
import './DashMenu.css'
const DashMenu = () => {
    return (
        <div className=" p-3 text-dark dash-nav">
            <ul className="nav nav-pills flex-column mb-auto">

                <li>
                    <Link to="/dashboard/addproducts" className="nav-link text-dark">
                        Add Products
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/pending-orders" className="nav-link text-dark">
                        Pending Orders
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/manage-products" className="nav-link text-dark">
                        Manage Products
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default DashMenu;