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
exports.SetLevel = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const Rotation_1 = require("./Rotation");
const Consult_1 = require("./Consult");
let SetLevel = class SetLevel extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SetLevel.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SetLevel.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Rotation_1.Rotation], { nullable: true }),
    (0, typeorm_1.OneToMany)(() => Rotation_1.Rotation, (rotation) => rotation.setLevel),
    __metadata("design:type", Array)
], SetLevel.prototype, "rotations", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Consult_1.Consult], { nullable: true }),
    (0, typeorm_1.OneToMany)(() => Consult_1.Consult, (consult) => consult.setLevel),
    __metadata("design:type", Array)
], SetLevel.prototype, "consults", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], SetLevel.prototype, "createdAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], SetLevel.prototype, "updatedAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], SetLevel.prototype, "deletedAt", void 0);
SetLevel = __decorate([
    (0, typeorm_1.Entity)(),
    (0, type_graphql_1.ObjectType)({ description: "The SET Level model" })
], SetLevel);
exports.SetLevel = SetLevel;
//# sourceMappingURL=SetLevel.js.map