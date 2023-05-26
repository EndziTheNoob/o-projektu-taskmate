import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Header from './Header/index.jsx';
import Home from './Home/index.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About/about';
import Character from './Character/Character';
import Creators from './Creators/Creators';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} index />
          <Route path="/about" element={<About />} />
          <Route path="/character" element={<Character />} />
          <Route path="/creators" element={<Creators />} />
        </Routes>
      </Router>
    </>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
