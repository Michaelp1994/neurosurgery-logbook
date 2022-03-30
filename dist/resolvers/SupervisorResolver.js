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
exports.SupervisorResolver = void 0;
const type_graphql_1 = require("type-graphql");
const SupervisorInput_1 = require("../inputs/SupervisorInput");
const Supervisor_1 = require("../models/Supervisor");
const UserRole_1 = require("../enums/UserRole");
const Consult_1 = require("../models/Consult");
const data_source_1 = require("../data-source");
const consultRepository = data_source_1.dataSource.getRepository(Consult_1.Consult);
const supervisorRepository = data_source_1.dataSource.getRepository(Supervisor_1.Supervisor);
let SupervisorResolver = class SupervisorResolver {
    async consults(supervisor) {
        const consults = await consultRepository.find({
            where: { supervisorId: supervisor.id },
        });
        return consults;
    }
    async allSupervisors(ctx) {
        const supervisors = await supervisorRepository.find({
            order: {
                id: "ASC",
            },
            where: { userId: ctx.user.id },
        });
        return supervisors;
    }
    async supervisor(input) {
        const supervisor = await supervisorRepository.findOne({
            where: { id: input.id },
        });
        if (!supervisor)
            throw new Error("No Supervisor Found!");
        return supervisor;
    }
    async createSupervisor(input, ctx) {
        const supervisor = supervisorRepository.create(input);
        supervisor.userId = ctx.user.id;
        await supervisorRepository.save(supervisor);
        return supervisor;
    }
    async updateSupervisor(input) {
        const supervisor = await supervisorRepository.findOne({
            where: { id: input.id },
        });
        if (!supervisor)
            throw new Error("Supervisor not found!");
        Object.assign(supervisor, input);
        await supervisorRepository.save(supervisor);
        return supervisor;
    }
    async deleteSupervisor(input) {
        const supervisor = await supervisorRepository.findOne({
            where: { id: input.id },
        });
        if (!supervisor)
            throw new Error("Supervisor not found!");
        await supervisor.remove();
        return supervisor;
    }
};
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Supervisor_1.Supervisor]),
    __metadata("design:returntype", Promise)
], SupervisorResolver.prototype, "consults", null);
__decorate([
    (0, type_graphql_1.Authorized)([UserRole_1.UserRole.USER, UserRole_1.UserRole.ADMIN]),
    (0, type_graphql_1.Query)(() => [Supervisor_1.Supervisor]),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SupervisorResolver.prototype, "allSupervisors", null);
__decorate([
    (0, type_graphql_1.Authorized)([UserRole_1.UserRole.USER, UserRole_1.UserRole.ADMIN]),
    (0, type_graphql_1.Query)(() => Supervisor_1.Supervisor),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SupervisorInput_1.SupervisorInput]),
    __metadata("design:returntype", Promise)
], SupervisorResolver.prototype, "supervisor", null);
__decorate([
    (0, type_graphql_1.Authorized)([UserRole_1.UserRole.USER, UserRole_1.UserRole.ADMIN]),
    (0, type_graphql_1.Mutation)(() => Supervisor_1.Supervisor),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SupervisorInput_1.CreateSupervisorInput, Object]),
    __metadata("design:returntype", Promise)
], SupervisorResolver.prototype, "createSupervisor", null);
__decorate([
    (0, type_graphql_1.Authorized)([UserRole_1.UserRole.USER, UserRole_1.UserRole.ADMIN]),
    (0, type_graphql_1.Mutation)(() => Supervisor_1.Supervisor),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SupervisorInput_1.UpdateSupervisorInput]),
    __metadata("design:returntype", Promise)
], SupervisorResolver.prototype, "updateSupervisor", null);
__decorate([
    (0, type_graphql_1.Authorized)([UserRole_1.UserRole.USER, UserRole_1.UserRole.ADMIN]),
    (0, type_graphql_1.Mutation)(() => Supervisor_1.Supervisor),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SupervisorInput_1.DeleteSupervisorInput]),
    __metadata("design:returntype", Promise)
], SupervisorResolver.prototype, "deleteSupervisor", null);
SupervisorResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => Supervisor_1.Supervisor)
], SupervisorResolver);
exports.SupervisorResolver = SupervisorResolver;
//# sourceMappingURL=SupervisorResolver.js.map