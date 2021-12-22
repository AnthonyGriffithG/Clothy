import React from 'react';
import { Link } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';

import GoogleAuth from './GoogleAuth';
import '../styles/Header.css';

const Header = () => {
  return (
    <nav className="main-header">
      <div className="nav-links">
        <Link to={'/'} className="header-link">
          CLOTHY
        </Link>
        <div className="centered">
          <Link to={'/apartado'} className="header-link">
            APARTADO
          </Link>
          <Link to={'/disponible'} className="header-link">
            DISPONIBLE
          </Link>
        </div>

        <GoogleAuth />
      </div>
    </nav>
  );
};

export default Header;
