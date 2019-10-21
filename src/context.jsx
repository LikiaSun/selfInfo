import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = props => {
  const [appState, setApp] = useState({
    isLoading: false,
  });

  const defaultVaules = [appState, setApp];

  return <AppContext.Provider value={defaultVaules} {...props} />;
};
