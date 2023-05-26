import React from 'react';
import './style.css';
import taskmateGif from './img/Taskmate_Kafe.gif';
import Footer from '../Footer/index.jsx';

const Character = () => {
  return (
    <div className="character">
      <div>
        <div className="character-text">
          <h1>Who is TaskMate?</h1>
          <p>
            {' '}
            TaskMate showcases a delightful animated pixel art character that
            adds a touch of whimsy to your daily tasks.
          </p>
          <p>
            The character comes to life with fluid animations and charming
            movements, creating an engaging and interactive experience for
            users.
          </p>
          <p>
            It's a perfect blend of nostalgia and modern design, sure to bring a
            smile to your face.
          </p>
        </div>
        <img src={taskmateGif} className="gif_kafe" />
      </div>
      <Footer />
    </div>
  );
};

export default Character;
