import type { Theme } from '@react-navigation/native';
import type { DefaultTheme } from 'styled-components/native';

const Dark: DefaultTheme = {
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
};

export const ReactNavigationThemeDark: Theme = {
  dark: true,
  colors: {
    background: Dark.shades['0'],
    border: Dark.shades['50'],
    card: Dark.shades['50'],
    notification: Dark.danger,
    primary: Dark.primary,
    text: Dark.shades['500'],
  },
};

export default Dark;
