import styled from 'styled-components';
import { device, color } from '../../../utils/styles';

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 0 auto;
  padding-bottom: 2em;
  height: 100%;

  @media ${device.tablet} {
    width: 370px;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 300;
  border-bottom: 1px solid ${color.black};
  line-height: 2em;
  width: 100%;
  text-align: center;

  @media ${device.tablet} {
    font-size: 2.6rem;
  }
`;

export const Subtitle = styled.p`
  margin-top: 0.7em;
  font-size: 0.9rem;
  line-height: 1em;
  margin-bottom: 1.4em;
  text-align: center;
  max-width: 280px;

  @media ${device.tablet} {
    font-size: 1.1rem;
    max-width: 3700px;
    margin-top: 1.5em;
  }
`;
