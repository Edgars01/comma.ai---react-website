import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    

    <div>
        <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"></link>
        <nav className="navbar">
        <ul className="navbar-nav">

            

            <li className="logo">
            <a href="/" className="nav-link">
                <span className="link-text logo-text">COMMA AI</span>
                <i className="fa fa-solid fa-terminal"></i>
            </a>
            </li>
    
            <li className="nav-item">
            <a href="/compatibility" className="nav-link nav-linkSlide">
                <span className="link-text">Compatibility</span>
            </a>
            </li>
    
            <li className="nav-item">
                <a href="/setup-guide" className="nav-link nav-linkSlide">
                <span className="link-text">Setup Guide</span>
            </a>
            </li>
    
            <li className="nav-item">
                <a href="#" className="nav-link nav-linkSlide">         
                <span className="link-text">Jobs We're hiring!</span>
            </a>
            </li>
    
            <li className="nav-item">
                <a href="#" className="nav-link nav-linkSlide"> 
                <span className="link-text">Shop</span>
            </a>
            </li>
    
            <li className="nav-item" id="themeButton">
                <a href="#" className="nav-link nav-linkSlide">
                <span className="link-text">Services</span>
            </a>
            </li>

            <li className="nav-item" id="themeButton">
                <a href="#" className="nav-link nav-linkSlide">   
                <span className="link-text">Support</span>
                </a>
            </li>

            <li className="nav-item" id="themeButton">
                <a href="#" className="nav-link nav-linkSlide">   
                <span className="link-text">Prime</span>
                </a>
            </li>

            <li className="nav-item" id="themeButton">
                <a href="#" className="nav-link nav-linkSlide"> 
                <span className="link-text">Blog</span>
                </a>
            </li>

            <li className="nav-item" id="themeButton">
                <a href="#" className="nav-link nav-linkSlide">  
                <span className="link-text">comma connect</span>
                </a>
            </li>

            <li className="nav-item" id="themeButton">
                <a href="#" className="nav-link nav-linkSlide">
                <span className="link-text">Leaderboard</span>
                </a>
            </li>

            

        </ul>
        </nav>
    
    </div>

  )
}

export default Navbar