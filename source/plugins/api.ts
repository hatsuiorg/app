import { Chapter, Novel } from "$/models/novel";
import { PromiseLike } from "$/types";

export type SortOrder = "asc" | "desc";
export type SearchType = "exact" | "fuzzy";

export type DateRange = {
  to: Date | string | number;
  from: Date | string | number;
};

export type SearchOptions = {
  query: string;

  page?: number;
  limit?: number;
  sortBy?: string;

  dateRange?: DateRange;
  sortOrder?: SortOrder;
  searchType?: SearchType;
};

export interface PluginMetadata {
  id: string;

  name: string;
  icon: string;

  source: string;
  version: string;

  updatedAt: string;
  createdAt: string;

  /**
   * The URLs which can be fetched by the plugin.
   * @example ["https://example.com/novel/1", "https://example.com/novel/2"]
   * @note The URLs must be unique and should not contain any query parameters.
   */
  fetchableUrls: string[];
}

export interface PluginAPI extends PluginMetadata {
  /**
   * Parses the given URL and returns a novel object.
   * @param url The URL which points to a novel page.
   */
  parseNovel(url: string): PromiseLike<Novel>;

  /**
   * Parses the given URL and returns a chapter object.
   * @param url The URL which points to a chapter page.
   */
  parseChapter(url: string): PromiseLike<Chapter>;

  /**
   * Searches for novels using the given query.
   * @param options The search query options.
   */
  search(options: SearchOptions): PromiseLike<Novel[]>;

  /**
   * Fetches the most popular novels.
   * @param options The search query options.
   */
  popular(options: SearchOptions): PromiseLike<Novel[]>;
}
