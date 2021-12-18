import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
const Header = () => {
  return (
    <nav className="main-header">
      <div className="nav-links">
        <Link to={'/'} className="header-link">
          CLOTHY
        </Link>
        <div className="centered">
          <Link to={'/'} className="header-link">
            APARTADO
          </Link>
          <Link to={'/'} className="header-link">
            DISPONIBLE
          </Link>
        </div>

        <div className="account">ACCOUNT</div>
      </div>
    </nav>
  );
};

export default Header;
