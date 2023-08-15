import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type ChapterEntity from '../database/entities/ChapterEntity';
import type NovelEntity from '../database/entities/NovelEntity';

// @react-navigation/native-stack
// @react-navigation/native-stack
// @react-navigation/native-stack

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootBottomTabParamList> | undefined;
  Novel: NovelEntity;
  Chapter: ChapterEntity;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

// @react-navigation/bottom-tabs
// @react-navigation/bottom-tabs
// @react-navigation/bottom-tabs

export type RootBottomTabParamList = {
  Home: undefined;
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

// Utility Types
// Utility Types
// Utility Types

/** Use this type to get the props of a screen. */
export type ScreenString =
  | `Stack:${keyof RootStackParamList}`
  | `Tab:${keyof RootBottomTabParamList}`;

/**
 * Get the props of a screen from its name.
 *
 * @example
 * type Props = ScreenProps<'Stack:Novel'>;
 * // => { ... }
 */
export type ScreenProps<Screen extends ScreenString> = Screen extends `Stack:${infer Stack}`
  ? Stack extends keyof RootStackParamList
    ? RootStackScreenProps<Stack>
    : never
  : Screen extends `Tab:${infer Tab}`
  ? Tab extends keyof RootBottomTabParamList
    ? RootBottomTabScreenProps<Tab>
    : never
  : never;
