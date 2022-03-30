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
exports.ProcedureResolver = void 0;
const type_graphql_1 = require("type-graphql");
const ProcedureInput_1 = require("../inputs/ProcedureInput");
const Procedure_1 = require("../models/Procedure");
const ProcedureType_1 = require("../models/ProcedureType");
const UserRole_1 = require("../enums/UserRole");
const ConsultProcedure_1 = require("../models/ConsultProcedure");
const data_source_1 = require("../data-source");
const consultProcedureRepository = data_source_1.dataSource.getRepository(ConsultProcedure_1.ConsultProcedure);
const procedureTypeRepository = data_source_1.dataSource.getRepository(ProcedureType_1.ProcedureType);
const procedureRepository = data_source_1.dataSource.getRepository(Procedure_1.Procedure);
let ProcedureResolver = class ProcedureResolver {
    async totalConsults(procedure, ctx) {
        const totalConsults = await consultProcedureRepository.count({
            where: {
                procedureId: procedure.id,
                consult: {
                    userId: ctx.user.id,
                },
            },
        });
        return totalConsults;
    }
    async totalPrimaryConsults(procedure, ctx) {
        const totalConsults = await consultProcedureRepository.count({
            where: {
                procedureId: procedure.id,
                supervisionLevelId: 1,
                consult: {
                    userId: ctx.user.id,
                },
            },
        });
        return totalConsults;
    }
    async totalSecondaryConsults(procedure, ctx) {
        const totalConsults = await consultProcedureRepository.count({
            where: {
                procedureId: procedure.id,
                supervisionLevelId: 2,
                consult: {
                    userId: ctx.user.id,
                },
            },
        });
        return totalConsults;
    }
    async totalAssistantConsults(procedure, ctx) {
        const totalConsults = await consultProcedureRepository.count({
            where: {
                procedureId: procedure.id,
                supervisionLevelId: 3,
                consult: {
                    userId: ctx.user.id,
                },
            },
        });
        return totalConsults;
    }
    async type(procedure) {
        const procedureType = await procedureTypeRepository.findOne({
            where: { id: procedure.typeId },
        });
        if (!procedureType)
            throw new Error("ProcedureType not found!");
        return procedureType;
    }
    async consults(procedure) {
        const procedures = await consultProcedureRepository.find({
            relations: ["consult"],
            where: { procedureId: procedure.id },
        });
        return procedures;
    }
    async allProcedures() {
        const procedures = await procedureRepository.find();
        return procedures;
    }
    async procedure(input) {
        const procedure = await procedureRepository.findOne({
            where: { id: input.id },
        });
        if (!procedure)
            throw new Error("Procedure not found");
        return procedure;
    }
    async createProcedure(input) {
        const procedure = procedureRepository.create(input);
        await procedureRepository.save(procedure);
        return procedure;
    }
    async updateProcedure(input) {
        const procedure = await procedureRepository.findOne({
            where: { id: input.id },
        });
        if (!procedure)
            throw new Error("Procedure not found!");
        Object.assign(procedure, input);
        await procedureRepository.save(procedure);
        return procedure;
    }
    async deleteProcedure(input) {
        const procedure = await procedureRepository.findOne({
            where: { id: input.id },
        });
        if (!procedure)
            throw new Error("Procedure not found!");
        await procedure.remove();
        return procedure;
    }
};
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Root)()),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Procedure_1.Procedure, Object]),
    __metadata("design:returntype", Promise)
], ProcedureResolver.prototype, "totalConsults", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Root)()),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Procedure_1.Procedure, Object]),
    __metadata("design:returntype", Promise)
], ProcedureResolver.prototype, "totalPrimaryConsults", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Root)()),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Procedure_1.Procedure, Object]),
    __metadata("design:returntype", Promise)
], ProcedureResolver.prototype, "totalSecondaryConsults", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Root)()),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Procedure_1.Procedure, Object]),
    __metadata("design:returntype", Promise)
], ProcedureResolver.prototype, "totalAssistantConsults", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Procedure_1.Procedure]),
    __metadata("design:returntype", Promise)
], ProcedureResolver.prototype, "type", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Procedure_1.Procedure]),
    __metadata("design:returntype", Promise)
], ProcedureResolver.prototype, "consults", null);
__decorate([
    (0, type_graphql_1.Authorized)([UserRole_1.UserRole.USER, UserRole_1.UserRole.ADMIN]),
    (0, type_graphql_1.Query)(() => [Procedure_1.Procedure]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProcedureResolver.prototype, "allProcedures", null);
__decorate([
    (0, type_graphql_1.Authorized)([UserRole_1.UserRole.USER, UserRole_1.UserRole.ADMIN]),
    (0, type_graphql_1.Query)(() => Procedure_1.Procedure),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProcedureInput_1.ProcedureInput]),
    __metadata("design:returntype", Promise)
], ProcedureResolver.prototype, "procedure", null);
__decorate([
    (0, type_graphql_1.Authorized)(UserRole_1.UserRole.ADMIN),
    (0, type_graphql_1.Mutation)(() => Procedure_1.Procedure),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProcedureInput_1.CreateProcedureInput]),
    __metadata("design:returntype", Promise)
], ProcedureResolver.prototype, "createProcedure", null);
__decorate([
    (0, type_graphql_1.Authorized)(UserRole_1.UserRole.ADMIN),
    (0, type_graphql_1.Mutation)(() => Procedure_1.Procedure),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProcedureInput_1.UpdateProcedureInput]),
    __metadata("design:returntype", Promise)
], ProcedureResolver.prototype, "updateProcedure", null);
__decorate([
    (0, type_graphql_1.Authorized)(UserRole_1.UserRole.ADMIN),
    (0, type_graphql_1.Mutation)(() => Procedure_1.Procedure),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProcedureInput_1.DeleteProcedureInput]),
    __metadata("design:returntype", Promise)
], ProcedureResolver.prototype, "deleteProcedure", null);
ProcedureResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => Procedure_1.Procedure)
], ProcedureResolver);
exports.ProcedureResolver = ProcedureResolver;
//# sourceMappingURL=ProcedureResolver.js.map