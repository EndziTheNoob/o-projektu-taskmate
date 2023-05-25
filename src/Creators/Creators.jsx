import React from 'react';
import './style.css';
import angieImg from './img/Angie.jpg';
import andyImg from './img/andy.jpeg';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

const Creators = () => {
  return (
    <div className="creators_container">
      <div className="business-card">
        <div>
          <img src={angieImg} alt="Profile" className="business-card__image" />
          <h2 className="business-card__name">Angelika Bauerová</h2>
        </div>
        <div>
          <p className='text'>I enjoy digital drawing, pixel art and animation.</p>
          <a
            href="https://github.com/EndziTheNoob/o-projektu-taskmate"
            className="odkaz"
          >
            <AiFillGithub /> {}
            Github
          </a>
          <p>
            <a href="https://www.linkedin.com/in/angelbauer/" className="odkaz">
              <AiFillLinkedin /> {}
              LinkedIn
            </a>
          </p>
        </div>
      </div>
      <div className="business-card">
        <div>
          <img src={andyImg} alt="Profile" className="business-card__image" />
          <h2 className="business-card__name">Andrea Wimberská</h2>
        </div>
        <div>
          <p>
            <a href="https://github.com/AndyW30" className="odkaz">
              <AiFillGithub /> {}
              Github
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/andrea-wimberská-813b14b5/
"
              className="odkaz"
            >
              <AiFillLinkedin /> {}
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Creators;
