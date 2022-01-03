import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';
import { connect } from 'react-redux';

import GoogleAuth from './GoogleAuth';
import '../styles/Header.css';

const Header = ({ userImgUrl }) => {
  const navLinks = useRef(null);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {}, [userImgUrl]);

  return (
    <nav className="main-header">
      <Link className="link nav-title" to="/">
        CLOTHY
      </Link>
      <div className={`nav-links ${clicked ? 'active' : ''}`} ref={navLinks}>
        <Link className="link" to="/available">
          AVAILABLE
        </Link>
        <Link className="link" to="/bought">
          BOUGHT
        </Link>
        <GoogleAuth />
      </div>
      <div className="profile-pic-container">
        <img src={userImgUrl} alt="profile pic" className="profile-pic"></img>
      </div>

      <MdMenu
        size="2em"
        className="toggle-button"
        onClick={() => setClicked(!clicked)}
      />
    </nav>
  );
};
const mapStateToProps = (state) => {
  return { userImgUrl: state.auth.imgUrl };
};

export default connect(mapStateToProps, null)(Header);
