// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import './Navbar.css';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="navbar">
      <div className="container" id="navContainer">
        <h1 className="logo">         </h1>
        <div className="menu-icon" onClick={handleNav}>
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
        <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <Link to="/" style={{ color: 'rgb(255, 255, 255)', textDecoration: 'none' , fontSize: '25px'}}>Home</Link>
          </li>
          <li>
            <Link to="/about" style={{ color: 'rgb(255, 255, 255)', textDecoration: 'none' , fontSize: '25px'}}>About</Link>
          </li>
          {/* <li>
            <Link to="/contact" style={{ color: 'rgb(0, 0, 0)', textDecoration: 'none' , fontSize: '25px'}}>Contact</Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
