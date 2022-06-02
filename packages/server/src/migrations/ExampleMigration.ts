import { MigrationInterface, QueryRunner } from "typeorm";

export class ExampleMigration implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    //queryRunner.query("");
    // MIGRATION RUN HERE
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // MIGRATION REVERT HERE
  }
}
