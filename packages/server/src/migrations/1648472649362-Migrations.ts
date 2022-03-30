import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class Migrations1648472649362 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            "consult_procedure",
            new TableForeignKey({
                columnNames: ["supervisionLevelId"],
                referencedColumnNames: ["id"],
                referencedTableName: "supervision_level",
            })
        );
        await queryRunner.dropColumn("consult_procedure", "supervisionLevel");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}
}
