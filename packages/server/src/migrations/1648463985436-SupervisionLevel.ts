import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class SupervisionLevel1648463985436 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `INSERT INTO "supervision_level"(id, name) VALUES (1, 'Primary'), (2, 'Secondary'), (3, 'Assistant');`
        );
        await queryRunner.addColumn(
            "consult_procedure",
            new TableColumn({
                name: "supervisionLevelId",
                type: "int",
                isNullable: true,
            })
        );

        await queryRunner.query(
            `UPDATE "consult_procedure" SET "supervisionLevelId"= 1 where "supervisionLevel" = '0';`
        );
        await queryRunner.query(
            `UPDATE "consult_procedure" SET "supervisionLevelId"= 2 where "supervisionLevel" = '1';`
        );
        await queryRunner.query(
            `UPDATE "consult_procedure" SET "supervisionLevelId"= 3 where "supervisionLevel" = '2';`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const consultProcedureTable = await queryRunner.getTable(
            "consult_procedure"
        );
        if (!consultProcedureTable)
            throw Error("cannot find consult_procedure Table.");
        await queryRunner.query(
            `CREATE TYPE "consult_procedure_supervisionlevel_enum" AS ENUM (0, 1, 2);`
        );

        await queryRunner.addColumn(
            consultProcedureTable,
            new TableColumn({
                name: "supervisionLevel",
                type: "consult_procedure_supervisionlevel_enum",
            })
        );
        await queryRunner.query(
            `UPDATE "consult_procedure" SET "supervisionLevel"= "supervisionLevelId" - 1;`
        );

        await queryRunner.dropColumn(
            consultProcedureTable,
            "supervisionLevelId"
        );
    }
}
