import type { ReaderPreferences } from "$/models/reader-preferences";

export const DEFAULT_READER_PREFERENCES: ReaderPreferences = {
  textAlign: "left",
  textSize: 16,

  fontFamily: "sans-serif",
  lineHeight: 1.5,

  adhdMode: false,
  autoScroll: false,
  hideStatusBar: false,
  keepScreenAwake: true,
  showProgressBar: true,
  useVolumeKeys: true,
};
