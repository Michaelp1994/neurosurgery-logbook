"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migrations1648472649362 = void 0;
const typeorm_1 = require("typeorm");
class Migrations1648472649362 {
    async up(queryRunner) {
        await queryRunner.createForeignKey("consult_procedure", new typeorm_1.TableForeignKey({
            columnNames: ["supervisionLevelId"],
            referencedColumnNames: ["id"],
            referencedTableName: "supervision_level",
        }));
        await queryRunner.dropColumn("consult_procedure", "supervisionLevel");
    }
    async down(queryRunner) { }
}
exports.Migrations1648472649362 = Migrations1648472649362;
//# sourceMappingURL=1648472649362-Migrations.js.map