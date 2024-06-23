import { eq } from "drizzle-orm";
import * as FileSystem from "expo-file-system";

import { plugins } from "$/drizzle/schema";
import { sqlite } from "$/drizzle/sqlite";

import { PluginAPI, PluginMetadata } from "./api";
import { Sandbox, createSandboxPackages } from "./sandbox";

const PLUGINS_MAP = new Map<string, PluginAPI>();
const PLUGINS_DIR = FileSystem.bundleDirectory + "plugins";

export namespace PluginsLoader {
  export type PluginLoadOptions = {
    id: string;
  };

  /**
   * Loads a plugin based on the provided options.
   * @throws {Error} If the plugin is buggy or invalid.
   * @returns The loaded plugin if successful, otherwise null.
   *
   * @usage
   * ```typescript
   * const plugin = await PluginsLoader.loadPlugin({ id: "MangaDex" });
   * ```
   */
  export async function getLoadedPlugin(
    options: PluginLoadOptions,
  ): Promise<PluginAPI | null> {
    const cachedPlugin = PLUGINS_MAP.get(options.id);
    if (cachedPlugin) return cachedPlugin;

    const metadata = await getPluginMetadata(options);
    const code = await getPluginCode(options);

    if (!code || !metadata) {
      return null;
    }

    return Sandbox.executeSandboxedFunction<PluginAPI>({
      modules: createSandboxPackages({ metadata }),
      source: code,
    });
  }

  export interface InstallationOptions {
    exclude?: string[];
    url: string;
  }

  /**
   * Installs a plugin with the specified options.
   * @returns Boolean indicating whether the plugin was installed successfully.
   *
   * @usage
   * ```typescript
   * await PluginsLoader.installRepository({ url: "https://example.com/plugins.json" });
   * ```
   */
  export async function installRepository(
    options: InstallationOptions,
  ): Promise<boolean> {
    throw new Error();
  }

  /**
   * Uninstalls a plugin with the specified options.
   * @returns Boolean indicating whether the plugin was uninstalled successfully.
   *
   * @usage
   * ```typescript
   * await PluginsLoader.uninstallRepository({ url: "https://example.com/plugins.json" });
   * ```
   * */
  export async function uninstallRepository(
    options: InstallationOptions,
  ): Promise<boolean> {
    throw new Error();
  }

  // Internal Utilities
  // Internal Utilities
  // Internal Utilities

  /**
   * Retrieves the code of a plugin based on the provided options.
   * @returns The code of the plugin if found, otherwise null.
   */
  async function getPluginCode(options: PluginLoadOptions) {
    const plugin = await sqlite.query.plugins.findFirst({
      where: eq(plugins.id, options.id),
    });

    if (!plugin) {
      return null;
    }

    const fileInfo = await FileSystem.getInfoAsync(
      `${PLUGINS_DIR}/${plugin.source}`,
      { size: false, md5: false },
    );

    if (!fileInfo.exists) {
      return null;
    }

    return await FileSystem.readAsStringAsync(fileInfo.uri, {
      encoding: FileSystem.EncodingType.UTF8,
    });
  }

  /**
   * Retrieves the metadata of a plugin based on the provided options.
   * @returns The metadata of the plugin if found, otherwise null.
   */
  async function getPluginMetadata(options: PluginLoadOptions) {
    const plugin = await sqlite.query.plugins.findFirst({
      where: eq(plugins.id, options.id),
    });

    if (!plugin) {
      return null;
    }

    return <PluginMetadata>{
      id: plugin.id,
      name: plugin.name,
      icon: plugin.icon,
      source: plugin.source,
      version: plugin.version,
      createdAt: plugin.createdAt.toISOString(),
      updatedAt: plugin.updatedAt.toISOString(),
    };
  }
}
