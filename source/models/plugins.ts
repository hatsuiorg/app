import { scope } from "arktype";
import { BCP_47 } from "$/utils/ietf";

const _ = scope({
  Plugin: {
    id: "string",
    name: "string",
    version: "semver",

    icon: "url",
    source: "url",
    website: "url",

    language: ["string", "=>", BCP_47.validateLanguage],
  },

  Repository: {
    "[LanguageCode]": "Plugin[]",
  },

  LanguageCode: BCP_47.ARKTYPE_LANGUAGE_CODE as "string",
});

export const { Plugin, Repository } = _.export();

export type Repository = typeof Repository.infer;
export type Plugin = typeof Plugin.infer;
