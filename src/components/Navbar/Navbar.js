import React, { Component } from 'react'

const Navbar = () => {

        return (
        <div className="">
            <nav className="flex justify-between items-center ph5 fixed w-100 top-0 ">
                <h1 className="">
                    <a className="varela f3 no-underline black" href="index.html"> Colligate Independent Study</a>
                </h1>
                <ul className="flex no-underline
                ">
                    <li className="list"><a className="ttu ph2 mh3 varela no-underline black" href="profiles.html">Products</a></li>
                    <li className="list" ><a className="ttu varela no-underline black ph2 mh3" href="register.html">Technologies</a></li>
                    <li className="list"><a className="ttu p2 mh3 varela no-underline black" href="login.html">Teams</a></li>
                    <li className="list"><a className="ttc bg-light-blue ba br-2 white mh3 ph2 pv1 varela no-underline" href="login.html">Subscribe</a></li>

                </ul>
            </nav>
        </div>
        
        ) 
    
}



export default Navbar