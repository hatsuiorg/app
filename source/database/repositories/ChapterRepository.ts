import { DataSource, Repository } from 'typeorm/browser';

import ChapterEntity from '../entities/ChapterEntity';

export default class ChapterRepository extends Repository<ChapterEntity> {
  constructor(dataSource: DataSource) {
    super(ChapterEntity, dataSource.manager);
  }
}
