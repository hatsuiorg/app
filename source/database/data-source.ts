import * as SQLite from 'expo-sqlite';
import { DataSource } from 'typeorm/browser';

import ChapterEntity from './entities/ChapterEntity';
import NovelEntity from './entities/NovelEntity';
import { InitialMigration1679104557276 } from './migrations/1679104557276-InitialMigration';

export default new DataSource({
  type: 'expo',
  driver: SQLite,
  database: 'hatsui',
  migrationsRun: true,
  migrations: [InitialMigration1679104557276],
  entities: [ChapterEntity, NovelEntity],
});
