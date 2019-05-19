import React, { Component } from 'react';
import './NavBar.css'

const NavBar = (props) => {
    return (
        <nav>
            <div className="nav">
                <div className="nav-left">
                    <a>Home</a>
                </div>
                <div className="nav-middle">
                    <input placeholder="Paste Youtube Link" />
                    <button>Enter</button>
                </div>
                <div className="nav-right">
                    <a>Register</a>
                    <a>Login</a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;