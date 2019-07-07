import styled from 'styled-components';
import { color, device, fontWeight } from '../../utils/styles';

export const Wrapper = styled.section`
  padding: 0 10px;
  padding-top: 90px;
  min-width: 100vw;
  margin: 0 auto;

  @media ${device.tablet} {
    padding-top: 120px;
  }
`;

export const Limiter = styled.div`
  margin: 0 auto;
  max-width: 740px;
`;

export const DocsHeader = styled.header`
  margin-bottom: 1.4em;

  @media ${device.mobileL} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  line-height: 2.8rem;
  font-weight: ${fontWeight.light};
`;

export const AddBtn = styled.button`
  background: ${color.accent};
  border: none;
  color: ${color.white};
  text-transform: uppercase;
  padding: 0.4em 0.9em;
  font-size: 0.85rem;
  cursor: pointer;
`;
