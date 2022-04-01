import gql from "graphql-tag";
import * as Urql from "@urql/vue";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: number | string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** A local time string (i.e., with no associated timezone) in 24-hr `HH:mm[:ss[.SSS]]` format, e.g. `14:25` or `14:25:06` or `14:25:06.123`. */
  LocalTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

/** The Admission Category model */
export type AdmissionCategory = {
  __typename?: "AdmissionCategory";
  consults?: Maybe<Array<Consult>>;
  createdAt: Scalars["DateTime"];
  deletedAt: Scalars["DateTime"];
  id: Scalars["Float"];
  name: Scalars["String"];
  updatedAt: Scalars["DateTime"];
};

/** The ASA Grade model */
export type AsaGrade = {
  __typename?: "AsaGrade";
  consults?: Maybe<Array<Consult>>;
  createdAt: Scalars["DateTime"];
  deletedAt: Scalars["DateTime"];
  id: Scalars["Float"];
  name: Scalars["String"];
  updatedAt: Scalars["DateTime"];
};

/** Procedure Duration */
export type CaseDuration = {
  __typename?: "CaseDuration";
  hours: Scalars["Float"];
  minutes: Scalars["Float"];
};

/** The consult/case model */
export type Consult = {
  __typename?: "Consult";
  admissionCategory?: Maybe<AdmissionCategory>;
  admissionCategoryId?: Maybe<Scalars["Float"]>;
  admissionDate?: Maybe<Scalars["DateTime"]>;
  asaGrade?: Maybe<AsaGrade>;
  asaGradeId?: Maybe<Scalars["Float"]>;
  comments?: Maybe<Scalars["String"]>;
  createdAt: Scalars["DateTime"];
  dateOfBirth?: Maybe<Scalars["DateTime"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  diagnosisDate?: Maybe<Scalars["DateTime"]>;
  dischargeDate?: Maybe<Scalars["DateTime"]>;
  discussedAtMdm?: Maybe<Scalars["Boolean"]>;
  endTime?: Maybe<Scalars["LocalTime"]>;
  ethnicity?: Maybe<Ethnicity>;
  ethnicityId?: Maybe<Scalars["Float"]>;
  finalDiagnosis?: Maybe<Scalars["String"]>;
  fundingType?: Maybe<FundingType>;
  fundingTypeId?: Maybe<Scalars["Float"]>;
  gender?: Maybe<Scalars["String"]>;
  hospital?: Maybe<Hospital>;
  hospitalId: Scalars["Float"];
  id: Scalars["Float"];
  isCompleted?: Maybe<Scalars["Boolean"]>;
  mortalityClassification?: Maybe<MortalityClassification>;
  mortalityClassificationId?: Maybe<Scalars["Float"]>;
  name: Scalars["String"];
  outcome?: Maybe<Outcome>;
  outcomeId?: Maybe<Scalars["Float"]>;
  pathologicalDiagnoses?: Maybe<Scalars["String"]>;
  patientAge?: Maybe<Scalars["Float"]>;
  preManagementDiagnosis?: Maybe<Scalars["String"]>;
  procedureDate?: Maybe<Scalars["DateTime"]>;
  procedureDuration?: Maybe<CaseDuration>;
  procedures: Array<ConsultProcedure>;
  prophylaxis?: Maybe<Scalars["String"]>;
  recognisedCoMorbidities?: Maybe<Scalars["String"]>;
  recurrenceDate?: Maybe<Scalars["DateTime"]>;
  returnToTheatre?: Maybe<ReturnToTheatre>;
  returnToTheatreId?: Maybe<Scalars["Float"]>;
  rotationPeriod: Rotation;
  rotationPeriodId: Scalars["Float"];
  setLevel: SetLevel;
  setLevelId: Scalars["Float"];
  startTime?: Maybe<Scalars["LocalTime"]>;
  supervisor?: Maybe<Supervisor>;
  supervisorId: Scalars["Float"];
  typeOfAnaesthetic?: Maybe<TypeOfAnaesthetic>;
  typeOfAnaestheticId?: Maybe<Scalars["Float"]>;
  unplannedIcu?: Maybe<UnplannedIcu>;
  unplannedIcuId?: Maybe<Scalars["Float"]>;
  unplannedReadmission?: Maybe<UnplannedReadmission>;
  unplannedReadmissionId?: Maybe<Scalars["Float"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  urn: Scalars["String"];
  user: User;
  userId: Scalars["Float"];
  woundInfectionRisk?: Maybe<WoundInfectionRisk>;
  woundInfectionRiskId?: Maybe<Scalars["Float"]>;
};

/** Input for reading consult */
export type ConsultInput = {
  id: Scalars["ID"];
};

/** The many-to-many relation between Consult & Procedure */
export type ConsultProcedure = {
  __typename?: "ConsultProcedure";
  consult: Consult;
  consultId: Scalars["Float"];
  createdAt: Scalars["DateTime"];
  deletedAt: Scalars["DateTime"];
  id: Scalars["Float"];
  procedure: Procedure;
  procedureId: Scalars["Float"];
  supervisionLevel: SupervisionLevel;
  supervisionLevelId: Scalars["Float"];
  updatedAt: Scalars["DateTime"];
};

/** Input for adding a procedure to a consult */
export type ConsultProcedureInput = {
  procedureId: Scalars["Float"];
  supervisionLevelId: Scalars["Float"];
};

/** Input for creating consult by a user */
export type CreateConsultInput = {
  admissionCategoryId?: InputMaybe<Scalars["Float"]>;
  admissionDate?: InputMaybe<Scalars["DateTime"]>;
  asaGradeId?: InputMaybe<Scalars["Float"]>;
  comments?: InputMaybe<Scalars["String"]>;
  dateOfBirth: Scalars["DateTime"];
  diagnosisDate?: InputMaybe<Scalars["DateTime"]>;
  dischargeDate?: InputMaybe<Scalars["DateTime"]>;
  discussedAtMdm?: InputMaybe<Scalars["Boolean"]>;
  endTime?: InputMaybe<Scalars["String"]>;
  ethnicityId?: InputMaybe<Scalars["Float"]>;
  finalDiagnosis?: InputMaybe<Scalars["String"]>;
  fundingTypeId?: InputMaybe<Scalars["Float"]>;
  gender?: InputMaybe<Scalars["String"]>;
  hospitalId: Scalars["Float"];
  isCompleted: Scalars["Boolean"];
  mortalityClassificationId?: InputMaybe<Scalars["Float"]>;
  name: Scalars["String"];
  outcomeId?: InputMaybe<Scalars["Float"]>;
  pathologicalDiagnoses?: InputMaybe<Scalars["String"]>;
  preManagementDiagnosis?: InputMaybe<Scalars["String"]>;
  procedureDate: Scalars["DateTime"];
  prophylaxis?: InputMaybe<Scalars["String"]>;
  recognisedCoMorbidities?: InputMaybe<Scalars["String"]>;
  recurrenceDate?: InputMaybe<Scalars["DateTime"]>;
  returnToTheatreId?: InputMaybe<Scalars["Float"]>;
  rotationPeriodId: Scalars["Float"];
  selectedProcedures?: InputMaybe<Array<ConsultProcedureInput>>;
  setLevelId?: InputMaybe<Scalars["Float"]>;
  startTime?: InputMaybe<Scalars["String"]>;
  supervisorId: Scalars["Float"];
  typeOfAnaestheticId?: InputMaybe<Scalars["Float"]>;
  unplannedIcuId?: InputMaybe<Scalars["Float"]>;
  unplannedReadmissionId?: InputMaybe<Scalars["Float"]>;
  urn: Scalars["String"];
  woundInfectionRiskId?: InputMaybe<Scalars["Float"]>;
};

/** Input for creating supervisor type */
export type CreateHospitalInput = {
  name: Scalars["String"];
  urnMask: Scalars["String"];
};

/** Input for creating procedure by an admin */
export type CreateProcedureInput = {
  name: Scalars["String"];
  typeId: Scalars["Float"];
};

/** Input for creating procedure type by an admin */
export type CreateProcedureTypeInput = {
  name: Scalars["String"];
};

/** Input for creating Rotation type */
export type CreateRotationInput = {
  endDate: Scalars["DateTime"];
  hospitalId: Scalars["Float"];
  name: Scalars["String"];
  setLevelId: Scalars["Float"];
  startDate: Scalars["DateTime"];
  supervisorIds?: InputMaybe<Array<Scalars["Float"]>>;
};

/** Input for creating supervisor type */
export type CreateSupervisorInput = {
  name: Scalars["String"];
};

/** Input for creating user */
export type CreateUserInput = {
  email: Scalars["String"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  password: Scalars["String"];
};

/** Input for deleting consult */
export type DeleteConsultInput = {
  id: Scalars["ID"];
};

/** Input for deleting a supervisor */
export type DeleteHospitalInput = {
  id: Scalars["ID"];
};

/** Input for deleting Procedure */
export type DeleteProcedureInput = {
  id: Scalars["ID"];
};

/** Input for deleting a procedure by an admin */
export type DeleteProcedureTypeInput = {
  id: Scalars["ID"];
};

/** Input for deleting a Rotation */
export type DeleteRotationInput = {
  id: Scalars["ID"];
};

/** Input for deleting a supervisor */
export type DeleteSupervisorInput = {
  id: Scalars["ID"];
};

/** Input for deleting a user */
export type DeleteUserInput = {
  id: Scalars["ID"];
};

/** The Ethnicity model */
export type Ethnicity = {
  __typename?: "Ethnicity";
  consults?: Maybe<Array<Consult>>;
  createdAt: Scalars["DateTime"];
  deletedAt: Scalars["DateTime"];
  id: Scalars["Float"];
  name: Scalars["String"];
  updatedAt: Scalars["DateTime"];
};

/** Input for sending a password recovery email */
export type ForgotPasswordInput = {
  captchaToken: Scalars["String"];
  email: Scalars["String"];
};

/** The Funding Type model */
export type FundingType = {
  __typename?: "FundingType";
  consults?: Maybe<Array<Consult>>;
  createdAt: Scalars["DateTime"];
  deletedAt: Scalars["DateTime"];
  id: Scalars["Float"];
  name: Scalars["String"];
  totalConsults: Scalars["Float"];
  updatedAt: Scalars["DateTime"];
};

/** The hospital model */
export type Hospital = {
  __typename?: "Hospital";
  consults: Array<Consult>;
  createdAt: Scalars["DateTime"];
  deletedAt: Scalars["DateTime"];
  id: Scalars["Float"];
  name: Scalars["String"];
  rotations: Array<Rotation>;
  updatedAt: Scalars["DateTime"];
  urnMask?: Maybe<Scalars["String"]>;
  user: User;
  userId: Scalars["Float"];
};

/** Input for viewing a supervisor */
export type HospitalInput = {
  id: Scalars["ID"];
};

/** Input for OCR patient label detection */
export type ImageUploadInput = {
  file: Scalars["Upload"];
};

/** Input for login credentials */
export type LoginInput = {
  email: Scalars["String"];
  password: Scalars["String"];
};

/** The Mortality Classification model */
export type MortalityClassification = {
  __typename?: "MortalityClassification";
  consults?: Maybe<Array<Consult>>;
  createdAt: Scalars["DateTime"];
  deletedAt: Scalars["DateTime"];
  id: Scalars["Float"];
  name: Scalars["String"];
  updatedAt: Scalars["DateTime"];
};

export type Mutation = {
  __typename?: "Mutation";
  createConsult: Consult;
  createHospital: Hospital;
  createProcedure: Procedure;
  createProcedureType: ProcedureType;
  createRotation: Rotation;
  createSupervisor: Supervisor;
  deleteConsult: Consult;
  deleteHospital: Hospital;
  deleteProcedure: Procedure;
  deleteProcedureType: ProcedureType;
  deleteRotation: Rotation;
  deleteSupervisor: Supervisor;
  deleteUser: User;
  forgotPassword: Scalars["Boolean"];
  imageUpload: RecognisedText;
  login: Token;
  register: Token;
  resetPassword: Scalars["Boolean"];
  updateConsult: Consult;
  updateHospital: Hospital;
  updatePassword: User;
  updateProcedure: Procedure;
  updateProcedureType: ProcedureType;
  updateProfile: User;
  updateRotation: Rotation;
  updateSupervisor: Supervisor;
  updateUser: User;
};

export type MutationCreateConsultArgs = {
  input: CreateConsultInput;
};

export type MutationCreateHospitalArgs = {
  input: CreateHospitalInput;
};

export type MutationCreateProcedureArgs = {
  input: CreateProcedureInput;
};

export type MutationCreateProcedureTypeArgs = {
  input: CreateProcedureTypeInput;
};

export type MutationCreateRotationArgs = {
  input: CreateRotationInput;
};

export type MutationCreateSupervisorArgs = {
  input: CreateSupervisorInput;
};

export type MutationDeleteConsultArgs = {
  input: DeleteConsultInput;
};

export type MutationDeleteHospitalArgs = {
  input: DeleteHospitalInput;
};

export type MutationDeleteProcedureArgs = {
  input: DeleteProcedureInput;
};

export type MutationDeleteProcedureTypeArgs = {
  input: DeleteProcedureTypeInput;
};

export type MutationDeleteRotationArgs = {
  input: DeleteRotationInput;
};

export type MutationDeleteSupervisorArgs = {
  input: DeleteSupervisorInput;
};

export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};

export type MutationForgotPasswordArgs = {
  input: ForgotPasswordInput;
};

export type MutationImageUploadArgs = {
  input: ImageUploadInput;
};

export type MutationLoginArgs = {
  input: LoginInput;
};

export type MutationRegisterArgs = {
  input: RegisterInput;
};

export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};

export type MutationUpdateConsultArgs = {
  input: UpdateConsultInput;
};

export type MutationUpdateHospitalArgs = {
  input: UpdateHospitalInput;
};

export type MutationUpdatePasswordArgs = {
  input: UpdatePasswordInput;
};

export type MutationUpdateProcedureArgs = {
  input: UpdateProcedureInput;
};

export type MutationUpdateProcedureTypeArgs = {
  input: UpdateProcedureTypeInput;
};

export type MutationUpdateProfileArgs = {
  input: UpdateProfileInput;
};

export type MutationUpdateRotationArgs = {
  input: UpdateRotationInput;
};

export type MutationUpdateSupervisorArgs = {
  input: UpdateSupervisorInput;
};

export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

/** The Outcome model */
export type Outcome = {
  __typename?: "Outcome";
  consults?: Maybe<Array<Consult>>;
  createdAt: Scalars["DateTime"];
  deletedAt: Scalars["DateTime"];
  id: Scalars["Float"];
  name: Scalars["String"];
  updatedAt: Scalars["DateTime"];
};

/** The procedure model */
export type Procedure = {
  __typename?: "Procedure";
  consults: Array<ConsultProcedure>;
  createdAt: Scalars["DateTime"];
  deletedAt: Scalars["DateTime"];
  id: Scalars["Float"];
  name: Scalars["String"];
  totalAssistantConsults: Scalars["Float"];
  totalConsults: Scalars["Float"];
  totalPrimaryConsults: Scalars["Float"];
  totalSecondaryConsults: Scalars["Float"];
  type: ProcedureType;
  typeId: Scalars["Float"];
  updatedAt: Scalars["DateTime"];
};

/** Input for viewing Procedure */
export type ProcedureInput = {
  id: Scalars["ID"];
};

/** The Procedure Topic Model */
export type ProcedureTopic = {
  __typename?: "ProcedureTopic";
  createdAt: Scalars["DateTime"];
  deletedAt: Scalars["DateTime"];
  id: Scalars["Float"];
  name: Scalars["String"];
  shortName: Scalars["String"];
  totalConsults: Scalars["Float"];
  types?: Maybe<Array<ProcedureType>>;
  updatedAt: Scalars["DateTime"];
};

/** The procedure type model */
export type ProcedureType = {
  __typename?: "ProcedureType";
  createdAt: Scalars["DateTime"];
  deletedAt: Scalars["DateTime"];
  id: Scalars["Float"];
  name: Scalars["String"];
  procedures: Array<Procedure>;
  topic: ProcedureTopic;
  topicId: Scalars["Float"];
  totalConsults: Scalars["Float"];
  updatedAt: Scalars["DateTime"];
};

/** Input for viewing a procedure */
export type ProcedureTypeInput = {
  id: Scalars["ID"];
};

export type Query = {
  __typename?: "Query";
  allAdmissionCategories: Array<AdmissionCategory>;
  allAsaGrades: Array<AsaGrade>;
  allConsults: Array<Consult>;
  allEthnicities: Array<Ethnicity>;
  allFundingTypes: Array<FundingType>;
  allHospitals: Array<Hospital>;
  allMortalityClassifications: Array<MortalityClassification>;
  allOutcomes: Array<Outcome>;
  allProcedureTopics: Array<ProcedureTopic>;
  allProcedureTypes: Array<ProcedureType>;
  allProcedures: Array<Procedure>;
  allReturnToTheatres: Array<ReturnToTheatre>;
  allRotations: Array<Rotation>;
  allSetLevels: Array<SetLevel>;
  allSupervisionLevels: Array<SupervisionLevel>;
  allSupervisors: Array<Supervisor>;
  allTypeOfAnaesthetics: Array<TypeOfAnaesthetic>;
  allUnplannedIcus: Array<UnplannedIcu>;
  allUnplannedReadmissions: Array<UnplannedReadmission>;
  allUsers: Array<User>;
  allWoundInfectionRisks: Array<WoundInfectionRisk>;
  consult: Consult;
  currentRotation: Rotation;
  hospital: Hospital;
  procedure: Procedure;
  profile: User;
  rotation: Rotation;
  search: Array<Consult>;
  supervisor: Supervisor;
  totalConsults: Scalars["Float"];
  user: User;
};

export type QueryConsultArgs = {
  input: ConsultInput;
};

export type QueryHospitalArgs = {
  input: HospitalInput;
};

export type QueryProcedureArgs = {
  input: ProcedureInput;
};

export type QueryRotationArgs = {
  input: RotationInput;
};

export type QuerySearchArgs = {
  input: SearchInput;
};

export type QuerySupervisorArgs = {
  input: SupervisorInput;
};

export type QueryUserArgs = {
  input: UserInput;
};

/** OCR Result for Patient Label */
export type RecognisedText = {
  __typename?: "RecognisedText";
  dateOfBirth?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  urn?: Maybe<Scalars["String"]>;
};

/** Input for registering user */
export type RegisterInput = {
  captchaToken: Scalars["String"];
  email: Scalars["String"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  password: Scalars["String"];
};

/** Input for Resetting password */
export type ResetPasswordInput = {
  emailToken: Scalars["String"];
  id: Scalars["Float"];
  newPassword: Scalars["String"];
};

/** The Return To Theatre model */
export type ReturnToTheatre = {
  __typename?: "ReturnToTheatre";
  consults?: Maybe<Array<Consult>>;
  createdAt: Scalars["DateTime"];
  deletedAt: Scalars["DateTime"];
  id: Scalars["Float"];
  name: Scalars["String"];
  updatedAt: Scalars["DateTime"];
};

/** The rotation model */
export type Rotation = {
  __typename?: "Rotation";
  consults?: Maybe<Array<Consult>>;
  createdAt: Scalars["DateTime"];
  deletedAt: Scalars["DateTime"];
  endDate: Scalars["DateTime"];
  hospital: Hospital;
  hospitalId: Scalars["Float"];
  id: Scalars["Float"];
  name: Scalars["String"];
  setLevel: SetLevel;
  setLevelId: Scalars["Float"];
  startDate: Scalars["DateTime"];
  supervisors: Array<Supervisor>;
  updatedAt: Scalars["DateTime"];
  user: User;
  userId: Scalars["Float"];
};

/** Input for viewing a Rotation */
export type RotationInput = {
  id: Scalars["ID"];
};

/** Input for creating consult by a user */
export type SearchInput = {
  search: Scalars["String"];
};

/** The SET Level model */
export type SetLevel = {
  __typename?: "SetLevel";
  consults?: Maybe<Array<Consult>>;
  createdAt: Scalars["DateTime"];
  deletedAt: Scalars["DateTime"];
  id: Scalars["Float"];
  name: Scalars["String"];
  rotations?: Maybe<Array<Rotation>>;
  updatedAt: Scalars["DateTime"];
};

/** OCR Result for Patient Label */
export type Statistics = {
  __typename?: "Statistics";
  assistant?: Maybe<Scalars["Float"]>;
  cranial?: Maybe<Scalars["Float"]>;
  peripheralNerveSurgery?: Maybe<Scalars["Float"]>;
  primary?: Maybe<Scalars["Float"]>;
  privateFunded?: Maybe<Scalars["Float"]>;
  procedureTypeArray?: Maybe<Array<Scalars["Float"]>>;
  publicFunded?: Maybe<Scalars["Float"]>;
  secondary?: Maybe<Scalars["Float"]>;
  spinal?: Maybe<Scalars["Float"]>;
  totalConsults?: Maybe<Scalars["Float"]>;
};

/** The Supervision Level model */
export type SupervisionLevel = {
  __typename?: "SupervisionLevel";
  createdAt: Scalars["DateTime"];
  deletedAt: Scalars["DateTime"];
  id: Scalars["Float"];
  name: Scalars["String"];
  procedures?: Maybe<Array<ConsultProcedure>>;
  totalConsults: Scalars["Float"];
  updatedAt: Scalars["DateTime"];
};

/** The supervisor model */
export type Supervisor = {
  __typename?: "Supervisor";
  consults: Array<Consult>;
  createdAt: Scalars["DateTime"];
  deletedAt: Scalars["DateTime"];
  id: Scalars["Float"];
  name: Scalars["String"];
  rotations: Array<Rotation>;
  updatedAt: Scalars["DateTime"];
  user: User;
  userId: Scalars["Float"];
};

/** Input for viewing a supervisor */
export type SupervisorInput = {
  id: Scalars["ID"];
};

/** User login authentication model */
export type Token = {
  __typename?: "Token";
  firstName: Scalars["String"];
  id: Scalars["Float"];
  lastName: Scalars["String"];
  role: UserRole;
  token: Scalars["String"];
};

/** The Type Of Anaesthetic model */
export type TypeOfAnaesthetic = {
  __typename?: "TypeOfAnaesthetic";
  consults?: Maybe<Array<Consult>>;
  createdAt: Scalars["DateTime"];
  deletedAt: Scalars["DateTime"];
  id: Scalars["Float"];
  name: Scalars["String"];
  updatedAt: Scalars["DateTime"];
};

/** The Unplanned ICU model */
export type UnplannedIcu = {
  __typename?: "UnplannedIcu";
  consults?: Maybe<Array<Consult>>;
  createdAt: Scalars["DateTime"];
  deletedAt: Scalars["DateTime"];
  id: Scalars["Float"];
  name: Scalars["String"];
  updatedAt: Scalars["DateTime"];
};

/** The Unplanned Readmission model */
export type UnplannedReadmission = {
  __typename?: "UnplannedReadmission";
  consults?: Maybe<Array<Consult>>;
  createdAt: Scalars["DateTime"];
  deletedAt: Scalars["DateTime"];
  id: Scalars["Float"];
  name: Scalars["String"];
  updatedAt: Scalars["DateTime"];
};

/** Input for updating consult */
export type UpdateConsultInput = {
  admissionCategoryId?: InputMaybe<Scalars["Float"]>;
  admissionDate?: InputMaybe<Scalars["DateTime"]>;
  asaGradeId?: InputMaybe<Scalars["Float"]>;
  comments?: InputMaybe<Scalars["String"]>;
  dateOfBirth?: InputMaybe<Scalars["DateTime"]>;
  diagnosisDate?: InputMaybe<Scalars["DateTime"]>;
  dischargeDate?: InputMaybe<Scalars["DateTime"]>;
  discussedAtMdm?: InputMaybe<Scalars["Boolean"]>;
  endTime?: InputMaybe<Scalars["String"]>;
  ethnicityId?: InputMaybe<Scalars["Float"]>;
  finalDiagnosis?: InputMaybe<Scalars["String"]>;
  fundingTypeId?: InputMaybe<Scalars["Float"]>;
  gender?: InputMaybe<Scalars["String"]>;
  hospitalId?: InputMaybe<Scalars["Float"]>;
  id: Scalars["Float"];
  isCompleted?: InputMaybe<Scalars["Boolean"]>;
  mortalityClassificationId?: InputMaybe<Scalars["Float"]>;
  name?: InputMaybe<Scalars["String"]>;
  outcomeId?: InputMaybe<Scalars["Float"]>;
  pathologicalDiagnoses?: InputMaybe<Scalars["String"]>;
  preManagementDiagnosis?: InputMaybe<Scalars["String"]>;
  procedureDate?: InputMaybe<Scalars["DateTime"]>;
  prophylaxis?: InputMaybe<Scalars["String"]>;
  recognisedCoMorbidities?: InputMaybe<Scalars["String"]>;
  recurrenceDate?: InputMaybe<Scalars["DateTime"]>;
  returnToTheatreId?: InputMaybe<Scalars["Float"]>;
  rotationPeriodId?: InputMaybe<Scalars["Float"]>;
  selectedProcedures?: InputMaybe<Array<ConsultProcedureInput>>;
  setLevelId?: InputMaybe<Scalars["Float"]>;
  startTime?: InputMaybe<Scalars["String"]>;
  supervisorId?: InputMaybe<Scalars["Float"]>;
  typeOfAnaestheticId?: InputMaybe<Scalars["Float"]>;
  unplannedIcuId?: InputMaybe<Scalars["Float"]>;
  unplannedReadmissionId?: InputMaybe<Scalars["Float"]>;
  urn?: InputMaybe<Scalars["String"]>;
  woundInfectionRiskId?: InputMaybe<Scalars["Float"]>;
};

/** Input for updating a supervisor */
export type UpdateHospitalInput = {
  id: Scalars["Float"];
  name?: InputMaybe<Scalars["String"]>;
  urnMask?: InputMaybe<Scalars["String"]>;
};

/** Input for updating a users password */
export type UpdatePasswordInput = {
  currentPassword: Scalars["String"];
  newPassword: Scalars["String"];
};

/** Input for updating procedure by an admin */
export type UpdateProcedureInput = {
  id: Scalars["Float"];
  name?: InputMaybe<Scalars["String"]>;
  typeId?: InputMaybe<Scalars["Float"]>;
};

/** Input for updating a procedure by an admin */
export type UpdateProcedureTypeInput = {
  id: Scalars["Float"];
  name?: InputMaybe<Scalars["String"]>;
};

/** Input for updating a profile by the user */
export type UpdateProfileInput = {
  email?: InputMaybe<Scalars["String"]>;
  firstName?: InputMaybe<Scalars["String"]>;
  lastName?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
};

/** Input for updating a Rotation */
export type UpdateRotationInput = {
  endDate?: InputMaybe<Scalars["DateTime"]>;
  hospitalId?: InputMaybe<Scalars["Float"]>;
  id: Scalars["Float"];
  name?: InputMaybe<Scalars["String"]>;
  setLevelId?: InputMaybe<Scalars["Float"]>;
  startDate?: InputMaybe<Scalars["DateTime"]>;
  supervisorIds?: InputMaybe<Array<Scalars["Float"]>>;
};

/** Input for updating a supervisor */
export type UpdateSupervisorInput = {
  id: Scalars["Float"];
  name?: InputMaybe<Scalars["String"]>;
};

/** Input for updating a user by an admin */
export type UpdateUserInput = {
  email?: InputMaybe<Scalars["String"]>;
  firstName?: InputMaybe<Scalars["String"]>;
  id: Scalars["Float"];
  lastName?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
};

/** The user model */
export type User = {
  __typename?: "User";
  consults?: Maybe<Array<Consult>>;
  createdAt: Scalars["DateTime"];
  deletedAt: Scalars["DateTime"];
  email: Scalars["String"];
  firstName: Scalars["String"];
  hospitals?: Maybe<Array<Hospital>>;
  id: Scalars["Float"];
  lastName: Scalars["String"];
  role: UserRole;
  rotations?: Maybe<Array<Rotation>>;
  supervisors?: Maybe<Array<Supervisor>>;
  updatedAt: Scalars["DateTime"];
};

/** Input for viewing a user */
export type UserInput = {
  id: Scalars["ID"];
};

/** The basic roles a user can have */
export enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
}

/** The Wound Infection Risk model */
export type WoundInfectionRisk = {
  __typename?: "WoundInfectionRisk";
  consults?: Maybe<Array<Consult>>;
  createdAt: Scalars["DateTime"];
  deletedAt: Scalars["DateTime"];
  id: Scalars["Float"];
  name: Scalars["String"];
  updatedAt: Scalars["DateTime"];
};

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;

export type LoginMutation = {
  __typename?: "Mutation";
  login: {
    __typename?: "Token";
    firstName: string;
    id: number;
    lastName: string;
    role: UserRole;
    token: string;
  };
};

export type ForgotPasswordMutationVariables = Exact<{
  input: ForgotPasswordInput;
}>;

export type ForgotPasswordMutation = {
  __typename?: "Mutation";
  forgotPassword: boolean;
};

export type ResetPasswordMutationVariables = Exact<{
  input: ResetPasswordInput;
}>;

export type ResetPasswordMutation = {
  __typename?: "Mutation";
  resetPassword: boolean;
};

export type CreateProcedureMutationVariables = Exact<{
  input: CreateProcedureInput;
}>;

export type CreateProcedureMutation = {
  __typename?: "Mutation";
  createProcedure: { __typename?: "Procedure"; id: number; name: string };
};

export type CreateHospitalMutationVariables = Exact<{
  input: CreateHospitalInput;
}>;

export type CreateHospitalMutation = {
  __typename?: "Mutation";
  createHospital: { __typename?: "Hospital"; id: number; name: string };
};

export type CreateSupervisorMutationVariables = Exact<{
  input: CreateSupervisorInput;
}>;

export type CreateSupervisorMutation = {
  __typename?: "Mutation";
  createSupervisor: { __typename?: "Supervisor"; id: number; name: string };
};

export type CreateRotationMutationVariables = Exact<{
  input: CreateRotationInput;
}>;

export type CreateRotationMutation = {
  __typename?: "Mutation";
  createRotation: { __typename?: "Rotation"; id: number; name: string };
};

export type CreateProcedureTypeMutationVariables = Exact<{
  input: CreateProcedureTypeInput;
}>;

export type CreateProcedureTypeMutation = {
  __typename?: "Mutation";
  createProcedureType: {
    __typename?: "ProcedureType";
    id: number;
    name: string;
  };
};

export type CreateConsultMutationVariables = Exact<{
  input: CreateConsultInput;
}>;

export type CreateConsultMutation = {
  __typename?: "Mutation";
  createConsult: {
    __typename?: "Consult";
    id: number;
    name: string;
    urn: string;
    userId: number;
    procedureDate?: any | null;
    startTime?: any | null;
    endTime?: any | null;
    gender?: string | null;
    admissionDate?: any | null;
    dateOfBirth?: any | null;
    patientAge?: number | null;
    diagnosisDate?: any | null;
    preManagementDiagnosis?: string | null;
    recognisedCoMorbidities?: string | null;
    prophylaxis?: string | null;
    finalDiagnosis?: string | null;
    pathologicalDiagnoses?: string | null;
    dischargeDate?: any | null;
    recurrenceDate?: any | null;
    discussedAtMdm?: boolean | null;
    comments?: string | null;
    createdAt: any;
    updatedAt?: any | null;
    deletedAt?: any | null;
    hospital?: { __typename?: "Hospital"; id: number; name: string } | null;
    rotationPeriod: { __typename?: "Rotation"; id: number; name: string };
    setLevel: { __typename?: "SetLevel"; id: number; name: string };
    supervisor?: { __typename?: "Supervisor"; id: number; name: string } | null;
    ethnicity?: { __typename?: "Ethnicity"; id: number; name: string } | null;
    procedureDuration?: {
      __typename?: "CaseDuration";
      hours: number;
      minutes: number;
    } | null;
    admissionCategory?: {
      __typename?: "AdmissionCategory";
      id: number;
      name: string;
    } | null;
    unplannedReadmission?: {
      __typename?: "UnplannedReadmission";
      id: number;
      name: string;
    } | null;
    fundingType?: {
      __typename?: "FundingType";
      id: number;
      name: string;
    } | null;
    asaGrade?: { __typename?: "AsaGrade"; id: number; name: string } | null;
    woundInfectionRisk?: {
      __typename?: "WoundInfectionRisk";
      id: number;
      name: string;
    } | null;
    typeOfAnaesthetic?: {
      __typename?: "TypeOfAnaesthetic";
      id: number;
      name: string;
    } | null;
    unplannedIcu?: {
      __typename?: "UnplannedIcu";
      id: number;
      name: string;
    } | null;
    returnToTheatre?: {
      __typename?: "ReturnToTheatre";
      id: number;
      name: string;
    } | null;
    outcome?: { __typename?: "Outcome"; id: number; name: string } | null;
    mortalityClassification?: {
      __typename?: "MortalityClassification";
      id: number;
      name: string;
    } | null;
    user: {
      __typename?: "User";
      id: number;
      firstName: string;
      lastName: string;
    };
    procedures: Array<{
      __typename?: "ConsultProcedure";
      id: number;
      procedure: {
        __typename?: "Procedure";
        id: number;
        name: string;
        type: { __typename?: "ProcedureType"; id: number; name: string };
      };
    }>;
  };
};

export type UpdateProcedureMutationVariables = Exact<{
  input: UpdateProcedureInput;
}>;

export type UpdateProcedureMutation = {
  __typename?: "Mutation";
  updateProcedure: { __typename?: "Procedure"; id: number; name: string };
};

export type UpdateProcedureTypeMutationVariables = Exact<{
  input: UpdateProcedureTypeInput;
}>;

export type UpdateProcedureTypeMutation = {
  __typename?: "Mutation";
  updateProcedureType: {
    __typename?: "ProcedureType";
    id: number;
    name: string;
  };
};

export type UpdateUserMutationVariables = Exact<{
  input: UpdateUserInput;
}>;

export type UpdateUserMutation = {
  __typename?: "Mutation";
  updateUser: { __typename?: "User"; id: number };
};

export type UpdateProfileMutationVariables = Exact<{
  input: UpdateProfileInput;
}>;

export type UpdateProfileMutation = {
  __typename?: "Mutation";
  updateProfile: {
    __typename?: "User";
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  };
};

export type UpdatePasswordMutationVariables = Exact<{
  input: UpdatePasswordInput;
}>;

export type UpdatePasswordMutation = {
  __typename?: "Mutation";
  updatePassword: {
    __typename?: "User";
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  };
};

export type UpdateHospitalMutationVariables = Exact<{
  input: UpdateHospitalInput;
}>;

export type UpdateHospitalMutation = {
  __typename?: "Mutation";
  updateHospital: {
    __typename?: "Hospital";
    id: number;
    name: string;
    urnMask?: string | null;
  };
};

export type UpdateSupervisorMutationVariables = Exact<{
  input: UpdateSupervisorInput;
}>;

export type UpdateSupervisorMutation = {
  __typename?: "Mutation";
  updateSupervisor: { __typename?: "Supervisor"; id: number; name: string };
};

export type UpdateRotationMutationVariables = Exact<{
  input: UpdateRotationInput;
}>;

export type UpdateRotationMutation = {
  __typename?: "Mutation";
  updateRotation: {
    __typename?: "Rotation";
    id: number;
    name: string;
    startDate: any;
    endDate: any;
    hospitalId: number;
    setLevel: { __typename?: "SetLevel"; id: number; name: string };
    hospital: { __typename?: "Hospital"; id: number; name: string };
    supervisors: Array<{ __typename?: "Supervisor"; id: number; name: string }>;
  };
};

export type UpdateConsultMutationVariables = Exact<{
  input: UpdateConsultInput;
}>;

export type UpdateConsultMutation = {
  __typename?: "Mutation";
  updateConsult: {
    __typename?: "Consult";
    id: number;
    name: string;
    urn: string;
    userId: number;
    procedureDate?: any | null;
    startTime?: any | null;
    endTime?: any | null;
    gender?: string | null;
    admissionDate?: any | null;
    dateOfBirth?: any | null;
    patientAge?: number | null;
    diagnosisDate?: any | null;
    preManagementDiagnosis?: string | null;
    recognisedCoMorbidities?: string | null;
    prophylaxis?: string | null;
    finalDiagnosis?: string | null;
    pathologicalDiagnoses?: string | null;
    dischargeDate?: any | null;
    recurrenceDate?: any | null;
    discussedAtMdm?: boolean | null;
    comments?: string | null;
    createdAt: any;
    updatedAt?: any | null;
    deletedAt?: any | null;
    hospital?: { __typename?: "Hospital"; id: number; name: string } | null;
    rotationPeriod: { __typename?: "Rotation"; id: number; name: string };
    setLevel: { __typename?: "SetLevel"; id: number; name: string };
    supervisor?: { __typename?: "Supervisor"; id: number; name: string } | null;
    ethnicity?: { __typename?: "Ethnicity"; id: number; name: string } | null;
    procedureDuration?: {
      __typename?: "CaseDuration";
      hours: number;
      minutes: number;
    } | null;
    admissionCategory?: {
      __typename?: "AdmissionCategory";
      id: number;
      name: string;
    } | null;
    unplannedReadmission?: {
      __typename?: "UnplannedReadmission";
      id: number;
      name: string;
    } | null;
    fundingType?: {
      __typename?: "FundingType";
      id: number;
      name: string;
    } | null;
    asaGrade?: { __typename?: "AsaGrade"; id: number; name: string } | null;
    woundInfectionRisk?: {
      __typename?: "WoundInfectionRisk";
      id: number;
      name: string;
    } | null;
    typeOfAnaesthetic?: {
      __typename?: "TypeOfAnaesthetic";
      id: number;
      name: string;
    } | null;
    unplannedIcu?: {
      __typename?: "UnplannedIcu";
      id: number;
      name: string;
    } | null;
    returnToTheatre?: {
      __typename?: "ReturnToTheatre";
      id: number;
      name: string;
    } | null;
    outcome?: { __typename?: "Outcome"; id: number; name: string } | null;
    mortalityClassification?: {
      __typename?: "MortalityClassification";
      id: number;
      name: string;
    } | null;
    user: {
      __typename?: "User";
      id: number;
      firstName: string;
      lastName: string;
    };
    procedures: Array<{
      __typename?: "ConsultProcedure";
      id: number;
      procedure: {
        __typename?: "Procedure";
        id: number;
        name: string;
        type: { __typename?: "ProcedureType"; id: number; name: string };
      };
    }>;
  };
};

export type RegisterMutationVariables = Exact<{
  input: RegisterInput;
}>;

export type RegisterMutation = {
  __typename?: "Mutation";
  register: {
    __typename?: "Token";
    firstName: string;
    id: number;
    lastName: string;
    role: UserRole;
    token: string;
  };
};

export type DeleteConsultMutationVariables = Exact<{
  input: DeleteConsultInput;
}>;

export type DeleteConsultMutation = {
  __typename?: "Mutation";
  deleteConsult: { __typename?: "Consult"; id: number };
};

export type DeleteHospitalMutationVariables = Exact<{
  input: DeleteHospitalInput;
}>;

export type DeleteHospitalMutation = {
  __typename?: "Mutation";
  deleteHospital: { __typename?: "Hospital"; id: number };
};

export type DeleteSupervisorMutationVariables = Exact<{
  input: DeleteSupervisorInput;
}>;

export type DeleteSupervisorMutation = {
  __typename?: "Mutation";
  deleteSupervisor: { __typename?: "Supervisor"; id: number };
};

export type DeleteProcedureMutationVariables = Exact<{
  input: DeleteProcedureInput;
}>;

export type DeleteProcedureMutation = {
  __typename?: "Mutation";
  deleteProcedure: { __typename?: "Procedure"; id: number };
};

export type DeleteRotationMutationVariables = Exact<{
  input: DeleteRotationInput;
}>;

export type DeleteRotationMutation = {
  __typename?: "Mutation";
  deleteRotation: { __typename?: "Rotation"; id: number };
};

export type DeleteProcedureTypeMutationVariables = Exact<{
  input: DeleteProcedureTypeInput;
}>;

export type DeleteProcedureTypeMutation = {
  __typename?: "Mutation";
  deleteProcedureType: { __typename?: "ProcedureType"; id: number };
};

export type DeleteUserMutationVariables = Exact<{
  input: DeleteUserInput;
}>;

export type DeleteUserMutation = {
  __typename?: "Mutation";
  deleteUser: { __typename?: "User"; id: number };
};

export type ImageUploadMutationVariables = Exact<{
  input: ImageUploadInput;
}>;

export type ImageUploadMutation = {
  __typename?: "Mutation";
  imageUpload: {
    __typename?: "RecognisedText";
    name?: string | null;
    urn?: string | null;
    dateOfBirth?: string | null;
  };
};

export type AllConsultsQueryVariables = Exact<{ [key: string]: never }>;

export type AllConsultsQuery = {
  __typename?: "Query";
  allConsults: Array<{
    __typename?: "Consult";
    id: number;
    name: string;
    procedureDate?: any | null;
    isCompleted?: boolean | null;
    urn: string;
    hospital?: { __typename?: "Hospital"; id: number; name: string } | null;
  }>;
};

export type AllProceduresQueryVariables = Exact<{ [key: string]: never }>;

export type AllProceduresQuery = {
  __typename?: "Query";
  allProcedures: Array<{
    __typename?: "Procedure";
    id: number;
    name: string;
    type: { __typename?: "ProcedureType"; id: number; name: string };
  }>;
};

export type AllProcedureTypesQueryVariables = Exact<{ [key: string]: never }>;

export type AllProcedureTypesQuery = {
  __typename?: "Query";
  allProcedureTypes: Array<{
    __typename?: "ProcedureType";
    id: number;
    name: string;
  }>;
};

export type SearchQueryVariables = Exact<{
  input: SearchInput;
}>;

export type SearchQuery = {
  __typename?: "Query";
  search: Array<{
    __typename?: "Consult";
    id: number;
    name: string;
    urn: string;
  }>;
};

export type AllRotationsQueryVariables = Exact<{ [key: string]: never }>;

export type AllRotationsQuery = {
  __typename?: "Query";
  allRotations: Array<{
    __typename?: "Rotation";
    id: number;
    name: string;
    startDate: any;
    endDate: any;
    setLevel: { __typename?: "SetLevel"; id: number; name: string };
    hospital: {
      __typename?: "Hospital";
      id: number;
      name: string;
      urnMask?: string | null;
    };
    supervisors: Array<{ __typename?: "Supervisor"; id: number; name: string }>;
  }>;
};

export type ProcedureQueryVariables = Exact<{
  input: ProcedureInput;
}>;

export type ProcedureQuery = {
  __typename?: "Query";
  procedure: {
    __typename?: "Procedure";
    id: number;
    name: string;
    type: { __typename?: "ProcedureType"; id: number; name: string };
  };
};

export type ConsultQueryVariables = Exact<{
  input: ConsultInput;
}>;

export type ConsultQuery = {
  __typename?: "Query";
  consult: {
    __typename?: "Consult";
    id: number;
    name: string;
    urn: string;
    userId: number;
    hospitalId: number;
    supervisorId: number;
    setLevelId: number;
    admissionCategoryId?: number | null;
    ethnicityId?: number | null;
    unplannedReadmissionId?: number | null;
    fundingTypeId?: number | null;
    asaGradeId?: number | null;
    woundInfectionRiskId?: number | null;
    typeOfAnaestheticId?: number | null;
    unplannedIcuId?: number | null;
    returnToTheatreId?: number | null;
    outcomeId?: number | null;
    mortalityClassificationId?: number | null;
    procedureDate?: any | null;
    startTime?: any | null;
    endTime?: any | null;
    gender?: string | null;
    admissionDate?: any | null;
    dateOfBirth?: any | null;
    patientAge?: number | null;
    diagnosisDate?: any | null;
    preManagementDiagnosis?: string | null;
    recognisedCoMorbidities?: string | null;
    prophylaxis?: string | null;
    finalDiagnosis?: string | null;
    pathologicalDiagnoses?: string | null;
    isCompleted?: boolean | null;
    dischargeDate?: any | null;
    recurrenceDate?: any | null;
    discussedAtMdm?: boolean | null;
    comments?: string | null;
    createdAt: any;
    updatedAt?: any | null;
    deletedAt?: any | null;
    rotationPeriod: { __typename?: "Rotation"; id: number; name: string };
    setLevel: { __typename?: "SetLevel"; id: number; name: string };
    hospital?: { __typename?: "Hospital"; id: number; name: string } | null;
    supervisor?: { __typename?: "Supervisor"; id: number; name: string } | null;
    user: {
      __typename?: "User";
      id: number;
      firstName: string;
      lastName: string;
    };
    procedureDuration?: {
      __typename?: "CaseDuration";
      hours: number;
      minutes: number;
    } | null;
    admissionCategory?: {
      __typename?: "AdmissionCategory";
      id: number;
      name: string;
    } | null;
    ethnicity?: { __typename?: "Ethnicity"; id: number; name: string } | null;
    unplannedReadmission?: {
      __typename?: "UnplannedReadmission";
      id: number;
      name: string;
    } | null;
    fundingType?: {
      __typename?: "FundingType";
      id: number;
      name: string;
    } | null;
    asaGrade?: { __typename?: "AsaGrade"; id: number; name: string } | null;
    woundInfectionRisk?: {
      __typename?: "WoundInfectionRisk";
      id: number;
      name: string;
    } | null;
    typeOfAnaesthetic?: {
      __typename?: "TypeOfAnaesthetic";
      id: number;
      name: string;
    } | null;
    unplannedIcu?: {
      __typename?: "UnplannedIcu";
      id: number;
      name: string;
    } | null;
    returnToTheatre?: {
      __typename?: "ReturnToTheatre";
      id: number;
      name: string;
    } | null;
    outcome?: { __typename?: "Outcome"; id: number; name: string } | null;
    mortalityClassification?: {
      __typename?: "MortalityClassification";
      id: number;
      name: string;
    } | null;
    procedures: Array<{
      __typename?: "ConsultProcedure";
      id: number;
      supervisionLevel: {
        __typename?: "SupervisionLevel";
        id: number;
        name: string;
      };
      procedure: {
        __typename?: "Procedure";
        id: number;
        name: string;
        type: { __typename?: "ProcedureType"; id: number; name: string };
      };
    }>;
  };
};

export type AllUsersQueryVariables = Exact<{ [key: string]: never }>;

export type AllUsersQuery = {
  __typename?: "Query";
  allUsers: Array<{
    __typename?: "User";
    email: string;
    firstName: string;
    id: number;
    lastName: string;
    role: UserRole;
  }>;
};

export type ProfileQueryVariables = Exact<{ [key: string]: never }>;

export type ProfileQuery = {
  __typename?: "Query";
  profile: {
    __typename?: "User";
    email: string;
    firstName: string;
    id: number;
    lastName: string;
    role: UserRole;
  };
};

export type AllSupervisorsQueryVariables = Exact<{ [key: string]: never }>;

export type AllSupervisorsQuery = {
  __typename?: "Query";
  allSupervisors: Array<{
    __typename?: "Supervisor";
    id: number;
    name: string;
  }>;
};

export type SupervisorQueryVariables = Exact<{
  input: SupervisorInput;
}>;

export type SupervisorQuery = {
  __typename?: "Query";
  supervisor: { __typename?: "Supervisor"; id: number; name: string };
};

export type RotationQueryVariables = Exact<{
  input: RotationInput;
}>;

export type RotationQuery = {
  __typename?: "Query";
  rotation: {
    __typename?: "Rotation";
    id: number;
    name: string;
    startDate: any;
    endDate: any;
    hospitalId: number;
    setLevel: { __typename?: "SetLevel"; id: number; name: string };
    hospital: {
      __typename?: "Hospital";
      id: number;
      name: string;
      urnMask?: string | null;
    };
    supervisors: Array<{ __typename?: "Supervisor"; id: number; name: string }>;
  };
};

export type AllHospitalsQueryVariables = Exact<{ [key: string]: never }>;

export type AllHospitalsQuery = {
  __typename?: "Query";
  allHospitals: Array<{
    __typename?: "Hospital";
    id: number;
    name: string;
    urnMask?: string | null;
  }>;
};

export type HospitalQueryVariables = Exact<{
  input: HospitalInput;
}>;

export type HospitalQuery = {
  __typename?: "Query";
  hospital: {
    __typename?: "Hospital";
    id: number;
    name: string;
    urnMask?: string | null;
  };
};

export type CurrentRotationQueryVariables = Exact<{ [key: string]: never }>;

export type CurrentRotationQuery = {
  __typename?: "Query";
  currentRotation: {
    __typename?: "Rotation";
    id: number;
    name: string;
    startDate: any;
    endDate: any;
    setLevel: { __typename?: "SetLevel"; id: number; name: string };
    hospital: { __typename?: "Hospital"; id: number; name: string };
  };
};

export type AllAdmissionCategoriesQueryVariables = Exact<{
  [key: string]: never;
}>;

export type AllAdmissionCategoriesQuery = {
  __typename?: "Query";
  allAdmissionCategories: Array<{
    __typename?: "AdmissionCategory";
    id: number;
    name: string;
  }>;
};

export type AllEthnicitiesQueryVariables = Exact<{ [key: string]: never }>;

export type AllEthnicitiesQuery = {
  __typename?: "Query";
  allEthnicities: Array<{ __typename?: "Ethnicity"; id: number; name: string }>;
};

export type AllSupervisionLevelsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type AllSupervisionLevelsQuery = {
  __typename?: "Query";
  allSupervisionLevels: Array<{
    __typename?: "SupervisionLevel";
    id: number;
    name: string;
  }>;
};

export type AllUnplannedReadmissionsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type AllUnplannedReadmissionsQuery = {
  __typename?: "Query";
  allUnplannedReadmissions: Array<{
    __typename?: "UnplannedReadmission";
    id: number;
    name: string;
  }>;
};

export type AllFundingTypesQueryVariables = Exact<{ [key: string]: never }>;

export type AllFundingTypesQuery = {
  __typename?: "Query";
  allFundingTypes: Array<{
    __typename?: "FundingType";
    id: number;
    name: string;
  }>;
};

export type AllSetLevelsQueryVariables = Exact<{ [key: string]: never }>;

export type AllSetLevelsQuery = {
  __typename?: "Query";
  allSetLevels: Array<{ __typename?: "SetLevel"; id: number; name: string }>;
};

export type AllAsaGradesQueryVariables = Exact<{ [key: string]: never }>;

export type AllAsaGradesQuery = {
  __typename?: "Query";
  allAsaGrades: Array<{ __typename?: "AsaGrade"; id: number; name: string }>;
};

export type AllWoundInfectionRisksQueryVariables = Exact<{
  [key: string]: never;
}>;

export type AllWoundInfectionRisksQuery = {
  __typename?: "Query";
  allWoundInfectionRisks: Array<{
    __typename?: "WoundInfectionRisk";
    id: number;
    name: string;
  }>;
};

export type AllTypeOfAnaestheticsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type AllTypeOfAnaestheticsQuery = {
  __typename?: "Query";
  allTypeOfAnaesthetics: Array<{
    __typename?: "TypeOfAnaesthetic";
    id: number;
    name: string;
  }>;
};

export type AllUnplannedIcusQueryVariables = Exact<{ [key: string]: never }>;

export type AllUnplannedIcusQuery = {
  __typename?: "Query";
  allUnplannedIcus: Array<{
    __typename?: "UnplannedIcu";
    id: number;
    name: string;
  }>;
};

export type AllReturnToTheatresQueryVariables = Exact<{ [key: string]: never }>;

export type AllReturnToTheatresQuery = {
  __typename?: "Query";
  allReturnToTheatres: Array<{
    __typename?: "ReturnToTheatre";
    id: number;
    name: string;
  }>;
};

export type AllOutcomesQueryVariables = Exact<{ [key: string]: never }>;

export type AllOutcomesQuery = {
  __typename?: "Query";
  allOutcomes: Array<{ __typename?: "Outcome"; id: number; name: string }>;
};

export type AllMortalityClassificationsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type AllMortalityClassificationsQuery = {
  __typename?: "Query";
  allMortalityClassifications: Array<{
    __typename?: "MortalityClassification";
    id: number;
    name: string;
  }>;
};

export type FundingTypeStatisticsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type FundingTypeStatisticsQuery = {
  __typename?: "Query";
  allFundingTypes: Array<{
    __typename?: "FundingType";
    id: number;
    name: string;
    totalConsults: number;
  }>;
};

export type SupervisionLevelStatisticsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type SupervisionLevelStatisticsQuery = {
  __typename?: "Query";
  allSupervisionLevels: Array<{
    __typename?: "SupervisionLevel";
    id: number;
    name: string;
    totalConsults: number;
  }>;
};

export type ProcedureTopicStatisticsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type ProcedureTopicStatisticsQuery = {
  __typename?: "Query";
  allProcedureTopics: Array<{
    __typename?: "ProcedureTopic";
    id: number;
    name: string;
    shortName: string;
    totalConsults: number;
  }>;
};

export type ProcedureTypeStatisticsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type ProcedureTypeStatisticsQuery = {
  __typename?: "Query";
  allProcedureTypes: Array<{
    __typename?: "ProcedureType";
    id: number;
    name: string;
    totalConsults: number;
  }>;
};

export type TotalConsultsQueryVariables = Exact<{ [key: string]: never }>;

export type TotalConsultsQuery = {
  __typename?: "Query";
  totalConsults: number;
};

export type ProcedureLogbookQueryVariables = Exact<{ [key: string]: never }>;

export type ProcedureLogbookQuery = {
  __typename?: "Query";
  allProcedures: Array<{
    __typename?: "Procedure";
    id: number;
    name: string;
    totalConsults: number;
    totalPrimaryConsults: number;
    totalSecondaryConsults: number;
    totalAssistantConsults: number;
  }>;
};

export const LoginDocument = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      firstName
      id
      lastName
      role
      token
    }
  }
`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
}
export const ForgotPasswordDocument = gql`
  mutation ForgotPassword($input: ForgotPasswordInput!) {
    forgotPassword(input: $input)
  }
`;

export function useForgotPasswordMutation() {
  return Urql.useMutation<
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables
  >(ForgotPasswordDocument);
}
export const ResetPasswordDocument = gql`
  mutation ResetPassword($input: ResetPasswordInput!) {
    resetPassword(input: $input)
  }
`;

export function useResetPasswordMutation() {
  return Urql.useMutation<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >(ResetPasswordDocument);
}
export const CreateProcedureDocument = gql`
  mutation CreateProcedure($input: CreateProcedureInput!) {
    createProcedure(input: $input) {
      id
      name
    }
  }
`;

export function useCreateProcedureMutation() {
  return Urql.useMutation<
    CreateProcedureMutation,
    CreateProcedureMutationVariables
  >(CreateProcedureDocument);
}
export const CreateHospitalDocument = gql`
  mutation CreateHospital($input: CreateHospitalInput!) {
    createHospital(input: $input) {
      id
      name
    }
  }
`;

export function useCreateHospitalMutation() {
  return Urql.useMutation<
    CreateHospitalMutation,
    CreateHospitalMutationVariables
  >(CreateHospitalDocument);
}
export const CreateSupervisorDocument = gql`
  mutation CreateSupervisor($input: CreateSupervisorInput!) {
    createSupervisor(input: $input) {
      id
      name
    }
  }
`;

export function useCreateSupervisorMutation() {
  return Urql.useMutation<
    CreateSupervisorMutation,
    CreateSupervisorMutationVariables
  >(CreateSupervisorDocument);
}
export const CreateRotationDocument = gql`
  mutation CreateRotation($input: CreateRotationInput!) {
    createRotation(input: $input) {
      id
      name
    }
  }
`;

export function useCreateRotationMutation() {
  return Urql.useMutation<
    CreateRotationMutation,
    CreateRotationMutationVariables
  >(CreateRotationDocument);
}
export const CreateProcedureTypeDocument = gql`
  mutation CreateProcedureType($input: CreateProcedureTypeInput!) {
    createProcedureType(input: $input) {
      id
      name
    }
  }
`;

export function useCreateProcedureTypeMutation() {
  return Urql.useMutation<
    CreateProcedureTypeMutation,
    CreateProcedureTypeMutationVariables
  >(CreateProcedureTypeDocument);
}
export const CreateConsultDocument = gql`
  mutation CreateConsult($input: CreateConsultInput!) {
    createConsult(input: $input) {
      id
      name
      urn
      userId
      hospital {
        id
        name
      }
      rotationPeriod {
        id
        name
      }
      setLevel {
        id
        name
      }
      procedureDate
      supervisor {
        id
        name
      }
      startTime
      endTime
      gender
      ethnicity {
        id
        name
      }
      admissionDate
      dateOfBirth
      patientAge
      procedureDuration {
        hours
        minutes
      }
      admissionCategory {
        id
        name
      }
      unplannedReadmission {
        id
        name
      }
      fundingType {
        id
        name
      }
      diagnosisDate
      preManagementDiagnosis
      recognisedCoMorbidities
      asaGrade {
        id
        name
      }
      woundInfectionRisk {
        id
        name
      }
      typeOfAnaesthetic {
        id
        name
      }
      prophylaxis
      finalDiagnosis
      pathologicalDiagnoses
      unplannedIcu {
        id
        name
      }
      returnToTheatre {
        id
        name
      }
      dischargeDate
      outcome {
        id
        name
      }
      mortalityClassification {
        id
        name
      }
      recurrenceDate
      discussedAtMdm
      comments
      user {
        id
        firstName
        lastName
      }
      createdAt
      updatedAt
      deletedAt
      procedures {
        id
        procedure {
          id
          name
          type {
            id
            name
          }
        }
      }
    }
  }
`;

export function useCreateConsultMutation() {
  return Urql.useMutation<
    CreateConsultMutation,
    CreateConsultMutationVariables
  >(CreateConsultDocument);
}
export const UpdateProcedureDocument = gql`
  mutation UpdateProcedure($input: UpdateProcedureInput!) {
    updateProcedure(input: $input) {
      id
      name
    }
  }
`;

export function useUpdateProcedureMutation() {
  return Urql.useMutation<
    UpdateProcedureMutation,
    UpdateProcedureMutationVariables
  >(UpdateProcedureDocument);
}
export const UpdateProcedureTypeDocument = gql`
  mutation UpdateProcedureType($input: UpdateProcedureTypeInput!) {
    updateProcedureType(input: $input) {
      id
      name
    }
  }
`;

export function useUpdateProcedureTypeMutation() {
  return Urql.useMutation<
    UpdateProcedureTypeMutation,
    UpdateProcedureTypeMutationVariables
  >(UpdateProcedureTypeDocument);
}
export const UpdateUserDocument = gql`
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      id
    }
  }
`;

export function useUpdateUserMutation() {
  return Urql.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(
    UpdateUserDocument
  );
}
export const UpdateProfileDocument = gql`
  mutation UpdateProfile($input: UpdateProfileInput!) {
    updateProfile(input: $input) {
      id
      firstName
      lastName
      email
    }
  }
`;

export function useUpdateProfileMutation() {
  return Urql.useMutation<
    UpdateProfileMutation,
    UpdateProfileMutationVariables
  >(UpdateProfileDocument);
}
export const UpdatePasswordDocument = gql`
  mutation UpdatePassword($input: UpdatePasswordInput!) {
    updatePassword(input: $input) {
      id
      firstName
      lastName
      email
    }
  }
`;

export function useUpdatePasswordMutation() {
  return Urql.useMutation<
    UpdatePasswordMutation,
    UpdatePasswordMutationVariables
  >(UpdatePasswordDocument);
}
export const UpdateHospitalDocument = gql`
  mutation UpdateHospital($input: UpdateHospitalInput!) {
    updateHospital(input: $input) {
      id
      name
      urnMask
    }
  }
`;

export function useUpdateHospitalMutation() {
  return Urql.useMutation<
    UpdateHospitalMutation,
    UpdateHospitalMutationVariables
  >(UpdateHospitalDocument);
}
export const UpdateSupervisorDocument = gql`
  mutation UpdateSupervisor($input: UpdateSupervisorInput!) {
    updateSupervisor(input: $input) {
      id
      name
    }
  }
`;

export function useUpdateSupervisorMutation() {
  return Urql.useMutation<
    UpdateSupervisorMutation,
    UpdateSupervisorMutationVariables
  >(UpdateSupervisorDocument);
}
export const UpdateRotationDocument = gql`
  mutation UpdateRotation($input: UpdateRotationInput!) {
    updateRotation(input: $input) {
      id
      name
      startDate
      endDate
      setLevel {
        id
        name
      }
      hospitalId
      hospital {
        id
        name
      }
      supervisors {
        id
        name
      }
    }
  }
`;

export function useUpdateRotationMutation() {
  return Urql.useMutation<
    UpdateRotationMutation,
    UpdateRotationMutationVariables
  >(UpdateRotationDocument);
}
export const UpdateConsultDocument = gql`
  mutation UpdateConsult($input: UpdateConsultInput!) {
    updateConsult(input: $input) {
      id
      name
      urn
      userId
      hospital {
        id
        name
      }
      rotationPeriod {
        id
        name
      }
      setLevel {
        id
        name
      }
      procedureDate
      supervisor {
        id
        name
      }
      startTime
      endTime
      gender
      ethnicity {
        id
        name
      }
      admissionDate
      dateOfBirth
      patientAge
      procedureDuration {
        hours
        minutes
      }
      admissionCategory {
        id
        name
      }
      unplannedReadmission {
        id
        name
      }
      fundingType {
        id
        name
      }
      diagnosisDate
      preManagementDiagnosis
      recognisedCoMorbidities
      asaGrade {
        id
        name
      }
      woundInfectionRisk {
        id
        name
      }
      typeOfAnaesthetic {
        id
        name
      }
      prophylaxis
      finalDiagnosis
      pathologicalDiagnoses
      unplannedIcu {
        id
        name
      }
      returnToTheatre {
        id
        name
      }
      dischargeDate
      outcome {
        id
        name
      }
      mortalityClassification {
        id
        name
      }
      recurrenceDate
      discussedAtMdm
      comments
      user {
        id
        firstName
        lastName
      }
      createdAt
      updatedAt
      deletedAt
      procedures {
        id
        procedure {
          id
          name
          type {
            id
            name
          }
        }
      }
    }
  }
`;

export function useUpdateConsultMutation() {
  return Urql.useMutation<
    UpdateConsultMutation,
    UpdateConsultMutationVariables
  >(UpdateConsultDocument);
}
export const RegisterDocument = gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      firstName
      id
      lastName
      role
      token
    }
  }
`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(
    RegisterDocument
  );
}
export const DeleteConsultDocument = gql`
  mutation DeleteConsult($input: DeleteConsultInput!) {
    deleteConsult(input: $input) {
      id
    }
  }
`;

export function useDeleteConsultMutation() {
  return Urql.useMutation<
    DeleteConsultMutation,
    DeleteConsultMutationVariables
  >(DeleteConsultDocument);
}
export const DeleteHospitalDocument = gql`
  mutation DeleteHospital($input: DeleteHospitalInput!) {
    deleteHospital(input: $input) {
      id
    }
  }
`;

export function useDeleteHospitalMutation() {
  return Urql.useMutation<
    DeleteHospitalMutation,
    DeleteHospitalMutationVariables
  >(DeleteHospitalDocument);
}
export const DeleteSupervisorDocument = gql`
  mutation DeleteSupervisor($input: DeleteSupervisorInput!) {
    deleteSupervisor(input: $input) {
      id
    }
  }
`;

export function useDeleteSupervisorMutation() {
  return Urql.useMutation<
    DeleteSupervisorMutation,
    DeleteSupervisorMutationVariables
  >(DeleteSupervisorDocument);
}
export const DeleteProcedureDocument = gql`
  mutation DeleteProcedure($input: DeleteProcedureInput!) {
    deleteProcedure(input: $input) {
      id
    }
  }
`;

export function useDeleteProcedureMutation() {
  return Urql.useMutation<
    DeleteProcedureMutation,
    DeleteProcedureMutationVariables
  >(DeleteProcedureDocument);
}
export const DeleteRotationDocument = gql`
  mutation DeleteRotation($input: DeleteRotationInput!) {
    deleteRotation(input: $input) {
      id
    }
  }
`;

export function useDeleteRotationMutation() {
  return Urql.useMutation<
    DeleteRotationMutation,
    DeleteRotationMutationVariables
  >(DeleteRotationDocument);
}
export const DeleteProcedureTypeDocument = gql`
  mutation DeleteProcedureType($input: DeleteProcedureTypeInput!) {
    deleteProcedureType(input: $input) {
      id
    }
  }
`;

export function useDeleteProcedureTypeMutation() {
  return Urql.useMutation<
    DeleteProcedureTypeMutation,
    DeleteProcedureTypeMutationVariables
  >(DeleteProcedureTypeDocument);
}
export const DeleteUserDocument = gql`
  mutation DeleteUser($input: DeleteUserInput!) {
    deleteUser(input: $input) {
      id
    }
  }
`;

export function useDeleteUserMutation() {
  return Urql.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(
    DeleteUserDocument
  );
}
export const ImageUploadDocument = gql`
  mutation ImageUpload($input: ImageUploadInput!) {
    imageUpload(input: $input) {
      name
      urn
      dateOfBirth
    }
  }
`;

export function useImageUploadMutation() {
  return Urql.useMutation<ImageUploadMutation, ImageUploadMutationVariables>(
    ImageUploadDocument
  );
}
export const AllConsultsDocument = gql`
  query AllConsults {
    allConsults {
      id
      name
      procedureDate
      hospital {
        id
        name
      }
      isCompleted
      urn
    }
  }
`;

export function useAllConsultsQuery(
  options: Omit<
    Urql.UseQueryArgs<never, AllConsultsQueryVariables>,
    "query"
  > = {}
) {
  return Urql.useQuery<AllConsultsQuery>({
    query: AllConsultsDocument,
    ...options,
  });
}
export const AllProceduresDocument = gql`
  query AllProcedures {
    allProcedures {
      id
      name
      type {
        id
        name
      }
    }
  }
`;

export function useAllProceduresQuery(
  options: Omit<
    Urql.UseQueryArgs<never, AllProceduresQueryVariables>,
    "query"
  > = {}
) {
  return Urql.useQuery<AllProceduresQuery>({
    query: AllProceduresDocument,
    ...options,
  });
}
export const AllProcedureTypesDocument = gql`
  query AllProcedureTypes {
    allProcedureTypes {
      id
      name
    }
  }
`;

export function useAllProcedureTypesQuery(
  options: Omit<
    Urql.UseQueryArgs<never, AllProcedureTypesQueryVariables>,
    "query"
  > = {}
) {
  return Urql.useQuery<AllProcedureTypesQuery>({
    query: AllProcedureTypesDocument,
    ...options,
  });
}
export const SearchDocument = gql`
  query Search($input: SearchInput!) {
    search(input: $input) {
      ... on Consult {
        id
        name
        urn
      }
    }
  }
`;

export function useSearchQuery(
  options: Omit<Urql.UseQueryArgs<never, SearchQueryVariables>, "query"> = {}
) {
  return Urql.useQuery<SearchQuery>({ query: SearchDocument, ...options });
}
export const AllRotationsDocument = gql`
  query AllRotations {
    allRotations {
      id
      name
      startDate
      endDate
      setLevel {
        id
        name
      }
      hospital {
        id
        name
        urnMask
      }
      supervisors {
        id
        name
      }
    }
  }
`;

export function useAllRotationsQuery(
  options: Omit<
    Urql.UseQueryArgs<never, AllRotationsQueryVariables>,
    "query"
  > = {}
) {
  return Urql.useQuery<AllRotationsQuery>({
    query: AllRotationsDocument,
    ...options,
  });
}
export const ProcedureDocument = gql`
  query Procedure($input: ProcedureInput!) {
    procedure(input: $input) {
      id
      name
      type {
        id
        name
      }
    }
  }
`;

export function useProcedureQuery(
  options: Omit<Urql.UseQueryArgs<never, ProcedureQueryVariables>, "query"> = {}
) {
  return Urql.useQuery<ProcedureQuery>({
    query: ProcedureDocument,
    ...options,
  });
}
export const ConsultDocument = gql`
  query Consult($input: ConsultInput!) {
    consult(input: $input) {
      id
      name
      urn
      userId
      hospitalId
      supervisorId
      setLevelId
      admissionCategoryId
      ethnicityId
      unplannedReadmissionId
      fundingTypeId
      asaGradeId
      woundInfectionRiskId
      typeOfAnaestheticId
      unplannedIcuId
      returnToTheatreId
      outcomeId
      mortalityClassificationId
      rotationPeriod {
        id
        name
      }
      setLevel {
        id
        name
      }
      procedureDate
      hospital {
        id
        name
      }
      supervisor {
        id
        name
      }
      user {
        id
        firstName
        lastName
      }
      startTime
      endTime
      gender
      admissionDate
      dateOfBirth
      patientAge
      procedureDuration {
        hours
        minutes
      }
      admissionCategory {
        id
        name
      }
      ethnicity {
        id
        name
      }
      unplannedReadmission {
        id
        name
      }
      fundingType {
        id
        name
      }
      asaGrade {
        id
        name
      }
      woundInfectionRisk {
        id
        name
      }
      typeOfAnaesthetic {
        id
        name
      }
      unplannedIcu {
        id
        name
      }
      returnToTheatre {
        id
        name
      }
      outcome {
        id
        name
      }
      mortalityClassification {
        id
        name
      }
      diagnosisDate
      preManagementDiagnosis
      recognisedCoMorbidities
      prophylaxis
      finalDiagnosis
      pathologicalDiagnoses
      isCompleted
      dischargeDate
      recurrenceDate
      discussedAtMdm
      comments
      createdAt
      updatedAt
      deletedAt
      procedures {
        id
        supervisionLevel {
          id
          name
        }
        procedure {
          id
          name
          type {
            id
            name
          }
        }
      }
    }
  }
`;

export function useConsultQuery(
  options: Omit<Urql.UseQueryArgs<never, ConsultQueryVariables>, "query"> = {}
) {
  return Urql.useQuery<ConsultQuery>({ query: ConsultDocument, ...options });
}
export const AllUsersDocument = gql`
  query AllUsers {
    allUsers {
      email
      firstName
      id
      lastName
      role
    }
  }
`;

export function useAllUsersQuery(
  options: Omit<Urql.UseQueryArgs<never, AllUsersQueryVariables>, "query"> = {}
) {
  return Urql.useQuery<AllUsersQuery>({ query: AllUsersDocument, ...options });
}
export const ProfileDocument = gql`
  query Profile {
    profile {
      email
      firstName
      id
      lastName
      role
    }
  }
`;

export function useProfileQuery(
  options: Omit<Urql.UseQueryArgs<never, ProfileQueryVariables>, "query"> = {}
) {
  return Urql.useQuery<ProfileQuery>({ query: ProfileDocument, ...options });
}
export const AllSupervisorsDocument = gql`
  query AllSupervisors {
    allSupervisors {
      id
      name
    }
  }
`;

export function useAllSupervisorsQuery(
  options: Omit<
    Urql.UseQueryArgs<never, AllSupervisorsQueryVariables>,
    "query"
  > = {}
) {
  return Urql.useQuery<AllSupervisorsQuery>({
    query: AllSupervisorsDocument,
    ...options,
  });
}
export const SupervisorDocument = gql`
  query Supervisor($input: SupervisorInput!) {
    supervisor(input: $input) {
      id
      name
    }
  }
`;

export function useSupervisorQuery(
  options: Omit<
    Urql.UseQueryArgs<never, SupervisorQueryVariables>,
    "query"
  > = {}
) {
  return Urql.useQuery<SupervisorQuery>({
    query: SupervisorDocument,
    ...options,
  });
}
export const RotationDocument = gql`
  query Rotation($input: RotationInput!) {
    rotation(input: $input) {
      id
      name
      startDate
      endDate
      setLevel {
        id
        name
      }
      hospitalId
      hospital {
        id
        name
        urnMask
      }
      supervisors {
        id
        name
      }
    }
  }
`;

export function useRotationQuery(
  options: Omit<Urql.UseQueryArgs<never, RotationQueryVariables>, "query"> = {}
) {
  return Urql.useQuery<RotationQuery>({ query: RotationDocument, ...options });
}
export const AllHospitalsDocument = gql`
  query AllHospitals {
    allHospitals {
      id
      name
      urnMask
    }
  }
`;

export function useAllHospitalsQuery(
  options: Omit<
    Urql.UseQueryArgs<never, AllHospitalsQueryVariables>,
    "query"
  > = {}
) {
  return Urql.useQuery<AllHospitalsQuery>({
    query: AllHospitalsDocument,
    ...options,
  });
}
export const HospitalDocument = gql`
  query Hospital($input: HospitalInput!) {
    hospital(input: $input) {
      id
      name
      urnMask
    }
  }
`;

export function useHospitalQuery(
  options: Omit<Urql.UseQueryArgs<never, HospitalQueryVariables>, "query"> = {}
) {
  return Urql.useQuery<HospitalQuery>({ query: HospitalDocument, ...options });
}
export const CurrentRotationDocument = gql`
  query CurrentRotation {
    currentRotation {
      id
      name
      startDate
      endDate
      setLevel {
        id
        name
      }
      hospital {
        id
        name
      }
    }
  }
`;

export function useCurrentRotationQuery(
  options: Omit<
    Urql.UseQueryArgs<never, CurrentRotationQueryVariables>,
    "query"
  > = {}
) {
  return Urql.useQuery<CurrentRotationQuery>({
    query: CurrentRotationDocument,
    ...options,
  });
}
export const AllAdmissionCategoriesDocument = gql`
  query AllAdmissionCategories {
    allAdmissionCategories {
      id
      name
    }
  }
`;

export function useAllAdmissionCategoriesQuery(
  options: Omit<
    Urql.UseQueryArgs<never, AllAdmissionCategoriesQueryVariables>,
    "query"
  > = {}
) {
  return Urql.useQuery<AllAdmissionCategoriesQuery>({
    query: AllAdmissionCategoriesDocument,
    ...options,
  });
}
export const AllEthnicitiesDocument = gql`
  query AllEthnicities {
    allEthnicities {
      id
      name
    }
  }
`;

export function useAllEthnicitiesQuery(
  options: Omit<
    Urql.UseQueryArgs<never, AllEthnicitiesQueryVariables>,
    "query"
  > = {}
) {
  return Urql.useQuery<AllEthnicitiesQuery>({
    query: AllEthnicitiesDocument,
    ...options,
  });
}
export const AllSupervisionLevelsDocument = gql`
  query AllSupervisionLevels {
    allSupervisionLevels {
      id
      name
    }
  }
`;

export function useAllSupervisionLevelsQuery(
  options: Omit<
    Urql.UseQueryArgs<never, AllSupervisionLevelsQueryVariables>,
    "query"
  > = {}
) {
  return Urql.useQuery<AllSupervisionLevelsQuery>({
    query: AllSupervisionLevelsDocument,
    ...options,
  });
}
export const AllUnplannedReadmissionsDocument = gql`
  query AllUnplannedReadmissions {
    allUnplannedReadmissions {
      id
      name
    }
  }
`;

export function useAllUnplannedReadmissionsQuery(
  options: Omit<
    Urql.UseQueryArgs<never, AllUnplannedReadmissionsQueryVariables>,
    "query"
  > = {}
) {
  return Urql.useQuery<AllUnplannedReadmissionsQuery>({
    query: AllUnplannedReadmissionsDocument,
    ...options,
  });
}
export const AllFundingTypesDocument = gql`
  query AllFundingTypes {
    allFundingTypes {
      id
      name
    }
  }
`;

export function useAllFundingTypesQuery(
  options: Omit<
    Urql.UseQueryArgs<never, AllFundingTypesQueryVariables>,
    "query"
  > = {}
) {
  return Urql.useQuery<AllFundingTypesQuery>({
    query: AllFundingTypesDocument,
    ...options,
  });
}
export const AllSetLevelsDocument = gql`
  query AllSetLevels {
    allSetLevels {
      id
      name
    }
  }
`;

export function useAllSetLevelsQuery(
  options: Omit<
    Urql.UseQueryArgs<never, AllSetLevelsQueryVariables>,
    "query"
  > = {}
) {
  return Urql.useQuery<AllSetLevelsQuery>({
    query: AllSetLevelsDocument,
    ...options,
  });
}
export const AllAsaGradesDocument = gql`
  query AllAsaGrades {
    allAsaGrades {
      id
      name
    }
  }
`;

export function useAllAsaGradesQuery(
  options: Omit<
    Urql.UseQueryArgs<never, AllAsaGradesQueryVariables>,
    "query"
  > = {}
) {
  return Urql.useQuery<AllAsaGradesQuery>({
    query: AllAsaGradesDocument,
    ...options,
  });
}
export const AllWoundInfectionRisksDocument = gql`
  query AllWoundInfectionRisks {
    allWoundInfectionRisks {
      id
      name
    }
  }
`;

export function useAllWoundInfectionRisksQuery(
  options: Omit<
    Urql.UseQueryArgs<never, AllWoundInfectionRisksQueryVariables>,
    "query"
  > = {}
) {
  return Urql.useQuery<AllWoundInfectionRisksQuery>({
    query: AllWoundInfectionRisksDocument,
    ...options,
  });
}
export const AllTypeOfAnaestheticsDocument = gql`
  query AllTypeOfAnaesthetics {
    allTypeOfAnaesthetics {
      id
      name
    }
  }
`;

export function useAllTypeOfAnaestheticsQuery(
  options: Omit<
    Urql.UseQueryArgs<never, AllTypeOfAnaestheticsQueryVariables>,
    "query"
  > = {}
) {
  return Urql.useQuery<AllTypeOfAnaestheticsQuery>({
    query: AllTypeOfAnaestheticsDocument,
    ...options,
  });
}
export const AllUnplannedIcusDocument = gql`
  query AllUnplannedIcus {
    allUnplannedIcus {
      id
      name
    }
  }
`;

export function useAllUnplannedIcusQuery(
  options: Omit<
    Urql.UseQueryArgs<never, AllUnplannedIcusQueryVariables>,
    "query"
  > = {}
) {
  return Urql.useQuery<AllUnplannedIcusQuery>({
    query: AllUnplannedIcusDocument,
    ...options,
  });
}
export const AllReturnToTheatresDocument = gql`
  query AllReturnToTheatres {
    allReturnToTheatres {
      id
      name
    }
  }
`;

export function useAllReturnToTheatresQuery(
  options: Omit<
    Urql.UseQueryArgs<never, AllReturnToTheatresQueryVariables>,
    "query"
  > = {}
) {
  return Urql.useQuery<AllReturnToTheatresQuery>({
    query: AllReturnToTheatresDocument,
    ...options,
  });
}
export const AllOutcomesDocument = gql`
  query AllOutcomes {
    allOutcomes {
      id
      name
    }
  }
`;

export function useAllOutcomesQuery(
  options: Omit<
    Urql.UseQueryArgs<never, AllOutcomesQueryVariables>,
    "query"
  > = {}
) {
  return Urql.useQuery<AllOutcomesQuery>({
    query: AllOutcomesDocument,
    ...options,
  });
}
export const AllMortalityClassificationsDocument = gql`
  query AllMortalityClassifications {
    allMortalityClassifications {
      id
      name
    }
  }
`;

export function useAllMortalityClassificationsQuery(
  options: Omit<
    Urql.UseQueryArgs<never, AllMortalityClassificationsQueryVariables>,
    "query"
  > = {}
) {
  return Urql.useQuery<AllMortalityClassificationsQuery>({
    query: AllMortalityClassificationsDocument,
    ...options,
  });
}
export const FundingTypeStatisticsDocument = gql`
  query FundingTypeStatistics {
    allFundingTypes {
      id
      name
      totalConsults
    }
  }
`;

export function useFundingTypeStatisticsQuery(
  options: Omit<
    Urql.UseQueryArgs<never, FundingTypeStatisticsQueryVariables>,
    "query"
  > = {}
) {
  return Urql.useQuery<FundingTypeStatisticsQuery>({
    query: FundingTypeStatisticsDocument,
    ...options,
  });
}
export const SupervisionLevelStatisticsDocument = gql`
  query SupervisionLevelStatistics {
    allSupervisionLevels {
      id
      name
      totalConsults
    }
  }
`;

export function useSupervisionLevelStatisticsQuery(
  options: Omit<
    Urql.UseQueryArgs<never, SupervisionLevelStatisticsQueryVariables>,
    "query"
  > = {}
) {
  return Urql.useQuery<SupervisionLevelStatisticsQuery>({
    query: SupervisionLevelStatisticsDocument,
    ...options,
  });
}
export const ProcedureTopicStatisticsDocument = gql`
  query ProcedureTopicStatistics {
    allProcedureTopics {
      id
      name
      shortName
      totalConsults
    }
  }
`;

export function useProcedureTopicStatisticsQuery(
  options: Omit<
    Urql.UseQueryArgs<never, ProcedureTopicStatisticsQueryVariables>,
    "query"
  > = {}
) {
  return Urql.useQuery<ProcedureTopicStatisticsQuery>({
    query: ProcedureTopicStatisticsDocument,
    ...options,
  });
}
export const ProcedureTypeStatisticsDocument = gql`
  query ProcedureTypeStatistics {
    allProcedureTypes {
      id
      name
      totalConsults
    }
  }
`;

export function useProcedureTypeStatisticsQuery(
  options: Omit<
    Urql.UseQueryArgs<never, ProcedureTypeStatisticsQueryVariables>,
    "query"
  > = {}
) {
  return Urql.useQuery<ProcedureTypeStatisticsQuery>({
    query: ProcedureTypeStatisticsDocument,
    ...options,
  });
}
export const TotalConsultsDocument = gql`
  query TotalConsults {
    totalConsults
  }
`;

export function useTotalConsultsQuery(
  options: Omit<
    Urql.UseQueryArgs<never, TotalConsultsQueryVariables>,
    "query"
  > = {}
) {
  return Urql.useQuery<TotalConsultsQuery>({
    query: TotalConsultsDocument,
    ...options,
  });
}
export const ProcedureLogbookDocument = gql`
  query ProcedureLogbook {
    allProcedures {
      id
      name
      totalConsults
      totalPrimaryConsults
      totalSecondaryConsults
      totalAssistantConsults
    }
  }
`;

export function useProcedureLogbookQuery(
  options: Omit<
    Urql.UseQueryArgs<never, ProcedureLogbookQueryVariables>,
    "query"
  > = {}
) {
  return Urql.useQuery<ProcedureLogbookQuery>({
    query: ProcedureLogbookDocument,
    ...options,
  });
}
