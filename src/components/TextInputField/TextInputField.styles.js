import styled from 'styled-components';
import { color } from '../../utils/styles';

export const Label = styled.label`
  font-size: 0.9rem;
  color: ${color.accent};
  font-weight: 300;
  margin-bottom: 0.4em;
  width: 100%;
  margin-top: 1.5em;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding-left: 0.8em;
  border: ${props =>
    props.error ? '1px solid red' : '1px solid' + color.accent};
  border-radius: 8px;
  font-size: 1rem;

  &::placeholder {
    color: #333;
    font-size: 1rem;
  }
`;
