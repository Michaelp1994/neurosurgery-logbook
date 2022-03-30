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
exports.HospitalInput = exports.DeleteHospitalInput = exports.UpdateHospitalInput = exports.CreateHospitalInput = void 0;
const type_graphql_1 = require("type-graphql");
let CreateHospitalInput = class CreateHospitalInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateHospitalInput.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateHospitalInput.prototype, "urnMask", void 0);
CreateHospitalInput = __decorate([
    (0, type_graphql_1.InputType)({ description: "Input for creating supervisor type" })
], CreateHospitalInput);
exports.CreateHospitalInput = CreateHospitalInput;
let UpdateHospitalInput = class UpdateHospitalInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], UpdateHospitalInput.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateHospitalInput.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateHospitalInput.prototype, "urnMask", void 0);
UpdateHospitalInput = __decorate([
    (0, type_graphql_1.InputType)({ description: "Input for updating a supervisor" })
], UpdateHospitalInput);
exports.UpdateHospitalInput = UpdateHospitalInput;
let DeleteHospitalInput = class DeleteHospitalInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    __metadata("design:type", Number)
], DeleteHospitalInput.prototype, "id", void 0);
DeleteHospitalInput = __decorate([
    (0, type_graphql_1.InputType)({ description: "Input for deleting a supervisor" })
], DeleteHospitalInput);
exports.DeleteHospitalInput = DeleteHospitalInput;
let HospitalInput = class HospitalInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    __metadata("design:type", Number)
], HospitalInput.prototype, "id", void 0);
HospitalInput = __decorate([
    (0, type_graphql_1.InputType)({ description: "Input for viewing a supervisor" })
], HospitalInput);
exports.HospitalInput = HospitalInput;
//# sourceMappingURL=HospitalInput.js.map