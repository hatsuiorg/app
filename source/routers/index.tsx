import * as NavigationBar from "expo-navigation-bar";

import { ColorSchemeName } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { getReactNavigationTheme } from "../themes";
import { NativeStackNavigator } from "./navigators/NativeStack";

export interface NavigationProps {
  colorScheme: NonNullable<ColorSchemeName>;
}

export default function Navigation({ colorScheme }: NavigationProps) {
  const theme = getReactNavigationTheme(colorScheme);
  NavigationBar.setBackgroundColorAsync(theme.colors.card);

  return (
    <NavigationContainer theme={theme}>
      <NativeStackNavigator />
    </NavigationContainer>
  );
}
