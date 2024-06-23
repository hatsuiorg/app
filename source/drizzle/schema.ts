import { relations } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { Plugin } from "$/models/plugins";
import { ReaderPreferences } from "$/models/reader-preferences";

import { Code as LanguageCode } from "$/constants/ietf/BCP_47";

import {
  COMMON_COLUMNS,
  CREATED_AT,
  UPDATED_AT,
  array,
  json,
} from "./custom-types";

export const plugins = sqliteTable("plugins", {
  id: text("id").primaryKey().unique().notNull(),

  name: text("name").notNull(),
  icon: text("icon").notNull(),

  source: text("source").notNull(),
  version: text("version").notNull(),
  website: text("website").notNull(),

  language: text("language").notNull().$type<LanguageCode>(),

  createdAt: CREATED_AT,
  updatedAt: UPDATED_AT,
});

export const pluginRelations = relations(plugins, ({ many }) => ({
  novels: many(novels),
}));

// Novels

export const novels = sqliteTable("novels", {
  title: text("title").notNull(),
  synopsis: text("synopsis").notNull(),
  coverPath: text("cover_path").notNull(),

  genres: array("genres").notNull().default([]),
  authors: array("authors").notNull().default([]),
  artists: array("artists").notNull().default([]),

  customPreferences: json("custom_preferences")
    .$type<Partial<ReaderPreferences>>()
    .default({})
    .notNull(),

  pluginId: text("plugin_id")
    .references(() => plugins.id)
    .notNull(),

  ...COMMON_COLUMNS,
});

export const novelRelations = relations(novels, ({ many, one }) => ({
  chapters: many(novelChapters),
  plugin: one(plugins, {
    references: [plugins.id],
    fields: [novels.pluginId],
  }),
}));

// Novel Chapters

export const novelChapters = sqliteTable("novels_chapters", {
  title: text("title").notNull(),
  content: text("content").notNull(),

  number: integer("number").notNull(),
  volume: integer("volume").notNull(),

  novelId: integer("novel_id")
    .references(() => novels.id)
    .notNull(),

  ...COMMON_COLUMNS,
});

export const novelChaptersRelations = relations(novelChapters, ({ one }) => ({
  novel: one(novels, {
    references: [novels.id],
    fields: [novelChapters.novelId],
  }),
}));

// Repositories

export const repositories = sqliteTable("repositories", {
  id: text("id").primaryKey().unique().notNull(),

  language: text("language").notNull().$type<LanguageCode>(),
  plugins: json("plugins").$type<Plugin[]>().notNull().default([]),

  createdAt: CREATED_AT,
  updatedAt: UPDATED_AT,
});

export const repositoryRelations = relations(repositories, ({ many }) => ({
  plugins: many(plugins),
  novels: many(novels),
}));
