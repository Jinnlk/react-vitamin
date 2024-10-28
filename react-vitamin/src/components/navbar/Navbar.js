import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">react!</h1>
      <ul className="navbar-links">
        <li>
          <Link to="/home">home</Link>
        </li>
        <li>
          <Link to="/nothome">nothome</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
