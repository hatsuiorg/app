import { scope } from "arktype";

const _ = scope({
  ReaderPreferences: {
    textSize: "number",
    textAlign: "TextAlign",

    fontFamily: "string",
    lineHeight: "number",

    adhdMode: "boolean",
    autoScroll: "boolean",
    hideStatusBar: "boolean",
    keepScreenAwake: "boolean",
    showProgressBar: "boolean",
    useVolumeKeys: "boolean",
  },

  TextAlign: "'left'|'center'|'right'|'justify'",
});

export const { ReaderPreferences, TextAlign } = _.export();

export type ReaderPreferences = typeof ReaderPreferences.infer;
export type TextAlign = typeof TextAlign.infer;
