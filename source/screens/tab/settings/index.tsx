import { Text } from "react-native";

import { SafeAreaView } from "$/components/safe-area-container";
import { ScreenProps } from "$/routers/types";

import { Container, Title } from "./styles";

export type SettingsScreenProps = {
  /** ... */
};

export function SettingsScreen(_: ScreenProps<"Tab:Settings">) {
  return (
    <SafeAreaView style={Container}>
      <Text style={Title}>Settings Screen</Text>
    </SafeAreaView>
  );
}
