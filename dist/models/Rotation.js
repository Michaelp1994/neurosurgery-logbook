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
exports.Rotation = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const Supervisor_1 = require("./Supervisor");
const Hospital_1 = require("./Hospital");
const User_1 = require("./User");
const Consult_1 = require("./Consult");
const SetLevel_1 = require("./SetLevel");
let Rotation = class Rotation extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Rotation.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Rotation.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Rotation.prototype, "startDate", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Rotation.prototype, "endDate", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Rotation.prototype, "userId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Rotation.prototype, "setLevelId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Rotation.prototype, "hospitalId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => User_1.User),
    (0, typeorm_1.ManyToOne)(() => User_1.User, (user) => user.rotations),
    __metadata("design:type", User_1.User)
], Rotation.prototype, "user", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => SetLevel_1.SetLevel),
    (0, typeorm_1.ManyToOne)(() => SetLevel_1.SetLevel, (setLevel) => setLevel.rotations),
    __metadata("design:type", SetLevel_1.SetLevel)
], Rotation.prototype, "setLevel", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Hospital_1.Hospital),
    (0, typeorm_1.ManyToOne)(() => Hospital_1.Hospital, (hospital) => hospital.rotations),
    __metadata("design:type", Hospital_1.Hospital)
], Rotation.prototype, "hospital", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Supervisor_1.Supervisor]),
    (0, typeorm_1.ManyToMany)(() => Supervisor_1.Supervisor, (supervisor) => supervisor.rotations),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Rotation.prototype, "supervisors", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Consult_1.Consult], { nullable: true }),
    (0, typeorm_1.OneToMany)(() => Consult_1.Consult, (consult) => consult.rotationPeriod),
    __metadata("design:type", Array)
], Rotation.prototype, "consults", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Rotation.prototype, "createdAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Rotation.prototype, "updatedAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Rotation.prototype, "deletedAt", void 0);
Rotation = __decorate([
    (0, typeorm_1.Entity)(),
    (0, type_graphql_1.ObjectType)({ description: "The rotation model" })
], Rotation);
exports.Rotation = Rotation;
//# sourceMappingURL=Rotation.js.map