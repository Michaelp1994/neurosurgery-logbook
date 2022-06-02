import {
  Resolver,
  Query,
  Mutation,
  Arg,
  ResolverInterface,
  FieldResolver,
  Root,
  Authorized,
  Ctx,
  ForbiddenError,
} from "type-graphql";
import {
  CreateConsultInput,
  UpdateConsultInput,
  DeleteConsultInput,
  ConsultInput,
  ImageUploadInput,
} from "../inputs/ConsultInput";
import { Consult, RecognisedText } from "../models/Consult";
import { User } from "../models/User";
import { UserRole } from "../enums/UserRole";
import { Context } from "apollo-server-core";
import { AuthContext } from "../types";
// import tesseract from "node-tesseract-ocr";
import fs from "fs";
import { Hospital } from "../models/Hospital";
import { Supervisor } from "../models/Supervisor";
import { ConsultProcedure } from "../models/ConsultProcedure";
import { Rotation } from "../models/Rotation";
import { dataSource } from "../data-source";
import { AdmissionCategory } from "../models/AdmissionCategory";
import { AsaGrade } from "../models/AsaGrade";
import { Ethnicity } from "../models/Ethnicity";
import { FundingType } from "../models/FundingType";
import { ReturnToTheatre } from "../models/ReturnToTheatre";
import { TypeOfAnaesthetic } from "../models/TypeOfAnaesthetic";
import { UnplannedIcu } from "../models/UnplannedIcu";
import { WoundInfectionRisk } from "../models/WoundInfectionRisk";
import { Outcome } from "../models/Outcome";
import { UnplannedReadmission } from "../models/UnplannedReadmission";
import { MortalityClassification } from "../models/MortalityClassification";
import { SetLevel } from "../models/SetLevel";

const consultRepository = dataSource.getRepository(Consult);
const userRepository = dataSource.getRepository(User);
const rotationRepository = dataSource.getRepository(Rotation);
const hospitalRepository = dataSource.getRepository(Hospital);
const supervisorRepository = dataSource.getRepository(Supervisor);
const admissionCategoryRepository = dataSource.getRepository(AdmissionCategory);
const fundingTypeRepository = dataSource.getRepository(FundingType);
const asaGradeRepository = dataSource.getRepository(AsaGrade);
const woundInfectionRiskRepository =
  dataSource.getRepository(WoundInfectionRisk);
const typeOfAnaestheticRepository = dataSource.getRepository(TypeOfAnaesthetic);
const unplannedIcuRepository = dataSource.getRepository(UnplannedIcu);
const returnToTheatreRepository = dataSource.getRepository(ReturnToTheatre);
const outcomeRepository = dataSource.getRepository(Outcome);
const ethnicityRepository = dataSource.getRepository(Ethnicity);
const consultProcedureRepository = dataSource.getRepository(ConsultProcedure);
const setLevelRepository = dataSource.getRepository(SetLevel);

const unplannedReadmissionRepository =
  dataSource.getRepository(UnplannedReadmission);
const mortalityClassificationRepository = dataSource.getRepository(
  MortalityClassification
);

const config = {
  lang: "eng",
  oem: 3,
  psm: 1,
};

@Resolver(() => Consult)
export class ConsultResolver implements ResolverInterface<Consult> {
  @FieldResolver()
  async admissionCategory(@Root() consult: Consult) {
    const admissionCategory = await admissionCategoryRepository.findOne({
      where: { id: consult.admissionCategoryId },
    });
    if (!admissionCategory) throw new Error("Admission Category not found!");
    return admissionCategory;
  }

  @FieldResolver()
  async unplannedReadmission(@Root() consult: Consult) {
    const unplannedReadmission = await unplannedReadmissionRepository.findOne({
      where: { id: consult.unplannedReadmissionId },
    });
    if (!unplannedReadmission)
      throw new Error("Unplanned Readmission not found!");
    return unplannedReadmission;
  }
  @FieldResolver()
  async fundingType(@Root() consult: Consult) {
    const fundingType = await fundingTypeRepository.findOne({
      where: { id: consult.fundingTypeId },
    });
    if (!fundingType) throw new Error("fundingType not found!");
    return fundingType;
  }
  @FieldResolver()
  async asaGrade(@Root() consult: Consult) {
    const asaGrade = await asaGradeRepository.findOne({
      where: { id: consult.asaGradeId },
    });
    if (!asaGrade) throw new Error("asaGrade not found!");
    return asaGrade;
  }
  @FieldResolver()
  async woundInfectionRisk(@Root() consult: Consult) {
    const woundInfectionRisk = await woundInfectionRiskRepository.findOne({
      where: { id: consult.woundInfectionRiskId },
    });
    if (!woundInfectionRisk) throw new Error("woundInfectionRisk not found!");
    return woundInfectionRisk;
  }
  @FieldResolver()
  async typeOfAnaesthetic(@Root() consult: Consult) {
    const typeOfAnaesthetic = await typeOfAnaestheticRepository.findOne({
      where: { id: consult.typeOfAnaestheticId },
    });
    if (!typeOfAnaesthetic) throw new Error("typeOfAnaesthetic not found!");
    return typeOfAnaesthetic;
  }
  @FieldResolver()
  async unplannedIcu(@Root() consult: Consult) {
    const unplannedIcu = await unplannedIcuRepository.findOne({
      where: { id: consult.unplannedIcuId },
    });
    if (!unplannedIcu) throw new Error("unplannedIcu not found!");
    return unplannedIcu;
  }
  @FieldResolver()
  async returnToTheatre(@Root() consult: Consult) {
    const returnToTheatre = await returnToTheatreRepository.findOne({
      where: { id: consult.returnToTheatreId },
    });
    if (!returnToTheatre) throw new Error("returnToTheatre not found!");
    return returnToTheatre;
  }
  @FieldResolver()
  async outcome(@Root() consult: Consult) {
    const outcome = await outcomeRepository.findOne({
      where: { id: consult.outcomeId },
    });
    if (!outcome) throw new Error("outcome not found!");
    return outcome;
  }
  @FieldResolver()
  async mortalityClassification(@Root() consult: Consult) {
    const mortalityClassification =
      await mortalityClassificationRepository.findOne({
        where: { id: consult.mortalityClassificationId },
      });
    if (!mortalityClassification)
      throw new Error("Mortality Classification not found!");
    return mortalityClassification;
  }
  @FieldResolver()
  async ethnicity(@Root() consult: Consult) {
    const ethnicity = await ethnicityRepository.findOne({
      where: { id: consult.ethnicityId },
    });
    if (!ethnicity) throw new Error("Ethnicity not found!");
    return ethnicity;
  }
  @FieldResolver()
  async setLevel(@Root() consult: Consult) {
    const setLevel = await setLevelRepository.findOne({
      where: { id: consult.setLevelId },
    });
    if (!setLevel) throw new Error("Set Level not found!");
    return setLevel;
  }

  @FieldResolver()
  async user(@Root() consult: Consult) {
    const user = await userRepository.findOne({
      where: { id: consult.userId },
    });
    if (!user) throw new Error("User not found!");
    return user;
  }
  @FieldResolver()
  async rotationPeriod(@Root() consult: Consult) {
    const rotationPeriod = await rotationRepository.findOne({
      where: { id: consult.rotationPeriodId },
    });
    if (!rotationPeriod) throw new Error("User not found!");
    return rotationPeriod;
  }
  @FieldResolver()
  async hospital(@Root() consult: Consult) {
    const hospital = await hospitalRepository.findOne({
      where: { id: consult.hospitalId },
    });
    if (!hospital) throw new Error("User not found!");
    return hospital;
  }
  @FieldResolver()
  async supervisor(@Root() consult: Consult) {
    const supervisor = await supervisorRepository.findOne({
      where: { id: consult.supervisorId },
    });
    if (!supervisor) throw new Error("User not found!");
    return supervisor;
  }

  @FieldResolver()
  async procedures(@Root() consult: Consult) {
    const procedures = await consultProcedureRepository.find({
      relations: ["procedure"],
      where: { consultId: consult.id },
    });
    // if (!newConsult) throw new Error("Consult not found!");
    return procedures;
  }

  @Authorized([UserRole.USER, UserRole.ADMIN])
  @Query(() => [Consult])
  async allConsults(@Ctx() ctx: Context<AuthContext>): Promise<Consult[]> {
    const consults = await consultRepository.find({
      order: {
        id: "ASC",
      },
      where: { userId: ctx.user.id },
    });
    return consults;
  }

  @Authorized([UserRole.USER, UserRole.ADMIN])
  @Query(() => Consult)
  async consult(
    @Arg("input") input: ConsultInput,
    @Ctx() ctx: Context<AuthContext>
  ): Promise<Consult> {
    const consult = await consultRepository.findOne({
      where: { id: input.id },
    });
    if (!consult) throw new Error("No Consult Found!");
    if (consult.userId === ctx.user.id) return consult;
    else throw new ForbiddenError();
  }

  @Authorized([UserRole.USER, UserRole.ADMIN])
  @Query(() => Number)
  async totalConsults(@Ctx() ctx: Context<AuthContext>) {
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

  @Authorized([UserRole.USER, UserRole.ADMIN])
  @Mutation(() => Consult)
  async createConsult(
    @Arg("input") input: CreateConsultInput,
    @Ctx() ctx: Context<AuthContext>
  ): Promise<Consult> {
    const consult = consultRepository.create(input);
    consult.userId = ctx.user.id;
    await consultRepository.save(consult);
    if (input.selectedProcedures) {
      // TODO: find a better way, this should be done before saving the consult and without saving each consultProcedure seperately
      consult.procedures = [];
      for (const selectedProcedure of input.selectedProcedures) {
        const consultProcedure = new ConsultProcedure();
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
    if (!newConsult) throw new Error("Cannot find Consult!");
    return newConsult;
  }

  @Authorized([UserRole.USER, UserRole.ADMIN])
  @Mutation(() => Consult)
  async updateConsult(
    @Arg("input") input: UpdateConsultInput
  ): Promise<Consult> {
    const consult = await consultRepository.findOne({
      relations: ["procedures"],
      where: { id: input.id },
    });
    if (!consult) throw new Error("Consult not found!");
    Object.assign(consult, input);
    await consultRepository.save(consult);
    for (const procedure of consult.procedures) {
      await consultProcedureRepository.remove(procedure); // FIXME: this is terrible. deleteing every time I update causes primary id wastage.
    }
    if (input.selectedProcedures) {
      // FIXME: find a better way, this should be done before saving the consult and without saving each consultProcedure seperately
      consult.procedures = [];
      for (const selectedProcedure of input.selectedProcedures) {
        const consultProcedure = new ConsultProcedure();
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
    if (!newConsult) throw new Error("Cannot find Consult!");
    return newConsult;
  }

  @Authorized([UserRole.USER, UserRole.ADMIN])
  @Mutation(() => Consult)
  async deleteConsult(
    @Arg("input") input: DeleteConsultInput
  ): Promise<Consult> {
    const consult = await consultRepository.findOne({
      where: { id: input.id },
    });
    if (!consult) throw new Error("Consult not found!");
    await consultRepository.remove(consult);
    return consult;
  }
  // TODO: Redo OCR
  // @Authorized([UserRole.USER, UserRole.ADMIN])
  // @Mutation(() => RecognisedText)
  // imageUpload(@Arg("input") input: ImageUploadInput): RecognisedText {
  //     // eslint-disable-next-line @typescript-eslint/unbound-method
  //     const { createReadStream } = input.file;
  //     const output = fs.createWriteStream("./src/images/image.png");

  //     createReadStream().pipe(output);

  //     tesseract
  //         .recognize("./src/images/image.png", config)
  //         .then((text) => {
  //             console.log("Result:", text);
  //         })
  //         .catch((error: Error) => {
  //             console.log(error.message);
  //         });
  //     const result = new RecognisedText();
  //     return result;
  // }
}
