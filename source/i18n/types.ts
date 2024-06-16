import type enUSExtra from "i18n-js/json/en-US.json";
import type ptBRExtra from "i18n-js/json/pt-BR.json";

import type enUS from "./locales/en-US.json";
import type ptBR from "./locales/pt-BR.json";

export type Flatten<T> = T extends object
  ? { [K in keyof T]: [K, ...Flatten<T[K]>] }[keyof T]
  : [];

export type Filter<T extends unknown[], U> = T extends [infer F, ...infer R]
  ? F extends U
    ? [F, ...Filter<R, U>]
    : Filter<R, U>
  : [];

export type FilterPluralKeys<T extends []> = T extends [
  ...infer R,
  "one" | "other"
]
  ? R
  : T;

export type Join<T extends unknown[], D extends string = "_"> = T extends []
  ? ""
  : T extends [string]
  ? `${T[0]}`
  : T extends [string, ...infer R]
  ? `${T[0]}${D}${Join<R, D>}`
  : string;

export type ObjectPaths<T extends object, S extends string> = Join<
  FilterPluralKeys<Filter<Flatten<T>, string>>,
  S
>;

export type Translations =
  | (typeof enUS)["en-US"] &
      (typeof ptBR)["pt-BR"] &
      (typeof enUSExtra)["en-US"] &
      (typeof ptBRExtra)["pt-BR"];

export type TranslatePath = ObjectPaths<
  Omit<Translations, "date" | "number" | "support" | "time">,
  "."
>;

export type LocalizePath = ObjectPaths<
  Pick<Translations, "date" | "time"> & {
    number: string;
    currency: string;
    percentage: string;
  },
  "."
>;

export type LocalizeOptions = Date | string | number | null | undefined;
