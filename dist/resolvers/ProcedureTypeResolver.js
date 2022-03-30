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
exports.ProcedureTypeResolver = void 0;
const type_graphql_1 = require("type-graphql");
const ProcedureTypeInput_1 = require("../inputs/ProcedureTypeInput");
const Procedure_1 = require("../models/Procedure");
const ProcedureType_1 = require("../models/ProcedureType");
const UserRole_1 = require("../enums/UserRole");
const data_source_1 = require("../data-source");
const ConsultProcedure_1 = require("../models/ConsultProcedure");
const procedureTypeRepository = data_source_1.dataSource.getRepository(ProcedureType_1.ProcedureType);
const procedureRepository = data_source_1.dataSource.getRepository(Procedure_1.Procedure);
const consultProcedureRepository = data_source_1.dataSource.getRepository(ConsultProcedure_1.ConsultProcedure);
let ProcedureTypeResolver = class ProcedureTypeResolver {
    async totalConsults(procedureType, ctx) {
        const totalConsults = await consultProcedureRepository.count({
            where: {
                procedure: {
                    typeId: procedureType.id,
                },
                consult: {
                    userId: ctx.user.id,
                },
            },
        });
        return totalConsults;
    }
    async procedures(procedureType) {
        const procedures = await procedureRepository.find({
            where: { typeId: procedureType.id },
        });
        if (!procedures)
            throw new Error("User not found!");
        return procedures;
    }
    async allProcedureTypes() {
        const procedureTypes = await procedureTypeRepository.find();
        return procedureTypes;
    }
    async createProcedureType(input) {
        const procedureType = procedureTypeRepository.create(input);
        await procedureTypeRepository.save(procedureType);
        return procedureType;
    }
    async updateProcedureType(input) {
        const procedureType = await procedureTypeRepository.findOne({
            where: { id: input.id },
        });
        if (!procedureType)
            throw new Error("ProcedureType not found!");
        Object.assign(procedureType, input);
        await procedureTypeRepository.save(procedureType);
        return procedureType;
    }
    async deleteProcedureType(input) {
        const procedureType = await procedureTypeRepository.findOne({
            where: { id: input.id },
        });
        if (!procedureType)
            throw new Error("ProcedureType not found!");
        await procedureType.remove();
        return procedureType;
    }
};
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Root)()),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProcedureType_1.ProcedureType, Object]),
    __metadata("design:returntype", Promise)
], ProcedureTypeResolver.prototype, "totalConsults", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProcedureType_1.ProcedureType]),
    __metadata("design:returntype", Promise)
], ProcedureTypeResolver.prototype, "procedures", null);
__decorate([
    (0, type_graphql_1.Authorized)([UserRole_1.UserRole.USER, UserRole_1.UserRole.ADMIN]),
    (0, type_graphql_1.Query)(() => [ProcedureType_1.ProcedureType]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProcedureTypeResolver.prototype, "allProcedureTypes", null);
__decorate([
    (0, type_graphql_1.Authorized)(UserRole_1.UserRole.ADMIN),
    (0, type_graphql_1.Mutation)(() => ProcedureType_1.ProcedureType),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProcedureTypeInput_1.CreateProcedureTypeInput]),
    __metadata("design:returntype", Promise)
], ProcedureTypeResolver.prototype, "createProcedureType", null);
__decorate([
    (0, type_graphql_1.Authorized)(UserRole_1.UserRole.ADMIN),
    (0, type_graphql_1.Mutation)(() => ProcedureType_1.ProcedureType),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProcedureTypeInput_1.UpdateProcedureTypeInput]),
    __metadata("design:returntype", Promise)
], ProcedureTypeResolver.prototype, "updateProcedureType", null);
__decorate([
    (0, type_graphql_1.Authorized)(UserRole_1.UserRole.ADMIN),
    (0, type_graphql_1.Mutation)(() => ProcedureType_1.ProcedureType),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProcedureTypeInput_1.DeleteProcedureTypeInput]),
    __metadata("design:returntype", Promise)
], ProcedureTypeResolver.prototype, "deleteProcedureType", null);
ProcedureTypeResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => ProcedureType_1.ProcedureType)
], ProcedureTypeResolver);
exports.ProcedureTypeResolver = ProcedureTypeResolver;
//# sourceMappingURL=ProcedureTypeResolver.js.map