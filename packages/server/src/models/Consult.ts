import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    OneToMany,
} from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { User } from "./User";
import { ConsultProcedure } from "./ConsultProcedure";
import { LocalTimeResolver } from "graphql-scalars";
import { DateTime } from "luxon";
import { Hospital } from "./Hospital";
import { Supervisor } from "./Supervisor";
import { Rotation } from "./Rotation";
// import { SetLevel } from "../enums/ConsultDetails";
import { SetLevel } from "./SetLevel";
import { AsaGrade } from "./AsaGrade";
import { Ethnicity } from "./Ethnicity";
import { FundingType } from "./FundingType";
import { ReturnToTheatre } from "./ReturnToTheatre";
import { TypeOfAnaesthetic } from "./TypeOfAnaesthetic";
import { UnplannedIcu } from "./UnplannedIcu";
import { UnplannedReadmission } from "./UnplannedReadmission";
import { WoundInfectionRisk } from "./WoundInfectionRisk";
import { AdmissionCategory } from "./AdmissionCategory";
import { MortalityClassification } from "./MortalityClassification";
import { Outcome } from "./Outcome";

@ObjectType({ description: "Procedure Duration" })
export class CaseDuration extends BaseEntity {
    @Field()
    hours: number;

    @Field()
    minutes: number;
}

@Entity()
@ObjectType({ description: "The consult/case model" })
export class Consult extends BaseEntity {
    //Minimum dataset

    @Field()
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Field()
    @Column()
    name: string;

    @Field()
    @Column()
    urn: string;

    @Field()
    @Column({ nullable: true })
    setLevelId: number;

    @Field()
    @Column()
    rotationPeriodId: number;

    @Field()
    @Column()
    userId: number;

    @Field()
    @Column()
    hospitalId: number;

    @Field()
    @Column()
    supervisorId: number;

    @Field({ nullable: true })
    @Column({ nullable: true })
    procedureDate?: Date;

    //Extended Dataset
    @Field(() => LocalTimeResolver, { nullable: true })
    @Column({ nullable: true })
    startTime?: string; // FIXME: make a time

    @Field(() => LocalTimeResolver, { nullable: true })
    @Column({ nullable: true })
    endTime?: string; // FIXME: make a time

    @Field({ nullable: true })
    @Column({ nullable: true })
    gender?: string; // FIXME: ENUM

    @Field({ nullable: true })
    @Column({ nullable: true })
    prophylaxis?: string; // FIXME: ENUM

    // DATES

    @Field({ nullable: true })
    @Column({ nullable: true })
    dateOfBirth?: Date;

    @Field({ nullable: true })
    @Column({ nullable: true })
    admissionDate?: Date;

    @Field({ nullable: true })
    @Column({ nullable: true })
    diagnosisDate?: Date;

    @Field({ nullable: true })
    @Column({ nullable: true })
    dischargeDate?: Date;

    @Field({ nullable: true })
    @Column({ nullable: true })
    recurrenceDate?: Date;

    // BOOLEANS

    @Field({ nullable: true })
    @Column({ nullable: true })
    isCompleted?: boolean;

    @Field({ nullable: true })
    @Column({ nullable: true })
    admissionCategoryId?: number;

    @Field({ nullable: true })
    @Column({ nullable: true })
    ethnicityId?: number;

    @Field({ nullable: true })
    @Column({ nullable: true })
    unplannedReadmissionId?: number;

    @Field({ nullable: true })
    @Column({ nullable: true })
    fundingTypeId?: number;

    @Field({ nullable: true })
    @Column({ nullable: true })
    asaGradeId?: number;

    @Field({ nullable: true })
    @Column({ nullable: true })
    outcomeId?: number;

    @Field({ nullable: true })
    @Column({ nullable: true })
    mortalityClassificationId?: number;

    @Field({ nullable: true })
    @Column({ nullable: true })
    woundInfectionRiskId?: number;

    @Field({ nullable: true })
    @Column({ nullable: true })
    typeOfAnaestheticId?: number;

    @Field({ nullable: true })
    @Column({ nullable: true })
    unplannedIcuId?: number;

    @Field({ nullable: true })
    @Column({ nullable: true })
    returnToTheatreId?: number;

    @Field(() => Outcome, { nullable: true })
    @ManyToOne(() => Outcome, (outcome) => outcome.consults)
    outcome?: Outcome;

    @Field(() => MortalityClassification, { nullable: true })
    @ManyToOne(
        () => MortalityClassification,
        (mortalityClassification) => mortalityClassification.consults
    )
    mortalityClassification?: MortalityClassification;

    @Field(() => Ethnicity, { nullable: true })
    @ManyToOne(() => Ethnicity, (ethnicity) => ethnicity.consults)
    ethnicity?: Ethnicity;

    @Field(() => AdmissionCategory, { nullable: true })
    @ManyToOne(
        () => AdmissionCategory,
        (admissionCategory) => admissionCategory.consults
    )
    admissionCategory?: AdmissionCategory;

    @Field(() => UnplannedReadmission, { nullable: true })
    @ManyToOne(
        () => UnplannedReadmission,
        (unplannedReadmission) => unplannedReadmission.consults
    )
    unplannedReadmission?: UnplannedReadmission;

    @Field(() => FundingType, { nullable: true })
    @ManyToOne(() => FundingType, (fundingType) => fundingType.consults)
    fundingType?: FundingType;

    @Field(() => AsaGrade, { nullable: true })
    @ManyToOne(() => AsaGrade, (asaGrade) => asaGrade.consults)
    asaGrade?: AsaGrade;

    @Field(() => WoundInfectionRisk, { nullable: true })
    @ManyToOne(
        () => WoundInfectionRisk,
        (woundInfectionRisk) => woundInfectionRisk.consults
    )
    woundInfectionRisk?: WoundInfectionRisk;

    @Field(() => TypeOfAnaesthetic, { nullable: true })
    @ManyToOne(
        () => TypeOfAnaesthetic,
        (typeOfAnaesthetic) => typeOfAnaesthetic.consults
    )
    typeOfAnaesthetic?: TypeOfAnaesthetic;

    @Field(() => UnplannedIcu, { nullable: true })
    @ManyToOne(() => UnplannedIcu, (unplannedIcu) => unplannedIcu.consults)
    unplannedIcu?: UnplannedIcu;

    @Field(() => ReturnToTheatre, { nullable: true })
    @ManyToOne(
        () => ReturnToTheatre,
        (returnToTheatre) => returnToTheatre.consults
    )
    returnToTheatre?: ReturnToTheatre;

    // TEXT FIELDS

    @Field({ nullable: true })
    @Column({ nullable: true })
    preManagementDiagnosis?: string;

    @Field({ nullable: true })
    @Column({ nullable: true })
    recognisedCoMorbidities?: string;

    // @Field({ nullable: true })
    // @Column({ nullable: true })
    // mortalityClassification?: string;

    // @Field({ nullable: true })
    // @Column({ nullable: true })
    // outcome?: string;

    @Field({ nullable: true })
    @Column({ nullable: true })
    finalDiagnosis?: string;

    @Field({ nullable: true })
    @Column({ nullable: true })
    pathologicalDiagnoses?: string;

    @Field({ nullable: true })
    @Column({ nullable: true })
    discussedAtMdm?: boolean;

    @Field({ nullable: true })
    @Column({ nullable: true })
    comments?: string;

    //Relationship data

    @Field(() => SetLevel)
    @ManyToOne(() => SetLevel, (setLevel) => setLevel.consults)
    setLevel: SetLevel;

    @Field(() => Rotation)
    @ManyToOne(() => Rotation, (rotation) => rotation.consults)
    rotationPeriod: Rotation;

    @Field(() => [ConsultProcedure])
    @OneToMany(
        () => ConsultProcedure,
        (consultProcedure) => consultProcedure.consult
    )
    procedures: ConsultProcedure[];

    @Field(() => User)
    @ManyToOne(() => User, (user) => user.consults)
    user: User;

    @Field(() => Hospital, { nullable: true })
    @ManyToOne(() => Hospital, (hospital) => hospital.consults)
    hospital: Hospital;

    @Field(() => Supervisor, { nullable: true })
    @ManyToOne(() => Supervisor, (supervisor) => supervisor.consults)
    supervisor: Supervisor;

    // Computed Properties
    @Field(() => Number, { nullable: true })
    patientAge(): number | null {
        if (!this.dateOfBirth || !this.procedureDate) return null;
        //const endTime = DateTime.now();
        const endTime = DateTime.fromJSDate(this.procedureDate);
        const startTime = DateTime.fromJSDate(this.dateOfBirth);
        const difference = endTime
            .diff(startTime, ["years", "months"])
            .toObject().years;
        if (!difference) return null;
        return difference;
    }

    @Field(() => CaseDuration, { nullable: true })
    procedureDuration() {
        if (!this.endTime || !this.startTime) return { hours: 0, minutes: 0 };
        const endTime = DateTime.fromISO(this.endTime);
        const startTime = DateTime.fromISO(this.startTime);
        const { hours, minutes } = endTime
            .diff(startTime, ["hours", "minutes"])
            .toObject();
        if (typeof hours === "undefined" || typeof minutes === "undefined")
            throw Error;
        return { hours: Math.abs(hours), minutes: Math.abs(minutes) };
    }

    // Meta Data
    @Field()
    @CreateDateColumn()
    createdAt: Date;

    @Field({ nullable: true })
    @UpdateDateColumn()
    updatedAt?: Date;

    @Field({ nullable: true })
    @DeleteDateColumn()
    deletedAt?: Date;
}

@ObjectType({ description: "OCR Result for Patient Label" })
export class RecognisedText {
    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    urn?: string;

    @Field({ nullable: true })
    dateOfBirth?: string;
}

@ObjectType({ description: "OCR Result for Patient Label" })
export class Statistics {
    @Field({ nullable: true })
    totalConsults: number;
    @Field({ nullable: true })
    spinal: number;

    @Field({ nullable: true })
    cranial: number;

    @Field({ nullable: true })
    peripheralNerveSurgery: number;

    @Field({ nullable: true })
    primary: number;

    @Field({ nullable: true })
    secondary: number;

    @Field({ nullable: true })
    assistant: number;

    @Field({ nullable: true })
    publicFunded: number;

    @Field({ nullable: true })
    privateFunded: number;

    @Field(() => [Number], { nullable: true })
    procedureTypeArray: number[];
}
