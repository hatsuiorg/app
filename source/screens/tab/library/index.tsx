import { Text } from "react-native";

import { SafeAreaView } from "$/components/safe-area-container";
import { ScreenProps } from "$/routers/types";

import { Container, Title } from "./styles";

export type LibraryScreenProps = {
  /** ... */
};

export function LibraryScreen(_: ScreenProps<"Tab:Library">) {
  return (
    <SafeAreaView style={Container}>
      <Text style={Title}>Library Screen</Text>
    </SafeAreaView>
  );
}
