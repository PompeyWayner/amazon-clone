import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Payment from "./Payment";
import Orders from "./Orders";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
    "pk_test_51HQZJJCleGvSZMZNYdOla39XO3rZ09vmOnNVTvrvikB9Lk7LRLkLGSnOwlbLsdqA8im4oq7g8TbEuFtlPHwQl9F400lPB0cO8q"
  );

function App() {

    // Pull in the basket (data layer) from the store
    const [{}, dispatch] = useStateValue();

    // useEffect Hook ---- Powerful
    // piece of code which runs once when app component loads
    // because [] is empty
    // - listener for when user logs in/out
    // basically a dynamic if statement
    useEffect(() => {

        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                // User is logged in - push them into the data layer
                dispatch({
                    type: 'SET_USER',
                    user: authUser,
                });
            } else {
                // User is logged out, remove user from data layer
                dispatch({
                    type: 'SET_USER',
                    user: null,
                });
            }
        });
    }, []);

    //console.log("USER IS >>>>> ", user);
    
  return (
    <Router> { /* Router used to go to diff pages without refreshing */ }  
        <div className="app">      
              <Switch>
                <Route path="/orders">
                    <Header />
                    <Orders />
                </Route>
                <Route path="/checkout">
                    <Header />
                    <Checkout />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                
                <Route path="/payment">
                    <Header />
                    <Elements stripe={promise}>
                        <Payment />
                    </Elements>
                </Route>
                <Route path="/">
                    <Header />
                    <Home />
                </Route>
              </Switch>  
        </div>
    </Router>
  );
}

export default App;
