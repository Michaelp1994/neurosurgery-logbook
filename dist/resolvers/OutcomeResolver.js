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
exports.OutcomeResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Outcome_1 = require("../models/Outcome");
const UserRole_1 = require("../enums/UserRole");
const data_source_1 = require("../data-source");
const outcomeRepository = data_source_1.dataSource.getRepository(Outcome_1.Outcome);
let OutcomeResolver = class OutcomeResolver {
    async allOutcomes() {
        const outcomes = await outcomeRepository.find();
        return outcomes;
    }
};
__decorate([
    (0, type_graphql_1.Authorized)([UserRole_1.UserRole.USER, UserRole_1.UserRole.ADMIN]),
    (0, type_graphql_1.Query)(() => [Outcome_1.Outcome]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OutcomeResolver.prototype, "allOutcomes", null);
OutcomeResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => Outcome_1.Outcome)
], OutcomeResolver);
exports.OutcomeResolver = OutcomeResolver;
//# sourceMappingURL=OutcomeResolver.js.map