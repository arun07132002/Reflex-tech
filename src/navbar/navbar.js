import React, { useState } from "react";
import { Link } from "react-router-dom";

// icon import 
import { FaBars, FaTimes } from 'react-icons/fa';
import './/Navbar.css';
export default function Navbar() {

    const [icon, setIcon] = useState(false)

    const handleClick = () => {
        setIcon(!icon)
    }

    const closeSideDrawer=()=>{
        setIcon(false)
    }
    return (
        <>
            <div className="navbar">
                <nav className="navbar">
                    <Link to='/' onClick={closeSideDrawer} className="logo-nav">REFLEX TECH</Link>

                    <div className="menu-icon" onClick={handleClick}>
                        {
                        icon? <FaTimes className="fa-times"></FaTimes>
                        :
                        <FaBars className="fa-bars"></FaBars>
                        }
                    </div>

                    <ul className={
                        icon? 'nav-menu active':'nav-menu'
                    }>
                    <li>
                        <Link to='/' className="nav-link" onClick={closeSideDrawer}>
                            
                            Home</Link>
                    </li>
                    <li>
                        <Link to='/about' className="nav-link" onClick={closeSideDrawer}>
                            
                            About</Link>
                    </li>
                    <li>
                        <Link to='/service' className="nav-link" onClick={closeSideDrawer}>
                            
                            Service</Link>
                    </li>
                    <li>
                        <Link to='./contect' className="nav-link" onClick={closeSideDrawer}>
                            
                            Contect</Link>
                    </li>
                    <li>
                        <Link to='./blog' className="nav-link" onClick={closeSideDrawer} >
                            
                            Blog</Link>
                    </li>
                    </ul>

                </nav>
            </div>
        </>
    )
}