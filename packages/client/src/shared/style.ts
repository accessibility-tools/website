// Global style variables
export enum background {
  pureWhite = '#FFFFFF',
  mixedWhite = '#FAFAFA',
  extraLightPurple = '#F5F6FF',
  lightPurple = '#F2F3FF'
}

export enum color {
  // text
  black = '#292929', // only on pressed state
  primary = '#464646', // darkGrey
  mediumGrey = '#636363', // only on hover state
  white = '#FFFFFF',
  blue = '#001CFF',

  lightBlue = '#4B5FFF',
  darkBlue = '#00119E',
  purple = '#D4D7FF',
  darkPurple = '#6642D1',
  lightPurple = '#E7E9FF',
  extraLightPurple = '#F5F6FF',

  // state
  error = '#CC1818',
  disabled = '#979797',

  // only for illustration
  yellow = '#FFF361',
  pink = '#FF7FB1',
  red = '#F94B4B',

  // border & box shadow
  lightGrey1 = '#d1d1d1',
  lightGrey2 = '#d2d2d2'
}

export const spacing = {
  padding: {
    small: 8,
    medium: 24,
    large: 40
  },
  borderRadius: {
    small: 1,
    medium: 3,
    large: 6
  }
};

export const typography = {
  type: {
    primary: 'Roboto, Helvetica, Arial, sans-serif',
    secondary: 'Lora, Times New Roman, Georgia, serif'
  },
  weight: {
    regular: '400',
    medium: '500',
    bold: '700'
  }
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
