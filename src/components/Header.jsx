
import React from 'react';

import { Link } from 'react-router-dom';

import logo from '../images/logo.png';


function Header() {
  return (
    
    <header>
      <div>
        <NavLink to="/kasa">
          <img src={logo} alt="Logo Kasa" />
        </NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/kasa">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about">A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

