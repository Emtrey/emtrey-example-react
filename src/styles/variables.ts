/* tslint:disable:max-line-length */

export const colors = {
  brand: '#663399',
  secondary: '#0d67d7',
  brand1: '#0c4afc',
  brand2: '#00c0ff',
  brand3: '#55ffe9',
  accent: '#ffb238',
  danger: '#e21',
  success: '#05e774',
  warning: '#ec1818',
  ui: {
    bright: '#e0d6eb',
    light: '#f5f3f7',
    whisper: '#fbfafc',
  },
  gray: {
    dark: '#111',
    copy: '#888',
    lightCopy: '#999',
    calm: '#bbb',
    light: '#ddd',
  },
  white: '#fff',
  black: '#000',
};

export const fonts = {
  sansSerif: 'Nunito, Helvetica, Arial, -apple-system, sans-serif',
  serif: 'Georgia, "Times New Roman", Times, serif',
};

export const breakpoints = {
  xs: 0,
  sm: '576px',
  md: '992px',
  lg: '1300px',
  xl: '1600px',
  xxl: '1800px',
};

export const widths = {
  md: 720,
  lg: 960,
  xl: 1140,
};

const spacers = [0.8, 1.4, 2, 4];

export const dimensions = {
  spacer: `${spacers[2]}rem`,
  spacerHalf: `${Math.ceil(spacers[2] / 1.5)}rem`,
  spacerLarge: `${spacers[spacers.length - 1]}rem`,
  spacers: spacers.map(s => `${s}rem`),
  headerHeight: 80,
  headerHeightSmall: 66,
  fontSize: {
    regular: 16,
    medium: 14,
    large: 18,
    small: 12,
    xsmall: 10,
  },
  headingSizes: {
    h1: 2.441,
    h2: 1.953,
    h3: 1.6,
    h4: 1.25,
    h5: 1.15,
  },
  lineHeight: {
    regular: 2,
    heading: 1.6,
    medium: 1.4,
  },
  inputRadius: '0',
  borderRadius: '6px',
};
