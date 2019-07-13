import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './utils/styles';
import { AuthProvider, useAuthState } from './context/authContext';

import Spinner from './components/Spinner/Spinner';
const AuthApp = lazy(() => import('./AuthApp'));
const UnauthApp = lazy(() => import('./UnauthApp'));

export const Index = () => {
  const { isAuth } = useAuthState();

  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<Spinner />}>
        {isAuth === null && <Spinner />}
        {isAuth === false && <UnauthApp />}
        {isAuth && <AuthApp />}
      </Suspense>
    </>
  );
};

ReactDOM.render(
  <AuthProvider>
    <Index />
  </AuthProvider>,
  document.getElementById('root')
);
