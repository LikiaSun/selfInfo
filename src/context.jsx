import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [appState, setState] = useState({
    isLoading: false,
  });

  return (
    <AppContext.Provider value={[appState, setState]}>
      {children}
    </AppContext.Provider>
  );
};
