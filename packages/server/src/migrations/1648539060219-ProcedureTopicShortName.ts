import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class ProcedureTopicShortName1648539060219
    implements MigrationInterface
{
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "procedure_topic",
            new TableColumn({
                name: "shortName",
                type: "varchar",
                isNullable: true,
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("procedure_topic", "shortName");
    }
}
