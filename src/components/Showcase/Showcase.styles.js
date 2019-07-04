import styled from 'styled-components';
import { device } from '../../utils/styles';
import bgImage from '../../assets/bg.png';

export const ShowcaseWrapper = styled.section`
  min-width: 100vw;
  min-height: 100vh;
  /* padding: 0 1em; */
  padding-top: 80px;
  position: relative;

  @media ${device.mobileL} {
    background: url('${bgImage}') no-repeat;
    background-size: cover;
    background-position: center;
    padding: 0 2em;
    padding-top: 80px;
  }
`;

export const ShowcaseImage = styled.img`
  position: absolute;
  top: 50%;
  right: 1.5%;
  transform: translateY(-50%);
  display: none;
  width: 520px;
  animation: levitation 2s ease-in-out infinite alternate;

  @media ${device.laptop} {
    display: block;
  }

  @media ${device.laptopL} {
    right: 3.5%;
    width: 590px;
  }

  @media ${device.laptopXL} {
    right: 9%;
    width: 710px;
  }

  @keyframes levitation {
    0% {
      transform: translateY(-50%);
    }

    100% {
      transform: translateY(-53%);
    }
  }
`;
