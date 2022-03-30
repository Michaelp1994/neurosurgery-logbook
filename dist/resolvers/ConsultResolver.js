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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultResolver = void 0;
const type_graphql_1 = require("type-graphql");
const ConsultInput_1 = require("../inputs/ConsultInput");
const Consult_1 = require("../models/Consult");
const User_1 = require("../models/User");
const UserRole_1 = require("../enums/UserRole");
const node_tesseract_ocr_1 = __importDefault(require("node-tesseract-ocr"));
const fs_1 = __importDefault(require("fs"));
const Hospital_1 = require("../models/Hospital");
const Supervisor_1 = require("../models/Supervisor");
const ConsultProcedure_1 = require("../models/ConsultProcedure");
const Rotation_1 = require("../models/Rotation");
const data_source_1 = require("../data-source");
const AdmissionCategory_1 = require("../models/AdmissionCategory");
const AsaGrade_1 = require("../models/AsaGrade");
const Ethnicity_1 = require("../models/Ethnicity");
const FundingType_1 = require("../models/FundingType");
const ReturnToTheatre_1 = require("../models/ReturnToTheatre");
const TypeOfAnaesthetic_1 = require("../models/TypeOfAnaesthetic");
const UnplannedIcu_1 = require("../models/UnplannedIcu");
const WoundInfectionRisk_1 = require("../models/WoundInfectionRisk");
const Outcome_1 = require("../models/Outcome");
const UnplannedReadmission_1 = require("../models/UnplannedReadmission");
const MortalityClassification_1 = require("../models/MortalityClassification");
const SetLevel_1 = require("../models/SetLevel");
const Procedure_1 = require("../models/Procedure");
const consultRepository = data_source_1.dataSource.getRepository(Consult_1.Consult);
const userRepository = data_source_1.dataSource.getRepository(User_1.User);
const rotationRepository = data_source_1.dataSource.getRepository(Rotation_1.Rotation);
const hospitalRepository = data_source_1.dataSource.getRepository(Hospital_1.Hospital);
const supervisorRepository = data_source_1.dataSource.getRepository(Supervisor_1.Supervisor);
const admissionCategoryRepository = data_source_1.dataSource.getRepository(AdmissionCategory_1.AdmissionCategory);
const fundingTypeRepository = data_source_1.dataSource.getRepository(FundingType_1.FundingType);
const asaGradeRepository = data_source_1.dataSource.getRepository(AsaGrade_1.AsaGrade);
const woundInfectionRiskRepository = data_source_1.dataSource.getRepository(WoundInfectionRisk_1.WoundInfectionRisk);
const typeOfAnaestheticRepository = data_source_1.dataSource.getRepository(TypeOfAnaesthetic_1.TypeOfAnaesthetic);
const unplannedIcuRepository = data_source_1.dataSource.getRepository(UnplannedIcu_1.UnplannedIcu);
const returnToTheatreRepository = data_source_1.dataSource.getRepository(ReturnToTheatre_1.ReturnToTheatre);
const outcomeRepository = data_source_1.dataSource.getRepository(Outcome_1.Outcome);
const ethnicityRepository = data_source_1.dataSource.getRepository(Ethnicity_1.Ethnicity);
const consultProcedureRepository = data_source_1.dataSource.getRepository(ConsultProcedure_1.ConsultProcedure);
const setLevelRepository = data_source_1.dataSource.getRepository(SetLevel_1.SetLevel);
const procedureRepository = data_source_1.dataSource.getRepository(Procedure_1.Procedure);
const unplannedReadmissionRepository = data_source_1.dataSource.getRepository(UnplannedReadmission_1.UnplannedReadmission);
const mortalityClassificationRepository = data_source_1.dataSource.getRepository(MortalityClassification_1.MortalityClassification);
const config = {
    lang: "eng",
    oem: 3,
    psm: 1,
};
let ConsultResolver = class ConsultResolver {
    async admissionCategory(consult) {
        const admissionCategory = await admissionCategoryRepository.findOne({
            where: { id: consult.admissionCategoryId },
        });
        if (!admissionCategory)
            throw new Error("Admission Category not found!");
        return admissionCategory;
    }
    async unplannedReadmission(consult) {
        const unplannedReadmission = await unplannedReadmissionRepository.findOne({
            where: { id: consult.unplannedReadmissionId },
        });
        if (!unplannedReadmission)
            throw new Error("Unplanned Readmission not found!");
        return unplannedReadmission;
    }
    async fundingType(consult) {
        const fundingType = await fundingTypeRepository.findOne({
            where: { id: consult.fundingTypeId },
        });
        if (!fundingType)
            throw new Error("fundingType not found!");
        return fundingType;
    }
    async asaGrade(consult) {
        const asaGrade = await asaGradeRepository.findOne({
            where: { id: consult.asaGradeId },
        });
        if (!asaGrade)
            throw new Error("asaGrade not found!");
        return asaGrade;
    }
    async woundInfectionRisk(consult) {
        const woundInfectionRisk = await woundInfectionRiskRepository.findOne({
            where: { id: consult.woundInfectionRiskId },
        });
        if (!woundInfectionRisk)
            throw new Error("woundInfectionRisk not found!");
        return woundInfectionRisk;
    }
    async typeOfAnaesthetic(consult) {
        const typeOfAnaesthetic = await typeOfAnaestheticRepository.findOne({
            where: { id: consult.typeOfAnaestheticId },
        });
        if (!typeOfAnaesthetic)
            throw new Error("typeOfAnaesthetic not found!");
        return typeOfAnaesthetic;
    }
    async unplannedIcu(consult) {
        const unplannedIcu = await unplannedIcuRepository.findOne({
            where: { id: consult.unplannedIcuId },
        });
        if (!unplannedIcu)
            throw new Error("unplannedIcu not found!");
        return unplannedIcu;
    }
    async returnToTheatre(consult) {
        const returnToTheatre = await returnToTheatreRepository.findOne({
            where: { id: consult.returnToTheatreId },
        });
        if (!returnToTheatre)
            throw new Error("returnToTheatre not found!");
        return returnToTheatre;
    }
    async outcome(consult) {
        const outcome = await outcomeRepository.findOne({
            where: { id: consult.outcomeId },
        });
        if (!outcome)
            throw new Error("outcome not found!");
        return outcome;
    }
    async mortalityClassification(consult) {
        const mortalityClassification = await mortalityClassificationRepository.findOne({
            where: { id: consult.mortalityClassificationId },
        });
        if (!mortalityClassification)
            throw new Error("Mortality Classification not found!");
        return mortalityClassification;
    }
    async ethnicity(consult) {
        const ethnicity = await ethnicityRepository.findOne({
            where: { id: consult.ethnicityId },
        });
        if (!ethnicity)
            throw new Error("Ethnicity not found!");
        return ethnicity;
    }
    async setLevel(consult) {
        const setLevel = await setLevelRepository.findOne({
            where: { id: consult.setLevelId },
        });
        if (!setLevel)
            throw new Error("Set Level not found!");
        return setLevel;
    }
    async user(consult) {
        const user = await userRepository.findOne({
            where: { id: consult.userId },
        });
        if (!user)
            throw new Error("User not found!");
        return user;
    }
    async rotationPeriod(consult) {
        const rotationPeriod = await rotationRepository.findOne({
            where: { id: consult.rotationPeriodId },
        });
        if (!rotationPeriod)
            throw new Error("User not found!");
        return rotationPeriod;
    }
    async hospital(consult) {
        const hospital = await hospitalRepository.findOne({
            where: { id: consult.hospitalId },
        });
        if (!hospital)
            throw new Error("User not found!");
        return hospital;
    }
    async supervisor(consult) {
        const supervisor = await supervisorRepository.findOne({
            where: { id: consult.supervisorId },
        });
        if (!supervisor)
            throw new Error("User not found!");
        return supervisor;
    }
    async procedures(consult) {
        const procedures = await consultProcedureRepository.find({
            relations: ["procedure"],
            where: { consultId: consult.id },
        });
        // if (!newConsult) throw new Error("Consult not found!");
        return procedures;
    }
    async allConsults(ctx) {
        const consults = await consultRepository.find({
            order: {
                id: "ASC",
            },
            where: { userId: ctx.user.id },
        });
        return consults;
    }
    async consult(input, ctx) {
        const consult = await consultRepository.findOne({
            where: { id: input.id },
        });
        if (!consult)
            throw new Error("No Consult Found!");
        if (consult.userId === ctx.user.id)
            return consult;
        else
            throw new type_graphql_1.ForbiddenError();
    }
    async totalConsults(ctx) {
        const count = await consultRepository.count({
            where: { userId: ctx.user.id },
        });
        return count;
    }
    // @Authorized([UserRole.USER, UserRole.ADMIN])
    // @Query(() => Statistics)
    // async logbook(@Ctx() ctx: Context<AuthContext>) {
    //     const query = await procedureRepository
    //         .createQueryBuilder("procedure")
    //         .select("procedure.id")
    //         .addSelect("procedure.name")
    //         .addSelect(
    //             "SUM(1) FILTER (WHERE consultProcedure.supervisionLevelId = '0' AND consult.userId = :id)",
    //             "primary"
    //         )
    //         .addSelect(
    //             "SUM(1) FILTER (WHERE consultProcedure.supervisionLevelId = '1' AND consult.userId = :id)",
    //             "secondary"
    //         )
    //         .addSelect(
    //             "SUM(1) FILTER (WHERE consultProcedure.supervisionLevelId = '2' AND consult.userId = :id)",
    //             "assistant"
    //         )
    //         .leftJoin("procedure.consults", "consultProcedure")
    //         .leftJoin("consultProcedure.consult", "consult")
    //         .setParameter("id", ctx.user.id)
    //         .groupBy("procedure.id")
    //         .orderBy("procedure.id")
    //         .getRawMany();
    //     return query;
    // }
    async createConsult(input, ctx) {
        const consult = consultRepository.create(input);
        consult.userId = ctx.user.id;
        await consultRepository.save(consult);
        if (input.selectedProcedures) {
            // TODO: find a better way, this should be done before saving the consult and without saving each consultProcedure seperately
            consult.procedures = [];
            for (const selectedProcedure of input.selectedProcedures) {
                const consultProcedure = new ConsultProcedure_1.ConsultProcedure();
                consultProcedure.procedureId = selectedProcedure.procedureId;
                consultProcedure.supervisionLevelId =
                    selectedProcedure.supervisionLevelId;
                consultProcedure.consultId = consult.id;
                await consultProcedureRepository.save(consultProcedure);
            }
        }
        const newConsult = await consultRepository.findOne({
            where: { id: consult.id },
        });
        if (!newConsult)
            throw new Error("Cannot find Consult!");
        return newConsult;
    }
    async updateConsult(input) {
        const consult = await consultRepository.findOne({
            relations: ["procedures"],
            where: { id: input.id },
        });
        if (!consult)
            throw new Error("Consult not found!");
        Object.assign(consult, input);
        await consultRepository.save(consult);
        for (const procedure of consult.procedures) {
            await consultProcedureRepository.remove(procedure); // FIXME: this is terrible. deleteing every time I update causes primary id wastage.
        }
        if (input.selectedProcedures) {
            // FIXME: find a better way, this should be done before saving the consult and without saving each consultProcedure seperately
            consult.procedures = [];
            for (const selectedProcedure of input.selectedProcedures) {
                const consultProcedure = new ConsultProcedure_1.ConsultProcedure();
                consultProcedure.procedureId = selectedProcedure.procedureId;
                consultProcedure.supervisionLevelId =
                    selectedProcedure.supervisionLevelId;
                consultProcedure.consultId = consult.id;
                await consultProcedureRepository.save(consultProcedure);
            }
        }
        const newConsult = await consultRepository.findOne({
            where: { id: consult.id },
        });
        if (!newConsult)
            throw new Error("Cannot find Consult!");
        return newConsult;
    }
    async deleteConsult(input) {
        const consult = await consultRepository.findOne({
            where: { id: input.id },
        });
        if (!consult)
            throw new Error("Consult not found!");
        await consultRepository.remove(consult);
        return consult;
    }
    imageUpload(input) {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        const { createReadStream } = input.file;
        const output = fs_1.default.createWriteStream("./src/images/image.png");
        createReadStream().pipe(output);
        node_tesseract_ocr_1.default
            .recognize("./src/images/image.png", config)
            .then((text) => {
            console.log("Result:", text);
        })
            .catch((error) => {
            console.log(error.message);
        });
        const result = new Consult_1.RecognisedText();
        return result;
    }
};
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Consult_1.Consult]),
    __metadata("design:returntype", Promise)
], ConsultResolver.prototype, "admissionCategory", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Consult_1.Consult]),
    __metadata("design:returntype", Promise)
], ConsultResolver.prototype, "unplannedReadmission", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Consult_1.Consult]),
    __metadata("design:returntype", Promise)
], ConsultResolver.prototype, "fundingType", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Consult_1.Consult]),
    __metadata("design:returntype", Promise)
], ConsultResolver.prototype, "asaGrade", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Consult_1.Consult]),
    __metadata("design:returntype", Promise)
], ConsultResolver.prototype, "woundInfectionRisk", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Consult_1.Consult]),
    __metadata("design:returntype", Promise)
], ConsultResolver.prototype, "typeOfAnaesthetic", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Consult_1.Consult]),
    __metadata("design:returntype", Promise)
], ConsultResolver.prototype, "unplannedIcu", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Consult_1.Consult]),
    __metadata("design:returntype", Promise)
], ConsultResolver.prototype, "returnToTheatre", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Consult_1.Consult]),
    __metadata("design:returntype", Promise)
], ConsultResolver.prototype, "outcome", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Consult_1.Consult]),
    __metadata("design:returntype", Promise)
], ConsultResolver.prototype, "mortalityClassification", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Consult_1.Consult]),
    __metadata("design:returntype", Promise)
], ConsultResolver.prototype, "ethnicity", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Consult_1.Consult]),
    __metadata("design:returntype", Promise)
], ConsultResolver.prototype, "setLevel", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Consult_1.Consult]),
    __metadata("design:returntype", Promise)
], ConsultResolver.prototype, "user", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Consult_1.Consult]),
    __metadata("design:returntype", Promise)
], ConsultResolver.prototype, "rotationPeriod", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Consult_1.Consult]),
    __metadata("design:returntype", Promise)
], ConsultResolver.prototype, "hospital", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Consult_1.Consult]),
    __metadata("design:returntype", Promise)
], ConsultResolver.prototype, "supervisor", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Consult_1.Consult]),
    __metadata("design:returntype", Promise)
], ConsultResolver.prototype, "procedures", null);
__decorate([
    (0, type_graphql_1.Authorized)([UserRole_1.UserRole.USER, UserRole_1.UserRole.ADMIN]),
    (0, type_graphql_1.Query)(() => [Consult_1.Consult]),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ConsultResolver.prototype, "allConsults", null);
__decorate([
    (0, type_graphql_1.Authorized)([UserRole_1.UserRole.USER, UserRole_1.UserRole.ADMIN]),
    (0, type_graphql_1.Query)(() => Consult_1.Consult),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ConsultInput_1.ConsultInput, Object]),
    __metadata("design:returntype", Promise)
], ConsultResolver.prototype, "consult", null);
__decorate([
    (0, type_graphql_1.Authorized)([UserRole_1.UserRole.USER, UserRole_1.UserRole.ADMIN]),
    (0, type_graphql_1.Query)(() => Number),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ConsultResolver.prototype, "totalConsults", null);
__decorate([
    (0, type_graphql_1.Authorized)([UserRole_1.UserRole.USER, UserRole_1.UserRole.ADMIN]),
    (0, type_graphql_1.Mutation)(() => Consult_1.Consult),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ConsultInput_1.CreateConsultInput, Object]),
    __metadata("design:returntype", Promise)
], ConsultResolver.prototype, "createConsult", null);
__decorate([
    (0, type_graphql_1.Authorized)([UserRole_1.UserRole.USER, UserRole_1.UserRole.ADMIN]),
    (0, type_graphql_1.Mutation)(() => Consult_1.Consult),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ConsultInput_1.UpdateConsultInput]),
    __metadata("design:returntype", Promise)
], ConsultResolver.prototype, "updateConsult", null);
__decorate([
    (0, type_graphql_1.Authorized)([UserRole_1.UserRole.USER, UserRole_1.UserRole.ADMIN]),
    (0, type_graphql_1.Mutation)(() => Consult_1.Consult),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ConsultInput_1.DeleteConsultInput]),
    __metadata("design:returntype", Promise)
], ConsultResolver.prototype, "deleteConsult", null);
__decorate([
    (0, type_graphql_1.Authorized)([UserRole_1.UserRole.USER, UserRole_1.UserRole.ADMIN]),
    (0, type_graphql_1.Mutation)(() => Consult_1.RecognisedText),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ConsultInput_1.ImageUploadInput]),
    __metadata("design:returntype", Consult_1.RecognisedText)
], ConsultResolver.prototype, "imageUpload", null);
ConsultResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => Consult_1.Consult)
], ConsultResolver);
exports.ConsultResolver = ConsultResolver;
//# sourceMappingURL=ConsultResolver.js.map