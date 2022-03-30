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
exports.SupervisionLevelResolver = void 0;
const type_graphql_1 = require("type-graphql");
const UserRole_1 = require("../enums/UserRole");
const data_source_1 = require("../data-source");
const SupervisionLevel_1 = require("../models/SupervisionLevel");
const ConsultProcedure_1 = require("../models/ConsultProcedure");
const supervisionLevelRepository = data_source_1.dataSource.getRepository(SupervisionLevel_1.SupervisionLevel);
const consultProcedureRepository = data_source_1.dataSource.getRepository(ConsultProcedure_1.ConsultProcedure);
let SupervisionLevelResolver = class SupervisionLevelResolver {
    async totalConsults(supervisionLevel, ctx) {
        const totalConsults = await consultProcedureRepository.count({
            where: {
                supervisionLevelId: supervisionLevel.id,
                consult: {
                    userId: ctx.user.id,
                },
            },
        });
        return totalConsults;
    }
    async allSupervisionLevels() {
        const supervisionLevels = await supervisionLevelRepository.find();
        return supervisionLevels;
    }
};
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Root)()),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SupervisionLevel_1.SupervisionLevel, Object]),
    __metadata("design:returntype", Promise)
], SupervisionLevelResolver.prototype, "totalConsults", null);
__decorate([
    (0, type_graphql_1.Authorized)([UserRole_1.UserRole.USER, UserRole_1.UserRole.ADMIN]),
    (0, type_graphql_1.Query)(() => [SupervisionLevel_1.SupervisionLevel]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SupervisionLevelResolver.prototype, "allSupervisionLevels", null);
SupervisionLevelResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => SupervisionLevel_1.SupervisionLevel)
], SupervisionLevelResolver);
exports.SupervisionLevelResolver = SupervisionLevelResolver;
//# sourceMappingURL=SupervisionLevelResolver.js.map