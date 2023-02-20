// TODO: Model this better.

export type NovelType = 'LIGHT-NOVEL' | 'UNKNOWN';
export type NovelChapterType = 'PROLOGUE' | 'EPILOGUE' | 'CHAPTER';

export interface Novel {
  id: string;
  type: NovelType;

  title: string;
  description?: string;

  cover: string;
  authorsAndIllustrators: string[];

  chapters: NovelChapter[];
}

export interface NovelChapter {
  id: string;
  type: NovelChapterType;

  title: string;
  content: string;

  chapterNumber: number;
  volumeNumber?: number;

  createdAt?: Date;
}

export interface NovelVolume {
  id: string;

  volumeNumber: number;
  chapters: NovelChapter[];
}
