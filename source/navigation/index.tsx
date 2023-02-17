import { NavigationContainer } from '@react-navigation/native';
import type { ColorSchemeName } from 'react-native';

import RootNavigator from './navigators/NativeStack';
import { ReactNavigationDarkTheme, ReactNavigationLightTheme } from '../constants/Colors';

export interface NavigationProps {
  colorScheme: NonNullable<ColorSchemeName>;
}

export default function Navigation({ colorScheme }: NavigationProps) {
  const theme = colorScheme === 'dark' ? ReactNavigationDarkTheme : ReactNavigationLightTheme;

  return (
    <NavigationContainer theme={theme}>
      <RootNavigator />
    </NavigationContainer>
  );
}
