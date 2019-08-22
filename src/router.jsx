import React from 'react';
import { Route } from 'react-router-dom';

import Main from '@/page/Main';
import Profile from '@/page/Profile';

const AppRouter = () => {
  const routeList = [
    {
      id: 1,
      path: '/',
      exact: true,
      component: Main,
    },
    {
      id: 2,
      path: '/profile',
      exact: false,
      component: Profile,
    },
  ];

  return (
    <>
      {routeList.map(route => (
        <Route
          key={route.id}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </>
  );
};

export default AppRouter;
