import type { Theme } from "@react-navigation/native";

const Light = {
  danger: "#DF4949",
  primary: "#1875CB",
  shades: {
    "0": "#FFFFFF",
    "50": "#F9FAFA",
    "100": "#F0F1F2",
    "200": "#E6E7E9",
    "300": "#D9DBDE",
    "400": "#A1A2A7",
    "500": "#67686D",
    "600": "#2A2B32",
    "700": "#222228",
    "800": "#19191E",
    "900": "#121216",
  },
};

const ReactNavigationThemeLight: Theme = {
  dark: false,
  colors: {
    notification: Light.danger,
    primary: Light.primary,
    card: Light.shades["50"],
    text: Light.shades["500"],
    border: Light.shades["50"],
    background: Light.shades["0"],
  },
};

export { Light, ReactNavigationThemeLight };
