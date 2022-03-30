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
exports.RotationInput = exports.DeleteRotationInput = exports.UpdateRotationInput = exports.CreateRotationInput = void 0;
const type_graphql_1 = require("type-graphql");
let CreateRotationInput = class CreateRotationInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateRotationInput.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Date)
], CreateRotationInput.prototype, "startDate", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Date)
], CreateRotationInput.prototype, "endDate", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], CreateRotationInput.prototype, "setLevelId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Number], { nullable: true }),
    __metadata("design:type", Array)
], CreateRotationInput.prototype, "supervisorIds", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], CreateRotationInput.prototype, "hospitalId", void 0);
CreateRotationInput = __decorate([
    (0, type_graphql_1.InputType)({ description: "Input for creating Rotation type" })
], CreateRotationInput);
exports.CreateRotationInput = CreateRotationInput;
let UpdateRotationInput = class UpdateRotationInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], UpdateRotationInput.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateRotationInput.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], UpdateRotationInput.prototype, "startDate", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], UpdateRotationInput.prototype, "endDate", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], UpdateRotationInput.prototype, "setLevelId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Number], { nullable: true }),
    __metadata("design:type", Array)
], UpdateRotationInput.prototype, "supervisorIds", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], UpdateRotationInput.prototype, "hospitalId", void 0);
UpdateRotationInput = __decorate([
    (0, type_graphql_1.InputType)({ description: "Input for updating a Rotation" })
], UpdateRotationInput);
exports.UpdateRotationInput = UpdateRotationInput;
let DeleteRotationInput = class DeleteRotationInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    __metadata("design:type", Number)
], DeleteRotationInput.prototype, "id", void 0);
DeleteRotationInput = __decorate([
    (0, type_graphql_1.InputType)({ description: "Input for deleting a Rotation" })
], DeleteRotationInput);
exports.DeleteRotationInput = DeleteRotationInput;
let RotationInput = class RotationInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    __metadata("design:type", Number)
], RotationInput.prototype, "id", void 0);
RotationInput = __decorate([
    (0, type_graphql_1.InputType)({ description: "Input for viewing a Rotation" })
], RotationInput);
exports.RotationInput = RotationInput;
//# sourceMappingURL=RotationInput.js.map