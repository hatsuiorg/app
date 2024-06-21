import { Code, Language, IETF_BCP_47 } from "$/constants/ietf/BCP_47";

export namespace BCP_47 {
  /**
   * Checks if the given code is a valid language code.
   * @returns A boolean indicating whether the code is a valid language code.
   */
  export function isLanguage(search: string): search is Code {
    return IETF_BCP_47.some(
      ({ code, english, native }) =>
        code === search || english === search || native === search,
    );
  }

  /**
   * Gets the language object from the given code.
   * @returns The language object or undefined if the code is invalid.
   */
  export function getLanguage(search: string): Language | undefined {
    return IETF_BCP_47.find(
      ({ code, english, native }) =>
        code === search || english === search || native === search,
    );
  }

  /**
   * Gets the language for a given search term, with forced validation.
   * @returns The language object if found or throws an error if the code is invalid.
   */
  export function validateLanguage(code: string): Language {
    const language = getLanguage(code);

    if (!language)
      throw new TypeError(
        `BCP47.getLanguageForced: Invalid language code="${code}"`,
      );

    return language;
  }

  export const LANGUAGE_CODE = Object.values(IETF_BCP_47).map(
    ({ code }) => code,
  );

  export const ARKTYPE_LANGUAGE_CODE = LANGUAGE_CODE.map(
    (code) => "'" + code + "'",
  ).join("|");
}
