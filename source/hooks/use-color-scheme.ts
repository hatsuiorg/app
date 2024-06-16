import {
  ColorSchemeName,
  useColorScheme as useNativeColorScheme,
} from "react-native";

export default function useColorScheme(): NonNullable<ColorSchemeName> {
  return useNativeColorScheme() || "dark";
}
