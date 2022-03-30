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
exports.ProcedureType = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const Procedure_1 = require("./Procedure");
const ProcedureTopic_1 = require("./ProcedureTopic");
let ProcedureType = class ProcedureType extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ProcedureType.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProcedureType.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Procedure_1.Procedure]),
    (0, typeorm_1.OneToMany)(() => Procedure_1.Procedure, (procedure) => procedure.type),
    __metadata("design:type", Array)
], ProcedureType.prototype, "procedures", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProcedureType.prototype, "topicId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], ProcedureType.prototype, "totalConsults", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => ProcedureTopic_1.ProcedureTopic),
    (0, typeorm_1.ManyToOne)(() => ProcedureTopic_1.ProcedureTopic, (topic) => topic.types),
    __metadata("design:type", ProcedureTopic_1.ProcedureTopic)
], ProcedureType.prototype, "topic", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ProcedureType.prototype, "createdAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ProcedureType.prototype, "updatedAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], ProcedureType.prototype, "deletedAt", void 0);
ProcedureType = __decorate([
    (0, typeorm_1.Entity)(),
    (0, type_graphql_1.ObjectType)({ description: "The procedure type model" })
], ProcedureType);
exports.ProcedureType = ProcedureType;
//# sourceMappingURL=ProcedureType.js.map