import React from 'react';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import RustLogo from '@/assets/images/rust-logo.png';
import JavaLogo from '@/assets/images/java-logo.png';
import SvelteLogo from '@/assets/images/svelte-logo.png';
import PythonLogo from '@/assets/images/python-logo.png';
import CircleCiLogo from '@/assets/images/circle-ci-logo.png';

const calc = (x, y) => [x - window.innerHeight / 2, y - window.innerHeight / 2];
const transGroup = [
  {
    order: '1r',
    icon: 'react',
    translate: (x, y) =>
      `translate3d(${x / 3.5 + window.innerWidth / 10}px,${y / 3.5 - 200}px,0)`,
  },
  {
    order: '2v',
    icon: 'vuejs',
    translate: (x, y) =>
      `translate3d(${x / 6 - window.innerWidth / 12}px,${y / 6 - 200}px,0)`,
  },
  {
    order: '3a',
    icon: 'angular',
    translate: (x, y) =>
      `translate3d(${x / 8 - window.innerWidth / 5.5}px,${y / 8 - 25}px,0)`,
  },
  {
    order: '4g',
    icon: 'git',
    translate: (x, y) =>
      `translate3d(${x / 5 - window.innerWidth / 3.5}px,${y / 2.5}px,0)`,
  },
  {
    order: '5n',
    icon: 'node-js',
    translate: (x, y) =>
      `translate3d(${x / 3.5 + window.innerWidth / 5}px,${y / 3.5}px,0)`,
  },
  {
    order: '6s',
    icon: 'sass',
    translate: (x, y) => `translate3d(${x / 5}px,${y / 5 - 100}px,0)`,
  },
];

const MainHeader = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 1, tension: 180, friction: 80 },
  }));

  const { xy } = props;

  return (
    <header
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      {transGroup.map(transItem => (
        <animated.div
          key={transItem.order}
          className="shape"
          style={{ transform: xy.interpolate(transItem.translate) }}>
          <FontAwesomeIcon icon={['fab', transItem.icon]} size="2x" />
        </animated.div>
      ))}
      <animated.div
        className="shape"
        style={{
          transform: xy.interpolate(
            (x, y) => `translate3d(${x / 3.5}px,${y / 3.5 + 100}px,0)`
          ),
        }}>
        <img src={CircleCiLogo} alt="circle-ci logo" width="32" height="32" />
      </animated.div>
      <animated.div
        className="shape"
        style={{
          transform: xy.interpolate(
            (x, y) =>
              `translate3d(${x / 9 - window.innerWidth / 6}px,${y / 4.5 +
                100}px,0)`
          ),
        }}>
        <img src={RustLogo} alt="rust logo" width="42" height="42" />
      </animated.div>
      <animated.div
        className="shape"
        style={{
          transform: xy.interpolate(
            (x, y) =>
              `translate3d(${x / 5.5 + window.innerWidth / 8}px,${y / 2.5}px,0)`
          ),
        }}>
        <img src={PythonLogo} alt="python logo" width="32" height="32" />
      </animated.div>
      <animated.div
        className="shape"
        style={{
          transform: xy.interpolate(
            (x, y) =>
              `translate3d(${x / 6 - window.innerWidth / 4.5}px,${y / 6 -
                150}px,0)`
          ),
        }}>
        <img src={SvelteLogo} alt="svelte logo" width="27" height="32" />
      </animated.div>
      <animated.div
        className="shape"
        style={{
          transform: xy.interpolate(
            (x, y) =>
              `translate3d(${x / 5.5 + window.innerWidth / 8}px,${y / 2.5}px,0)`
          ),
        }}>
        <img src={PythonLogo} alt="python logo" width="32" height="32" />
      </animated.div>
      <animated.div
        className="shape"
        style={{
          transform: xy.interpolate(
            (x, y) =>
              `translate3d(${x / 2 - window.innerWidth / 8}px,${y / 2 +
                150}px,0)`
          ),
        }}>
        <img src={JavaLogo} alt="java logo" width="24" height="32" />
      </animated.div>
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
