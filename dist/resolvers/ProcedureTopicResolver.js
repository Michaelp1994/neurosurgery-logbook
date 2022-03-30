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
exports.ProcedureTopicResolver = void 0;
const type_graphql_1 = require("type-graphql");
const ProcedureTopic_1 = require("../models/ProcedureTopic");
const UserRole_1 = require("../enums/UserRole");
const data_source_1 = require("../data-source");
const ConsultProcedure_1 = require("../models/ConsultProcedure");
const procedureTopicRepository = data_source_1.dataSource.getRepository(ProcedureTopic_1.ProcedureTopic);
const consultProcedureRepository = data_source_1.dataSource.getRepository(ConsultProcedure_1.ConsultProcedure);
let ProcedureTopicResolver = class ProcedureTopicResolver {
    async totalConsults(procedureTopic, ctx) {
        const totalConsults = await consultProcedureRepository.count({
            where: {
                procedure: {
                    type: {
                        topic: {
                            id: procedureTopic.id,
                        },
                    },
                },
                consult: {
                    userId: ctx.user.id,
                },
            },
        });
        return totalConsults;
    }
    async allProcedureTopics() {
        const procedureTopics = await procedureTopicRepository.find();
        return procedureTopics;
    }
};
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Root)()),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProcedureTopic_1.ProcedureTopic, Object]),
    __metadata("design:returntype", Promise)
], ProcedureTopicResolver.prototype, "totalConsults", null);
__decorate([
    (0, type_graphql_1.Authorized)([UserRole_1.UserRole.USER, UserRole_1.UserRole.ADMIN]),
    (0, type_graphql_1.Query)(() => [ProcedureTopic_1.ProcedureTopic]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProcedureTopicResolver.prototype, "allProcedureTopics", null);
ProcedureTopicResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => ProcedureTopic_1.ProcedureTopic)
], ProcedureTopicResolver);
exports.ProcedureTopicResolver = ProcedureTopicResolver;
//# sourceMappingURL=ProcedureTopicResolver.js.map