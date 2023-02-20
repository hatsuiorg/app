import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { Novel, NovelChapter } from '../types/Novel';

// @react-navigation/native-stack
// @react-navigation/native-stack
// @react-navigation/native-stack

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootBottomTabParamList> | undefined;
  Novel: Novel;
  Chapter: NovelChapter;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

// @react-navigation/bottom-tabs
// @react-navigation/bottom-tabs
// @react-navigation/bottom-tabs

export type RootBottomTabParamList = {
  Library: undefined;
  Updates: undefined;
  History: undefined;
  Settings: undefined;
};

export type RootBottomTabScreenProps<Screen extends keyof RootBottomTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootBottomTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
