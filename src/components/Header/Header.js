import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';
import { handleSignOut } from '../Login/loginManager';
import logo from './logomamun.png'


const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const signOut = () => {
        handleSignOut()
            .then(res => {
                setLoggedInUser(res);


            })
    }

    return (
        <div className="menu-area">
            <nav className="navbar navbar-expand-lg navbar-light nav-spacing">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img className="navimg" src={logo} alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="/home" className="nav-link active nav-a m-1" aria-current="page">Home</Link>
                            <Link to="/orders" className="nav-link active nav-a m-1" >Order</Link>
                            <Link to="/dashboard/manage-products" className="nav-link active nav-a m-1" >Admin</Link>


                            {
                                (loggedInUser.displayName) ? <p className="nav-link nav-a m-1 active" >{loggedInUser.displayName}</p> : (loggedInUser.email) ? <p className="nav-link nav-a m-1 active" >{loggedInUser.email}</p> : <Link to="/login"><p className="nav-link nav-a m-1 mouse active">Log In</p></Link>
                            }
                            {
                                (loggedInUser.displayName || loggedInUser.email) && <p onClick={signOut} className="nav-link nav-a m-1 mouse active">Log Out</p>
                            }

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;