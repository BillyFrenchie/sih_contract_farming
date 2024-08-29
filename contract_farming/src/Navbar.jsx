import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Assuming you have a CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      
      <div className='navdiv'>
       <div>Home</div>
       <div>Market</div>
       <div>Payments</div>
       <input className="navsearch "  placeholder='search'></input>
      
      </div>
    </nav>
  );
};

export default Navbar;
