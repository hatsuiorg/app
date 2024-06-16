import { Dark, ReactNavigationThemeDark } from "./theme-dark";
import { Light, ReactNavigationThemeLight } from "./theme-light";

export const Themes = {
  Light,
  Dark,
};

export const ReactNavigationThemes = {
  Light: ReactNavigationThemeLight,
  Dark: ReactNavigationThemeDark,
};

type ColorScheme = "dark" | "light" | undefined | null;

export function getReactNavigationTheme(colorScheme: ColorScheme) {
  return ReactNavigationThemes[colorScheme === "dark" ? "Dark" : "Light"];
}
