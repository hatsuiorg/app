import { NavigationContainer } from '@react-navigation/native';
import * as NavigationBar from 'expo-navigation-bar';
import type { ColorSchemeName } from 'react-native';

import RootNavigator from './navigators/NativeStack';
import { ReactNavigationThemes } from '../themes/All';

export interface NavigationProps {
  colorScheme: NonNullable<ColorSchemeName>;
}

export default function Navigation({ colorScheme }: NavigationProps) {
  const theme = colorScheme === 'dark' ? ReactNavigationThemes.Dark : ReactNavigationThemes.Light;
  NavigationBar.setBackgroundColorAsync(theme.colors.card);

  return (
    <NavigationContainer theme={theme}>
      <RootNavigator />
    </NavigationContainer>
  );
}
