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
exports.FundingTypeResolver = void 0;
const type_graphql_1 = require("type-graphql");
const FundingType_1 = require("../models/FundingType");
const UserRole_1 = require("../enums/UserRole");
const data_source_1 = require("../data-source");
const Consult_1 = require("../models/Consult");
const fundingTypeRepository = data_source_1.dataSource.getRepository(FundingType_1.FundingType);
const consultRepository = data_source_1.dataSource.getRepository(Consult_1.Consult);
let FundingTypeResolver = class FundingTypeResolver {
    async allFundingTypes() {
        const fundingTypes = await fundingTypeRepository.find();
        return fundingTypes;
    }
    async totalConsults(fundingType, ctx) {
        const totalConsults = await consultRepository.count({
            where: {
                fundingTypeId: fundingType.id,
                userId: ctx.user.id,
            },
        });
        return totalConsults;
        // SELECT "funding_type"."name", "funding_type"."id", COUNT(*)
        // FROM funding_type
        // LEFT JOIN consult ON "funding_type"."id" = "consult"."fundingTypeId"
        // WHERE "consult"."userId" = 1
        // GROUP BY "funding_type"."id";
        // const fundingType = await fundingTypeRepository.findOne({
        //     where: { id: consult.fundingTypeId },
        // });
        // if (!fundingType) throw new Error("fundingType not found!");
        // return fundingType;
    }
};
__decorate([
    (0, type_graphql_1.Authorized)([UserRole_1.UserRole.USER, UserRole_1.UserRole.ADMIN]),
    (0, type_graphql_1.Query)(() => [FundingType_1.FundingType]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FundingTypeResolver.prototype, "allFundingTypes", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Root)()),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FundingType_1.FundingType, Object]),
    __metadata("design:returntype", Promise)
], FundingTypeResolver.prototype, "totalConsults", null);
FundingTypeResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => FundingType_1.FundingType)
], FundingTypeResolver);
exports.FundingTypeResolver = FundingTypeResolver;
//# sourceMappingURL=FundingTypeResolver.js.map