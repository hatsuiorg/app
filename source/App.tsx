import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import * as SplashScreen from "expo-splash-screen";
import * as NavigationBar from "expo-navigation-bar";
import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";

import Colors from "./constants/Colors";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  NavigationBar.setBackgroundColorAsync(Colors[colorScheme].shades[50]);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <Navigation colorScheme={colorScheme} />
      </SafeAreaProvider>
    );
  }
}

registerRootComponent(App);
