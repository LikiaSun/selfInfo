import React from 'react';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import transList from '../sources/mainTranslateList';

const calc = (x, y) => [x - window.innerHeight / 2, y - window.innerHeight / 2];

const MainHeader = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 1, tension: 180, friction: 80 },
  }));

  const { xy } = props;

  return (
    <header
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      {transList.iconsGroup.map(transItem => (
        <animated.div
          key={transItem.order}
          className="shape"
          style={{ transform: xy.interpolate(transItem.translate) }}>
          <FontAwesomeIcon icon={['fab', transItem.icon]} size="2x" />
        </animated.div>
      ))}
      {transList.picGroup.map(transItem => (
        <animated.div
          key={transItem.order}
          className="shape"
          style={{ transform: xy.interpolate(transItem.translate) }}>
          <img
            src={transItem.source}
            alt={transItem.alt}
            width={transItem.width}
            height={transItem.height}
          />
        </animated.div>
      ))}
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
