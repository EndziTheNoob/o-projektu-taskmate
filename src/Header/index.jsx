// Komponenta s menu (např. Header.jsx)
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/Character">Character</Link>
      <Link to="/Creators">Creators</Link>
    </div>
  );
};

export default Header;
