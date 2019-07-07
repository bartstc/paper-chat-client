import styled from 'styled-components';
import { color } from '../../utils/styles';

export const SelectWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.1em;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  color: ${color.accent};
  font-weight: 300;
  margin-bottom: 0.4em;
  width: 100%;
  margin-top: 1.5em;
`;

export const Select = styled.select`
  width: 100%;
  height: 40px;
  padding: 0 0.8em;
  border: ${props =>
    props.error ? '1px solid red' : '1px solid' + color.accent};
  color: ${color.grey};
  outline-color: ${color.accent};
  border-radius: 8px;
`;

export const Option = styled.option`
  width: 100%;
  font-size: 1rem;
  color: ${color.accent};

  &::placeholder {
    color: ${color.white};
  }

  &:hover,
  &:focus,
  &:active,
  &:checked {
    background: ${color.accent};
    color: ${color.white};
  }
`;
