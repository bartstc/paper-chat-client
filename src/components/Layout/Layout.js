import React from 'react';
import PropTypes from 'prop-types';
import { useToggle } from '../../hooks/useToggle';
import { LayoutWrapper, SideDrawer, Links, NavLink } from './Layout.styles';

import Header from './layout/Header';

const Layout = ({ children }) => {
  const [toggle, setToggle] = useToggle();

  const onToggle = () => setToggle(!toggle);

  const onClose = () => setToggle(false);

  return (
    <LayoutWrapper toggled={toggle}>
      <SideDrawer onClick={onClose} toggled={toggle}>
        <Links>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/signin">Sign In</NavLink>
          <NavLink to="/signup">SignUp</NavLink>
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
