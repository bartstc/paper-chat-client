import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { color, device, fontWeight } from '../../utils/styles';

export const Wrapper = styled.section`
  padding: 0 10px;
  padding-top: 90px;
  min-width: 100vw;
  margin: 0 auto;
  /* min-height: 100vh; */
  /* width: 100%; */

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
