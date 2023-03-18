import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm/browser';

import ChapterEntity from './ChapterEntity';

type NovelKind = 'LightNovel' | 'Unknown';

@Entity({ name: 'Novel' })
export default class NovelEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text', { default: 'Unknown' as NovelKind })
  kind: NovelKind;

  @Column('text')
  title: string;

  @Column('text')
  synopsis: string;

  @Column('blob')
  cover: Blob;

  @Column('text')
  authors: string;

  @Column('text')
  artists: string;

  @Column('text')
  genres: string;

  @ManyToOne((of) => ChapterEntity, (chapter) => chapter.novel, { cascade: true })
  chapters: ChapterEntity[];
}
