import { I18n, TranslateOptions } from "i18n-js";
import { getLocales } from "expo-localization";

import enUSExtra from "i18n-js/json/en-US.json";
import ptBRExtra from "i18n-js/json/pt-BR.json";

import enUSLocal from "./locales/en-US.json";
import ptBRLocal from "./locales/pt-BR.json";

import { LocalizeOptions, LocalizePath, TranslatePath } from "./types";

const i18n = new I18n({
  ...enUSExtra,
  ...enUSLocal,
  ...ptBRExtra,
  ...ptBRLocal,
});

i18n.enableFallback = true;
i18n.defaultSeparator = ".";

i18n.defaultLocale = "pt-BR";
i18n.locale = getLocales()[0].languageCode ?? i18n.defaultLocale;

export const translate: (
  path: TranslatePath,
  options?: TranslateOptions
) => string = i18n.translate.bind(i18n);

export const localize: (
  path: LocalizePath,
  value?: LocalizeOptions,
  options?: Record<string, unknown>
) => string = i18n.localize.bind(i18n);

export { i18n };
