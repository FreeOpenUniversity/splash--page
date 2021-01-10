import React, { Component } from 'react'
import {MenuItems } from './MenuItems'
import './Navbar.css'

const Navbar = () => {

        return (
        <div>
            <nav class="navbar">
                <h1>
                    <a href="index.html"><i class="fas fa-code"></i> DevConnector</a>
                </h1>
                <ul>
                    <li><a href="profiles.html">Products</a></li>
                    <li><a href="register.html">Technologies</a></li>
                    <li><a href="login.html">Teams</a></li>
                    <li><a class="btn" href="login.html">Subscribe</a></li>

                </ul>
            </nav>
        </div>
        
        ) 
    
}



export default Navbar