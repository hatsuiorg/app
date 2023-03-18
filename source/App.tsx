import 'react-native-gesture-handler';
import 'reflect-metadata';

import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';

import DatabaseConnectionProvider from './contexts/DatabaseConnection';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import themes from './themes/All';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <DatabaseConnectionProvider>
        <SafeAreaProvider>
          <ThemeProvider theme={themes[colorScheme]}>
            <StatusBar style="auto" />
            <Navigation colorScheme={colorScheme} />
          </ThemeProvider>
        </SafeAreaProvider>
      </DatabaseConnectionProvider>
    );
  }
}
