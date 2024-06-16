import { Text } from "react-native";

import { SafeAreaView } from "$/components/safe-area-container";
import { ScreenProps } from "$/routers/types";

import { Container, Title } from "./styles";

export type ReaderScreenProps = {
  /** ... */
};

export function ReaderScreen(_: ScreenProps<"Stack:Reader">) {
  return (
    <SafeAreaView style={Container}>
      <Text style={Title}>Reader Screen</Text>
    </SafeAreaView>
  );
}
