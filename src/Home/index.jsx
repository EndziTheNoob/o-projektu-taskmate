import React from 'react';
import './style.css';
import { useLocation } from 'react-router-dom';
import logo from './img/logo_bublina.png';

const Home = () => {
  const location = useLocation();

  // Zde přidáme podmínku pro zobrazení komponenty pouze na kořenové cestě
  if (location.pathname !== '/') {
    return null;
  }

  return (
    <div className="home_container">
      <img src={logo} className="logo" />
      <div className="intro">
        <p>
          Welcome to our exciting front-end project that combines creativity and
          productivity!
        </p>
        <p>
          Let's delve into our captivating web application featuring an animated
          pixel art character with a user-friendly to-do list.
        </p>
      </div>
    </div>
  );
};

export default Home;
