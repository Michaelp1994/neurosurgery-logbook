import { InputType, Field, ID } from "type-graphql";
import { Consult } from "../models/Consult";
import { FileUpload, GraphQLUpload } from "graphql-upload";
import { ConsultProcedure } from "../models/ConsultProcedure";

@InputType({ description: "Input for adding a procedure to a consult" })
export class ConsultProcedureInput implements Partial<ConsultProcedure> {
    @Field()
    procedureId: number;
    @Field()
    supervisionLevelId: number;
}

@InputType({ description: "Input for creating consult by a user" })
export class CreateConsultInput implements Partial<Consult> {
    @Field()
    name: string;
    @Field()
    urn: string;
    @Field(() => [ConsultProcedureInput], { nullable: true })
    selectedProcedures?: ConsultProcedureInput[];
    @Field()
    hospitalId: number;
    @Field()
    rotationPeriodId: number;
    @Field({ nullable: true })
    setLevelId: number;
    @Field()
    procedureDate: Date;
    @Field()
    supervisorId: number;
    @Field()
    dateOfBirth: Date;
    //Extended Dataset
    @Field({ nullable: true })
    startTime?: string;
    @Field({ nullable: true })
    endTime?: string;
    @Field({ nullable: true })
    gender?: string;
    @Field({ nullable: true })
    admissionCategoryId?: number;
    @Field({ nullable: true })
    ethnicityId?: number;
    @Field({ nullable: true })
    unplannedReadmissionId?: number;
    @Field({ nullable: true })
    fundingTypeId?: number;
    @Field({ nullable: true })
    asaGradeId?: number;
    @Field({ nullable: true })
    woundInfectionRiskId?: number;
    @Field({ nullable: true })
    typeOfAnaestheticId?: number;
    @Field({ nullable: true })
    unplannedIcuId?: number;
    @Field({ nullable: true })
    returnToTheatreId?: number;
    @Field({ nullable: true })
    admissionDate?: Date;
    @Field({ nullable: true })
    diagnosisDate?: Date;
    @Field({ nullable: true })
    preManagementDiagnosis?: string;
    @Field({ nullable: true })
    recognisedCoMorbidities?: string;
    @Field({ nullable: true })
    prophylaxis?: string;
    @Field({ nullable: true })
    finalDiagnosis?: string;
    @Field({ nullable: true })
    pathologicalDiagnoses?: string;
    @Field({ nullable: true })
    dischargeDate?: Date;
    @Field({ nullable: true })
    outcomeId?: number;
    @Field({ nullable: true })
    mortalityClassificationId?: number;
    @Field({ nullable: true })
    recurrenceDate?: Date;
    @Field({ nullable: true })
    discussedAtMdm?: boolean;
    @Field({ nullable: true })
    comments?: string;
    @Field()
    isCompleted: boolean;
}

@InputType({ description: "Input for updating consult" })
export class UpdateConsultInput implements Partial<Consult> {
    @Field()
    id: number;
    @Field({ nullable: true })
    name: string;
    @Field({ nullable: true })
    urn: string;
    @Field(() => [ConsultProcedureInput], { nullable: true })
    selectedProcedures?: ConsultProcedureInput[];
    @Field({ nullable: true })
    hospitalId?: number;
    @Field({ nullable: true })
    rotationPeriodId?: number;
    @Field({ nullable: true })
    setLevelId: number;
    @Field({ nullable: true })
    procedureDate?: Date;
    @Field({ nullable: true })
    supervisorId?: number;
    @Field({ nullable: true })
    dateOfBirth?: Date;
    //Extended Dataset
    @Field({ nullable: true })
    startTime?: string;
    @Field({ nullable: true })
    endTime?: string;
    @Field({ nullable: true })
    gender?: string;
    @Field({ nullable: true })
    admissionDate?: Date;
    @Field({ nullable: true })
    admissionCategoryId?: number;
    @Field({ nullable: true })
    ethnicityId?: number;
    @Field({ nullable: true })
    unplannedReadmissionId?: number;
    @Field({ nullable: true })
    fundingTypeId?: number;
    @Field({ nullable: true })
    asaGradeId?: number;
    @Field({ nullable: true })
    woundInfectionRiskId?: number;
    @Field({ nullable: true })
    typeOfAnaestheticId?: number;
    @Field({ nullable: true })
    unplannedIcuId?: number;
    @Field({ nullable: true })
    returnToTheatreId?: number;
    @Field({ nullable: true })
    diagnosisDate?: Date;
    @Field({ nullable: true })
    preManagementDiagnosis?: string;
    @Field({ nullable: true })
    recognisedCoMorbidities?: string;
    @Field({ nullable: true })
    prophylaxis?: string;
    @Field({ nullable: true })
    finalDiagnosis?: string;
    @Field({ nullable: true })
    pathologicalDiagnoses?: string;
    @Field({ nullable: true })
    dischargeDate?: Date;
    @Field({ nullable: true })
    outcomeId?: number;
    @Field({ nullable: true })
    mortalityClassificationId?: number;
    @Field({ nullable: true })
    recurrenceDate?: Date;
    @Field({ nullable: true })
    discussedAtMdm?: boolean;
    @Field({ nullable: true })
    comments?: string;
    @Field({ nullable: true })
    isCompleted?: boolean;
}

@InputType({ description: "Input for deleting consult" })
export class DeleteConsultInput implements Partial<Consult> {
    @Field(() => ID)
    id: number;
}

@InputType({ description: "Input for reading consult" })
export class ConsultInput implements Partial<Consult> {
    @Field(() => ID)
    id: number;
}

@InputType({ description: "Input for OCR patient label detection" })
export class ImageUploadInput {
    @Field(() => GraphQLUpload)
    file: FileUpload;
}
