import { relations } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { ReaderPreferences } from "../models/reader-preferences";
import { COMMON_COLUMNS, array, json } from "./custom-types";

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

  ...COMMON_COLUMNS,
});

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

export const novelRelations = relations(novels, ({ many }) => ({
  chapters: many(novelChapters),
}));

export const novelChaptersRelations = relations(novelChapters, ({ one }) => ({
  novel: one(novels, {
    references: [novels.id],
    fields: [novelChapters.novelId],
  }),
}));
