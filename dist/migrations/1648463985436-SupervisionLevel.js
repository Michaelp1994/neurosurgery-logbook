"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupervisionLevel1648463985436 = void 0;
const typeorm_1 = require("typeorm");
class SupervisionLevel1648463985436 {
    async up(queryRunner) {
        await queryRunner.query(`INSERT INTO "supervision_level"(id, name) VALUES (1, 'Primary'), (2, 'Secondary'), (3, 'Assistant');`);
        await queryRunner.addColumn("consult_procedure", new typeorm_1.TableColumn({
            name: "supervisionLevelId",
            type: "int",
            isNullable: true,
        }));
        await queryRunner.query(`UPDATE "consult_procedure" SET "supervisionLevelId"= 1 where "supervisionLevel" = '0';`);
        await queryRunner.query(`UPDATE "consult_procedure" SET "supervisionLevelId"= 2 where "supervisionLevel" = '1';`);
        await queryRunner.query(`UPDATE "consult_procedure" SET "supervisionLevelId"= 3 where "supervisionLevel" = '2';`);
    }
    async down(queryRunner) {
        const consultProcedureTable = await queryRunner.getTable("consult_procedure");
        if (!consultProcedureTable)
            throw Error("cannot find consult_procedure Table.");
        await queryRunner.query(`CREATE TYPE "consult_procedure_supervisionlevel_enum" AS ENUM (0, 1, 2);`);
        await queryRunner.addColumn(consultProcedureTable, new typeorm_1.TableColumn({
            name: "supervisionLevel",
            type: "consult_procedure_supervisionlevel_enum",
        }));
        await queryRunner.query(`UPDATE "consult_procedure" SET "supervisionLevel"= "supervisionLevelId" - 1;`);
        await queryRunner.dropColumn(consultProcedureTable, "supervisionLevelId");
    }
}
exports.SupervisionLevel1648463985436 = SupervisionLevel1648463985436;
//# sourceMappingURL=1648463985436-SupervisionLevel.js.map