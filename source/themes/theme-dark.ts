import type { Theme } from "@react-navigation/native";

const Dark = {
  danger: "#DF4949",
  primary: "#42A4FF",
  shades: {
    "0": "#121216",
    "50": "#0D0D11",
    "100": "#222228",
    "200": "#2A2B32",
    "300": "#67686D",
    "400": "#A1A2A7",
    "500": "#DCDDDF",
    "600": "#E6E7E9",
    "700": "#F0F1F2",
    "800": "#F9FAFA",
    "900": "#FFFFFF",
  },
};

const ReactNavigationThemeDark: Theme = {
  dark: true,
  colors: {
    notification: Dark.danger,
    primary: Dark.primary,
    card: Dark.shades["50"],
    text: Dark.shades["300"],
    border: Dark.shades["50"],
    background: Dark.shades["0"],
  },
};

export { Dark, ReactNavigationThemeDark };
