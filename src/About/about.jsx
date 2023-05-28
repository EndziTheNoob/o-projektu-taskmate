import React from 'react';
import './style.css';
import screen2 from './img/screen_taskmate2.png';
import screen1 from './img/screen_taskmate1.png';
import screen3 from './img/screen_taskmate3.png';
import Footer from '../Footer/index.jsx';

const About = () => {
  return (
    <div className="about">
      <h1>What it is about</h1>
      <p>We understand the importance of staying organized and focused. </p>
      <p>
        With our TaskMate app, you can effortlessly manage your tasks, set
        priorities, and track your progress.{' '}
      </p>
      <p>
        The minimalist design ensures a clutter-free interface, allowing you to
        concentrate on what truly matters: getting things done.
      </p>
      <h1>Our TaskMate project prioritizes:</h1>
      <p>
        Usability, making it accessible and enjoyable for users of all levels of
        technical expertise.{' '}
      </p>
      <h1>The interface is designed:</h1>
      <p>
        With simplicity in mind, enabling effortless navigation and quick task
        management.
      </p>
      <div className="about_img">
        <img src={screen2} className="screenshot" />
        <img src={screen1} className="screenshot" />
        <img src={screen3} className="screenshot" />
      </div>
      <Footer />
    </div>
  );
};

export default About;
