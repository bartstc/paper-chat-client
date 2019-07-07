import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useToggle } from '../../hooks/useToggle';
import {
  LayoutWrapper,
  SideDrawer,
  Links,
  NavLink,
  Logout
} from './Layout.styles';
import { useAuthState, useAuthDispatch } from '../../context/authContext';

import Header from './layout/Header';

const authLinks = [
  {
    path: '/',
    name: 'Documents'
  }
];

const unauthLinks = [
  {
    path: '/',
    name: 'Home'
  },
  {
    path: '/signin',
    name: 'Sign In'
  },
  {
    path: '/signup',
    name: 'Sign Up'
  }
];

const Layout = ({ children }) => {
  const { isAuth } = useAuthState();
  const dispatch = useAuthDispatch();
  const [toggle, setToggle] = useToggle();

  const onToggle = () => setToggle(!toggle);

  const onClose = () => setToggle(false);

  const onLogout = async () => {
    await axios.post('/auth/logout');
    dispatch({ type: 'LOGOUT_USER' });
  };

  return (
    <LayoutWrapper>
      <SideDrawer onClick={onClose} toggled={toggle}>
        <Links>
          {isAuth
            ? authLinks.map(({ path, name }) => (
                <NavLink key={name} to={path}>
                  {name}
                </NavLink>
              ))
            : unauthLinks.map(({ path, name }) => (
                <NavLink key={name} to={path}>
                  {name}
                </NavLink>
              ))}
          {isAuth && <Logout onClick={onLogout}>Logout</Logout>}
        </Links>
      </SideDrawer>
      <Header onToggle={onToggle} toggled={toggle} />
      {children}
    </LayoutWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
