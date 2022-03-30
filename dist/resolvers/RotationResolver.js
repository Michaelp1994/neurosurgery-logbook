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
exports.RotationResolver = void 0;
const type_graphql_1 = require("type-graphql");
const RotationInput_1 = require("../inputs/RotationInput");
const UserRole_1 = require("../enums/UserRole");
const Hospital_1 = require("../models/Hospital");
const Rotation_1 = require("../models/Rotation");
const typeorm_1 = require("typeorm");
const data_source_1 = require("../data-source");
const SetLevel_1 = require("../models/SetLevel");
const rotationRepository = data_source_1.dataSource.getRepository(Rotation_1.Rotation);
const hospitalRepository = data_source_1.dataSource.getRepository(Hospital_1.Hospital);
const setLevelRepository = data_source_1.dataSource.getRepository(SetLevel_1.SetLevel);
let RotationResolver = class RotationResolver {
    async setLevel(rotation) {
        const setLevel = await setLevelRepository.findOne({
            where: { id: rotation.setLevelId },
        });
        if (!setLevel)
            throw new Error("Hospital not found!");
        return setLevel;
    }
    async hospital(rotation) {
        const hospital = await hospitalRepository.findOne({
            where: { id: rotation.hospitalId },
        });
        if (!hospital)
            throw new Error("Hospital not found!");
        return hospital;
    }
    async supervisors(rotation) {
        // TODO: fix this up, unneccesary finding via relation
        const newRotation = await rotationRepository.findOne({
            relations: ["supervisors"],
            where: { id: rotation.id },
        });
        if (!newRotation)
            throw new Error("Consult not found!");
        return newRotation.supervisors;
    }
    async allRotations(ctx) {
        const rotations = await rotationRepository.find({
            order: {
                id: "ASC",
            },
            where: { userId: ctx.user.id },
        });
        return rotations;
    }
    async rotation(input) {
        const rotation = await rotationRepository.findOne({
            where: { id: input.id },
        });
        if (!rotation)
            throw new Error("No Rotation Found!");
        return rotation;
    }
    async currentRotation(ctx) {
        const currentDate = new Date();
        const rotation = await rotationRepository.findOne({
            where: {
                userId: ctx.user.id,
                startDate: (0, typeorm_1.LessThanOrEqual)(currentDate),
                endDate: (0, typeorm_1.MoreThanOrEqual)(currentDate),
            },
        });
        if (!rotation)
            throw new Error("No Rotation Found!");
        return rotation;
    }
    async createRotation(input, ctx) {
        const rotation = rotationRepository.create(input);
        rotation.userId = ctx.user.id;
        if (input.supervisorIds)
            rotation.supervisors = (input.supervisorIds.map((id) => ({ id })));
        await rotationRepository.save(rotation);
        return rotation;
    }
    async updateRotation(input) {
        const rotation = await rotationRepository.findOne({
            where: { id: input.id },
        });
        if (!rotation)
            throw new Error("Rotation not found!");
        Object.assign(rotation, input);
        if (input.supervisorIds)
            rotation.supervisors = (input.supervisorIds.map((id) => ({ id })));
        await rotationRepository.save(rotation);
        return rotation;
    }
    async deleteRotation(input) {
        const rotation = await rotationRepository.findOne({
            where: { id: input.id },
        });
        if (!rotation)
            throw new Error("Rotation not found!");
        await rotation.remove();
        return rotation;
    }
};
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Rotation_1.Rotation]),
    __metadata("design:returntype", Promise)
], RotationResolver.prototype, "setLevel", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Rotation_1.Rotation]),
    __metadata("design:returntype", Promise)
], RotationResolver.prototype, "hospital", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Rotation_1.Rotation]),
    __metadata("design:returntype", Promise)
], RotationResolver.prototype, "supervisors", null);
__decorate([
    (0, type_graphql_1.Authorized)([UserRole_1.UserRole.USER, UserRole_1.UserRole.ADMIN]),
    (0, type_graphql_1.Query)(() => [Rotation_1.Rotation]),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RotationResolver.prototype, "allRotations", null);
__decorate([
    (0, type_graphql_1.Authorized)([UserRole_1.UserRole.USER, UserRole_1.UserRole.ADMIN]),
    (0, type_graphql_1.Query)(() => Rotation_1.Rotation),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RotationInput_1.RotationInput]),
    __metadata("design:returntype", Promise)
], RotationResolver.prototype, "rotation", null);
__decorate([
    (0, type_graphql_1.Authorized)([UserRole_1.UserRole.USER, UserRole_1.UserRole.ADMIN]),
    (0, type_graphql_1.Query)(() => Rotation_1.Rotation),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RotationResolver.prototype, "currentRotation", null);
__decorate([
    (0, type_graphql_1.Authorized)([UserRole_1.UserRole.USER, UserRole_1.UserRole.ADMIN]),
    (0, type_graphql_1.Mutation)(() => Rotation_1.Rotation),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RotationInput_1.CreateRotationInput, Object]),
    __metadata("design:returntype", Promise)
], RotationResolver.prototype, "createRotation", null);
__decorate([
    (0, type_graphql_1.Authorized)([UserRole_1.UserRole.USER, UserRole_1.UserRole.ADMIN]),
    (0, type_graphql_1.Mutation)(() => Rotation_1.Rotation),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RotationInput_1.UpdateRotationInput]),
    __metadata("design:returntype", Promise)
], RotationResolver.prototype, "updateRotation", null);
__decorate([
    (0, type_graphql_1.Authorized)([UserRole_1.UserRole.USER, UserRole_1.UserRole.ADMIN]),
    (0, type_graphql_1.Mutation)(() => Rotation_1.Rotation),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RotationInput_1.DeleteRotationInput]),
    __metadata("design:returntype", Promise)
], RotationResolver.prototype, "deleteRotation", null);
RotationResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => Rotation_1.Rotation)
], RotationResolver);
exports.RotationResolver = RotationResolver;
//# sourceMappingURL=RotationResolver.js.map