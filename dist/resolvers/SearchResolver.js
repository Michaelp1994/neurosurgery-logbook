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
exports.SearchResolver = void 0;
const type_graphql_1 = require("type-graphql");
const SearchInput_1 = require("../inputs/SearchInput");
const data_source_1 = require("../data-source");
const Consult_1 = require("../models/Consult");
const UserRole_1 = require("../enums/UserRole");
const consultRepository = data_source_1.dataSource.getRepository(Consult_1.Consult);
class SearchResolver {
    async search(input) {
        const searchTerm = "%" + input.search.trim().toLocaleLowerCase() + "%";
        const results = await consultRepository
            .createQueryBuilder("consult")
            .where("LOWER(consult.name) LIKE :searchTerm")
            .orWhere("consult.urn LIKE :searchTerm")
            .limit(10)
            .setParameter("searchTerm", searchTerm)
            .getMany();
        // const results = await consultRepository.find({
        //     where: [
        //         { name: Like(`%${searchTerm}%`) },
        //         { urn: Like(`%${searchTerm}%`) },
        //     ],
        //     take: 10,
        // });
        return results;
    }
}
__decorate([
    (0, type_graphql_1.Authorized)([UserRole_1.UserRole.USER, UserRole_1.UserRole.ADMIN]),
    (0, type_graphql_1.Query)(() => [Consult_1.Consult]),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SearchInput_1.SearchInput]),
    __metadata("design:returntype", Promise)
], SearchResolver.prototype, "search", null);
exports.SearchResolver = SearchResolver;
//# sourceMappingURL=SearchResolver.js.map