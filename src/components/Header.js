import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';

import GoogleAuth from './GoogleAuth';
import '../styles/Header.css';
import { click } from '@testing-library/user-event/dist/click';

const Header = () => {
  const navLinks = useRef(null);
  const [clicked, setClicked] = useState(false);
  console.log('hola');
  return (
    <nav className="main-header">
      <Link className="link nav-title" to="/">
        CLOTHY
      </Link>
      <div className={`nav-links ${clicked ? 'active' : ''}`} ref={navLinks}>
        <Link className="link" to="/disponible">
          DISPONIBLE
        </Link>
        <Link className="link" to="/apartado">
          APARTADO
        </Link>
        <GoogleAuth />
      </div>
      <MdMenu
        size="2em"
        className="toggle-button"
        onClick={() => setClicked(!clicked)}
      />

      <div></div>
    </nav>
  );
};

export default Header;
