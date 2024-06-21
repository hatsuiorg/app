import { scope } from "arktype";

const _ = scope({
  Novel: {
    "name": "string",
    "path": "string",
    "status": "Status",

    "cover?": "url",
    "summary?": "string",
    "totalPages?": "number",

    "genres?": "string[]>=1",
    "authors?": "string[]>=1",
    "artists?": "string[]>=1",

    "volumes?": "Volume[]",
    "chapters?": "Chapter[]",
  },

  Chapter: {
    "name": "string",
    "path": "string",

    "chapterNumber": "number",
    "volumeNumber?": "number",

    "chapterTitle?": "string",
    "releaseDate?": "parse.date",
  },

  Volume: {
    name: "string",
    number: "number",
  },

  Status: "'UNKNOWN' | 'ONGOING' | 'COMPLETED' | 'HIATUS' | 'DROPPED'",
});

export const { Chapter, Status, Novel } = _.export();

export type Chapter = typeof Chapter.infer;
export type Status = typeof Status.infer;
export type Novel = typeof Novel.infer;
