import React from 'react';
import './style.css';

/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <header className="header">
        <nav className="headerMenu">
            <a href="#">HOME</a>
            <a href="#">ABOUT US</a>
            <a href="#">CONTACT US</a>
        </nav>
        <div>
            social media links         
        </div>
    </header>
    
   )

 }

export default Header