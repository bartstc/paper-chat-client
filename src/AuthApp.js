import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { DocumentsProvider } from './context/documentsContext';
import './index.css';

import Layout from './components/Layout/Layout';
import Page from './components/Page/Page';
import Editor from './pages/Editor/Editor';
import Documents from './pages/Documents/Documents';
import NotFound from './pages/NotFound/NotFound';

const AuthApp = () => (
  <DocumentsProvider>
    <BrowserRouter>
      <Layout>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="page" timeout={500}>
                <Switch location={location}>
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
                    path="/"
                    render={routeProps => (
                      <Page>
                        <Documents />
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
  </DocumentsProvider>
);

export default AuthApp;
