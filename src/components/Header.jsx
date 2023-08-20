
import React from 'react';

import { Link } from 'react-router-dom';

import logo from './images/logo.png';


const Navbar = () => {
  return (
    
    <nav className="navbar">
      {/* Afficher le logo */}
      <img src={logo} alt="Logo" className="logo" />
      {/* Créer une liste de liens */}
      <ul className="menu">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/about">À propos</Link>
        </li>
      </ul>
    </nav>
  );
};


export default Navbar;
