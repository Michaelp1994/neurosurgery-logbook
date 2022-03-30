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
exports.SupervisorInput = exports.DeleteSupervisorInput = exports.UpdateSupervisorInput = exports.CreateSupervisorInput = void 0;
const type_graphql_1 = require("type-graphql");
let CreateSupervisorInput = class CreateSupervisorInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateSupervisorInput.prototype, "name", void 0);
CreateSupervisorInput = __decorate([
    (0, type_graphql_1.InputType)({ description: "Input for creating supervisor type" })
], CreateSupervisorInput);
exports.CreateSupervisorInput = CreateSupervisorInput;
let UpdateSupervisorInput = class UpdateSupervisorInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], UpdateSupervisorInput.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateSupervisorInput.prototype, "name", void 0);
UpdateSupervisorInput = __decorate([
    (0, type_graphql_1.InputType)({ description: "Input for updating a supervisor" })
], UpdateSupervisorInput);
exports.UpdateSupervisorInput = UpdateSupervisorInput;
let DeleteSupervisorInput = class DeleteSupervisorInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    __metadata("design:type", Number)
], DeleteSupervisorInput.prototype, "id", void 0);
DeleteSupervisorInput = __decorate([
    (0, type_graphql_1.InputType)({ description: "Input for deleting a supervisor" })
], DeleteSupervisorInput);
exports.DeleteSupervisorInput = DeleteSupervisorInput;
let SupervisorInput = class SupervisorInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    __metadata("design:type", Number)
], SupervisorInput.prototype, "id", void 0);
SupervisorInput = __decorate([
    (0, type_graphql_1.InputType)({ description: "Input for viewing a supervisor" })
], SupervisorInput);
exports.SupervisorInput = SupervisorInput;
//# sourceMappingURL=SupervisorInput.js.map