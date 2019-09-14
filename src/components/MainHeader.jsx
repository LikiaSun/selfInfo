import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MainHeader = () => {
  return (
    <header>
      <div className="intro-container">
        <h1 className="intro-title">Likia</h1>
        <span className="intro-subtitle">Full Stack develop</span>
        <div className="social-container">
          <a href="https://github.com/LikiaSun" className="social-item">
            <FontAwesomeIcon icon={['fab', 'github-square']} size="2x" />
          </a>
          <a href="https://dribbble.com/Likia" className="social-item mx-2">
            <FontAwesomeIcon icon={['fab', 'dribbble-square']} size="2x" />
          </a>
          <a href="https://medium.com/@likiasun" className="social-item">
            <FontAwesomeIcon icon={['fab', 'medium']} size="2x" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
