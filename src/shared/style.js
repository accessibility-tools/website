import { css } from 'styled-components';

// Global style variables
export const background = {
  pureWhite: '#FFFFFF',
  mixedWhite: '#FAFAFA',
  extraLightPurple: '#F5F6FF',
  LightPurple: '#F2F3FF',
};

export const color = {
  // text
  black: '#292929', // only on pressed state
  primary: '#464646', // darkGrey
  mediumGrey: '#636363', // only on hover state
  white: '#FFFFFF',
  blue: '#001CFF',

  lightBlue: '#4B5FFF',
  darkBlue: '#00119E',
  purple: '#D4D7FF',
  darkPurple: '#6642D1',

  // state
  error: '#CC1818',
  disabled: '#979797',

  // only for illustration
  yellow: '#FFF361',
  pink: '#FF7FB1',
  red: '#F94B4B',
};

export const spacing = {
  padding: {
    small: 8,
    medium: 24,
    large: 40,
  },
  borderRadius: {
    small: 3,
    default: 6,
  },
};

export const typography = {
  type: {
    primary: '"Roboto", Helvetica, Arial, sans-serif',
    secondary: '"Lora", "Times New Roman", Georgia, serif',
  },
  weight: {
    regular: '400',
    medium: '500',
    bold: '700',
  },
  size: {
    h1: css`
    font-size: calc(34px + (56 - 34) * ((100vw - 300px) / (1600 - 300)));
    line-height: calc(1.2em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)));`,
    h2: css`
    font-size: calc(28px + (34 - 28) * ((100vw - 300px) / (1600 - 300)));
    line-height: calc(1.2em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)));`,
    h3: css`
    font-size: calc(22px + (26 - 22) * ((100vw - 300px) / (1600 - 300)));
    line-height: calc(1.2em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)));`,
    h4: css`
    font-size: calc(18px + (24 - 18) * ((100vw - 300px) / (1600 - 300)));
    line-height: calc(1.2em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)));`,
    h5: css`
    font-size: calc(16px + (18 - 16) * ((100vw - 300px) / (1600 - 300)));
    line-height: calc(1.2em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)));`,
    sub: css`
    font-size: calc(16px + (22 - 16) * ((100vw - 300px) / (1600 - 300)));
    line-height: calc(1.2em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)));`,
    p: css`
    font-size: calc(16px + (18 - 16) * ((100vw - 300px) / (1600 - 300)));
    line-height: calc(1.2em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)));`, // also valid for links and labels
  },
};

// export const breakpoint = 600;
// export const pageMargin = '5.55555';

// export const pageMargins = css`
//   padding: 0 ${spacing.padding.medium}px;
//   @media (min-width: ${breakpoint * 1}px) {
//     margin: 0 ${pageMargin * 1}%;
//   }
//   @media (min-width: ${breakpoint * 2}px) {
//     margin: 0 ${pageMargin * 2}%;
//   }
//   @media (min-width: ${breakpoint * 3}px) {
//     margin: 0 ${pageMargin * 3}%;
//   }
//   @media (min-width: ${breakpoint * 4}px) {
//     margin: 0 ${pageMargin * 4}%;
//   }
// `;