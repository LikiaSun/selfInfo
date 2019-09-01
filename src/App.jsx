import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import AppRouter from '@/router';
import { AppProvider } from '@/context';

const App = () => {
  return (
    <Router>
      <Switch>
        <AppProvider>
          <AppRouter />
        </AppProvider>
      </Switch>
    </Router>
  );
};

export default App;
