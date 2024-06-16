import { Text } from "react-native";

import { SafeAreaView } from "$/components/safe-area-container";
import { ScreenProps } from "$/routers/types";

import { Container, Title } from "./styles";

export type NovelScreenProps = {
  /** ... */
};

export function NovelScreen(_: ScreenProps<"Stack:Novel">) {
  return (
    <SafeAreaView style={Container}>
      <Text style={Title}>Novel Screen</Text>
    </SafeAreaView>
  );
}
