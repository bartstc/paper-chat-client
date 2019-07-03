import styled from 'styled-components';
import { device, accent } from '../../utils/styles';

export const HomeWrapper = styled.div`
  padding-top: 3em;
  min-height: 80vh;
  max-width: 450px;
  position: relative;

  @media ${device.laptopL} {
    max-width: 670px;
    padding-left: 4.5em;
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 1.65rem;

  @media ${device.tablet} {
    font-size: 2.6rem;
    margin-top: 1.3em;
  }

  @media ${device.laptopL} {
    font-size: 3.7rem;
  }

  span {
    ${accent};
  }
`;

export const Subtitle = styled.p`
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.4em;
  margin-top: 1.2em;
  margin-bottom: 4em;

  @media ${device.laptop} {
    font-size: 1.1rem;
    line-height: 1.4em;
  }

  @media ${device.laptopL} {
    font-size: 1.2rem;
    line-height: 1.4em;
  }
`;

export const SocialMedia = styled.ul`
  display: flex;
  width: 140px;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  margin-top: 20vw;

  @media ${device.laptop} {
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export const SocialItem = styled.li`
  font-size: 1.8rem;
`;

export const SocialLink = styled.a``;
