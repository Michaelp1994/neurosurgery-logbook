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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Procedure = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const ProcedureType_1 = require("./ProcedureType");
const ConsultProcedure_1 = require("./ConsultProcedure");
let Procedure = class Procedure extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Procedure.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Procedure.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Procedure.prototype, "typeId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], Procedure.prototype, "totalConsults", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], Procedure.prototype, "totalPrimaryConsults", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], Procedure.prototype, "totalSecondaryConsults", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], Procedure.prototype, "totalAssistantConsults", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => ProcedureType_1.ProcedureType),
    (0, typeorm_1.ManyToOne)(() => ProcedureType_1.ProcedureType, (procedureType) => procedureType.procedures),
    __metadata("design:type", ProcedureType_1.ProcedureType)
], Procedure.prototype, "type", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [ConsultProcedure_1.ConsultProcedure]),
    (0, typeorm_1.OneToMany)(() => ConsultProcedure_1.ConsultProcedure, (consultProcedure) => consultProcedure.procedure),
    __metadata("design:type", Array)
], Procedure.prototype, "consults", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Procedure.prototype, "createdAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Procedure.prototype, "updatedAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Procedure.prototype, "deletedAt", void 0);
Procedure = __decorate([
    (0, typeorm_1.Entity)(),
    (0, type_graphql_1.ObjectType)({ description: "The procedure model" })
], Procedure);
exports.Procedure = Procedure;
//# sourceMappingURL=Procedure.js.map