import React from 'react';
import './style.css';
import angieImg from './img/Angie.jpg';
import andyImg from './img/andy.jpeg';

const Creators = () => {
  return (
    <div className="creators_container">
      <div className="business-card">
        <div>
          <img src={angieImg} alt="Profile" className="business-card__image" />
          <h2 className="business-card__name">Angelika Bauerová</h2>
        </div>
        <div>
          <p>
            Github:{' '}
            <a
              href="https://github.com/EndziTheNoob/o-projektu-taskmate"
              className="odkaz"
            >
              Odkaz{' '}
            </a>{' '}
          </p>
          <p>LinkedIn:</p>
        </div>
      </div>
      <div className="business-card">
        <div>
          <img src={andyImg} alt="Profile" className="business-card__image" />
          <h2 className="business-card__name">Andrea Wimberská</h2>
        </div>
        <div>
          <p>Github:</p>
          <p>LinkedIn:</p>
        </div>
      </div>
    </div>
  );
};

export default Creators;
