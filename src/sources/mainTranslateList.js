import RustLogo from '@/assets/images/rust-logo.png';
import JavaLogo from '@/assets/images/java-logo.png';
import SvelteLogo from '@/assets/images/svelte-logo.png';
import PythonLogo from '@/assets/images/python-logo.png';
import CircleCiLogo from '@/assets/images/circle-ci-logo.png';

const transList = {
  picGroup: [
    {
      order: '1c',
      source: CircleCiLogo,
      width: 32,
      height: 32,
      alt: 'circle-ci logo',
      translate: (x, y) => `translate3d(${x / 3.5}px,${y / 3.5 + 100}px,0)`,
    },
    {
      order: '2r',
      source: RustLogo,
      width: 42,
      height: 42,
      alt: 'rust logo',
      translate: (x, y) =>
        `translate3d(${x / 9 - window.innerWidth / 6}px,${y / 4.5 + 100}px,0)`,
    },
    {
      order: '3p',
      source: PythonLogo,
      width: 32,
      height: 32,
      alt: 'python logo',
      translate: (x, y) =>
        `translate3d(${x / 5.5 + window.innerWidth / 8}px,${y / 2.5}px,0)`,
    },
    {
      order: '4s',
      source: SvelteLogo,
      width: 27,
      height: 32,
      alt: 'svelte logo',
      translate: (x, y) =>
        `translate3d(${x / 6 - window.innerWidth / 4.5}px,${y / 6 - 150}px,0)`,
    },
    {
      order: '5j',
      source: JavaLogo,
      width: 24,
      height: 32,
      alt: 'java logo',
      translate: (x, y) =>
        `translate3d(${x / 2 - window.innerWidth / 8}px,${y / 2 + 150}px,0)`,
    },
  ],
  iconsGroup: [
    {
      order: '1r',
      icon: 'react',
      translate: (x, y) =>
        `translate3d(${x / 3.5 + window.innerWidth / 10}px,${y / 3.5 -
          200}px,0)`,
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
  ],
};

export default transList;
