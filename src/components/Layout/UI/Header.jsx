import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
// import Login from '../../../pages/Login';
// import Register from '../../../pages/Register';
// import './Header.css'; // Assuming you have a CSS file for Header component

const Header = () => {
const [show , setShow] = useState(false);
const handleButtonToggle = () => {
    return setShow(!show)
}

  return (
    <header>
        <div className='container'>

            <div className='grid navbar-grid'>
                <div className='logo'>
                    <NavLink to="/">
                        <h1> World Atlas</h1>
                    </NavLink>
                </div>
                <nav className={show ? "menu-mobile" : "menu-web"}>
                    <ul>
                        <li><NavLink to="/" className="nav-link">Home</NavLink></li>
                        <li><NavLink to="about" className="nav-link">About</NavLink></li>
                        <li><NavLink to="country" className="nav-link">Country</NavLink></li>
                        <li><NavLink to="contact" className="nav-link">Contact</NavLink></li>
                {/* <button><NavLink to="login" className="nav-link">Login</NavLink></button> */}
                {/* <button><NavLink to="register" className="bg-sky">Register</NavLink></button> */}
                    </ul>
                </nav>
                <div className='ham-menu'>
                    <button onClick={handleButtonToggle}><GiHamburgerMenu/></button>
                </div>
            </div>
        </div>
        
    </header>
  );
}

export default Header;