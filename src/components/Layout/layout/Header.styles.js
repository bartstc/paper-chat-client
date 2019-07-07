import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device, accent } from '../../../utils/styles';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 60px;
  background: rgba(255, 255, 255, 0.6);
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
  position: fixed;
  z-index: 10;

  @media ${device.tablet} {
    height: 80px;
  }
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  height: 36px;

  @media ${device.tablet} {
    height: 50px;
  }
`;

export const LogoTitle = styled.h1`
  font-size: 1.4rem;

  @media ${device.tablet} {
    font-size: 2.1rem;
  }

  span {
    ${accent};
  }
`;

export const Bar = styled.span`
  position: absolute;
  display: block;
  height: 4px;
  width: 30px;
  background: #000;
  border-radius: 5px;
  transition: all 0s 0.2s;

  &:nth-child(1) {
    top: 9px;
    left: 7px;
    transition: 0.2s 0.2s, opacity 0s 0.2s;

    ${props =>
      props.toggled &&
      `
      top: 18px;
      opacity: 0;
      transition: 0.2s 0s, opacity 0s 0.2s;
    `}
  }

  &:nth-child(2) {
    top: 18px;
    left: 7px;
    transition: 0.2s 0s;

    ${props =>
      props.toggled &&
      `
      transform: rotate(-45deg);
      transition: 0.2s 0.2s;
    `}
  }

  &:nth-child(3) {
    top: 18px;
    left: 7px;
    transition: 0.2s 0s;

    ${props =>
      props.toggled &&
      `
      transform: rotate(45deg);
      transition: 0.2s 0.2s;
    `}
  }

  &:nth-child(4) {
    top: 27px;
    left: 7px;
    transition: 0.2s 0.2s, opacity 0s 0.2s;

    ${props =>
      props.toggled &&
      `
      top: 18px;
      opacity: 0;
      transition: 0.2s 0s, opacity 0s 0.2s;
    `}
  }
`;

export const Hamburger = styled.button`
  position: relative;
  width: 45px;
  height: 42px;
  box-sizing: border-box;
  cursor: pointer;
  background: none;
  border: none;
`;
