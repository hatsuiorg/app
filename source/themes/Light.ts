import type { Theme } from '@react-navigation/native';
import type { DefaultTheme } from 'styled-components/native';

const LightTheme: DefaultTheme = {
  danger: '#DF4949',
  primary: '#1875CB',
  shades: {
    '0': '#FFFFFF',
    '50': '#F9FAFA',
    '100': '#F0F1F2',
    '200': '#E6E7E9',
    '300': '#D9DBDE',
    '400': '#A1A2A7',
    '500': '#67686D',
    '600': '#2A2B32',
    '700': '#222228',
    '800': '#19191E',
    '900': '#121216',
  },
};

export const ReactNavigationThemeLight: Theme = {
  dark: false,
  colors: {
    background: LightTheme.shades['0'],
    border: LightTheme.shades['50'],
    card: LightTheme.shades['50'],
    notification: LightTheme.danger,
    primary: LightTheme.primary,
    text: LightTheme.shades['500'],
  },
};

export default LightTheme;
