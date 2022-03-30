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
exports.ImageUploadInput = exports.ConsultInput = exports.DeleteConsultInput = exports.UpdateConsultInput = exports.CreateConsultInput = exports.ConsultProcedureInput = void 0;
const type_graphql_1 = require("type-graphql");
const graphql_upload_1 = require("graphql-upload");
let ConsultProcedureInput = class ConsultProcedureInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], ConsultProcedureInput.prototype, "procedureId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], ConsultProcedureInput.prototype, "supervisionLevelId", void 0);
ConsultProcedureInput = __decorate([
    (0, type_graphql_1.InputType)({ description: "Input for adding a procedure to a consult" })
], ConsultProcedureInput);
exports.ConsultProcedureInput = ConsultProcedureInput;
let CreateConsultInput = class CreateConsultInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateConsultInput.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateConsultInput.prototype, "urn", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [ConsultProcedureInput], { nullable: true }),
    __metadata("design:type", Array)
], CreateConsultInput.prototype, "selectedProcedures", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], CreateConsultInput.prototype, "hospitalId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], CreateConsultInput.prototype, "rotationPeriodId", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], CreateConsultInput.prototype, "setLevelId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Date)
], CreateConsultInput.prototype, "procedureDate", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], CreateConsultInput.prototype, "supervisorId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Date)
], CreateConsultInput.prototype, "dateOfBirth", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateConsultInput.prototype, "startTime", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateConsultInput.prototype, "endTime", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateConsultInput.prototype, "gender", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], CreateConsultInput.prototype, "admissionCategoryId", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], CreateConsultInput.prototype, "ethnicityId", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], CreateConsultInput.prototype, "unplannedReadmissionId", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], CreateConsultInput.prototype, "fundingTypeId", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], CreateConsultInput.prototype, "asaGradeId", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], CreateConsultInput.prototype, "woundInfectionRiskId", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], CreateConsultInput.prototype, "typeOfAnaestheticId", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], CreateConsultInput.prototype, "unplannedIcuId", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], CreateConsultInput.prototype, "returnToTheatreId", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], CreateConsultInput.prototype, "admissionDate", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], CreateConsultInput.prototype, "diagnosisDate", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateConsultInput.prototype, "preManagementDiagnosis", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateConsultInput.prototype, "recognisedCoMorbidities", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateConsultInput.prototype, "prophylaxis", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateConsultInput.prototype, "finalDiagnosis", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateConsultInput.prototype, "pathologicalDiagnoses", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], CreateConsultInput.prototype, "dischargeDate", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], CreateConsultInput.prototype, "outcomeId", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], CreateConsultInput.prototype, "mortalityClassificationId", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], CreateConsultInput.prototype, "recurrenceDate", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], CreateConsultInput.prototype, "discussedAtMdm", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateConsultInput.prototype, "comments", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Boolean)
], CreateConsultInput.prototype, "isCompleted", void 0);
CreateConsultInput = __decorate([
    (0, type_graphql_1.InputType)({ description: "Input for creating consult by a user" })
], CreateConsultInput);
exports.CreateConsultInput = CreateConsultInput;
let UpdateConsultInput = class UpdateConsultInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], UpdateConsultInput.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateConsultInput.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateConsultInput.prototype, "urn", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [ConsultProcedureInput], { nullable: true }),
    __metadata("design:type", Array)
], UpdateConsultInput.prototype, "selectedProcedures", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], UpdateConsultInput.prototype, "hospitalId", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], UpdateConsultInput.prototype, "rotationPeriodId", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], UpdateConsultInput.prototype, "setLevelId", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], UpdateConsultInput.prototype, "procedureDate", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], UpdateConsultInput.prototype, "supervisorId", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], UpdateConsultInput.prototype, "dateOfBirth", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateConsultInput.prototype, "startTime", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateConsultInput.prototype, "endTime", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateConsultInput.prototype, "gender", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], UpdateConsultInput.prototype, "admissionDate", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], UpdateConsultInput.prototype, "admissionCategoryId", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], UpdateConsultInput.prototype, "ethnicityId", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], UpdateConsultInput.prototype, "unplannedReadmissionId", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], UpdateConsultInput.prototype, "fundingTypeId", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], UpdateConsultInput.prototype, "asaGradeId", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], UpdateConsultInput.prototype, "woundInfectionRiskId", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], UpdateConsultInput.prototype, "typeOfAnaestheticId", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], UpdateConsultInput.prototype, "unplannedIcuId", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], UpdateConsultInput.prototype, "returnToTheatreId", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], UpdateConsultInput.prototype, "diagnosisDate", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateConsultInput.prototype, "preManagementDiagnosis", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateConsultInput.prototype, "recognisedCoMorbidities", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateConsultInput.prototype, "prophylaxis", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateConsultInput.prototype, "finalDiagnosis", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateConsultInput.prototype, "pathologicalDiagnoses", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], UpdateConsultInput.prototype, "dischargeDate", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], UpdateConsultInput.prototype, "outcomeId", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], UpdateConsultInput.prototype, "mortalityClassificationId", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], UpdateConsultInput.prototype, "recurrenceDate", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], UpdateConsultInput.prototype, "discussedAtMdm", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateConsultInput.prototype, "comments", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], UpdateConsultInput.prototype, "isCompleted", void 0);
UpdateConsultInput = __decorate([
    (0, type_graphql_1.InputType)({ description: "Input for updating consult" })
], UpdateConsultInput);
exports.UpdateConsultInput = UpdateConsultInput;
let DeleteConsultInput = class DeleteConsultInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    __metadata("design:type", Number)
], DeleteConsultInput.prototype, "id", void 0);
DeleteConsultInput = __decorate([
    (0, type_graphql_1.InputType)({ description: "Input for deleting consult" })
], DeleteConsultInput);
exports.DeleteConsultInput = DeleteConsultInput;
let ConsultInput = class ConsultInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    __metadata("design:type", Number)
], ConsultInput.prototype, "id", void 0);
ConsultInput = __decorate([
    (0, type_graphql_1.InputType)({ description: "Input for reading consult" })
], ConsultInput);
exports.ConsultInput = ConsultInput;
let ImageUploadInput = class ImageUploadInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => graphql_upload_1.GraphQLUpload),
    __metadata("design:type", Object)
], ImageUploadInput.prototype, "file", void 0);
ImageUploadInput = __decorate([
    (0, type_graphql_1.InputType)({ description: "Input for OCR patient label detection" })
], ImageUploadInput);
exports.ImageUploadInput = ImageUploadInput;
//# sourceMappingURL=ConsultInput.js.map