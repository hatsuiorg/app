import { Text } from "react-native";

import { SafeAreaView } from "$/components/safe-area-container";
import { ScreenProps } from "$/routers/types";

import { Container, Title } from "./styles";

export type RecentsScreenProps = {
  /** ... */
};

export function RecentsScreen(_: ScreenProps<"Tab:Recents">) {
  return (
    <SafeAreaView style={Container}>
      <Text style={Title}>Recents Screen</Text>
    </SafeAreaView>
  );
}
