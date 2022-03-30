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
exports.TypeOfAnaesthetic = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const Consult_1 = require("./Consult");
let TypeOfAnaesthetic = class TypeOfAnaesthetic extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TypeOfAnaesthetic.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TypeOfAnaesthetic.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Consult_1.Consult], { nullable: true }),
    (0, typeorm_1.OneToMany)(() => Consult_1.Consult, (consult) => consult.typeOfAnaesthetic),
    __metadata("design:type", Array)
], TypeOfAnaesthetic.prototype, "consults", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], TypeOfAnaesthetic.prototype, "createdAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], TypeOfAnaesthetic.prototype, "updatedAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], TypeOfAnaesthetic.prototype, "deletedAt", void 0);
TypeOfAnaesthetic = __decorate([
    (0, typeorm_1.Entity)(),
    (0, type_graphql_1.ObjectType)({ description: "The Type Of Anaesthetic model" })
], TypeOfAnaesthetic);
exports.TypeOfAnaesthetic = TypeOfAnaesthetic;
//# sourceMappingURL=TypeOfAnaesthetic.js.map