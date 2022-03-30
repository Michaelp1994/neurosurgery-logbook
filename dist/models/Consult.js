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
exports.Statistics = exports.RecognisedText = exports.Consult = exports.CaseDuration = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const User_1 = require("./User");
const ConsultProcedure_1 = require("./ConsultProcedure");
const graphql_scalars_1 = require("graphql-scalars");
const luxon_1 = require("luxon");
const Hospital_1 = require("./Hospital");
const Supervisor_1 = require("./Supervisor");
const Rotation_1 = require("./Rotation");
// import { SetLevel } from "../enums/ConsultDetails";
const SetLevel_1 = require("./SetLevel");
const AsaGrade_1 = require("./AsaGrade");
const Ethnicity_1 = require("./Ethnicity");
const FundingType_1 = require("./FundingType");
const ReturnToTheatre_1 = require("./ReturnToTheatre");
const TypeOfAnaesthetic_1 = require("./TypeOfAnaesthetic");
const UnplannedIcu_1 = require("./UnplannedIcu");
const UnplannedReadmission_1 = require("./UnplannedReadmission");
const WoundInfectionRisk_1 = require("./WoundInfectionRisk");
const AdmissionCategory_1 = require("./AdmissionCategory");
const MortalityClassification_1 = require("./MortalityClassification");
const Outcome_1 = require("./Outcome");
let CaseDuration = class CaseDuration extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], CaseDuration.prototype, "hours", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], CaseDuration.prototype, "minutes", void 0);
CaseDuration = __decorate([
    (0, type_graphql_1.ObjectType)({ description: "Procedure Duration" })
], CaseDuration);
exports.CaseDuration = CaseDuration;
let Consult = class Consult extends typeorm_1.BaseEntity {
    // Computed Properties
    patientAge() {
        if (!this.dateOfBirth || !this.procedureDate)
            return null;
        //const endTime = DateTime.now();
        const endTime = luxon_1.DateTime.fromJSDate(this.procedureDate);
        const startTime = luxon_1.DateTime.fromJSDate(this.dateOfBirth);
        const difference = endTime
            .diff(startTime, ["years", "months"])
            .toObject().years;
        if (!difference)
            return null;
        return difference;
    }
    procedureDuration() {
        if (!this.endTime || !this.startTime)
            return { hours: 0, minutes: 0 };
        const endTime = luxon_1.DateTime.fromISO(this.endTime);
        const startTime = luxon_1.DateTime.fromISO(this.startTime);
        const { hours, minutes } = endTime
            .diff(startTime, ["hours", "minutes"])
            .toObject();
        if (typeof hours === "undefined" || typeof minutes === "undefined")
            throw Error;
        return { hours: Math.abs(hours), minutes: Math.abs(minutes) };
    }
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Consult.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Consult.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Consult.prototype, "urn", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Consult.prototype, "setLevelId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Consult.prototype, "rotationPeriodId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Consult.prototype, "userId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Consult.prototype, "hospitalId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Consult.prototype, "supervisorId", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Consult.prototype, "procedureDate", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => graphql_scalars_1.LocalTimeResolver, { nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Consult.prototype, "startTime", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => graphql_scalars_1.LocalTimeResolver, { nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Consult.prototype, "endTime", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Consult.prototype, "gender", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Consult.prototype, "prophylaxis", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Consult.prototype, "dateOfBirth", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Consult.prototype, "admissionDate", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Consult.prototype, "diagnosisDate", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Consult.prototype, "dischargeDate", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Consult.prototype, "recurrenceDate", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Consult.prototype, "isCompleted", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Consult.prototype, "admissionCategoryId", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Consult.prototype, "ethnicityId", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Consult.prototype, "unplannedReadmissionId", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Consult.prototype, "fundingTypeId", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Consult.prototype, "asaGradeId", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Consult.prototype, "outcomeId", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Consult.prototype, "mortalityClassificationId", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Consult.prototype, "woundInfectionRiskId", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Consult.prototype, "typeOfAnaestheticId", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Consult.prototype, "unplannedIcuId", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Consult.prototype, "returnToTheatreId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Outcome_1.Outcome, { nullable: true }),
    (0, typeorm_1.ManyToOne)(() => Outcome_1.Outcome, (outcome) => outcome.consults),
    __metadata("design:type", Outcome_1.Outcome)
], Consult.prototype, "outcome", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => MortalityClassification_1.MortalityClassification, { nullable: true }),
    (0, typeorm_1.ManyToOne)(() => MortalityClassification_1.MortalityClassification, (mortalityClassification) => mortalityClassification.consults),
    __metadata("design:type", MortalityClassification_1.MortalityClassification)
], Consult.prototype, "mortalityClassification", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Ethnicity_1.Ethnicity, { nullable: true }),
    (0, typeorm_1.ManyToOne)(() => Ethnicity_1.Ethnicity, (ethnicity) => ethnicity.consults),
    __metadata("design:type", Ethnicity_1.Ethnicity)
], Consult.prototype, "ethnicity", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => AdmissionCategory_1.AdmissionCategory, { nullable: true }),
    (0, typeorm_1.ManyToOne)(() => AdmissionCategory_1.AdmissionCategory, (admissionCategory) => admissionCategory.consults),
    __metadata("design:type", AdmissionCategory_1.AdmissionCategory)
], Consult.prototype, "admissionCategory", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => UnplannedReadmission_1.UnplannedReadmission, { nullable: true }),
    (0, typeorm_1.ManyToOne)(() => UnplannedReadmission_1.UnplannedReadmission, (unplannedReadmission) => unplannedReadmission.consults),
    __metadata("design:type", UnplannedReadmission_1.UnplannedReadmission)
], Consult.prototype, "unplannedReadmission", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => FundingType_1.FundingType, { nullable: true }),
    (0, typeorm_1.ManyToOne)(() => FundingType_1.FundingType, (fundingType) => fundingType.consults),
    __metadata("design:type", FundingType_1.FundingType)
], Consult.prototype, "fundingType", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => AsaGrade_1.AsaGrade, { nullable: true }),
    (0, typeorm_1.ManyToOne)(() => AsaGrade_1.AsaGrade, (asaGrade) => asaGrade.consults),
    __metadata("design:type", AsaGrade_1.AsaGrade)
], Consult.prototype, "asaGrade", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => WoundInfectionRisk_1.WoundInfectionRisk, { nullable: true }),
    (0, typeorm_1.ManyToOne)(() => WoundInfectionRisk_1.WoundInfectionRisk, (woundInfectionRisk) => woundInfectionRisk.consults),
    __metadata("design:type", WoundInfectionRisk_1.WoundInfectionRisk)
], Consult.prototype, "woundInfectionRisk", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => TypeOfAnaesthetic_1.TypeOfAnaesthetic, { nullable: true }),
    (0, typeorm_1.ManyToOne)(() => TypeOfAnaesthetic_1.TypeOfAnaesthetic, (typeOfAnaesthetic) => typeOfAnaesthetic.consults),
    __metadata("design:type", TypeOfAnaesthetic_1.TypeOfAnaesthetic)
], Consult.prototype, "typeOfAnaesthetic", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => UnplannedIcu_1.UnplannedIcu, { nullable: true }),
    (0, typeorm_1.ManyToOne)(() => UnplannedIcu_1.UnplannedIcu, (unplannedIcu) => unplannedIcu.consults),
    __metadata("design:type", UnplannedIcu_1.UnplannedIcu)
], Consult.prototype, "unplannedIcu", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => ReturnToTheatre_1.ReturnToTheatre, { nullable: true }),
    (0, typeorm_1.ManyToOne)(() => ReturnToTheatre_1.ReturnToTheatre, (returnToTheatre) => returnToTheatre.consults),
    __metadata("design:type", ReturnToTheatre_1.ReturnToTheatre)
], Consult.prototype, "returnToTheatre", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Consult.prototype, "preManagementDiagnosis", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Consult.prototype, "recognisedCoMorbidities", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Consult.prototype, "finalDiagnosis", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Consult.prototype, "pathologicalDiagnoses", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Consult.prototype, "discussedAtMdm", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Consult.prototype, "comments", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => SetLevel_1.SetLevel),
    (0, typeorm_1.ManyToOne)(() => SetLevel_1.SetLevel, (setLevel) => setLevel.consults),
    __metadata("design:type", SetLevel_1.SetLevel)
], Consult.prototype, "setLevel", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Rotation_1.Rotation),
    (0, typeorm_1.ManyToOne)(() => Rotation_1.Rotation, (rotation) => rotation.consults),
    __metadata("design:type", Rotation_1.Rotation)
], Consult.prototype, "rotationPeriod", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [ConsultProcedure_1.ConsultProcedure]),
    (0, typeorm_1.OneToMany)(() => ConsultProcedure_1.ConsultProcedure, (consultProcedure) => consultProcedure.consult),
    __metadata("design:type", Array)
], Consult.prototype, "procedures", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => User_1.User),
    (0, typeorm_1.ManyToOne)(() => User_1.User, (user) => user.consults),
    __metadata("design:type", User_1.User)
], Consult.prototype, "user", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Hospital_1.Hospital, { nullable: true }),
    (0, typeorm_1.ManyToOne)(() => Hospital_1.Hospital, (hospital) => hospital.consults),
    __metadata("design:type", Hospital_1.Hospital)
], Consult.prototype, "hospital", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Supervisor_1.Supervisor, { nullable: true }),
    (0, typeorm_1.ManyToOne)(() => Supervisor_1.Supervisor, (supervisor) => supervisor.consults),
    __metadata("design:type", Supervisor_1.Supervisor)
], Consult.prototype, "supervisor", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], Consult.prototype, "patientAge", null);
__decorate([
    (0, type_graphql_1.Field)(() => CaseDuration, { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Consult.prototype, "procedureDuration", null);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Consult.prototype, "createdAt", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Consult.prototype, "updatedAt", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Consult.prototype, "deletedAt", void 0);
Consult = __decorate([
    (0, typeorm_1.Entity)(),
    (0, type_graphql_1.ObjectType)({ description: "The consult/case model" })
], Consult);
exports.Consult = Consult;
let RecognisedText = class RecognisedText {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], RecognisedText.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], RecognisedText.prototype, "urn", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], RecognisedText.prototype, "dateOfBirth", void 0);
RecognisedText = __decorate([
    (0, type_graphql_1.ObjectType)({ description: "OCR Result for Patient Label" })
], RecognisedText);
exports.RecognisedText = RecognisedText;
let Statistics = class Statistics {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], Statistics.prototype, "totalConsults", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], Statistics.prototype, "spinal", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], Statistics.prototype, "cranial", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], Statistics.prototype, "peripheralNerveSurgery", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], Statistics.prototype, "primary", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], Statistics.prototype, "secondary", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], Statistics.prototype, "assistant", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], Statistics.prototype, "publicFunded", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], Statistics.prototype, "privateFunded", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Number], { nullable: true }),
    __metadata("design:type", Array)
], Statistics.prototype, "procedureTypeArray", void 0);
Statistics = __decorate([
    (0, type_graphql_1.ObjectType)({ description: "OCR Result for Patient Label" })
], Statistics);
exports.Statistics = Statistics;
//# sourceMappingURL=Consult.js.map