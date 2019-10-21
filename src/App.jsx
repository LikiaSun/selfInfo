import React from 'react';

import Router from '@/router';
import { AppProvider } from '@/Context';

const App = () => {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
};

export default App;
