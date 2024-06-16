import * as Font from "expo-font";

import { Feather } from "@expo/vector-icons";
import { useEffect, useState } from "react";

export default function useCachedResources() {
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      await Font.loadAsync({
        ...Feather.font,
      });
    }

    loadResourcesAndDataAsync().then(() => {
      setIsFinished(true);
    });
  }, []);

  return isFinished;
}
