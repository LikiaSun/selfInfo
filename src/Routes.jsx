import React from 'react';
import { Router } from '@reach/router';

import Main from '@/page/Main';
import Profile from '@/page/Profile';

const Routes = () => {
  return (
    <Router>
      <Main path="/" />
      <Profile path="/profile" />
    </Router>
  );
};

export default Routes;
