import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './utils/styles';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './index.css';

import Layout from './components/Layout/Layout';
import Page from './components/Page/Page';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Editor from './pages/Editor/Editor';
import Documents from './pages/Documents/Documents';

const Index = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Layout>
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  classNames="page"
                  timeout={500}
                >
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
                          <SignUp />
                        </Page>
                      )}
                    />
                    <Route
                      exact
                      path="/signin"
                      render={routeProps => (
                        <Page>
                          <SignIn />
                        </Page>
                      )}
                    />
                    <Route
                      exact
                      path="/editor/:id"
                      render={routeProps => (
                        <Page>
                          <Editor />
                        </Page>
                      )}
                    />
                    <Route
                      exact
                      path="/documents"
                      render={routeProps => (
                        <Page>
                          <Documents />
                        </Page>
                      )}
                    />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </Layout>
      </BrowserRouter>
    </>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));
