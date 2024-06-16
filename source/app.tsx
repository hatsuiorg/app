import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Navigation from "$/routers";
import useColorScheme from "$/hooks/use-color-scheme";
import useCachedResources from "$/hooks/use-cached-resources";

function App() {
  const colorScheme = useColorScheme();
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <Navigation colorScheme={colorScheme} />
    </SafeAreaProvider>
  );
}

export { App };
