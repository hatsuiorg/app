import DateFns from "date-fns";
import UserAgent from "user-agents";
import QueryString from "querystring";
import { load } from "cheerio/lib/slim";

import { PluginMetadata } from "./api";
import { createSandboxedFetch } from "./pkgs/fetch";

export namespace Sandbox {
  /**
   * Creates an encapsulated require function that only allows access to the provided modules.
   *
   * @example
   * ```typescript
   * const sandboxedRequire = Sandbox.createSandboxedRequire({
   *   "node:fs": require("fs"),
   *   ...
   * })
   * ```
   */
  export function createSandboxedRequire(modules: Record<string, unknown>) {
    return function require(module: string) {
      return modules[module];
    } as NodeRequire;
  }

  /**
   * Creates a sandboxed function that evaluates the given source code and returns the default export.
   *
   * @example
   * ```typescript
   * const sandboxedFunction = Sandbox.createSandboxedFunction<PluginAPI>(`
   *   exports.default = { name: "My Plugin", ... };
   * `);
   *
   * sandboxedFunction(module, require);
   * // => { name: "My Plugin", ... }
   * ```
   */
  export function createSandboxedFunction<T>(source: string) {
    return Function(
      "module",
      "require",
      `const exports = module.exports; ${source}; return exports.default;`,
    ).bind(null) as (module: NodeModule, require: NodeRequire) => T;
  }

  export type ExecuteSandboxedFunctionOptions = {
    modules: Record<string, unknown>;
    source: string;
  };

  /**
   * Executes a sandboxed function with the provided modules and source code.
   *
   * @example
   * ```typescript
   * await Sandbox.executeSandboxedFunction<PluginAPI>({
   *   source: "exports.default = require('hello-world')();"
   *   modules: { "hello-world": () => 'Hello World' },
   * }); // => "Hello World"
   * ```
   */
  export async function executeSandboxedFunction<T>({
    modules,
    source,
  }: ExecuteSandboxedFunctionOptions) {
    const sandboxedFunction = createSandboxedFunction<T>(source);
    const sandboxedRequire = createSandboxedRequire(modules);

    return await sandboxedFunction(module, sandboxedRequire);
  }
}

export type CreatePackagesOptions = {
  metadata: PluginMetadata;
  skipCheck?: boolean;
};

export function createSandboxPackages(options: CreatePackagesOptions) {
  const fetch = createSandboxedFetch({
    skipCheck: options.skipCheck,
    metadata: options.metadata,
  });

  return {
    "date-fns": DateFns,
    "querystring": QueryString,

    "fetch": { fetch },
    "cheerio": { load },
    "user-agents": { UserAgent },
  };
}
