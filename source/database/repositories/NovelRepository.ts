import { DataSource, Repository } from 'typeorm/browser';

import NovelEntity from '../entities/NovelEntity';

export default class NovelRepository extends Repository<NovelEntity> {
  constructor(dataSource: DataSource) {
    super(NovelEntity, dataSource.manager);
  }
}
