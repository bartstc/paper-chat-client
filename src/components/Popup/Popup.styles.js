import styled from 'styled-components';
import { color } from '../../utils/styles';

export const PopupWrapper = styled.div`
  position: fixed;
  bottom: 10px;
  left: 10px;
  z-index: 500;
  background-color: ${color.accent};
  color: ${color.white};
  font-size: 0.8rem;
  text-align: center;
  padding: 10px;
  width: 300px;
  min-height: 30px;
  border-radius: 15px;
  transition: all 0.3s ease-out;
  transform: ${props => (props.show ? 'translateY(0)' : 'translateY(10vh)')};
  opacity: ${props => (props.show ? '1' : '0')};
`;
