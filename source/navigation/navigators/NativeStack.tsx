import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabNavigator from './BottomTab';
import ChapterScreen from '../../screens/Chapter';
import NovelScreen from '../../screens/Novel';
import type { RootStackParamList } from '../types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Root" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />

      <Stack.Screen name="Novel" component={NovelScreen} />
      <Stack.Screen name="Chapter" component={ChapterScreen} />
    </Stack.Navigator>
  );
}
