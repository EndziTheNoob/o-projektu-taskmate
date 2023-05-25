// Komponenta s menu (např. Header.jsx)
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Header = () => {
  return (
    <div className="header">
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/about">
        About
      </Link>
      <Link className="link" to="/Character">
        Character
      </Link>
      <Link className="link" to="/Creators">
        Creators
      </Link>
    </div>
  );
};

export default Header;
