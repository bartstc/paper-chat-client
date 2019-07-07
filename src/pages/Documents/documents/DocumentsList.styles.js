import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { color, fontWeight } from '../../../utils/styles';

export const Warning = styled.p``;

export const DocsList = styled.ul``;

export const DocItem = styled.li`
  position: relative;
  margin-bottom: 0.8em;
  height: 40px;
  display: flex;
  align-items: center;
`;

export const Category = styled.span`
  display: block;
  height: 21px;
  width: 45px;
  background: ${props => props.color};
`;

export const DocTitle = styled(Link)`
  padding: 0 1.4em 0 0.8em;
`;

export const DeleteBtn = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 10px;
  right: 0;
  border: none;
  color: ${color.white};
  font-weight: ${fontWeight.bold};
  font-size: 0.85rem;
  background: #a10000;
  cursor: pointer;
`;
