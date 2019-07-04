import styled from 'styled-components';
import { device } from '../../utils/styles';

export const Code = styled.code`
  background: #eee;
  padding: 0.3em 0;
`;

export const Quote = styled.p`
  border-left: 1.5px solid #bbb;
  padding: 0.1em 0;
  padding-left: 0.6em;
  color: #999;
`;

export const Header = styled.h2`
  line-height: 3rem;
`;

export const StrikeThrough = styled.p`
  text-decoration: line-through;
`;

export const Wrapper = styled.div`
  width: 100vw;
  background: #fcfcfc;
  padding-top: 85px;

  @media ${device.tablet} {
    padding-top: 100px;
  }
`;

export const EditorWrapper = styled.div`
  font-family: ${props => (props.font ? props.font : 'Lato, sans-serif')};
`;

export const Limiter = styled.div`
  margin: 0 auto;
  max-width: 740px;
  color: rgb(17, 17, 17);
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(118, 143, 255, 0.1) 0px 16px 24px 0px;
  border-radius: 4.5px;
  margin: 0 0.4em;
  padding: 20px 15px;
  padding-bottom: 30px;
  margin: 0 auto;

  @media ${device.tablet} {
    padding: 40px 20px;
  }
`;
