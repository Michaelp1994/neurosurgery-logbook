"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultProcedureResolver = void 0;
const type_graphql_1 = require("type-graphql");
const data_source_1 = require("../data-source");
const ConsultProcedure_1 = require("../models/ConsultProcedure");
const SupervisionLevel_1 = require("../models/SupervisionLevel");
const supervisionLevelRepository = data_source_1.dataSource.getRepository(SupervisionLevel_1.SupervisionLevel);
let ConsultProcedureResolver = class ConsultProcedureResolver {
    async supervisionLevel(consultProcedure) {
        const supervisionLevel = await supervisionLevelRepository.findOne({
            where: { id: consultProcedure.supervisionLevelId },
        });
        if (!supervisionLevel)
            throw new Error("Supervision Level not found!");
        return supervisionLevel;
    }
};
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ConsultProcedure_1.ConsultProcedure]),
    __metadata("design:returntype", Promise)
], ConsultProcedureResolver.prototype, "supervisionLevel", null);
ConsultProcedureResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => ConsultProcedure_1.ConsultProcedure)
], ConsultProcedureResolver);
exports.ConsultProcedureResolver = ConsultProcedureResolver;
//# sourceMappingURL=ConsultProcedureResolver.js.map