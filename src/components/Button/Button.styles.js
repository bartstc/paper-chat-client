import styled from 'styled-components';
import { color } from '../../utils/styles';

export const ButtonWrapper = styled.button`
  width: 100%;
  border: 2px solid ${color.accent};
  background: ${color.accent};
  color: ${color.white};
  padding: 0.8em 1.9em;
  margin-top: 2em;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.15s ease-in-out;

  &:hover {
    background: ${color.white};
    color: ${color.accent};
  }
`;
