import { Text } from "react-native";

import { SafeAreaView } from "$/components/safe-area-container";
import { ScreenProps } from "$/routers/types";

import { Container, Title } from "./styles";

export type ExtensionsScreenProps = {
  /** ... */
};

export function ExtensionsScreen(_: ScreenProps<"Tab:Extensions">) {
  return (
    <SafeAreaView style={Container}>
      <Text style={Title}>Extensions Screen</Text>
    </SafeAreaView>
  );
}
