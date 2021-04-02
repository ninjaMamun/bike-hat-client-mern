import logo from './logo.svg';
import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Order from "./components/Orders/Orders";
import Header from "./components/Header/Header";
import Dashboard from './components/Dashboard/Dashboard';
import AddProducts from './components/addproducts/AddProducts';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Spinner from './components/Spinner/Spinner';
import CheckOut from './components/CheckOut/CheckOut';
import Orders from './components/Orders/Orders';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser)
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/home">
            <Shop></Shop>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/buy-product/:productId">
            <CheckOut></CheckOut>
          </PrivateRoute>
          <PrivateRoute exact path="/orders">
            <Orders></Orders>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
