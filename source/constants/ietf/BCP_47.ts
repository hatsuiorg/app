export type Code = string;

export type Language = {
  english: string;
  native: string;
  code: Code;
};

export const IETF_BCP_47 = [
  {
    code: "af-ZA",
    native: "Afrikaans",
    english: "Afrikaans",
  },
  {
    code: "ar",
    native: "العربية",
    english: "Arabic",
  },
  {
    code: "bg-BG",
    native: "Български",
    english: "Bulgarian",
  },
  {
    code: "ca-AD",
    native: "Català",
    english: "Catalan",
  },
  {
    code: "cs-CZ",
    native: "Čeština",
    english: "Czech",
  },
  {
    code: "cy-GB",
    native: "Cymraeg",
    english: "Welsh",
  },
  {
    code: "da-DK",
    native: "Dansk",
    english: "Danish",
  },
  {
    code: "de-AT",
    native: "Deutsch (Österreich)",
    english: "German (Austria)",
  },
  {
    code: "de-CH",
    native: "Deutsch (Schweiz)",
    english: "German (Switzerland)",
  },
  {
    code: "de-DE",
    native: "Deutsch (Deutschland)",
    english: "German (Germany)",
  },
  {
    code: "el-GR",
    native: "Ελληνικά",
    english: "Greek",
  },
  {
    code: "en-GB",
    native: "English (UK)",
    english: "English (UK)",
  },
  {
    code: "en-US",
    native: "English (US)",
    english: "English (US)",
  },
  {
    code: "es-CL",
    native: "Español (Chile)",
    english: "Spanish (Chile)",
  },
  {
    code: "es-ES",
    native: "Español (España)",
    english: "Spanish (Spain)",
  },
  {
    code: "es-MX",
    native: "Español (México)",
    english: "Spanish (Mexico)",
  },
  {
    code: "et-EE",
    native: "Eesti keel",
    english: "Estonian",
  },
  {
    code: "eu",
    native: "Euskara",
    english: "Basque",
  },
  {
    code: "fa-IR",
    native: "فارسی",
    english: "Persian",
  },
  {
    code: "fi-FI",
    native: "Suomi",
    english: "Finnish",
  },
  {
    code: "fr-CA",
    native: "Français (Canada)",
    english: "French (Canada)",
  },
  {
    code: "fr-FR",
    native: "Français (France)",
    english: "French (France)",
  },
  {
    code: "gl-ES",
    native: "Galego (Spain)",
    english: "Galician (Spain)",
  },
  {
    code: "he-IL",
    native: "עברית",
    english: "Hebrew",
  },
  {
    code: "hi-IN",
    native: "हिंदी",
    english: "Hindi",
  },
  {
    code: "hr-HR",
    native: "Hrvatski",
    english: "Croatian",
  },
  {
    code: "hu-HU",
    native: "Magyar",
    english: "Hungarian",
  },
  {
    code: "id-ID",
    native: "Bahasa Indonesia",
    english: "Indonesian",
  },
  {
    code: "is-IS",
    native: "Íslenska",
    english: "Icelandic",
  },
  {
    code: "it-IT",
    native: "Italiano",
    english: "Italian",
  },
  {
    code: "ja-JP",
    native: "日本語",
    english: "Japanese",
  },
  {
    code: "km-KH",
    native: "ភាសាខ្មែរ",
    english: "Khmer",
  },
  {
    code: "ko-KR",
    native: "한국어",
    english: "Korean",
  },
  {
    code: "la",
    native: "Latina",
    english: "Latin",
  },
  {
    code: "lt-LT",
    native: "Lietuvių kalba",
    english: "Lithuanian",
  },
  {
    code: "lv-LV",
    native: "Latviešu",
    english: "Latvian",
  },
  {
    code: "mn-MN",
    native: "Монгол",
    english: "Mongolian",
  },
  {
    code: "nb-NO",
    native: "Norsk bokmål",
    english: "Norwegian (Bokmål)",
  },
  {
    code: "nl-NL",
    native: "Nederlands",
    english: "Dutch",
  },
  {
    code: "nn-NO",
    native: "Norsk nynorsk",
    english: "Norwegian (Nynorsk)",
  },
  {
    code: "pa-PK",
    native: "پنجابی (شاہ‌مکھی)",
    english: "Punjabi (Shahmukhi)",
  },
  {
    code: "pl-PL",
    native: "Polski",
    english: "Polish",
  },
  {
    code: "pt-BR",
    native: "Português (Brasil)",
    english: "Portuguese (Brazil)",
  },
  {
    code: "pt-PT",
    native: "Português (Portugal)",
    english: "Portuguese (Portugal)",
  },
  {
    code: "ro-RO",
    native: "Română",
    english: "Romanian",
  },
  {
    code: "ru-RU",
    native: "Русский",
    english: "Russian",
  },
  {
    code: "sk-SK",
    native: "Slovenčina",
    english: "Slovak",
  },
  {
    code: "sl-SI",
    native: "Slovenščina",
    english: "Slovenian",
  },
  {
    code: "sr-RS",
    native: "Српски / Srpski",
    english: "Serbian",
  },
  {
    code: "sv-SE",
    native: "Svenska",
    english: "Swedish",
  },
  {
    code: "th-TH",
    native: "ไทย",
    english: "Thai",
  },
  {
    code: "tr-TR",
    native: "Türkçe",
    english: "Turkish",
  },
  {
    code: "uk-UA",
    native: "Українська",
    english: "Ukrainian",
  },
  {
    code: "vi-VN",
    native: "Tiếng Việt",
    english: "Vietnamese",
  },
  {
    code: "zh-CN",
    native: "中文 (中国大陆)",
    english: "Chinese (PRC)",
  },
  {
    code: "zh-TW",
    native: "中文 (台灣)",
    english: "Chinese (Taiwan)",
  },
] as const;
