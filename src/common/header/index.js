import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhone, FaRegClock, FaEnvelope } from "react-icons/fa";
import { FaShoppingCart ,FaSearch ,FaRegHeart } from "react-icons/fa";
import '../../styles/header.css';

function Header() {

  let activeStyle = {
    color: "#00234b",
  };

  let noActiveStyle = {
    color: "#f2f2f2",
  }

  return (
    <header className="header">
      <div className="top-bar">
        <div className="container h-100 d-flex justify-content-between items-center">
          <div className="top-left h-100">
            <ul className="h-100 m-0 d-flex">
              <li><FaFacebookF /></li>
              <li><FaTwitter /></li>
              <li><FaLinkedinIn /></li>
              <li><FaInstagram /></li>
            </ul>
          </div>
          <div className="top-right h-100">
            <ul className="h-100 m-0 d-flex">
              <li><FaPhone className="me-2" /> +1 800 123 4567</li>
              <li><FaEnvelope className="me-2" /> event@vivatheme.com</li>
              <li><FaRegClock className="me-2" /> Mon - Sat 8.00 - 18.00</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="navbar">
        <div className="container">
          <div className="wrapper mx-5 d-flex">
            <Link to="/">
              <img className="brand" src="https://www.vivatheme.com/static/wp-content/uploads/sites/2/2022/03/logo.svg" alt="Logo" />
            </Link>
            <div className="nav-items ms-5">
              <ul className="d-flex h-100">
                <li>
                  <NavLink to="/" style={({ isActive }) => isActive ? activeStyle : noActiveStyle }>Inicio</NavLink>
                </li>
                <li className='noActiveStyle'>Pages</li>
                <li className='noActiveStyle'>Portfolio</li>
                <li className='noActiveStyle'>Blog</li>
                <li className='noActiveStyle'>Shop</li>
                <li className='noActiveStyle'>Elements</li>
                <li className='noActiveStyle'>Extra</li>
              </ul>
            </div>
          </div>
          <div className="nav-buttons">
            <div className="buttons">
              <span><FaSearch  className='fs-5' /></span>
              <span><FaRegHeart className='fs-5' /></span>
              <NavLink to="/carrito" style={({ isActive }) => isActive ? activeStyle : undefined }><FaShoppingCart className='fs-5' /></NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header