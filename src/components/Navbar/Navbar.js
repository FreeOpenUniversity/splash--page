import React, { Component } from 'react'
import logo from "./CISlogo.png"

const Navbar = () => {

        return (
        <div className="">
            <nav className="flex justify-between items-center ph5 fixed w-100 top-0 ">
                <div className="flex items-center pv3 "> 
                    <img src={logo} className="w3 h3 pr3 br self-start "></img>
                    <h1><a className="varela f3 pl3 no-underline black" href="index.html"> Collegiate Independent Study</a></h1>
                </div>
               
                <ul className="flex no-underline items-center
                ">
                    <li className="list"><a className="ttu ph2 mh3 varela no-underline black" href="profiles.html">Products</a></li>
                    <li className="list" ><a className="ttu varela no-underline black ph2 mh3" href="register.html">Technologies</a></li>
                    <li className="list"><a className="ttu p2 pr3 mh3 varela no-underline black" href="login.html">Teams</a></li>
                    <button className="fw6 white ph4 br-pill pv2 f4 ttc bg-blue bw0"> Contact</button>

                </ul>
            </nav>
        </div>
        
        ) 
    
}



export default Navbar