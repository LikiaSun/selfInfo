import React, { Suspense } from 'react';

import Emoji from '@/components/Emoji';
import Navbar from '@/components/Navbar';

const Avatar = React.lazy(() => import('../components/Avatar'));

const Profile = () => {
  return (
    <div>
      <Navbar />
      <main className="profile-container">
        <div className="profile-header">
          <div className="avatar">
            <Suspense fallback={<div className="bg-skelton" />}>
              <Avatar />
            </Suspense>
          </div>
          <div className="profile-text">
            <h2>孫崇碩(Sun Chuong Shuo)</h2>
            <p>追尋多樣性背後的根源</p>
            <small>Work: Full Stack Developer</small>
            <p>
              <Emoji symbol="📖" />
              Learn Design Pattern、Rust-lang、Circle-ci
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
