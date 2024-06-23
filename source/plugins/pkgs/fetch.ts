import UserAgent from "user-agents";
import { merge } from "remeda";

import type { PluginMetadata } from "../api";

export type FetchOptions = {
  metadata: PluginMetadata;
  skipCheck?: boolean;
};

/**
 * Creates an isolated fetch function with custom headers and URL authorization check.
 * @returns The custom fetch function based on the provided options.
 */
export function createSandboxedFetch(options: FetchOptions) {
  return async function isolatedFetch(
    input: URL | RequestInfo,
    init?: RequestInit,
  ): Promise<Response> {
    let headers: HeadersInit = {
      "Accept": "*/*",
      "Accept-Language": "*",
      "Accept-Encoding": "gzip, deflate, br",

      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",

      "Content-Type": "application/json",
      "User-Agent": new UserAgent().toString(),
    };

    if (options.metadata.fetchableUrls && !options.skipCheck) {
      const url = new URL(input.toString());

      if (!options.metadata.fetchableUrls.some((u) => url.href.includes(u)))
        throw new Error("Unauthorized URL, contact the plugin author");
    }

    headers = merge(headers, init?.headers);
    return fetch(input, { ...init, headers });
  };
}
