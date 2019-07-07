import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './index.css';

import Layout from './components/Layout/Layout';
import Page from './components/Page/Page';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import NotFound from './pages/NotFound/NotFound';

const UnauthApp = () => (
  <BrowserRouter>
    <Layout>
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="page" timeout={500}>
              <Switch location={location}>
                <Route
                  exact
                  path="/"
                  render={routeProps => (
                    <Page>
                      <Home />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path="/signup"
                  render={routeProps => (
                    <Page>
                      <SignUp {...routeProps} />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path="/signin"
                  render={routeProps => (
                    <Page>
                      <SignIn {...routeProps} />
                    </Page>
                  )}
                />
                <Route component={NotFound} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </Layout>
  </BrowserRouter>
);

export default UnauthApp;
