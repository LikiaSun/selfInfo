import React, { useContext, useEffect } from 'react';

import { AppContext } from '@/context';
import Loading from '@/components/Loading';
import Navbar from '@/components/Navbar';
import Header from '@/components/MainHeader';

const Main = () => {
  const [appState, setState] = useContext(AppContext);

  useEffect(() => {
    setState({ isLoading: true });
    setTimeout(() => {
      setState({
        isLoading: false,
      });
    }, 1600);
  }, []);

  return (
    <main>
      {appState.isLoading && <Loading />}
      <Navbar />
      <Header />
    </main>
  );
};

export default Main;
