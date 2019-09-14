import React from 'react';

import Emoji from '@/components/Emoji';
import Navbar from '@/components/Navbar';
import avatar from '@/assets/images/head.png';

const Profile = () => {
  return (
    <div>
      <Navbar />
      <main className="profile-container">
        <div className="profile-header">
          <div className="avatar">
            <img src={avatar} alt="avatar... maybe" />
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
