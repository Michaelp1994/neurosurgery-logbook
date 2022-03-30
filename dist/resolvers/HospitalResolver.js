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
exports.HospitalResolver = void 0;
const type_graphql_1 = require("type-graphql");
const HospitalInput_1 = require("../inputs/HospitalInput");
const Hospital_1 = require("../models/Hospital");
const UserRole_1 = require("../enums/UserRole");
const Consult_1 = require("../models/Consult");
const data_source_1 = require("../data-source");
const consultRepository = data_source_1.dataSource.getRepository(Consult_1.Consult);
const hospitalRepository = data_source_1.dataSource.getRepository(Hospital_1.Hospital);
let HospitalResolver = class HospitalResolver {
    async consults(hospital) {
        const consults = await consultRepository.find({
            where: { hospitalId: hospital.id },
        });
        return consults;
    }
    async allHospitals(ctx) {
        const hospitals = await hospitalRepository.find({
            order: {
                id: "ASC",
            },
            where: { userId: ctx.user.id },
        });
        return hospitals;
    }
    async hospital(input) {
        const hospital = await hospitalRepository.findOne({
            where: { id: input.id },
        });
        if (!hospital)
            throw new Error("No Hospital Found!");
        return hospital;
    }
    async createHospital(input, ctx) {
        const hospital = hospitalRepository.create(input);
        hospital.userId = ctx.user.id;
        await hospitalRepository.save(hospital);
        return hospital;
    }
    async updateHospital(input) {
        const hospital = await hospitalRepository.findOne({
            where: { id: input.id },
        });
        if (!hospital)
            throw new Error("Hospital not found!");
        Object.assign(hospital, input);
        await hospitalRepository.save(hospital);
        return hospital;
    }
    async deleteHospital(input) {
        const hospital = await hospitalRepository.findOne({
            where: { id: input.id },
        });
        if (!hospital)
            throw new Error("Hospital not found!");
        await hospital.remove();
        return hospital;
    }
};
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Hospital_1.Hospital]),
    __metadata("design:returntype", Promise)
], HospitalResolver.prototype, "consults", null);
__decorate([
    (0, type_graphql_1.Authorized)([UserRole_1.UserRole.USER, UserRole_1.UserRole.ADMIN]),
    (0, type_graphql_1.Query)(() => [Hospital_1.Hospital]),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HospitalResolver.prototype, "allHospitals", null);
__decorate([
    (0, type_graphql_1.Authorized)([UserRole_1.UserRole.USER, UserRole_1.UserRole.ADMIN]),
    (0, type_graphql_1.Query)(() => Hospital_1.Hospital),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [HospitalInput_1.HospitalInput]),
    __metadata("design:returntype", Promise)
], HospitalResolver.prototype, "hospital", null);
__decorate([
    (0, type_graphql_1.Authorized)([UserRole_1.UserRole.USER, UserRole_1.UserRole.ADMIN]),
    (0, type_graphql_1.Mutation)(() => Hospital_1.Hospital),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [HospitalInput_1.CreateHospitalInput, Object]),
    __metadata("design:returntype", Promise)
], HospitalResolver.prototype, "createHospital", null);
__decorate([
    (0, type_graphql_1.Authorized)([UserRole_1.UserRole.USER, UserRole_1.UserRole.ADMIN]),
    (0, type_graphql_1.Mutation)(() => Hospital_1.Hospital),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [HospitalInput_1.UpdateHospitalInput]),
    __metadata("design:returntype", Promise)
], HospitalResolver.prototype, "updateHospital", null);
__decorate([
    (0, type_graphql_1.Authorized)([UserRole_1.UserRole.USER, UserRole_1.UserRole.ADMIN]),
    (0, type_graphql_1.Mutation)(() => Hospital_1.Hospital),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [HospitalInput_1.DeleteHospitalInput]),
    __metadata("design:returntype", Promise)
], HospitalResolver.prototype, "deleteHospital", null);
HospitalResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => Hospital_1.Hospital)
], HospitalResolver);
exports.HospitalResolver = HospitalResolver;
//# sourceMappingURL=HospitalResolver.js.map