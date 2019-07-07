import styled from 'styled-components';
import { color, device, fontWeight } from '../../utils/styles';
import { Link } from 'react-router-dom';

export const LayoutWrapper = styled.div``;

export const SideDrawer = styled.nav`
  position: fixed;
  z-index: 5;
  right: 0;
  top: 0;
  width: ${props => (props.toggled ? '20%' : '0')};
  min-width: ${props => (props.toggled ? '260px' : '0')};
  height: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
  background: ${color.white};
  transition: all 0.3s ease;
  padding-top: 140px;
`;

export const Links = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavLink = styled(Link)`
  line-height: 2rem;
  color: ${color.accent};
  font-size: 1.1rem;

  @media ${device.tablet} {
    font-size: 1.3rem;
    line-height: 2.5rem;
  }
`;

export const Logout = styled.button`
  line-height: 2rem;
  color: ${color.accent};
  font-size: 1.1rem;
  font-weight: ${fontWeight.bold};
  background: none;
  border: none;
  cursor: pointer;

  @media ${device.tablet} {
    font-size: 1.3rem;
    line-height: 2.5rem;
  }
`;
