"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcedureTopicShortName1648539060219 = void 0;
const typeorm_1 = require("typeorm");
class ProcedureTopicShortName1648539060219 {
    async up(queryRunner) {
        await queryRunner.addColumn("procedure_topic", new typeorm_1.TableColumn({
            name: "shortName",
            type: "varchar",
            isNullable: true,
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropColumn("procedure_topic", "shortName");
    }
}
exports.ProcedureTopicShortName1648539060219 = ProcedureTopicShortName1648539060219;
//# sourceMappingURL=1648539060219-ProcedureTopicShortName.js.map