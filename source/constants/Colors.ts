import type { Theme } from '@react-navigation/native';

export default {
  dark: {
    danger: '#DF4949',
    primary: '#1875CB',
    shades: {
      '0': '#121216',
      '50': '#0D0D11',
      '100': '#222228',
      '200': '#2A2B32',
      '300': '#67686D',
      '400': '#A1A2A7',
      '500': '#DCDDDF',
      '600': '#E6E7E9',
      '700': '#F0F1F2',
      '800': '#F9FAFA',
      '900': '#FFFFFF',
    },
  },
  light: {
    danger: '#DF4949',
    primary: '#1875CB',
    shades: {
      '0': '#FFFFFF',
      '50': '#F9FAFA',
      '100': '#F0F1F2',
      '200': '#E6E7E9',
      '300': '#DCDDDF',
      '400': '#A1A2A7',
      '500': '#67686D',
      '600': '#2A2B32',
      '700': '#222228',
      '800': '#19191E',
      '900': '#121216',
    },
  },
};

export const ReactNavigationDarkTheme: Theme = {
  dark: true,
  colors: {
    background: '#121216',
    border: '#0D0D11',
    card: '#0D0D11',
    notification: '#DF4949',
    primary: '#1875CB',
    text: '#67686D',
  },
};

export const ReactNavigationLightTheme: Theme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    border: '#F9FAFA',
    card: '#F9FAFA',
    notification: '#DF4949',
    primary: '#1875CB',
    text: '#DCDDDF',
  },
};
