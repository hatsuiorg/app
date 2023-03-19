import { Feather } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

import dataSource from '../database/data-source';

/** Hook to load resources or data that we need prior to rendering the app. */
export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      SplashScreen.preventAutoHideAsync();

      await Font.loadAsync({
        ...Feather.font,
      });

      if (!dataSource.isInitialized) {
        await dataSource.initialize();
      }
    }

    loadResourcesAndDataAsync()
      .then(() => {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      })
      .catch(console.warn);
  }, []);

  return isLoadingComplete;
}
