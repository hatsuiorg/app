import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";

import type { LibraryScreenProps } from "$/screens/tab/library";
import type { RecentsScreenProps } from "$/screens/tab/recents";
import type { SettingsScreenProps } from "$/screens/tab/settings";
import type { ExtensionsScreenProps } from "$/screens/tab/extensions";

import type { NovelScreenProps } from "$/screens/stack/novel";
import type { ReaderScreenProps } from "$/screens/stack/reader";

// @react-navigation/bottom-tabs
// @react-navigation/bottom-tabs
// @react-navigation/bottom-tabs

export type RootBottomTabParamList = {
  Library: LibraryScreenProps;
  Recents: RecentsScreenProps;
  Settings: SettingsScreenProps;
  Extensions: ExtensionsScreenProps;
};

// @react-navigation/native-stack
// @react-navigation/native-stack
// @react-navigation/native-stack

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootBottomTabParamList> | undefined;
  Novel: NovelScreenProps;
  Reader: ReaderScreenProps;
};

// Utility Types
// Utility Types
// Utility Types

export type RootBottomTabScreenProps<
  Screen extends keyof RootBottomTabParamList
> = CompositeScreenProps<
  BottomTabScreenProps<RootBottomTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

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
export type ScreenProps<Screen extends ScreenString> =
  Screen extends `Stack:${infer Stack}`
    ? Stack extends keyof RootStackParamList
      ? RootStackScreenProps<Stack>
      : never
    : Screen extends `Tab:${infer Tab}`
    ? Tab extends keyof RootBottomTabParamList
      ? RootBottomTabScreenProps<Tab>
      : never
    : never;
