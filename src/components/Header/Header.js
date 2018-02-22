import React from 'react';
import logo from "../../logo.svg";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <Link to='/'>
        <p>Home</p>
        </Link>
        <Link to='/login'>
        <p>Login</p>
        </Link>
      </header>
    )
}

export default Header;