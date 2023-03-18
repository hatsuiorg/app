import { Table } from 'typeorm';
import { MigrationInterface, QueryRunner } from 'typeorm/browser';

export class InitialMigration1679104557276 implements MigrationInterface {
  private novelsTable = new Table({
    name: 'Novel',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'kind',
        type: 'text',
        default: "'Unknown'",
      },
      {
        name: 'title',
        type: 'text',
      },
      {
        name: 'synopsis',
        type: 'text',
      },
      {
        name: 'cover',
        type: 'blob',
      },
      {
        name: 'authors',
        type: 'text',
        isArray: true,
      },
      {
        name: 'artists',
        type: 'text',
        isArray: true,
      },
      {
        name: 'genres',
        type: 'text',
        isArray: true,
      },
    ],
  });

  private chaptersTable = new Table({
    name: 'Chapter',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'number',
        type: 'real',
      },
      {
        name: 'volume',
        type: 'real',
      },
      {
        name: 'content',
        type: 'text',
      },
      {
        name: 'title',
        type: 'text',
        isNullable: true,
      },
      {
        name: 'novelId',
        type: 'integer',
      },
    ],
    foreignKeys: [
      {
        onDelete: 'CASCADE',
        columnNames: ['novelId'],
        referencedTableName: 'novel',
        referencedColumnNames: ['id'],
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.novelsTable, true);
    await queryRunner.createTable(this.chaptersTable, true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.chaptersTable, true, true);
    await queryRunner.dropTable(this.novelsTable, true, true);
  }
}
