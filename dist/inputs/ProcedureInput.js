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
exports.ProcedureInput = exports.DeleteProcedureInput = exports.UpdateProcedureInput = exports.CreateProcedureInput = void 0;
const type_graphql_1 = require("type-graphql");
let CreateProcedureInput = class CreateProcedureInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateProcedureInput.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], CreateProcedureInput.prototype, "typeId", void 0);
CreateProcedureInput = __decorate([
    (0, type_graphql_1.InputType)({ description: "Input for creating procedure by an admin" })
], CreateProcedureInput);
exports.CreateProcedureInput = CreateProcedureInput;
let UpdateProcedureInput = class UpdateProcedureInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], UpdateProcedureInput.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateProcedureInput.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], UpdateProcedureInput.prototype, "typeId", void 0);
UpdateProcedureInput = __decorate([
    (0, type_graphql_1.InputType)({ description: "Input for updating procedure by an admin" })
], UpdateProcedureInput);
exports.UpdateProcedureInput = UpdateProcedureInput;
let DeleteProcedureInput = class DeleteProcedureInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    __metadata("design:type", Number)
], DeleteProcedureInput.prototype, "id", void 0);
DeleteProcedureInput = __decorate([
    (0, type_graphql_1.InputType)({ description: "Input for deleting Procedure" })
], DeleteProcedureInput);
exports.DeleteProcedureInput = DeleteProcedureInput;
let ProcedureInput = class ProcedureInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    __metadata("design:type", Number)
], ProcedureInput.prototype, "id", void 0);
ProcedureInput = __decorate([
    (0, type_graphql_1.InputType)({ description: "Input for viewing Procedure" })
], ProcedureInput);
exports.ProcedureInput = ProcedureInput;
//# sourceMappingURL=ProcedureInput.js.map