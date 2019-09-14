import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidthAndHeight);
    return () => window.removeEventListener('resize', updateWidthAndHeight);
  });

  return (
    <nav>
      {width > 576 && (
        <div className="nav-container">
          <div className="nav-item">
            <Link className="hint-decor" to="/">
              Home
            </Link>
            <div className="hint-line" />
          </div>
          <div className="nav-item">
            <Link className="hint-decor" to="/">
              Process
            </Link>
            <div className="hint-line" />
          </div>
          <div className="nav-item">
            <Link className="hint-decor" to="/profile">
              Profile
            </Link>
            <div className="hint-line" />
          </div>
        </div>
      )}
      {width <= 576 && (
        <div className="nav-container">
          <div className="nav-item">
            <Link className="hint-decor" to="/">
              <FontAwesomeIcon icon={['fas', 'home']} size="1x" />
            </Link>
            <div className="hint-line" />
          </div>
          <div className="nav-item">
            <Link className="hint-decor" to="/">
              <FontAwesomeIcon icon={['fas', 'briefcase']} size="1x" />
            </Link>
            <div className="hint-line" />
          </div>
          <div className="nav-item">
            <Link className="hint-decor" to="/profile">
              <FontAwesomeIcon icon={['fas', 'user']} size="1x" />
            </Link>
            <div className="hint-line" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
