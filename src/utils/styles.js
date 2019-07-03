import { createGlobalStyle } from 'styled-components';

export const color = {
  white: `#FFF`,
  black: `#151615`,
  grey: '#565656',
  accent: `#0075C4`,
};

export const fontFamily = {
  primary: `'Montserrat', sans-serif`,
};

export const fontWeight = {
  light: `300`,
  bold: `700`,
};

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  laptopXL: '1644px',
  desktop: '2560px',
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  laptopXL: `(min-width: ${size.laptopXL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${color.black};
    font-family: ${fontFamily.primary};
    font-weight: ${fontWeight.light};
    overflow-x: hidden;
  }
`;

export const accent = `
  color: ${color.accent};
`;
