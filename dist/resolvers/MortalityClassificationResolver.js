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
exports.MortalityClassificationResolver = void 0;
const type_graphql_1 = require("type-graphql");
const MortalityClassification_1 = require("../models/MortalityClassification");
const UserRole_1 = require("../enums/UserRole");
const data_source_1 = require("../data-source");
const mortalityClassificationRepository = data_source_1.dataSource.getRepository(MortalityClassification_1.MortalityClassification);
let MortalityClassificationResolver = class MortalityClassificationResolver {
    async allMortalityClassifications() {
        const mortalityClassifications = await mortalityClassificationRepository.find();
        return mortalityClassifications;
    }
};
__decorate([
    (0, type_graphql_1.Authorized)([UserRole_1.UserRole.USER, UserRole_1.UserRole.ADMIN]),
    (0, type_graphql_1.Query)(() => [MortalityClassification_1.MortalityClassification]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MortalityClassificationResolver.prototype, "allMortalityClassifications", null);
MortalityClassificationResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => MortalityClassification_1.MortalityClassification)
], MortalityClassificationResolver);
exports.MortalityClassificationResolver = MortalityClassificationResolver;
//# sourceMappingURL=MortalityClassificationResolver.js.map