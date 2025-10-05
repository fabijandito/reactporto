import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
       <h1>FabiPorto.</h1>
       
       <ul className='nav-menu'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#projects">Project</a></li>
        <li><a href="#certi">Certificate</a></li>
        <li><a href="#contact">Contact</a></li>
       </ul>
       <div className="nav-connect"><a href="#contact">Connect With Me</a></div>
    </div>
  );
};

export default Navbar;