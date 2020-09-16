import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {

    // NOTE: Login and register to email and password uses Firabase backend


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory(); 

    const login = (event) => {
        event.preventDefault(); // This stops the refresh
        // Login logic
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                // logged in successfully, so redirect to homepage
                history.push('/');
            })
            .catch(e => alert(e.message)); // Login unsuccessfully, display alert
    };

    const register = (event) => {
        event.preventDefault(); // This stops the refresh
        // Register logic
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                // Created a user and logged in... then redirect to the homepage
                history.push('/');
            })
            .catch(e => alert(e.message)); // Registration unsuccessfully, display alert
    };

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt=""
                />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type = "email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)}type="password" />
                    <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
                </form>

                <p>By signing-in you agree to Amazon's conditions of use and sale. Please see our Privacy Notice,
                    our Cookies Notice and our Interest-Based Ads notice</p>
                <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
                 
            </div>
        </div>
    );
}

export default Login;