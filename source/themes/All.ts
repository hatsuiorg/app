// TODO: Add support for variants of dark and light themes.

import Dark, { ReactNavigationThemeDark } from './Dark';
import Light, { ReactNavigationThemeLight } from './Light';

export default {
  dark: Dark,
  light: Light,
};

export const ReactNavigationThemes = {
  Dark: ReactNavigationThemeDark,
  Light: ReactNavigationThemeLight,
};
