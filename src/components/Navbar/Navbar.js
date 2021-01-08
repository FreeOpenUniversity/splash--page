import React, { Component } from 'react'
import {MenuItems } from './MenuItems'
import './Navbar.css'

class Navbar extends Component {

    state = { clicked: false}
    render() {
        return (
        <div>
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Splash Page</h1>
                <div>

                </div>

                <ul className="menuItem">
                    {MenuItems.map((item,index) => {
                        return(
                            <li key={index}><a  href={item.url}> {item.title} </a></li>
                        )
                    })
                }
                    <li><a href="#" className="btn">Click me</a></li>
                </ul>
            </nav>
        </div>
        
        ) 
    }
}



export default Navbar