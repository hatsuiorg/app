import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ReaderScreen } from "$/screens/stack/reader";
import { NovelScreen } from "$/screens/stack/novel";

import { RootStackParamList } from "../types";
import { BottomTabNavigator } from "./BottomTab";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function NativeStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Root"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="Novel" component={NovelScreen} />
      <Stack.Screen name="Reader" component={ReaderScreen} />
    </Stack.Navigator>
  );
}
