import { eq } from "drizzle-orm";
import * as FileSystem from "expo-file-system";

import { sqlite } from "$/drizzle/sqlite";
import { plugins, repositories } from "$/drizzle/schema";

import { PluginAPI, PluginMetadata } from "./api";
import { Sandbox, createSandboxPackages } from "./sandbox";
import { LanguageCode, Plugin, Repository } from "$/models/plugins";
import { ArkErrors } from "arktype";
import { flat, forEachObj, keys, map } from "remeda";

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
  export async function loadPlugin(
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

  /**
   * Loads a plugin based on the provided options.
   * @returns Boolean indicating whether the plugin was loaded successfully.
   *
   * @usage
   * ```typescript
   * await PluginsLoader.loadPlugin({ id: "MangaDex" });
   * ```
   */
  export async function unloadPlugin(options: PluginLoadOptions) {
    const plugin = await loadPlugin(options);
    if (!plugin) return false;

    PLUGINS_MAP.delete(options.id);
    return true;
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
    const repository = await getRepository(options.url);
    if (repository === null) return false;

    const promises = keys(repository)
      .filter(isLanguageCode)
      .map(async (language) => {
        const repositoryExists = await sqlite.query.repositories.findFirst({
          where: eq(repositories.url, options.url),
        });

        if (!repositoryExists) {
          await sqlite.insert(repositories).values({
            url: options.url,
            language: language,
          });
        }

        const repositoryId = (
          await sqlite.query.repositories.findFirst({
            where: eq(repositories.url, options.url),
          })
        )?.id;

        if (!repositoryId) {
          throw new Error(
            "Repository ID not found in the database after insertion.",
          );
        }

        return await Promise.all(
          map(repository[language], async (plugin) => {
            const pluginExists = await sqlite.query.plugins.findFirst({
              where: eq(plugins.id, plugin.id),
            });

            if (pluginExists) {
              return false;
            }

            const fileInfo = await FileSystem.getInfoAsync(
              `${PLUGINS_DIR}/${plugin.id}.js`,
              { size: false, md5: false },
            );

            if (fileInfo.exists) {
              await FileSystem.deleteAsync(fileInfo.uri, {
                idempotent: true,
              });
            }

            plugin.source = (
              await FileSystem.downloadAsync(plugin.source, fileInfo.uri)
            ).uri;

            await sqlite
              .insert(plugins)
              .values({ ...plugin, language, repositoryId });

            await loadPlugin({ id: plugin.id });

            return true;
          }),
        );
      });

    return (await Promise.all(promises)).every((x) => x.every(Boolean));
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
    options: InstallationOptions & {
      removePlugins?: boolean;
    },
  ): Promise<boolean> {
    const repository = await getRepository(options.url);
    if (repository === null) return false;

    const promises = keys(repository)
      .filter(isLanguageCode)
      .map(async (code) => {
        await sqlite
          .delete(repositories)
          .where(eq(repositories.url, options.url));

        if (options.removePlugins)
          return await Promise.all(
            map(repository[code], async (plugin) => {
              const pluginExists = await sqlite.query.plugins.findFirst({
                where: eq(plugins.id, plugin.id),
              });

              if (!pluginExists) {
                return false;
              }

              const fileInfo = await FileSystem.getInfoAsync(
                `${PLUGINS_DIR}/${plugin.id}.js`,
                { size: false, md5: false },
              );

              if (fileInfo.exists) {
                await FileSystem.deleteAsync(fileInfo.uri, {
                  idempotent: true,
                });
              }

              await unloadPlugin({ id: plugin.id });
              await sqlite.delete(plugins).where(eq(plugins.id, plugin.id));

              return true;
            }),
          );

        return [true];
      });

    return (await Promise.all(promises)).every((x) => x.every(Boolean));
  }

  // Internal Utilities
  // Internal Utilities
  // Internal Utilities

  const isLanguageCode = (value: unknown): value is LanguageCode =>
    !(LanguageCode(value) instanceof ArkErrors);

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
      `${PLUGINS_DIR}/${plugin.id}.js`,
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

  /**
   * Retrieves a repository from the specified URL.
   * @returns The repository object if successful, or null if an error occurred.
   */
  async function getRepository(url: string) {
    const response = await fetch(url, { method: "GET" });
    const repository = Repository(await response.json());

    return repository instanceof ArkErrors ? null : repository;
  }
}
