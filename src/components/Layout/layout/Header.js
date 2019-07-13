import React from 'react';
import PropTypes from 'prop-types';
import {
  HeaderWrapper,
  Logo,
  LogoImage,
  LogoTitle,
  Nav,
  Hamburger,
  Bar
} from './Header.styles';
import logoImage from '../../../assets/logo.png';

const Header = ({ onToggle, toggled }) => (
  <HeaderWrapper>
    <Logo to="/">
      <LogoImage src={logoImage} alt="home page" />
      <LogoTitle>
        Paper <span>Chat</span>
      </LogoTitle>
    </Logo>
    <Nav>
      <Hamburger aria-label="open menu" title="Menu" onClick={onToggle}>
        <Bar toggled={toggled} />
        <Bar toggled={toggled} />
        <Bar toggled={toggled} />
        <Bar toggled={toggled} />
      </Hamburger>
    </Nav>
  </HeaderWrapper>
);

Header.propTypes = {
  onToggle: PropTypes.func.isRequired,
  toggled: PropTypes.bool.isRequired
};

export default Header;
