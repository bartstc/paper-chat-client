import styled from 'styled-components';
import { color, fontWeight, device } from '../../utils/styles';

export const PageNotFound = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 20;
  background: ${color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Status = styled.h2`
  font-size: 6rem;
  line-height: 6rem;
  color: ${color.accent};

  @media ${device.tablet} {
    font-size: 12rem;
    line-height: 12rem;
  }
`;

export const Message = styled.p`
  font-size: 1.5rem;
  font-weight: ${fontWeight.bold};
  margin-bottom: 1.8em;
  color: ${color.accent};

  @media ${device.tablet} {
    font-size: 3rem;
  }
`;
