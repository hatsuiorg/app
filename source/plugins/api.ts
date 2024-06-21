import { Chapter, Novel } from "$/models/novel";
import { PromiseLike } from "$/types";

export type PluginQueryOptions = {
  page: number;
  limit: number;
  query: string;
};

export interface PluginMetadata {
  id: string;

  name: string;
  icon: string;

  source: string;
  version: string;

  updatedAt: string;
  createdAt: string;
}

export interface PluginAPI extends PluginMetadata {
  /**
   * Parses the given URL and returns a novel object.
   * @param url The URL which points to a novel page.
   */
  parse(url: string): PromiseLike<Novel>;

  /**
   * Parses the given URL and returns a chapter object.
   * @param url The URL which points to a chapter page.
   */
  parseChapter(url: string): PromiseLike<Chapter>;

  /**
   * Searches for novels using the given query.
   * @param options The search query options.
   */
  search(options: PluginQueryOptions): PromiseLike<Novel[]>;

  /**
   * Fetches the most popular novels.
   * @param options The search query options.
   */
  popular(options: PluginQueryOptions): PromiseLike<Novel[]>;
}
