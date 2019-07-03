import styled from 'styled-components';
import { color, fontWeight, device } from '../../utils/styles';
import { Link } from 'react-router-dom';

export const LinkWrapper = styled(Link)`
  display: block;
  width: 260px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: transparent;
  border: 2px solid ${color.accent};
  color: ${color.black};
  font-weight: ${fontWeight.bold};
  font-size: 1rem;
  text-transform: uppercase;
  transition: all 0.15s ease-in-out;
  cursor: pointer;

  @media ${device.mobileL} {
    margin: 0;
  }

  &:hover {
    background: ${color.white};
    color: ${color.black};
  }
`;
