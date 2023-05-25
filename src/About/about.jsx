import React from 'react';
import './style.css';

const About = () => {
  return (
    <>
      <div className="about">
        <h3>What it is about</h3>
        <ul>
          <li>
            We understand the importance of staying organized and focused.{' '}
          </li>
          <li>
            With our TaskMate app, you can effortlessly manage your tasks, set
            priorities, and track your progress.{' '}
          </li>
          <li>
            The minimalist design ensures a clutter-free interface, allowing you
            to concentrate on what truly matters: getting things done.
          </li>
        </ul>
        <p>
          <h3>Our TaskMate project prioritizes:</h3> usability, making it
          accessible and enjoyable for users of all levels of technical
          expertise. <h3>The interface is designed:</h3> with simplicity in
          mind, enabling effortless navigation and quick task management.
          <h3>Whether you're: </h3>a seasoned web user or new to this domain,
          you'll find our application easy to understand and use.
        </p>
        <div className="about_img">
          <img src="./img/screen_taskmate2.png" />
          <img src="./img/screen_taskmate1.png" />
          <img src="./img/screen_taskmate3.png" />
        </div>
      </div>
    </>
  );
};

export default About;
