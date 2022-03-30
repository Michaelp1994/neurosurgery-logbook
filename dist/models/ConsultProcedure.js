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
exports.ConsultProcedure = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const Consult_1 = require("./Consult");
const Procedure_1 = require("./Procedure");
const SupervisionLevel_1 = require("./SupervisionLevel");
let ConsultProcedure = class ConsultProcedure extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ConsultProcedure.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ConsultProcedure.prototype, "consultId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ConsultProcedure.prototype, "procedureId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ConsultProcedure.prototype, "supervisionLevelId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => SupervisionLevel_1.SupervisionLevel),
    (0, typeorm_1.ManyToOne)(() => SupervisionLevel_1.SupervisionLevel, (supervisionLevel) => supervisionLevel.procedures),
    __metadata("design:type", SupervisionLevel_1.SupervisionLevel)
], ConsultProcedure.prototype, "supervisionLevel", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Consult_1.Consult),
    (0, typeorm_1.ManyToOne)(() => Consult_1.Consult, (consult) => consult.procedures),
    __metadata("design:type", Consult_1.Consult)
], ConsultProcedure.prototype, "consult", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Procedure_1.Procedure),
    (0, typeorm_1.ManyToOne)(() => Procedure_1.Procedure, (procedure) => procedure.consults),
    __metadata("design:type", Procedure_1.Procedure)
], ConsultProcedure.prototype, "procedure", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ConsultProcedure.prototype, "createdAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ConsultProcedure.prototype, "updatedAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], ConsultProcedure.prototype, "deletedAt", void 0);
ConsultProcedure = __decorate([
    (0, typeorm_1.Entity)(),
    (0, type_graphql_1.ObjectType)({
        description: "The many-to-many relation between Consult & Procedure",
    })
], ConsultProcedure);
exports.ConsultProcedure = ConsultProcedure;
//# sourceMappingURL=ConsultProcedure.js.map