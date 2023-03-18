import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm/browser';

import NovelEntity from './NovelEntity';

@Entity({ name: 'Chapter' })
export default class ChapterEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('real')
  number: number;

  @Column('real')
  volume: number;

  @Column('text')
  content: string;

  @Column('text', { nullable: true })
  title: string | null;

  @OneToMany((of) => NovelEntity, (novel) => novel.chapters)
  novel: NovelEntity;
}
