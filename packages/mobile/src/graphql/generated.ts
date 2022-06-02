import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
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
  __typename?: 'AdmissionCategory';
  consults?: Maybe<Array<Consult>>;
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

/** The ASA Grade model */
export type AsaGrade = {
  __typename?: 'AsaGrade';
  consults?: Maybe<Array<Consult>>;
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

/** Procedure Duration */
export type CaseDuration = {
  __typename?: 'CaseDuration';
  hours: Scalars['Float'];
  minutes: Scalars['Float'];
};

/** The consult/case model */
export type Consult = {
  __typename?: 'Consult';
  admissionCategory?: Maybe<AdmissionCategory>;
  admissionCategoryId?: Maybe<Scalars['Float']>;
  admissionDate?: Maybe<Scalars['DateTime']>;
  asaGrade?: Maybe<AsaGrade>;
  asaGradeId?: Maybe<Scalars['Float']>;
  comments?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  diagnosisDate?: Maybe<Scalars['DateTime']>;
  dischargeDate?: Maybe<Scalars['DateTime']>;
  discussedAtMdm?: Maybe<Scalars['Boolean']>;
  endTime?: Maybe<Scalars['LocalTime']>;
  ethnicity?: Maybe<Ethnicity>;
  ethnicityId?: Maybe<Scalars['Float']>;
  finalDiagnosis?: Maybe<Scalars['String']>;
  fundingType?: Maybe<FundingType>;
  fundingTypeId?: Maybe<Scalars['Float']>;
  gender?: Maybe<Scalars['String']>;
  hospital?: Maybe<Hospital>;
  hospitalId: Scalars['Float'];
  id: Scalars['ID'];
  isCompleted?: Maybe<Scalars['Boolean']>;
  mortalityClassification?: Maybe<MortalityClassification>;
  mortalityClassificationId?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  outcome?: Maybe<Outcome>;
  outcomeId?: Maybe<Scalars['Float']>;
  pathologicalDiagnoses?: Maybe<Scalars['String']>;
  patientAge?: Maybe<Scalars['Float']>;
  preManagementDiagnosis?: Maybe<Scalars['String']>;
  procedureDate?: Maybe<Scalars['DateTime']>;
  procedureDuration?: Maybe<CaseDuration>;
  procedures: Array<ConsultProcedure>;
  prophylaxis?: Maybe<Scalars['String']>;
  recognisedCoMorbidities?: Maybe<Scalars['String']>;
  recurrenceDate?: Maybe<Scalars['DateTime']>;
  returnToTheatre?: Maybe<ReturnToTheatre>;
  returnToTheatreId?: Maybe<Scalars['Float']>;
  rotationPeriod: Rotation;
  rotationPeriodId: Scalars['Float'];
  setLevel: SetLevel;
  setLevelId: Scalars['Float'];
  startTime?: Maybe<Scalars['LocalTime']>;
  supervisor?: Maybe<Supervisor>;
  supervisorId: Scalars['Float'];
  typeOfAnaesthetic?: Maybe<TypeOfAnaesthetic>;
  typeOfAnaestheticId?: Maybe<Scalars['Float']>;
  unplannedIcu?: Maybe<UnplannedIcu>;
  unplannedIcuId?: Maybe<Scalars['Float']>;
  unplannedReadmission?: Maybe<UnplannedReadmission>;
  unplannedReadmissionId?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  urn: Scalars['String'];
  user: User;
  userId: Scalars['Float'];
  woundInfectionRisk?: Maybe<WoundInfectionRisk>;
  woundInfectionRiskId?: Maybe<Scalars['Float']>;
};

/** Input for reading consult */
export type ConsultInput = {
  id: Scalars['ID'];
};

/** The many-to-many relation between Consult & Procedure */
export type ConsultProcedure = {
  __typename?: 'ConsultProcedure';
  consult: Consult;
  consultId: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['ID'];
  procedure: Procedure;
  procedureId: Scalars['Float'];
  supervisionLevel: SupervisionLevel;
  supervisionLevelId: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

/** Input for adding a procedure to a consult */
export type ConsultProcedureInput = {
  procedureId: Scalars['Float'];
  supervisionLevelId: Scalars['Float'];
};

/** Input for creating consult by a user */
export type CreateConsultInput = {
  admissionCategoryId?: InputMaybe<Scalars['Float']>;
  admissionDate?: InputMaybe<Scalars['DateTime']>;
  asaGradeId?: InputMaybe<Scalars['Float']>;
  comments?: InputMaybe<Scalars['String']>;
  dateOfBirth: Scalars['DateTime'];
  diagnosisDate?: InputMaybe<Scalars['DateTime']>;
  dischargeDate?: InputMaybe<Scalars['DateTime']>;
  discussedAtMdm?: InputMaybe<Scalars['Boolean']>;
  endTime?: InputMaybe<Scalars['String']>;
  ethnicityId?: InputMaybe<Scalars['Float']>;
  finalDiagnosis?: InputMaybe<Scalars['String']>;
  fundingTypeId?: InputMaybe<Scalars['Float']>;
  gender?: InputMaybe<Scalars['String']>;
  hospitalId: Scalars['Float'];
  isCompleted: Scalars['Boolean'];
  mortalityClassificationId?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  outcomeId?: InputMaybe<Scalars['Float']>;
  pathologicalDiagnoses?: InputMaybe<Scalars['String']>;
  preManagementDiagnosis?: InputMaybe<Scalars['String']>;
  procedureDate: Scalars['DateTime'];
  prophylaxis?: InputMaybe<Scalars['String']>;
  recognisedCoMorbidities?: InputMaybe<Scalars['String']>;
  recurrenceDate?: InputMaybe<Scalars['DateTime']>;
  returnToTheatreId?: InputMaybe<Scalars['Float']>;
  rotationPeriodId: Scalars['Float'];
  selectedProcedures?: InputMaybe<Array<ConsultProcedureInput>>;
  setLevelId?: InputMaybe<Scalars['Float']>;
  startTime?: InputMaybe<Scalars['String']>;
  supervisorId: Scalars['Float'];
  typeOfAnaestheticId?: InputMaybe<Scalars['Float']>;
  unplannedIcuId?: InputMaybe<Scalars['Float']>;
  unplannedReadmissionId?: InputMaybe<Scalars['Float']>;
  urn: Scalars['String'];
  woundInfectionRiskId?: InputMaybe<Scalars['Float']>;
};

/** Input for creating supervisor type */
export type CreateHospitalInput = {
  name: Scalars['String'];
  urnMask: Scalars['String'];
};

/** Input for creating procedure by an admin */
export type CreateProcedureInput = {
  name: Scalars['String'];
  typeId: Scalars['Float'];
};

/** Input for creating procedure type by an admin */
export type CreateProcedureTypeInput = {
  name: Scalars['String'];
};

/** Input for creating Rotation type */
export type CreateRotationInput = {
  endDate: Scalars['DateTime'];
  hospitalId: Scalars['Float'];
  name: Scalars['String'];
  setLevelId: Scalars['Float'];
  startDate: Scalars['DateTime'];
  supervisorIds?: InputMaybe<Array<Scalars['Float']>>;
};

/** Input for creating supervisor type */
export type CreateSupervisorInput = {
  name: Scalars['String'];
};

/** Input for deleting consult */
export type DeleteConsultInput = {
  id: Scalars['ID'];
};

/** Input for deleting a supervisor */
export type DeleteHospitalInput = {
  id: Scalars['ID'];
};

/** Input for deleting Procedure */
export type DeleteProcedureInput = {
  id: Scalars['ID'];
};

/** Input for deleting a procedure by an admin */
export type DeleteProcedureTypeInput = {
  id: Scalars['ID'];
};

/** Input for deleting a Rotation */
export type DeleteRotationInput = {
  id: Scalars['ID'];
};

/** Input for deleting a supervisor */
export type DeleteSupervisorInput = {
  id: Scalars['ID'];
};

/** Input for deleting a user */
export type DeleteUserInput = {
  id: Scalars['ID'];
};

/** The Ethnicity model */
export type Ethnicity = {
  __typename?: 'Ethnicity';
  consults?: Maybe<Array<Consult>>;
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

/** Input for sending a password recovery email */
export type ForgotPasswordInput = {
  captchaToken: Scalars['String'];
  email: Scalars['String'];
};

/** The Funding Type model */
export type FundingType = {
  __typename?: 'FundingType';
  consults?: Maybe<Array<Consult>>;
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  totalConsults: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

/** The hospital model */
export type Hospital = {
  __typename?: 'Hospital';
  consults: Array<Consult>;
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  rotations: Array<Rotation>;
  updatedAt: Scalars['DateTime'];
  urnMask?: Maybe<Scalars['String']>;
  user: User;
  userId: Scalars['Float'];
};

/** Input for viewing a supervisor */
export type HospitalInput = {
  id: Scalars['ID'];
};

/** Input for OCR patient label detection */
export type ImageUploadInput = {
  file: Scalars['Upload'];
};

/** Input for login credentials */
export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

/** The Mortality Classification model */
export type MortalityClassification = {
  __typename?: 'MortalityClassification';
  consults?: Maybe<Array<Consult>>;
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Mutation = {
  __typename?: 'Mutation';
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
  forgotPassword: Scalars['Boolean'];
  imageUpload: RecognisedText;
  login: Token;
  register: Token;
  resetPassword: Scalars['Boolean'];
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
  __typename?: 'Outcome';
  consults?: Maybe<Array<Consult>>;
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

/** The procedure model */
export type Procedure = {
  __typename?: 'Procedure';
  consults: Array<ConsultProcedure>;
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  totalAssistantConsults: Scalars['Float'];
  totalConsults: Scalars['Float'];
  totalPrimaryConsults: Scalars['Float'];
  totalSecondaryConsults: Scalars['Float'];
  type: ProcedureType;
  typeId: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

/** Input for viewing Procedure */
export type ProcedureInput = {
  id: Scalars['ID'];
};

/** The Procedure Topic Model */
export type ProcedureTopic = {
  __typename?: 'ProcedureTopic';
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  shortName: Scalars['String'];
  totalConsults: Scalars['Float'];
  types?: Maybe<Array<ProcedureType>>;
  updatedAt: Scalars['DateTime'];
};

/** The procedure type model */
export type ProcedureType = {
  __typename?: 'ProcedureType';
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  procedures: Array<Procedure>;
  topic: ProcedureTopic;
  topicId: Scalars['Float'];
  totalConsults: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

/** Input for viewing a procedure */
export type ProcedureTypeInput = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
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
  procedureType: ProcedureType;
  profile: User;
  rotation: Rotation;
  search: Array<Consult>;
  supervisor: Supervisor;
  totalConsults: Scalars['Float'];
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


export type QueryProcedureTypeArgs = {
  input: ProcedureTypeInput;
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
  __typename?: 'RecognisedText';
  dateOfBirth?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  urn?: Maybe<Scalars['String']>;
};

/** Input for registering user */
export type RegisterInput = {
  captchaToken: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};

/** Input for Resetting password */
export type ResetPasswordInput = {
  emailToken: Scalars['String'];
  id: Scalars['Float'];
  newPassword: Scalars['String'];
};

/** The Return To Theatre model */
export type ReturnToTheatre = {
  __typename?: 'ReturnToTheatre';
  consults?: Maybe<Array<Consult>>;
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

/** The rotation model */
export type Rotation = {
  __typename?: 'Rotation';
  consults?: Maybe<Array<Consult>>;
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  hospital: Hospital;
  hospitalId: Scalars['Float'];
  id: Scalars['ID'];
  name: Scalars['String'];
  setLevel: SetLevel;
  setLevelId: Scalars['Float'];
  startDate: Scalars['DateTime'];
  supervisors: Array<Supervisor>;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Float'];
};

/** Input for viewing a Rotation */
export type RotationInput = {
  id: Scalars['ID'];
};

/** Input for creating consult by a user */
export type SearchInput = {
  search: Scalars['String'];
};

/** The SET Level model */
export type SetLevel = {
  __typename?: 'SetLevel';
  consults?: Maybe<Array<Consult>>;
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  rotations?: Maybe<Array<Rotation>>;
  updatedAt: Scalars['DateTime'];
};

/** The Supervision Level model */
export type SupervisionLevel = {
  __typename?: 'SupervisionLevel';
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  procedures?: Maybe<Array<ConsultProcedure>>;
  totalConsults: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

/** The supervisor model */
export type Supervisor = {
  __typename?: 'Supervisor';
  consults: Array<Consult>;
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  rotations: Array<Rotation>;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Float'];
};

/** Input for viewing a supervisor */
export type SupervisorInput = {
  id: Scalars['ID'];
};

/** User login authentication model */
export type Token = {
  __typename?: 'Token';
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  role: UserRole;
  token: Scalars['String'];
};

/** The Type Of Anaesthetic model */
export type TypeOfAnaesthetic = {
  __typename?: 'TypeOfAnaesthetic';
  consults?: Maybe<Array<Consult>>;
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

/** The Unplanned ICU model */
export type UnplannedIcu = {
  __typename?: 'UnplannedIcu';
  consults?: Maybe<Array<Consult>>;
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

/** The Unplanned Readmission model */
export type UnplannedReadmission = {
  __typename?: 'UnplannedReadmission';
  consults?: Maybe<Array<Consult>>;
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

/** Input for updating consult */
export type UpdateConsultInput = {
  admissionCategoryId?: InputMaybe<Scalars['Float']>;
  admissionDate?: InputMaybe<Scalars['DateTime']>;
  asaGradeId?: InputMaybe<Scalars['Float']>;
  comments?: InputMaybe<Scalars['String']>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']>;
  diagnosisDate?: InputMaybe<Scalars['DateTime']>;
  dischargeDate?: InputMaybe<Scalars['DateTime']>;
  discussedAtMdm?: InputMaybe<Scalars['Boolean']>;
  endTime?: InputMaybe<Scalars['String']>;
  ethnicityId?: InputMaybe<Scalars['Float']>;
  finalDiagnosis?: InputMaybe<Scalars['String']>;
  fundingTypeId?: InputMaybe<Scalars['Float']>;
  gender?: InputMaybe<Scalars['String']>;
  hospitalId?: InputMaybe<Scalars['Float']>;
  id: Scalars['Float'];
  isCompleted?: InputMaybe<Scalars['Boolean']>;
  mortalityClassificationId?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  outcomeId?: InputMaybe<Scalars['Float']>;
  pathologicalDiagnoses?: InputMaybe<Scalars['String']>;
  preManagementDiagnosis?: InputMaybe<Scalars['String']>;
  procedureDate?: InputMaybe<Scalars['DateTime']>;
  prophylaxis?: InputMaybe<Scalars['String']>;
  recognisedCoMorbidities?: InputMaybe<Scalars['String']>;
  recurrenceDate?: InputMaybe<Scalars['DateTime']>;
  returnToTheatreId?: InputMaybe<Scalars['Float']>;
  rotationPeriodId?: InputMaybe<Scalars['Float']>;
  selectedProcedures?: InputMaybe<Array<ConsultProcedureInput>>;
  setLevelId?: InputMaybe<Scalars['Float']>;
  startTime?: InputMaybe<Scalars['String']>;
  supervisorId?: InputMaybe<Scalars['Float']>;
  typeOfAnaestheticId?: InputMaybe<Scalars['Float']>;
  unplannedIcuId?: InputMaybe<Scalars['Float']>;
  unplannedReadmissionId?: InputMaybe<Scalars['Float']>;
  urn?: InputMaybe<Scalars['String']>;
  woundInfectionRiskId?: InputMaybe<Scalars['Float']>;
};

/** Input for updating a supervisor */
export type UpdateHospitalInput = {
  id: Scalars['Float'];
  name?: InputMaybe<Scalars['String']>;
  urnMask?: InputMaybe<Scalars['String']>;
};

/** Input for updating a users password */
export type UpdatePasswordInput = {
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
};

/** Input for updating procedure by an admin */
export type UpdateProcedureInput = {
  id: Scalars['Float'];
  name?: InputMaybe<Scalars['String']>;
  typeId?: InputMaybe<Scalars['Float']>;
};

/** Input for updating a procedure by an admin */
export type UpdateProcedureTypeInput = {
  id: Scalars['Float'];
  name?: InputMaybe<Scalars['String']>;
};

/** Input for updating a profile by the user */
export type UpdateProfileInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

/** Input for updating a Rotation */
export type UpdateRotationInput = {
  endDate?: InputMaybe<Scalars['DateTime']>;
  hospitalId?: InputMaybe<Scalars['Float']>;
  id: Scalars['Float'];
  name?: InputMaybe<Scalars['String']>;
  setLevelId?: InputMaybe<Scalars['Float']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  supervisorIds?: InputMaybe<Array<Scalars['Float']>>;
};

/** Input for updating a supervisor */
export type UpdateSupervisorInput = {
  id: Scalars['Float'];
  name?: InputMaybe<Scalars['String']>;
};

/** Input for updating a user by an admin */
export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['Float'];
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

/** The user model */
export type User = {
  __typename?: 'User';
  consults?: Maybe<Array<Consult>>;
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  hospitals?: Maybe<Array<Hospital>>;
  id: Scalars['ID'];
  lastName: Scalars['String'];
  role: UserRole;
  rotations?: Maybe<Array<Rotation>>;
  supervisors?: Maybe<Array<Supervisor>>;
  updatedAt: Scalars['DateTime'];
};

/** Input for viewing a user */
export type UserInput = {
  id: Scalars['ID'];
};

/** The basic roles a user can have */
export enum UserRole {
  Admin = 'ADMIN',
  User = 'USER'
}

/** The Wound Infection Risk model */
export type WoundInfectionRisk = {
  __typename?: 'WoundInfectionRisk';
  consults?: Maybe<Array<Consult>>;
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'Token', firstName: string, id: string, lastName: string, role: UserRole, token: string } };

export type ForgotPasswordMutationVariables = Exact<{
  input: ForgotPasswordInput;
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: boolean };

export type ResetPasswordMutationVariables = Exact<{
  input: ResetPasswordInput;
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: boolean };

export type CreateProcedureMutationVariables = Exact<{
  input: CreateProcedureInput;
}>;


export type CreateProcedureMutation = { __typename?: 'Mutation', createProcedure: { __typename?: 'Procedure', id: string, name: string } };

export type CreateHospitalMutationVariables = Exact<{
  input: CreateHospitalInput;
}>;


export type CreateHospitalMutation = { __typename?: 'Mutation', createHospital: { __typename?: 'Hospital', id: string, name: string } };

export type CreateSupervisorMutationVariables = Exact<{
  input: CreateSupervisorInput;
}>;


export type CreateSupervisorMutation = { __typename?: 'Mutation', createSupervisor: { __typename?: 'Supervisor', id: string, name: string } };

export type CreateRotationMutationVariables = Exact<{
  input: CreateRotationInput;
}>;


export type CreateRotationMutation = { __typename?: 'Mutation', createRotation: { __typename?: 'Rotation', id: string, name: string } };

export type CreateProcedureTypeMutationVariables = Exact<{
  input: CreateProcedureTypeInput;
}>;


export type CreateProcedureTypeMutation = { __typename?: 'Mutation', createProcedureType: { __typename?: 'ProcedureType', id: string, name: string } };

export type CreateConsultMutationVariables = Exact<{
  input: CreateConsultInput;
}>;


export type CreateConsultMutation = { __typename?: 'Mutation', createConsult: { __typename?: 'Consult', id: string, name: string, urn: string, userId: number, procedureDate?: any | null, startTime?: any | null, endTime?: any | null, gender?: string | null, admissionDate?: any | null, dateOfBirth?: any | null, patientAge?: number | null, diagnosisDate?: any | null, preManagementDiagnosis?: string | null, recognisedCoMorbidities?: string | null, prophylaxis?: string | null, finalDiagnosis?: string | null, pathologicalDiagnoses?: string | null, dischargeDate?: any | null, recurrenceDate?: any | null, discussedAtMdm?: boolean | null, comments?: string | null, createdAt: any, updatedAt?: any | null, deletedAt?: any | null, hospital?: { __typename?: 'Hospital', id: string, name: string } | null, rotationPeriod: { __typename?: 'Rotation', id: string, name: string }, setLevel: { __typename?: 'SetLevel', id: string, name: string }, supervisor?: { __typename?: 'Supervisor', id: string, name: string } | null, ethnicity?: { __typename?: 'Ethnicity', id: string, name: string } | null, procedureDuration?: { __typename?: 'CaseDuration', hours: number, minutes: number } | null, admissionCategory?: { __typename?: 'AdmissionCategory', id: string, name: string } | null, unplannedReadmission?: { __typename?: 'UnplannedReadmission', id: string, name: string } | null, fundingType?: { __typename?: 'FundingType', id: string, name: string } | null, asaGrade?: { __typename?: 'AsaGrade', id: string, name: string } | null, woundInfectionRisk?: { __typename?: 'WoundInfectionRisk', id: string, name: string } | null, typeOfAnaesthetic?: { __typename?: 'TypeOfAnaesthetic', id: string, name: string } | null, unplannedIcu?: { __typename?: 'UnplannedIcu', id: string, name: string } | null, returnToTheatre?: { __typename?: 'ReturnToTheatre', id: string, name: string } | null, outcome?: { __typename?: 'Outcome', id: string, name: string } | null, mortalityClassification?: { __typename?: 'MortalityClassification', id: string, name: string } | null, user: { __typename?: 'User', id: string, firstName: string, lastName: string }, procedures: Array<{ __typename?: 'ConsultProcedure', id: string, procedure: { __typename?: 'Procedure', id: string, name: string, type: { __typename?: 'ProcedureType', id: string, name: string } } }> } };

export type UpdateProcedureMutationVariables = Exact<{
  input: UpdateProcedureInput;
}>;


export type UpdateProcedureMutation = { __typename?: 'Mutation', updateProcedure: { __typename?: 'Procedure', id: string, name: string } };

export type UpdateProcedureTypeMutationVariables = Exact<{
  input: UpdateProcedureTypeInput;
}>;


export type UpdateProcedureTypeMutation = { __typename?: 'Mutation', updateProcedureType: { __typename?: 'ProcedureType', id: string, name: string } };

export type UpdateUserMutationVariables = Exact<{
  input: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string } };

export type UpdateProfileMutationVariables = Exact<{
  input: UpdateProfileInput;
}>;


export type UpdateProfileMutation = { __typename?: 'Mutation', updateProfile: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string } };

export type UpdatePasswordMutationVariables = Exact<{
  input: UpdatePasswordInput;
}>;


export type UpdatePasswordMutation = { __typename?: 'Mutation', updatePassword: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string } };

export type UpdateHospitalMutationVariables = Exact<{
  input: UpdateHospitalInput;
}>;


export type UpdateHospitalMutation = { __typename?: 'Mutation', updateHospital: { __typename?: 'Hospital', id: string, name: string, urnMask?: string | null } };

export type UpdateSupervisorMutationVariables = Exact<{
  input: UpdateSupervisorInput;
}>;


export type UpdateSupervisorMutation = { __typename?: 'Mutation', updateSupervisor: { __typename?: 'Supervisor', id: string, name: string } };

export type UpdateRotationMutationVariables = Exact<{
  input: UpdateRotationInput;
}>;


export type UpdateRotationMutation = { __typename?: 'Mutation', updateRotation: { __typename?: 'Rotation', id: string, name: string, startDate: any, endDate: any, hospitalId: number, setLevel: { __typename?: 'SetLevel', id: string, name: string }, hospital: { __typename?: 'Hospital', id: string, name: string }, supervisors: Array<{ __typename?: 'Supervisor', id: string, name: string }> } };

export type UpdateConsultMutationVariables = Exact<{
  input: UpdateConsultInput;
}>;


export type UpdateConsultMutation = { __typename?: 'Mutation', updateConsult: { __typename?: 'Consult', id: string, name: string, urn: string, userId: number, procedureDate?: any | null, startTime?: any | null, endTime?: any | null, gender?: string | null, admissionDate?: any | null, dateOfBirth?: any | null, patientAge?: number | null, diagnosisDate?: any | null, preManagementDiagnosis?: string | null, recognisedCoMorbidities?: string | null, prophylaxis?: string | null, finalDiagnosis?: string | null, pathologicalDiagnoses?: string | null, dischargeDate?: any | null, recurrenceDate?: any | null, discussedAtMdm?: boolean | null, comments?: string | null, createdAt: any, updatedAt?: any | null, deletedAt?: any | null, hospital?: { __typename?: 'Hospital', id: string, name: string } | null, rotationPeriod: { __typename?: 'Rotation', id: string, name: string }, setLevel: { __typename?: 'SetLevel', id: string, name: string }, supervisor?: { __typename?: 'Supervisor', id: string, name: string } | null, ethnicity?: { __typename?: 'Ethnicity', id: string, name: string } | null, procedureDuration?: { __typename?: 'CaseDuration', hours: number, minutes: number } | null, admissionCategory?: { __typename?: 'AdmissionCategory', id: string, name: string } | null, unplannedReadmission?: { __typename?: 'UnplannedReadmission', id: string, name: string } | null, fundingType?: { __typename?: 'FundingType', id: string, name: string } | null, asaGrade?: { __typename?: 'AsaGrade', id: string, name: string } | null, woundInfectionRisk?: { __typename?: 'WoundInfectionRisk', id: string, name: string } | null, typeOfAnaesthetic?: { __typename?: 'TypeOfAnaesthetic', id: string, name: string } | null, unplannedIcu?: { __typename?: 'UnplannedIcu', id: string, name: string } | null, returnToTheatre?: { __typename?: 'ReturnToTheatre', id: string, name: string } | null, outcome?: { __typename?: 'Outcome', id: string, name: string } | null, mortalityClassification?: { __typename?: 'MortalityClassification', id: string, name: string } | null, user: { __typename?: 'User', id: string, firstName: string, lastName: string }, procedures: Array<{ __typename?: 'ConsultProcedure', id: string, procedure: { __typename?: 'Procedure', id: string, name: string, type: { __typename?: 'ProcedureType', id: string, name: string } } }> } };

export type RegisterMutationVariables = Exact<{
  input: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'Token', firstName: string, id: string, lastName: string, role: UserRole, token: string } };

export type DeleteConsultMutationVariables = Exact<{
  input: DeleteConsultInput;
}>;


export type DeleteConsultMutation = { __typename?: 'Mutation', deleteConsult: { __typename?: 'Consult', id: string } };

export type DeleteHospitalMutationVariables = Exact<{
  input: DeleteHospitalInput;
}>;


export type DeleteHospitalMutation = { __typename?: 'Mutation', deleteHospital: { __typename?: 'Hospital', id: string } };

export type DeleteSupervisorMutationVariables = Exact<{
  input: DeleteSupervisorInput;
}>;


export type DeleteSupervisorMutation = { __typename?: 'Mutation', deleteSupervisor: { __typename?: 'Supervisor', id: string } };

export type DeleteProcedureMutationVariables = Exact<{
  input: DeleteProcedureInput;
}>;


export type DeleteProcedureMutation = { __typename?: 'Mutation', deleteProcedure: { __typename?: 'Procedure', id: string } };

export type DeleteRotationMutationVariables = Exact<{
  input: DeleteRotationInput;
}>;


export type DeleteRotationMutation = { __typename?: 'Mutation', deleteRotation: { __typename?: 'Rotation', id: string } };

export type DeleteProcedureTypeMutationVariables = Exact<{
  input: DeleteProcedureTypeInput;
}>;


export type DeleteProcedureTypeMutation = { __typename?: 'Mutation', deleteProcedureType: { __typename?: 'ProcedureType', id: string } };

export type DeleteUserMutationVariables = Exact<{
  input: DeleteUserInput;
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: { __typename?: 'User', id: string } };

export type ImageUploadMutationVariables = Exact<{
  input: ImageUploadInput;
}>;


export type ImageUploadMutation = { __typename?: 'Mutation', imageUpload: { __typename?: 'RecognisedText', name?: string | null, urn?: string | null, dateOfBirth?: string | null } };

export type AllConsultsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllConsultsQuery = { __typename?: 'Query', allConsults: Array<{ __typename?: 'Consult', id: string, name: string, procedureDate?: any | null, isCompleted?: boolean | null, urn: string, hospital?: { __typename?: 'Hospital', id: string, name: string } | null }> };

export type AllProceduresQueryVariables = Exact<{ [key: string]: never; }>;


export type AllProceduresQuery = { __typename?: 'Query', allProcedures: Array<{ __typename?: 'Procedure', id: string, name: string, type: { __typename?: 'ProcedureType', id: string, name: string } }> };

export type AllProcedureTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllProcedureTypesQuery = { __typename?: 'Query', allProcedureTypes: Array<{ __typename?: 'ProcedureType', id: string, name: string }> };

export type SearchQueryVariables = Exact<{
  input: SearchInput;
}>;


export type SearchQuery = { __typename?: 'Query', search: Array<{ __typename?: 'Consult', id: string, name: string, urn: string }> };

export type AllRotationsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllRotationsQuery = { __typename?: 'Query', allRotations: Array<{ __typename?: 'Rotation', id: string, name: string, startDate: any, endDate: any, setLevel: { __typename?: 'SetLevel', id: string, name: string }, hospital: { __typename?: 'Hospital', id: string, name: string, urnMask?: string | null }, supervisors: Array<{ __typename?: 'Supervisor', id: string, name: string }> }> };

export type ProcedureQueryVariables = Exact<{
  input: ProcedureInput;
}>;


export type ProcedureQuery = { __typename?: 'Query', procedure: { __typename?: 'Procedure', id: string, name: string, type: { __typename?: 'ProcedureType', id: string, name: string } } };

export type ConsultQueryVariables = Exact<{
  input: ConsultInput;
}>;


export type ConsultQuery = { __typename?: 'Query', consult: { __typename?: 'Consult', id: string, name: string, urn: string, userId: number, hospitalId: number, supervisorId: number, setLevelId: number, admissionCategoryId?: number | null, ethnicityId?: number | null, unplannedReadmissionId?: number | null, fundingTypeId?: number | null, asaGradeId?: number | null, woundInfectionRiskId?: number | null, typeOfAnaestheticId?: number | null, unplannedIcuId?: number | null, returnToTheatreId?: number | null, outcomeId?: number | null, mortalityClassificationId?: number | null, procedureDate?: any | null, startTime?: any | null, endTime?: any | null, gender?: string | null, admissionDate?: any | null, dateOfBirth?: any | null, patientAge?: number | null, diagnosisDate?: any | null, preManagementDiagnosis?: string | null, recognisedCoMorbidities?: string | null, prophylaxis?: string | null, finalDiagnosis?: string | null, pathologicalDiagnoses?: string | null, isCompleted?: boolean | null, dischargeDate?: any | null, recurrenceDate?: any | null, discussedAtMdm?: boolean | null, comments?: string | null, createdAt: any, updatedAt?: any | null, deletedAt?: any | null, rotationPeriod: { __typename?: 'Rotation', id: string, name: string }, setLevel: { __typename?: 'SetLevel', id: string, name: string }, hospital?: { __typename?: 'Hospital', id: string, name: string } | null, supervisor?: { __typename?: 'Supervisor', id: string, name: string } | null, user: { __typename?: 'User', id: string, firstName: string, lastName: string }, procedureDuration?: { __typename?: 'CaseDuration', hours: number, minutes: number } | null, admissionCategory?: { __typename?: 'AdmissionCategory', id: string, name: string } | null, ethnicity?: { __typename?: 'Ethnicity', id: string, name: string } | null, unplannedReadmission?: { __typename?: 'UnplannedReadmission', id: string, name: string } | null, fundingType?: { __typename?: 'FundingType', id: string, name: string } | null, asaGrade?: { __typename?: 'AsaGrade', id: string, name: string } | null, woundInfectionRisk?: { __typename?: 'WoundInfectionRisk', id: string, name: string } | null, typeOfAnaesthetic?: { __typename?: 'TypeOfAnaesthetic', id: string, name: string } | null, unplannedIcu?: { __typename?: 'UnplannedIcu', id: string, name: string } | null, returnToTheatre?: { __typename?: 'ReturnToTheatre', id: string, name: string } | null, outcome?: { __typename?: 'Outcome', id: string, name: string } | null, mortalityClassification?: { __typename?: 'MortalityClassification', id: string, name: string } | null, procedures: Array<{ __typename?: 'ConsultProcedure', id: string, supervisionLevel: { __typename?: 'SupervisionLevel', id: string, name: string }, procedure: { __typename?: 'Procedure', id: string, name: string, type: { __typename?: 'ProcedureType', id: string, name: string } } }> } };

export type AllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQuery = { __typename?: 'Query', allUsers: Array<{ __typename?: 'User', email: string, firstName: string, id: string, lastName: string, role: UserRole }> };

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = { __typename?: 'Query', profile: { __typename?: 'User', id: string, email: string, firstName: string, lastName: string, role: UserRole } };

export type AllSupervisorsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllSupervisorsQuery = { __typename?: 'Query', allSupervisors: Array<{ __typename?: 'Supervisor', id: string, name: string }> };

export type SupervisorQueryVariables = Exact<{
  input: SupervisorInput;
}>;


export type SupervisorQuery = { __typename?: 'Query', supervisor: { __typename?: 'Supervisor', id: string, name: string } };

export type RotationQueryVariables = Exact<{
  input: RotationInput;
}>;


export type RotationQuery = { __typename?: 'Query', rotation: { __typename?: 'Rotation', id: string, name: string, startDate: any, endDate: any, hospitalId: number, setLevel: { __typename?: 'SetLevel', id: string, name: string }, hospital: { __typename?: 'Hospital', id: string, name: string, urnMask?: string | null }, supervisors: Array<{ __typename?: 'Supervisor', id: string, name: string }> } };

export type AllHospitalsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllHospitalsQuery = { __typename?: 'Query', allHospitals: Array<{ __typename?: 'Hospital', id: string, name: string, urnMask?: string | null }> };

export type HospitalQueryVariables = Exact<{
  input: HospitalInput;
}>;


export type HospitalQuery = { __typename?: 'Query', hospital: { __typename?: 'Hospital', id: string, name: string, urnMask?: string | null } };

export type CurrentRotationQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentRotationQuery = { __typename?: 'Query', currentRotation: { __typename?: 'Rotation', id: string, name: string, startDate: any, endDate: any, setLevel: { __typename?: 'SetLevel', id: string, name: string }, hospital: { __typename?: 'Hospital', id: string, name: string } } };

export type AllAdmissionCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllAdmissionCategoriesQuery = { __typename?: 'Query', allAdmissionCategories: Array<{ __typename?: 'AdmissionCategory', id: string, name: string }> };

export type AllEthnicitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllEthnicitiesQuery = { __typename?: 'Query', allEthnicities: Array<{ __typename?: 'Ethnicity', id: string, name: string }> };

export type AllSupervisionLevelsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllSupervisionLevelsQuery = { __typename?: 'Query', allSupervisionLevels: Array<{ __typename?: 'SupervisionLevel', id: string, name: string }> };

export type AllUnplannedReadmissionsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUnplannedReadmissionsQuery = { __typename?: 'Query', allUnplannedReadmissions: Array<{ __typename?: 'UnplannedReadmission', id: string, name: string }> };

export type AllFundingTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllFundingTypesQuery = { __typename?: 'Query', allFundingTypes: Array<{ __typename?: 'FundingType', id: string, name: string }> };

export type AllSetLevelsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllSetLevelsQuery = { __typename?: 'Query', allSetLevels: Array<{ __typename?: 'SetLevel', id: string, name: string }> };

export type AllAsaGradesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllAsaGradesQuery = { __typename?: 'Query', allAsaGrades: Array<{ __typename?: 'AsaGrade', id: string, name: string }> };

export type AllWoundInfectionRisksQueryVariables = Exact<{ [key: string]: never; }>;


export type AllWoundInfectionRisksQuery = { __typename?: 'Query', allWoundInfectionRisks: Array<{ __typename?: 'WoundInfectionRisk', id: string, name: string }> };

export type AllTypeOfAnaestheticsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTypeOfAnaestheticsQuery = { __typename?: 'Query', allTypeOfAnaesthetics: Array<{ __typename?: 'TypeOfAnaesthetic', id: string, name: string }> };

export type AllUnplannedIcusQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUnplannedIcusQuery = { __typename?: 'Query', allUnplannedIcus: Array<{ __typename?: 'UnplannedIcu', id: string, name: string }> };

export type AllReturnToTheatresQueryVariables = Exact<{ [key: string]: never; }>;


export type AllReturnToTheatresQuery = { __typename?: 'Query', allReturnToTheatres: Array<{ __typename?: 'ReturnToTheatre', id: string, name: string }> };

export type AllOutcomesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllOutcomesQuery = { __typename?: 'Query', allOutcomes: Array<{ __typename?: 'Outcome', id: string, name: string }> };

export type AllMortalityClassificationsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllMortalityClassificationsQuery = { __typename?: 'Query', allMortalityClassifications: Array<{ __typename?: 'MortalityClassification', id: string, name: string }> };

export type FundingTypeStatisticsQueryVariables = Exact<{ [key: string]: never; }>;


export type FundingTypeStatisticsQuery = { __typename?: 'Query', allFundingTypes: Array<{ __typename?: 'FundingType', id: string, name: string, totalConsults: number }> };

export type SupervisionLevelStatisticsQueryVariables = Exact<{ [key: string]: never; }>;


export type SupervisionLevelStatisticsQuery = { __typename?: 'Query', allSupervisionLevels: Array<{ __typename?: 'SupervisionLevel', id: string, name: string, totalConsults: number }> };

export type ProcedureTopicStatisticsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProcedureTopicStatisticsQuery = { __typename?: 'Query', allProcedureTopics: Array<{ __typename?: 'ProcedureTopic', id: string, name: string, shortName: string, totalConsults: number }> };

export type ProcedureTypeStatisticsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProcedureTypeStatisticsQuery = { __typename?: 'Query', allProcedureTypes: Array<{ __typename?: 'ProcedureType', id: string, name: string, totalConsults: number }> };

export type TotalConsultsQueryVariables = Exact<{ [key: string]: never; }>;


export type TotalConsultsQuery = { __typename?: 'Query', totalConsults: number };

export type ProcedureLogbookQueryVariables = Exact<{ [key: string]: never; }>;


export type ProcedureLogbookQuery = { __typename?: 'Query', allProcedures: Array<{ __typename?: 'Procedure', id: string, name: string, totalConsults: number, totalPrimaryConsults: number, totalSecondaryConsults: number, totalAssistantConsults: number }> };


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
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($input: ForgotPasswordInput!) {
  forgotPassword(input: $input)
}
    `;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, options);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($input: ResetPasswordInput!) {
  resetPassword(input: $input)
}
    `;
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const CreateProcedureDocument = gql`
    mutation CreateProcedure($input: CreateProcedureInput!) {
  createProcedure(input: $input) {
    id
    name
  }
}
    `;
export type CreateProcedureMutationFn = Apollo.MutationFunction<CreateProcedureMutation, CreateProcedureMutationVariables>;

/**
 * __useCreateProcedureMutation__
 *
 * To run a mutation, you first call `useCreateProcedureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProcedureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProcedureMutation, { data, loading, error }] = useCreateProcedureMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProcedureMutation(baseOptions?: Apollo.MutationHookOptions<CreateProcedureMutation, CreateProcedureMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProcedureMutation, CreateProcedureMutationVariables>(CreateProcedureDocument, options);
      }
export type CreateProcedureMutationHookResult = ReturnType<typeof useCreateProcedureMutation>;
export type CreateProcedureMutationResult = Apollo.MutationResult<CreateProcedureMutation>;
export type CreateProcedureMutationOptions = Apollo.BaseMutationOptions<CreateProcedureMutation, CreateProcedureMutationVariables>;
export const CreateHospitalDocument = gql`
    mutation CreateHospital($input: CreateHospitalInput!) {
  createHospital(input: $input) {
    id
    name
  }
}
    `;
export type CreateHospitalMutationFn = Apollo.MutationFunction<CreateHospitalMutation, CreateHospitalMutationVariables>;

/**
 * __useCreateHospitalMutation__
 *
 * To run a mutation, you first call `useCreateHospitalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateHospitalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createHospitalMutation, { data, loading, error }] = useCreateHospitalMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateHospitalMutation(baseOptions?: Apollo.MutationHookOptions<CreateHospitalMutation, CreateHospitalMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateHospitalMutation, CreateHospitalMutationVariables>(CreateHospitalDocument, options);
      }
export type CreateHospitalMutationHookResult = ReturnType<typeof useCreateHospitalMutation>;
export type CreateHospitalMutationResult = Apollo.MutationResult<CreateHospitalMutation>;
export type CreateHospitalMutationOptions = Apollo.BaseMutationOptions<CreateHospitalMutation, CreateHospitalMutationVariables>;
export const CreateSupervisorDocument = gql`
    mutation CreateSupervisor($input: CreateSupervisorInput!) {
  createSupervisor(input: $input) {
    id
    name
  }
}
    `;
export type CreateSupervisorMutationFn = Apollo.MutationFunction<CreateSupervisorMutation, CreateSupervisorMutationVariables>;

/**
 * __useCreateSupervisorMutation__
 *
 * To run a mutation, you first call `useCreateSupervisorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSupervisorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSupervisorMutation, { data, loading, error }] = useCreateSupervisorMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSupervisorMutation(baseOptions?: Apollo.MutationHookOptions<CreateSupervisorMutation, CreateSupervisorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSupervisorMutation, CreateSupervisorMutationVariables>(CreateSupervisorDocument, options);
      }
export type CreateSupervisorMutationHookResult = ReturnType<typeof useCreateSupervisorMutation>;
export type CreateSupervisorMutationResult = Apollo.MutationResult<CreateSupervisorMutation>;
export type CreateSupervisorMutationOptions = Apollo.BaseMutationOptions<CreateSupervisorMutation, CreateSupervisorMutationVariables>;
export const CreateRotationDocument = gql`
    mutation CreateRotation($input: CreateRotationInput!) {
  createRotation(input: $input) {
    id
    name
  }
}
    `;
export type CreateRotationMutationFn = Apollo.MutationFunction<CreateRotationMutation, CreateRotationMutationVariables>;

/**
 * __useCreateRotationMutation__
 *
 * To run a mutation, you first call `useCreateRotationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRotationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRotationMutation, { data, loading, error }] = useCreateRotationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateRotationMutation(baseOptions?: Apollo.MutationHookOptions<CreateRotationMutation, CreateRotationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRotationMutation, CreateRotationMutationVariables>(CreateRotationDocument, options);
      }
export type CreateRotationMutationHookResult = ReturnType<typeof useCreateRotationMutation>;
export type CreateRotationMutationResult = Apollo.MutationResult<CreateRotationMutation>;
export type CreateRotationMutationOptions = Apollo.BaseMutationOptions<CreateRotationMutation, CreateRotationMutationVariables>;
export const CreateProcedureTypeDocument = gql`
    mutation CreateProcedureType($input: CreateProcedureTypeInput!) {
  createProcedureType(input: $input) {
    id
    name
  }
}
    `;
export type CreateProcedureTypeMutationFn = Apollo.MutationFunction<CreateProcedureTypeMutation, CreateProcedureTypeMutationVariables>;

/**
 * __useCreateProcedureTypeMutation__
 *
 * To run a mutation, you first call `useCreateProcedureTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProcedureTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProcedureTypeMutation, { data, loading, error }] = useCreateProcedureTypeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProcedureTypeMutation(baseOptions?: Apollo.MutationHookOptions<CreateProcedureTypeMutation, CreateProcedureTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProcedureTypeMutation, CreateProcedureTypeMutationVariables>(CreateProcedureTypeDocument, options);
      }
export type CreateProcedureTypeMutationHookResult = ReturnType<typeof useCreateProcedureTypeMutation>;
export type CreateProcedureTypeMutationResult = Apollo.MutationResult<CreateProcedureTypeMutation>;
export type CreateProcedureTypeMutationOptions = Apollo.BaseMutationOptions<CreateProcedureTypeMutation, CreateProcedureTypeMutationVariables>;
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
export type CreateConsultMutationFn = Apollo.MutationFunction<CreateConsultMutation, CreateConsultMutationVariables>;

/**
 * __useCreateConsultMutation__
 *
 * To run a mutation, you first call `useCreateConsultMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateConsultMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createConsultMutation, { data, loading, error }] = useCreateConsultMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateConsultMutation(baseOptions?: Apollo.MutationHookOptions<CreateConsultMutation, CreateConsultMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateConsultMutation, CreateConsultMutationVariables>(CreateConsultDocument, options);
      }
export type CreateConsultMutationHookResult = ReturnType<typeof useCreateConsultMutation>;
export type CreateConsultMutationResult = Apollo.MutationResult<CreateConsultMutation>;
export type CreateConsultMutationOptions = Apollo.BaseMutationOptions<CreateConsultMutation, CreateConsultMutationVariables>;
export const UpdateProcedureDocument = gql`
    mutation UpdateProcedure($input: UpdateProcedureInput!) {
  updateProcedure(input: $input) {
    id
    name
  }
}
    `;
export type UpdateProcedureMutationFn = Apollo.MutationFunction<UpdateProcedureMutation, UpdateProcedureMutationVariables>;

/**
 * __useUpdateProcedureMutation__
 *
 * To run a mutation, you first call `useUpdateProcedureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProcedureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProcedureMutation, { data, loading, error }] = useUpdateProcedureMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProcedureMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProcedureMutation, UpdateProcedureMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProcedureMutation, UpdateProcedureMutationVariables>(UpdateProcedureDocument, options);
      }
export type UpdateProcedureMutationHookResult = ReturnType<typeof useUpdateProcedureMutation>;
export type UpdateProcedureMutationResult = Apollo.MutationResult<UpdateProcedureMutation>;
export type UpdateProcedureMutationOptions = Apollo.BaseMutationOptions<UpdateProcedureMutation, UpdateProcedureMutationVariables>;
export const UpdateProcedureTypeDocument = gql`
    mutation UpdateProcedureType($input: UpdateProcedureTypeInput!) {
  updateProcedureType(input: $input) {
    id
    name
  }
}
    `;
export type UpdateProcedureTypeMutationFn = Apollo.MutationFunction<UpdateProcedureTypeMutation, UpdateProcedureTypeMutationVariables>;

/**
 * __useUpdateProcedureTypeMutation__
 *
 * To run a mutation, you first call `useUpdateProcedureTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProcedureTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProcedureTypeMutation, { data, loading, error }] = useUpdateProcedureTypeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProcedureTypeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProcedureTypeMutation, UpdateProcedureTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProcedureTypeMutation, UpdateProcedureTypeMutationVariables>(UpdateProcedureTypeDocument, options);
      }
export type UpdateProcedureTypeMutationHookResult = ReturnType<typeof useUpdateProcedureTypeMutation>;
export type UpdateProcedureTypeMutationResult = Apollo.MutationResult<UpdateProcedureTypeMutation>;
export type UpdateProcedureTypeMutationOptions = Apollo.BaseMutationOptions<UpdateProcedureTypeMutation, UpdateProcedureTypeMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
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
export type UpdateProfileMutationFn = Apollo.MutationFunction<UpdateProfileMutation, UpdateProfileMutationVariables>;

/**
 * __useUpdateProfileMutation__
 *
 * To run a mutation, you first call `useUpdateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfileMutation, { data, loading, error }] = useUpdateProfileMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProfileMutation, UpdateProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProfileMutation, UpdateProfileMutationVariables>(UpdateProfileDocument, options);
      }
export type UpdateProfileMutationHookResult = ReturnType<typeof useUpdateProfileMutation>;
export type UpdateProfileMutationResult = Apollo.MutationResult<UpdateProfileMutation>;
export type UpdateProfileMutationOptions = Apollo.BaseMutationOptions<UpdateProfileMutation, UpdateProfileMutationVariables>;
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
export type UpdatePasswordMutationFn = Apollo.MutationFunction<UpdatePasswordMutation, UpdatePasswordMutationVariables>;

/**
 * __useUpdatePasswordMutation__
 *
 * To run a mutation, you first call `useUpdatePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePasswordMutation, { data, loading, error }] = useUpdatePasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePasswordMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePasswordMutation, UpdatePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePasswordMutation, UpdatePasswordMutationVariables>(UpdatePasswordDocument, options);
      }
export type UpdatePasswordMutationHookResult = ReturnType<typeof useUpdatePasswordMutation>;
export type UpdatePasswordMutationResult = Apollo.MutationResult<UpdatePasswordMutation>;
export type UpdatePasswordMutationOptions = Apollo.BaseMutationOptions<UpdatePasswordMutation, UpdatePasswordMutationVariables>;
export const UpdateHospitalDocument = gql`
    mutation UpdateHospital($input: UpdateHospitalInput!) {
  updateHospital(input: $input) {
    id
    name
    urnMask
  }
}
    `;
export type UpdateHospitalMutationFn = Apollo.MutationFunction<UpdateHospitalMutation, UpdateHospitalMutationVariables>;

/**
 * __useUpdateHospitalMutation__
 *
 * To run a mutation, you first call `useUpdateHospitalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateHospitalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateHospitalMutation, { data, loading, error }] = useUpdateHospitalMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateHospitalMutation(baseOptions?: Apollo.MutationHookOptions<UpdateHospitalMutation, UpdateHospitalMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateHospitalMutation, UpdateHospitalMutationVariables>(UpdateHospitalDocument, options);
      }
export type UpdateHospitalMutationHookResult = ReturnType<typeof useUpdateHospitalMutation>;
export type UpdateHospitalMutationResult = Apollo.MutationResult<UpdateHospitalMutation>;
export type UpdateHospitalMutationOptions = Apollo.BaseMutationOptions<UpdateHospitalMutation, UpdateHospitalMutationVariables>;
export const UpdateSupervisorDocument = gql`
    mutation UpdateSupervisor($input: UpdateSupervisorInput!) {
  updateSupervisor(input: $input) {
    id
    name
  }
}
    `;
export type UpdateSupervisorMutationFn = Apollo.MutationFunction<UpdateSupervisorMutation, UpdateSupervisorMutationVariables>;

/**
 * __useUpdateSupervisorMutation__
 *
 * To run a mutation, you first call `useUpdateSupervisorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSupervisorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSupervisorMutation, { data, loading, error }] = useUpdateSupervisorMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateSupervisorMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSupervisorMutation, UpdateSupervisorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSupervisorMutation, UpdateSupervisorMutationVariables>(UpdateSupervisorDocument, options);
      }
export type UpdateSupervisorMutationHookResult = ReturnType<typeof useUpdateSupervisorMutation>;
export type UpdateSupervisorMutationResult = Apollo.MutationResult<UpdateSupervisorMutation>;
export type UpdateSupervisorMutationOptions = Apollo.BaseMutationOptions<UpdateSupervisorMutation, UpdateSupervisorMutationVariables>;
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
export type UpdateRotationMutationFn = Apollo.MutationFunction<UpdateRotationMutation, UpdateRotationMutationVariables>;

/**
 * __useUpdateRotationMutation__
 *
 * To run a mutation, you first call `useUpdateRotationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRotationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRotationMutation, { data, loading, error }] = useUpdateRotationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateRotationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateRotationMutation, UpdateRotationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateRotationMutation, UpdateRotationMutationVariables>(UpdateRotationDocument, options);
      }
export type UpdateRotationMutationHookResult = ReturnType<typeof useUpdateRotationMutation>;
export type UpdateRotationMutationResult = Apollo.MutationResult<UpdateRotationMutation>;
export type UpdateRotationMutationOptions = Apollo.BaseMutationOptions<UpdateRotationMutation, UpdateRotationMutationVariables>;
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
export type UpdateConsultMutationFn = Apollo.MutationFunction<UpdateConsultMutation, UpdateConsultMutationVariables>;

/**
 * __useUpdateConsultMutation__
 *
 * To run a mutation, you first call `useUpdateConsultMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateConsultMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateConsultMutation, { data, loading, error }] = useUpdateConsultMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateConsultMutation(baseOptions?: Apollo.MutationHookOptions<UpdateConsultMutation, UpdateConsultMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateConsultMutation, UpdateConsultMutationVariables>(UpdateConsultDocument, options);
      }
export type UpdateConsultMutationHookResult = ReturnType<typeof useUpdateConsultMutation>;
export type UpdateConsultMutationResult = Apollo.MutationResult<UpdateConsultMutation>;
export type UpdateConsultMutationOptions = Apollo.BaseMutationOptions<UpdateConsultMutation, UpdateConsultMutationVariables>;
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
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const DeleteConsultDocument = gql`
    mutation DeleteConsult($input: DeleteConsultInput!) {
  deleteConsult(input: $input) {
    id
  }
}
    `;
export type DeleteConsultMutationFn = Apollo.MutationFunction<DeleteConsultMutation, DeleteConsultMutationVariables>;

/**
 * __useDeleteConsultMutation__
 *
 * To run a mutation, you first call `useDeleteConsultMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteConsultMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteConsultMutation, { data, loading, error }] = useDeleteConsultMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteConsultMutation(baseOptions?: Apollo.MutationHookOptions<DeleteConsultMutation, DeleteConsultMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteConsultMutation, DeleteConsultMutationVariables>(DeleteConsultDocument, options);
      }
export type DeleteConsultMutationHookResult = ReturnType<typeof useDeleteConsultMutation>;
export type DeleteConsultMutationResult = Apollo.MutationResult<DeleteConsultMutation>;
export type DeleteConsultMutationOptions = Apollo.BaseMutationOptions<DeleteConsultMutation, DeleteConsultMutationVariables>;
export const DeleteHospitalDocument = gql`
    mutation DeleteHospital($input: DeleteHospitalInput!) {
  deleteHospital(input: $input) {
    id
  }
}
    `;
export type DeleteHospitalMutationFn = Apollo.MutationFunction<DeleteHospitalMutation, DeleteHospitalMutationVariables>;

/**
 * __useDeleteHospitalMutation__
 *
 * To run a mutation, you first call `useDeleteHospitalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteHospitalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteHospitalMutation, { data, loading, error }] = useDeleteHospitalMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteHospitalMutation(baseOptions?: Apollo.MutationHookOptions<DeleteHospitalMutation, DeleteHospitalMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteHospitalMutation, DeleteHospitalMutationVariables>(DeleteHospitalDocument, options);
      }
export type DeleteHospitalMutationHookResult = ReturnType<typeof useDeleteHospitalMutation>;
export type DeleteHospitalMutationResult = Apollo.MutationResult<DeleteHospitalMutation>;
export type DeleteHospitalMutationOptions = Apollo.BaseMutationOptions<DeleteHospitalMutation, DeleteHospitalMutationVariables>;
export const DeleteSupervisorDocument = gql`
    mutation DeleteSupervisor($input: DeleteSupervisorInput!) {
  deleteSupervisor(input: $input) {
    id
  }
}
    `;
export type DeleteSupervisorMutationFn = Apollo.MutationFunction<DeleteSupervisorMutation, DeleteSupervisorMutationVariables>;

/**
 * __useDeleteSupervisorMutation__
 *
 * To run a mutation, you first call `useDeleteSupervisorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSupervisorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSupervisorMutation, { data, loading, error }] = useDeleteSupervisorMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteSupervisorMutation(baseOptions?: Apollo.MutationHookOptions<DeleteSupervisorMutation, DeleteSupervisorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteSupervisorMutation, DeleteSupervisorMutationVariables>(DeleteSupervisorDocument, options);
      }
export type DeleteSupervisorMutationHookResult = ReturnType<typeof useDeleteSupervisorMutation>;
export type DeleteSupervisorMutationResult = Apollo.MutationResult<DeleteSupervisorMutation>;
export type DeleteSupervisorMutationOptions = Apollo.BaseMutationOptions<DeleteSupervisorMutation, DeleteSupervisorMutationVariables>;
export const DeleteProcedureDocument = gql`
    mutation DeleteProcedure($input: DeleteProcedureInput!) {
  deleteProcedure(input: $input) {
    id
  }
}
    `;
export type DeleteProcedureMutationFn = Apollo.MutationFunction<DeleteProcedureMutation, DeleteProcedureMutationVariables>;

/**
 * __useDeleteProcedureMutation__
 *
 * To run a mutation, you first call `useDeleteProcedureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProcedureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProcedureMutation, { data, loading, error }] = useDeleteProcedureMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteProcedureMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProcedureMutation, DeleteProcedureMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProcedureMutation, DeleteProcedureMutationVariables>(DeleteProcedureDocument, options);
      }
export type DeleteProcedureMutationHookResult = ReturnType<typeof useDeleteProcedureMutation>;
export type DeleteProcedureMutationResult = Apollo.MutationResult<DeleteProcedureMutation>;
export type DeleteProcedureMutationOptions = Apollo.BaseMutationOptions<DeleteProcedureMutation, DeleteProcedureMutationVariables>;
export const DeleteRotationDocument = gql`
    mutation DeleteRotation($input: DeleteRotationInput!) {
  deleteRotation(input: $input) {
    id
  }
}
    `;
export type DeleteRotationMutationFn = Apollo.MutationFunction<DeleteRotationMutation, DeleteRotationMutationVariables>;

/**
 * __useDeleteRotationMutation__
 *
 * To run a mutation, you first call `useDeleteRotationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRotationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRotationMutation, { data, loading, error }] = useDeleteRotationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteRotationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteRotationMutation, DeleteRotationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteRotationMutation, DeleteRotationMutationVariables>(DeleteRotationDocument, options);
      }
export type DeleteRotationMutationHookResult = ReturnType<typeof useDeleteRotationMutation>;
export type DeleteRotationMutationResult = Apollo.MutationResult<DeleteRotationMutation>;
export type DeleteRotationMutationOptions = Apollo.BaseMutationOptions<DeleteRotationMutation, DeleteRotationMutationVariables>;
export const DeleteProcedureTypeDocument = gql`
    mutation DeleteProcedureType($input: DeleteProcedureTypeInput!) {
  deleteProcedureType(input: $input) {
    id
  }
}
    `;
export type DeleteProcedureTypeMutationFn = Apollo.MutationFunction<DeleteProcedureTypeMutation, DeleteProcedureTypeMutationVariables>;

/**
 * __useDeleteProcedureTypeMutation__
 *
 * To run a mutation, you first call `useDeleteProcedureTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProcedureTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProcedureTypeMutation, { data, loading, error }] = useDeleteProcedureTypeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteProcedureTypeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProcedureTypeMutation, DeleteProcedureTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProcedureTypeMutation, DeleteProcedureTypeMutationVariables>(DeleteProcedureTypeDocument, options);
      }
export type DeleteProcedureTypeMutationHookResult = ReturnType<typeof useDeleteProcedureTypeMutation>;
export type DeleteProcedureTypeMutationResult = Apollo.MutationResult<DeleteProcedureTypeMutation>;
export type DeleteProcedureTypeMutationOptions = Apollo.BaseMutationOptions<DeleteProcedureTypeMutation, DeleteProcedureTypeMutationVariables>;
export const DeleteUserDocument = gql`
    mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    id
  }
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const ImageUploadDocument = gql`
    mutation ImageUpload($input: ImageUploadInput!) {
  imageUpload(input: $input) {
    name
    urn
    dateOfBirth
  }
}
    `;
export type ImageUploadMutationFn = Apollo.MutationFunction<ImageUploadMutation, ImageUploadMutationVariables>;

/**
 * __useImageUploadMutation__
 *
 * To run a mutation, you first call `useImageUploadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useImageUploadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [imageUploadMutation, { data, loading, error }] = useImageUploadMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useImageUploadMutation(baseOptions?: Apollo.MutationHookOptions<ImageUploadMutation, ImageUploadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ImageUploadMutation, ImageUploadMutationVariables>(ImageUploadDocument, options);
      }
export type ImageUploadMutationHookResult = ReturnType<typeof useImageUploadMutation>;
export type ImageUploadMutationResult = Apollo.MutationResult<ImageUploadMutation>;
export type ImageUploadMutationOptions = Apollo.BaseMutationOptions<ImageUploadMutation, ImageUploadMutationVariables>;
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

/**
 * __useAllConsultsQuery__
 *
 * To run a query within a React component, call `useAllConsultsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllConsultsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllConsultsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllConsultsQuery(baseOptions?: Apollo.QueryHookOptions<AllConsultsQuery, AllConsultsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllConsultsQuery, AllConsultsQueryVariables>(AllConsultsDocument, options);
      }
export function useAllConsultsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllConsultsQuery, AllConsultsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllConsultsQuery, AllConsultsQueryVariables>(AllConsultsDocument, options);
        }
export type AllConsultsQueryHookResult = ReturnType<typeof useAllConsultsQuery>;
export type AllConsultsLazyQueryHookResult = ReturnType<typeof useAllConsultsLazyQuery>;
export type AllConsultsQueryResult = Apollo.QueryResult<AllConsultsQuery, AllConsultsQueryVariables>;
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

/**
 * __useAllProceduresQuery__
 *
 * To run a query within a React component, call `useAllProceduresQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllProceduresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllProceduresQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllProceduresQuery(baseOptions?: Apollo.QueryHookOptions<AllProceduresQuery, AllProceduresQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllProceduresQuery, AllProceduresQueryVariables>(AllProceduresDocument, options);
      }
export function useAllProceduresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllProceduresQuery, AllProceduresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllProceduresQuery, AllProceduresQueryVariables>(AllProceduresDocument, options);
        }
export type AllProceduresQueryHookResult = ReturnType<typeof useAllProceduresQuery>;
export type AllProceduresLazyQueryHookResult = ReturnType<typeof useAllProceduresLazyQuery>;
export type AllProceduresQueryResult = Apollo.QueryResult<AllProceduresQuery, AllProceduresQueryVariables>;
export const AllProcedureTypesDocument = gql`
    query AllProcedureTypes {
  allProcedureTypes {
    id
    name
  }
}
    `;

/**
 * __useAllProcedureTypesQuery__
 *
 * To run a query within a React component, call `useAllProcedureTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllProcedureTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllProcedureTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllProcedureTypesQuery(baseOptions?: Apollo.QueryHookOptions<AllProcedureTypesQuery, AllProcedureTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllProcedureTypesQuery, AllProcedureTypesQueryVariables>(AllProcedureTypesDocument, options);
      }
export function useAllProcedureTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllProcedureTypesQuery, AllProcedureTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllProcedureTypesQuery, AllProcedureTypesQueryVariables>(AllProcedureTypesDocument, options);
        }
export type AllProcedureTypesQueryHookResult = ReturnType<typeof useAllProcedureTypesQuery>;
export type AllProcedureTypesLazyQueryHookResult = ReturnType<typeof useAllProcedureTypesLazyQuery>;
export type AllProcedureTypesQueryResult = Apollo.QueryResult<AllProcedureTypesQuery, AllProcedureTypesQueryVariables>;
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

/**
 * __useSearchQuery__
 *
 * To run a query within a React component, call `useSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSearchQuery(baseOptions: Apollo.QueryHookOptions<SearchQuery, SearchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchQuery, SearchQueryVariables>(SearchDocument, options);
      }
export function useSearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchQuery, SearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchQuery, SearchQueryVariables>(SearchDocument, options);
        }
export type SearchQueryHookResult = ReturnType<typeof useSearchQuery>;
export type SearchLazyQueryHookResult = ReturnType<typeof useSearchLazyQuery>;
export type SearchQueryResult = Apollo.QueryResult<SearchQuery, SearchQueryVariables>;
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

/**
 * __useAllRotationsQuery__
 *
 * To run a query within a React component, call `useAllRotationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllRotationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllRotationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllRotationsQuery(baseOptions?: Apollo.QueryHookOptions<AllRotationsQuery, AllRotationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllRotationsQuery, AllRotationsQueryVariables>(AllRotationsDocument, options);
      }
export function useAllRotationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllRotationsQuery, AllRotationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllRotationsQuery, AllRotationsQueryVariables>(AllRotationsDocument, options);
        }
export type AllRotationsQueryHookResult = ReturnType<typeof useAllRotationsQuery>;
export type AllRotationsLazyQueryHookResult = ReturnType<typeof useAllRotationsLazyQuery>;
export type AllRotationsQueryResult = Apollo.QueryResult<AllRotationsQuery, AllRotationsQueryVariables>;
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

/**
 * __useProcedureQuery__
 *
 * To run a query within a React component, call `useProcedureQuery` and pass it any options that fit your needs.
 * When your component renders, `useProcedureQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProcedureQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useProcedureQuery(baseOptions: Apollo.QueryHookOptions<ProcedureQuery, ProcedureQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProcedureQuery, ProcedureQueryVariables>(ProcedureDocument, options);
      }
export function useProcedureLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProcedureQuery, ProcedureQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProcedureQuery, ProcedureQueryVariables>(ProcedureDocument, options);
        }
export type ProcedureQueryHookResult = ReturnType<typeof useProcedureQuery>;
export type ProcedureLazyQueryHookResult = ReturnType<typeof useProcedureLazyQuery>;
export type ProcedureQueryResult = Apollo.QueryResult<ProcedureQuery, ProcedureQueryVariables>;
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

/**
 * __useConsultQuery__
 *
 * To run a query within a React component, call `useConsultQuery` and pass it any options that fit your needs.
 * When your component renders, `useConsultQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConsultQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useConsultQuery(baseOptions: Apollo.QueryHookOptions<ConsultQuery, ConsultQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ConsultQuery, ConsultQueryVariables>(ConsultDocument, options);
      }
export function useConsultLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConsultQuery, ConsultQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ConsultQuery, ConsultQueryVariables>(ConsultDocument, options);
        }
export type ConsultQueryHookResult = ReturnType<typeof useConsultQuery>;
export type ConsultLazyQueryHookResult = ReturnType<typeof useConsultLazyQuery>;
export type ConsultQueryResult = Apollo.QueryResult<ConsultQuery, ConsultQueryVariables>;
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

/**
 * __useAllUsersQuery__
 *
 * To run a query within a React component, call `useAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, options);
      }
export function useAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, options);
        }
export type AllUsersQueryHookResult = ReturnType<typeof useAllUsersQuery>;
export type AllUsersLazyQueryHookResult = ReturnType<typeof useAllUsersLazyQuery>;
export type AllUsersQueryResult = Apollo.QueryResult<AllUsersQuery, AllUsersQueryVariables>;
export const ProfileDocument = gql`
    query Profile {
  profile {
    id
    email
    firstName
    lastName
    role
  }
}
    `;

/**
 * __useProfileQuery__
 *
 * To run a query within a React component, call `useProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useProfileQuery(baseOptions?: Apollo.QueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
      }
export function useProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
        }
export type ProfileQueryHookResult = ReturnType<typeof useProfileQuery>;
export type ProfileLazyQueryHookResult = ReturnType<typeof useProfileLazyQuery>;
export type ProfileQueryResult = Apollo.QueryResult<ProfileQuery, ProfileQueryVariables>;
export const AllSupervisorsDocument = gql`
    query AllSupervisors {
  allSupervisors {
    id
    name
  }
}
    `;

/**
 * __useAllSupervisorsQuery__
 *
 * To run a query within a React component, call `useAllSupervisorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllSupervisorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllSupervisorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllSupervisorsQuery(baseOptions?: Apollo.QueryHookOptions<AllSupervisorsQuery, AllSupervisorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllSupervisorsQuery, AllSupervisorsQueryVariables>(AllSupervisorsDocument, options);
      }
export function useAllSupervisorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllSupervisorsQuery, AllSupervisorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllSupervisorsQuery, AllSupervisorsQueryVariables>(AllSupervisorsDocument, options);
        }
export type AllSupervisorsQueryHookResult = ReturnType<typeof useAllSupervisorsQuery>;
export type AllSupervisorsLazyQueryHookResult = ReturnType<typeof useAllSupervisorsLazyQuery>;
export type AllSupervisorsQueryResult = Apollo.QueryResult<AllSupervisorsQuery, AllSupervisorsQueryVariables>;
export const SupervisorDocument = gql`
    query Supervisor($input: SupervisorInput!) {
  supervisor(input: $input) {
    id
    name
  }
}
    `;

/**
 * __useSupervisorQuery__
 *
 * To run a query within a React component, call `useSupervisorQuery` and pass it any options that fit your needs.
 * When your component renders, `useSupervisorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSupervisorQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSupervisorQuery(baseOptions: Apollo.QueryHookOptions<SupervisorQuery, SupervisorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SupervisorQuery, SupervisorQueryVariables>(SupervisorDocument, options);
      }
export function useSupervisorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SupervisorQuery, SupervisorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SupervisorQuery, SupervisorQueryVariables>(SupervisorDocument, options);
        }
export type SupervisorQueryHookResult = ReturnType<typeof useSupervisorQuery>;
export type SupervisorLazyQueryHookResult = ReturnType<typeof useSupervisorLazyQuery>;
export type SupervisorQueryResult = Apollo.QueryResult<SupervisorQuery, SupervisorQueryVariables>;
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

/**
 * __useRotationQuery__
 *
 * To run a query within a React component, call `useRotationQuery` and pass it any options that fit your needs.
 * When your component renders, `useRotationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRotationQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRotationQuery(baseOptions: Apollo.QueryHookOptions<RotationQuery, RotationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RotationQuery, RotationQueryVariables>(RotationDocument, options);
      }
export function useRotationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RotationQuery, RotationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RotationQuery, RotationQueryVariables>(RotationDocument, options);
        }
export type RotationQueryHookResult = ReturnType<typeof useRotationQuery>;
export type RotationLazyQueryHookResult = ReturnType<typeof useRotationLazyQuery>;
export type RotationQueryResult = Apollo.QueryResult<RotationQuery, RotationQueryVariables>;
export const AllHospitalsDocument = gql`
    query AllHospitals {
  allHospitals {
    id
    name
    urnMask
  }
}
    `;

/**
 * __useAllHospitalsQuery__
 *
 * To run a query within a React component, call `useAllHospitalsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllHospitalsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllHospitalsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllHospitalsQuery(baseOptions?: Apollo.QueryHookOptions<AllHospitalsQuery, AllHospitalsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllHospitalsQuery, AllHospitalsQueryVariables>(AllHospitalsDocument, options);
      }
export function useAllHospitalsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllHospitalsQuery, AllHospitalsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllHospitalsQuery, AllHospitalsQueryVariables>(AllHospitalsDocument, options);
        }
export type AllHospitalsQueryHookResult = ReturnType<typeof useAllHospitalsQuery>;
export type AllHospitalsLazyQueryHookResult = ReturnType<typeof useAllHospitalsLazyQuery>;
export type AllHospitalsQueryResult = Apollo.QueryResult<AllHospitalsQuery, AllHospitalsQueryVariables>;
export const HospitalDocument = gql`
    query Hospital($input: HospitalInput!) {
  hospital(input: $input) {
    id
    name
    urnMask
  }
}
    `;

/**
 * __useHospitalQuery__
 *
 * To run a query within a React component, call `useHospitalQuery` and pass it any options that fit your needs.
 * When your component renders, `useHospitalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHospitalQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useHospitalQuery(baseOptions: Apollo.QueryHookOptions<HospitalQuery, HospitalQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HospitalQuery, HospitalQueryVariables>(HospitalDocument, options);
      }
export function useHospitalLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HospitalQuery, HospitalQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HospitalQuery, HospitalQueryVariables>(HospitalDocument, options);
        }
export type HospitalQueryHookResult = ReturnType<typeof useHospitalQuery>;
export type HospitalLazyQueryHookResult = ReturnType<typeof useHospitalLazyQuery>;
export type HospitalQueryResult = Apollo.QueryResult<HospitalQuery, HospitalQueryVariables>;
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

/**
 * __useCurrentRotationQuery__
 *
 * To run a query within a React component, call `useCurrentRotationQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentRotationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentRotationQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentRotationQuery(baseOptions?: Apollo.QueryHookOptions<CurrentRotationQuery, CurrentRotationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentRotationQuery, CurrentRotationQueryVariables>(CurrentRotationDocument, options);
      }
export function useCurrentRotationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentRotationQuery, CurrentRotationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentRotationQuery, CurrentRotationQueryVariables>(CurrentRotationDocument, options);
        }
export type CurrentRotationQueryHookResult = ReturnType<typeof useCurrentRotationQuery>;
export type CurrentRotationLazyQueryHookResult = ReturnType<typeof useCurrentRotationLazyQuery>;
export type CurrentRotationQueryResult = Apollo.QueryResult<CurrentRotationQuery, CurrentRotationQueryVariables>;
export const AllAdmissionCategoriesDocument = gql`
    query AllAdmissionCategories {
  allAdmissionCategories {
    id
    name
  }
}
    `;

/**
 * __useAllAdmissionCategoriesQuery__
 *
 * To run a query within a React component, call `useAllAdmissionCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllAdmissionCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllAdmissionCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllAdmissionCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<AllAdmissionCategoriesQuery, AllAdmissionCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllAdmissionCategoriesQuery, AllAdmissionCategoriesQueryVariables>(AllAdmissionCategoriesDocument, options);
      }
export function useAllAdmissionCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllAdmissionCategoriesQuery, AllAdmissionCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllAdmissionCategoriesQuery, AllAdmissionCategoriesQueryVariables>(AllAdmissionCategoriesDocument, options);
        }
export type AllAdmissionCategoriesQueryHookResult = ReturnType<typeof useAllAdmissionCategoriesQuery>;
export type AllAdmissionCategoriesLazyQueryHookResult = ReturnType<typeof useAllAdmissionCategoriesLazyQuery>;
export type AllAdmissionCategoriesQueryResult = Apollo.QueryResult<AllAdmissionCategoriesQuery, AllAdmissionCategoriesQueryVariables>;
export const AllEthnicitiesDocument = gql`
    query AllEthnicities {
  allEthnicities {
    id
    name
  }
}
    `;

/**
 * __useAllEthnicitiesQuery__
 *
 * To run a query within a React component, call `useAllEthnicitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllEthnicitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllEthnicitiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllEthnicitiesQuery(baseOptions?: Apollo.QueryHookOptions<AllEthnicitiesQuery, AllEthnicitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllEthnicitiesQuery, AllEthnicitiesQueryVariables>(AllEthnicitiesDocument, options);
      }
export function useAllEthnicitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllEthnicitiesQuery, AllEthnicitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllEthnicitiesQuery, AllEthnicitiesQueryVariables>(AllEthnicitiesDocument, options);
        }
export type AllEthnicitiesQueryHookResult = ReturnType<typeof useAllEthnicitiesQuery>;
export type AllEthnicitiesLazyQueryHookResult = ReturnType<typeof useAllEthnicitiesLazyQuery>;
export type AllEthnicitiesQueryResult = Apollo.QueryResult<AllEthnicitiesQuery, AllEthnicitiesQueryVariables>;
export const AllSupervisionLevelsDocument = gql`
    query AllSupervisionLevels {
  allSupervisionLevels {
    id
    name
  }
}
    `;

/**
 * __useAllSupervisionLevelsQuery__
 *
 * To run a query within a React component, call `useAllSupervisionLevelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllSupervisionLevelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllSupervisionLevelsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllSupervisionLevelsQuery(baseOptions?: Apollo.QueryHookOptions<AllSupervisionLevelsQuery, AllSupervisionLevelsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllSupervisionLevelsQuery, AllSupervisionLevelsQueryVariables>(AllSupervisionLevelsDocument, options);
      }
export function useAllSupervisionLevelsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllSupervisionLevelsQuery, AllSupervisionLevelsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllSupervisionLevelsQuery, AllSupervisionLevelsQueryVariables>(AllSupervisionLevelsDocument, options);
        }
export type AllSupervisionLevelsQueryHookResult = ReturnType<typeof useAllSupervisionLevelsQuery>;
export type AllSupervisionLevelsLazyQueryHookResult = ReturnType<typeof useAllSupervisionLevelsLazyQuery>;
export type AllSupervisionLevelsQueryResult = Apollo.QueryResult<AllSupervisionLevelsQuery, AllSupervisionLevelsQueryVariables>;
export const AllUnplannedReadmissionsDocument = gql`
    query AllUnplannedReadmissions {
  allUnplannedReadmissions {
    id
    name
  }
}
    `;

/**
 * __useAllUnplannedReadmissionsQuery__
 *
 * To run a query within a React component, call `useAllUnplannedReadmissionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUnplannedReadmissionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUnplannedReadmissionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllUnplannedReadmissionsQuery(baseOptions?: Apollo.QueryHookOptions<AllUnplannedReadmissionsQuery, AllUnplannedReadmissionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllUnplannedReadmissionsQuery, AllUnplannedReadmissionsQueryVariables>(AllUnplannedReadmissionsDocument, options);
      }
export function useAllUnplannedReadmissionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllUnplannedReadmissionsQuery, AllUnplannedReadmissionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllUnplannedReadmissionsQuery, AllUnplannedReadmissionsQueryVariables>(AllUnplannedReadmissionsDocument, options);
        }
export type AllUnplannedReadmissionsQueryHookResult = ReturnType<typeof useAllUnplannedReadmissionsQuery>;
export type AllUnplannedReadmissionsLazyQueryHookResult = ReturnType<typeof useAllUnplannedReadmissionsLazyQuery>;
export type AllUnplannedReadmissionsQueryResult = Apollo.QueryResult<AllUnplannedReadmissionsQuery, AllUnplannedReadmissionsQueryVariables>;
export const AllFundingTypesDocument = gql`
    query AllFundingTypes {
  allFundingTypes {
    id
    name
  }
}
    `;

/**
 * __useAllFundingTypesQuery__
 *
 * To run a query within a React component, call `useAllFundingTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllFundingTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllFundingTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllFundingTypesQuery(baseOptions?: Apollo.QueryHookOptions<AllFundingTypesQuery, AllFundingTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllFundingTypesQuery, AllFundingTypesQueryVariables>(AllFundingTypesDocument, options);
      }
export function useAllFundingTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllFundingTypesQuery, AllFundingTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllFundingTypesQuery, AllFundingTypesQueryVariables>(AllFundingTypesDocument, options);
        }
export type AllFundingTypesQueryHookResult = ReturnType<typeof useAllFundingTypesQuery>;
export type AllFundingTypesLazyQueryHookResult = ReturnType<typeof useAllFundingTypesLazyQuery>;
export type AllFundingTypesQueryResult = Apollo.QueryResult<AllFundingTypesQuery, AllFundingTypesQueryVariables>;
export const AllSetLevelsDocument = gql`
    query AllSetLevels {
  allSetLevels {
    id
    name
  }
}
    `;

/**
 * __useAllSetLevelsQuery__
 *
 * To run a query within a React component, call `useAllSetLevelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllSetLevelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllSetLevelsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllSetLevelsQuery(baseOptions?: Apollo.QueryHookOptions<AllSetLevelsQuery, AllSetLevelsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllSetLevelsQuery, AllSetLevelsQueryVariables>(AllSetLevelsDocument, options);
      }
export function useAllSetLevelsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllSetLevelsQuery, AllSetLevelsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllSetLevelsQuery, AllSetLevelsQueryVariables>(AllSetLevelsDocument, options);
        }
export type AllSetLevelsQueryHookResult = ReturnType<typeof useAllSetLevelsQuery>;
export type AllSetLevelsLazyQueryHookResult = ReturnType<typeof useAllSetLevelsLazyQuery>;
export type AllSetLevelsQueryResult = Apollo.QueryResult<AllSetLevelsQuery, AllSetLevelsQueryVariables>;
export const AllAsaGradesDocument = gql`
    query AllAsaGrades {
  allAsaGrades {
    id
    name
  }
}
    `;

/**
 * __useAllAsaGradesQuery__
 *
 * To run a query within a React component, call `useAllAsaGradesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllAsaGradesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllAsaGradesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllAsaGradesQuery(baseOptions?: Apollo.QueryHookOptions<AllAsaGradesQuery, AllAsaGradesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllAsaGradesQuery, AllAsaGradesQueryVariables>(AllAsaGradesDocument, options);
      }
export function useAllAsaGradesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllAsaGradesQuery, AllAsaGradesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllAsaGradesQuery, AllAsaGradesQueryVariables>(AllAsaGradesDocument, options);
        }
export type AllAsaGradesQueryHookResult = ReturnType<typeof useAllAsaGradesQuery>;
export type AllAsaGradesLazyQueryHookResult = ReturnType<typeof useAllAsaGradesLazyQuery>;
export type AllAsaGradesQueryResult = Apollo.QueryResult<AllAsaGradesQuery, AllAsaGradesQueryVariables>;
export const AllWoundInfectionRisksDocument = gql`
    query AllWoundInfectionRisks {
  allWoundInfectionRisks {
    id
    name
  }
}
    `;

/**
 * __useAllWoundInfectionRisksQuery__
 *
 * To run a query within a React component, call `useAllWoundInfectionRisksQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllWoundInfectionRisksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllWoundInfectionRisksQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllWoundInfectionRisksQuery(baseOptions?: Apollo.QueryHookOptions<AllWoundInfectionRisksQuery, AllWoundInfectionRisksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllWoundInfectionRisksQuery, AllWoundInfectionRisksQueryVariables>(AllWoundInfectionRisksDocument, options);
      }
export function useAllWoundInfectionRisksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllWoundInfectionRisksQuery, AllWoundInfectionRisksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllWoundInfectionRisksQuery, AllWoundInfectionRisksQueryVariables>(AllWoundInfectionRisksDocument, options);
        }
export type AllWoundInfectionRisksQueryHookResult = ReturnType<typeof useAllWoundInfectionRisksQuery>;
export type AllWoundInfectionRisksLazyQueryHookResult = ReturnType<typeof useAllWoundInfectionRisksLazyQuery>;
export type AllWoundInfectionRisksQueryResult = Apollo.QueryResult<AllWoundInfectionRisksQuery, AllWoundInfectionRisksQueryVariables>;
export const AllTypeOfAnaestheticsDocument = gql`
    query AllTypeOfAnaesthetics {
  allTypeOfAnaesthetics {
    id
    name
  }
}
    `;

/**
 * __useAllTypeOfAnaestheticsQuery__
 *
 * To run a query within a React component, call `useAllTypeOfAnaestheticsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTypeOfAnaestheticsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTypeOfAnaestheticsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllTypeOfAnaestheticsQuery(baseOptions?: Apollo.QueryHookOptions<AllTypeOfAnaestheticsQuery, AllTypeOfAnaestheticsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllTypeOfAnaestheticsQuery, AllTypeOfAnaestheticsQueryVariables>(AllTypeOfAnaestheticsDocument, options);
      }
export function useAllTypeOfAnaestheticsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllTypeOfAnaestheticsQuery, AllTypeOfAnaestheticsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllTypeOfAnaestheticsQuery, AllTypeOfAnaestheticsQueryVariables>(AllTypeOfAnaestheticsDocument, options);
        }
export type AllTypeOfAnaestheticsQueryHookResult = ReturnType<typeof useAllTypeOfAnaestheticsQuery>;
export type AllTypeOfAnaestheticsLazyQueryHookResult = ReturnType<typeof useAllTypeOfAnaestheticsLazyQuery>;
export type AllTypeOfAnaestheticsQueryResult = Apollo.QueryResult<AllTypeOfAnaestheticsQuery, AllTypeOfAnaestheticsQueryVariables>;
export const AllUnplannedIcusDocument = gql`
    query AllUnplannedIcus {
  allUnplannedIcus {
    id
    name
  }
}
    `;

/**
 * __useAllUnplannedIcusQuery__
 *
 * To run a query within a React component, call `useAllUnplannedIcusQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUnplannedIcusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUnplannedIcusQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllUnplannedIcusQuery(baseOptions?: Apollo.QueryHookOptions<AllUnplannedIcusQuery, AllUnplannedIcusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllUnplannedIcusQuery, AllUnplannedIcusQueryVariables>(AllUnplannedIcusDocument, options);
      }
export function useAllUnplannedIcusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllUnplannedIcusQuery, AllUnplannedIcusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllUnplannedIcusQuery, AllUnplannedIcusQueryVariables>(AllUnplannedIcusDocument, options);
        }
export type AllUnplannedIcusQueryHookResult = ReturnType<typeof useAllUnplannedIcusQuery>;
export type AllUnplannedIcusLazyQueryHookResult = ReturnType<typeof useAllUnplannedIcusLazyQuery>;
export type AllUnplannedIcusQueryResult = Apollo.QueryResult<AllUnplannedIcusQuery, AllUnplannedIcusQueryVariables>;
export const AllReturnToTheatresDocument = gql`
    query AllReturnToTheatres {
  allReturnToTheatres {
    id
    name
  }
}
    `;

/**
 * __useAllReturnToTheatresQuery__
 *
 * To run a query within a React component, call `useAllReturnToTheatresQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllReturnToTheatresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllReturnToTheatresQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllReturnToTheatresQuery(baseOptions?: Apollo.QueryHookOptions<AllReturnToTheatresQuery, AllReturnToTheatresQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllReturnToTheatresQuery, AllReturnToTheatresQueryVariables>(AllReturnToTheatresDocument, options);
      }
export function useAllReturnToTheatresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllReturnToTheatresQuery, AllReturnToTheatresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllReturnToTheatresQuery, AllReturnToTheatresQueryVariables>(AllReturnToTheatresDocument, options);
        }
export type AllReturnToTheatresQueryHookResult = ReturnType<typeof useAllReturnToTheatresQuery>;
export type AllReturnToTheatresLazyQueryHookResult = ReturnType<typeof useAllReturnToTheatresLazyQuery>;
export type AllReturnToTheatresQueryResult = Apollo.QueryResult<AllReturnToTheatresQuery, AllReturnToTheatresQueryVariables>;
export const AllOutcomesDocument = gql`
    query AllOutcomes {
  allOutcomes {
    id
    name
  }
}
    `;

/**
 * __useAllOutcomesQuery__
 *
 * To run a query within a React component, call `useAllOutcomesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllOutcomesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllOutcomesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllOutcomesQuery(baseOptions?: Apollo.QueryHookOptions<AllOutcomesQuery, AllOutcomesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllOutcomesQuery, AllOutcomesQueryVariables>(AllOutcomesDocument, options);
      }
export function useAllOutcomesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllOutcomesQuery, AllOutcomesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllOutcomesQuery, AllOutcomesQueryVariables>(AllOutcomesDocument, options);
        }
export type AllOutcomesQueryHookResult = ReturnType<typeof useAllOutcomesQuery>;
export type AllOutcomesLazyQueryHookResult = ReturnType<typeof useAllOutcomesLazyQuery>;
export type AllOutcomesQueryResult = Apollo.QueryResult<AllOutcomesQuery, AllOutcomesQueryVariables>;
export const AllMortalityClassificationsDocument = gql`
    query AllMortalityClassifications {
  allMortalityClassifications {
    id
    name
  }
}
    `;

/**
 * __useAllMortalityClassificationsQuery__
 *
 * To run a query within a React component, call `useAllMortalityClassificationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllMortalityClassificationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllMortalityClassificationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllMortalityClassificationsQuery(baseOptions?: Apollo.QueryHookOptions<AllMortalityClassificationsQuery, AllMortalityClassificationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllMortalityClassificationsQuery, AllMortalityClassificationsQueryVariables>(AllMortalityClassificationsDocument, options);
      }
export function useAllMortalityClassificationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllMortalityClassificationsQuery, AllMortalityClassificationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllMortalityClassificationsQuery, AllMortalityClassificationsQueryVariables>(AllMortalityClassificationsDocument, options);
        }
export type AllMortalityClassificationsQueryHookResult = ReturnType<typeof useAllMortalityClassificationsQuery>;
export type AllMortalityClassificationsLazyQueryHookResult = ReturnType<typeof useAllMortalityClassificationsLazyQuery>;
export type AllMortalityClassificationsQueryResult = Apollo.QueryResult<AllMortalityClassificationsQuery, AllMortalityClassificationsQueryVariables>;
export const FundingTypeStatisticsDocument = gql`
    query FundingTypeStatistics {
  allFundingTypes {
    id
    name
    totalConsults
  }
}
    `;

/**
 * __useFundingTypeStatisticsQuery__
 *
 * To run a query within a React component, call `useFundingTypeStatisticsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFundingTypeStatisticsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFundingTypeStatisticsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFundingTypeStatisticsQuery(baseOptions?: Apollo.QueryHookOptions<FundingTypeStatisticsQuery, FundingTypeStatisticsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FundingTypeStatisticsQuery, FundingTypeStatisticsQueryVariables>(FundingTypeStatisticsDocument, options);
      }
export function useFundingTypeStatisticsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FundingTypeStatisticsQuery, FundingTypeStatisticsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FundingTypeStatisticsQuery, FundingTypeStatisticsQueryVariables>(FundingTypeStatisticsDocument, options);
        }
export type FundingTypeStatisticsQueryHookResult = ReturnType<typeof useFundingTypeStatisticsQuery>;
export type FundingTypeStatisticsLazyQueryHookResult = ReturnType<typeof useFundingTypeStatisticsLazyQuery>;
export type FundingTypeStatisticsQueryResult = Apollo.QueryResult<FundingTypeStatisticsQuery, FundingTypeStatisticsQueryVariables>;
export const SupervisionLevelStatisticsDocument = gql`
    query SupervisionLevelStatistics {
  allSupervisionLevels {
    id
    name
    totalConsults
  }
}
    `;

/**
 * __useSupervisionLevelStatisticsQuery__
 *
 * To run a query within a React component, call `useSupervisionLevelStatisticsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSupervisionLevelStatisticsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSupervisionLevelStatisticsQuery({
 *   variables: {
 *   },
 * });
 */
export function useSupervisionLevelStatisticsQuery(baseOptions?: Apollo.QueryHookOptions<SupervisionLevelStatisticsQuery, SupervisionLevelStatisticsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SupervisionLevelStatisticsQuery, SupervisionLevelStatisticsQueryVariables>(SupervisionLevelStatisticsDocument, options);
      }
export function useSupervisionLevelStatisticsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SupervisionLevelStatisticsQuery, SupervisionLevelStatisticsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SupervisionLevelStatisticsQuery, SupervisionLevelStatisticsQueryVariables>(SupervisionLevelStatisticsDocument, options);
        }
export type SupervisionLevelStatisticsQueryHookResult = ReturnType<typeof useSupervisionLevelStatisticsQuery>;
export type SupervisionLevelStatisticsLazyQueryHookResult = ReturnType<typeof useSupervisionLevelStatisticsLazyQuery>;
export type SupervisionLevelStatisticsQueryResult = Apollo.QueryResult<SupervisionLevelStatisticsQuery, SupervisionLevelStatisticsQueryVariables>;
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

/**
 * __useProcedureTopicStatisticsQuery__
 *
 * To run a query within a React component, call `useProcedureTopicStatisticsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProcedureTopicStatisticsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProcedureTopicStatisticsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProcedureTopicStatisticsQuery(baseOptions?: Apollo.QueryHookOptions<ProcedureTopicStatisticsQuery, ProcedureTopicStatisticsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProcedureTopicStatisticsQuery, ProcedureTopicStatisticsQueryVariables>(ProcedureTopicStatisticsDocument, options);
      }
export function useProcedureTopicStatisticsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProcedureTopicStatisticsQuery, ProcedureTopicStatisticsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProcedureTopicStatisticsQuery, ProcedureTopicStatisticsQueryVariables>(ProcedureTopicStatisticsDocument, options);
        }
export type ProcedureTopicStatisticsQueryHookResult = ReturnType<typeof useProcedureTopicStatisticsQuery>;
export type ProcedureTopicStatisticsLazyQueryHookResult = ReturnType<typeof useProcedureTopicStatisticsLazyQuery>;
export type ProcedureTopicStatisticsQueryResult = Apollo.QueryResult<ProcedureTopicStatisticsQuery, ProcedureTopicStatisticsQueryVariables>;
export const ProcedureTypeStatisticsDocument = gql`
    query ProcedureTypeStatistics {
  allProcedureTypes {
    id
    name
    totalConsults
  }
}
    `;

/**
 * __useProcedureTypeStatisticsQuery__
 *
 * To run a query within a React component, call `useProcedureTypeStatisticsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProcedureTypeStatisticsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProcedureTypeStatisticsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProcedureTypeStatisticsQuery(baseOptions?: Apollo.QueryHookOptions<ProcedureTypeStatisticsQuery, ProcedureTypeStatisticsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProcedureTypeStatisticsQuery, ProcedureTypeStatisticsQueryVariables>(ProcedureTypeStatisticsDocument, options);
      }
export function useProcedureTypeStatisticsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProcedureTypeStatisticsQuery, ProcedureTypeStatisticsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProcedureTypeStatisticsQuery, ProcedureTypeStatisticsQueryVariables>(ProcedureTypeStatisticsDocument, options);
        }
export type ProcedureTypeStatisticsQueryHookResult = ReturnType<typeof useProcedureTypeStatisticsQuery>;
export type ProcedureTypeStatisticsLazyQueryHookResult = ReturnType<typeof useProcedureTypeStatisticsLazyQuery>;
export type ProcedureTypeStatisticsQueryResult = Apollo.QueryResult<ProcedureTypeStatisticsQuery, ProcedureTypeStatisticsQueryVariables>;
export const TotalConsultsDocument = gql`
    query TotalConsults {
  totalConsults
}
    `;

/**
 * __useTotalConsultsQuery__
 *
 * To run a query within a React component, call `useTotalConsultsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTotalConsultsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTotalConsultsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTotalConsultsQuery(baseOptions?: Apollo.QueryHookOptions<TotalConsultsQuery, TotalConsultsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TotalConsultsQuery, TotalConsultsQueryVariables>(TotalConsultsDocument, options);
      }
export function useTotalConsultsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TotalConsultsQuery, TotalConsultsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TotalConsultsQuery, TotalConsultsQueryVariables>(TotalConsultsDocument, options);
        }
export type TotalConsultsQueryHookResult = ReturnType<typeof useTotalConsultsQuery>;
export type TotalConsultsLazyQueryHookResult = ReturnType<typeof useTotalConsultsLazyQuery>;
export type TotalConsultsQueryResult = Apollo.QueryResult<TotalConsultsQuery, TotalConsultsQueryVariables>;
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

/**
 * __useProcedureLogbookQuery__
 *
 * To run a query within a React component, call `useProcedureLogbookQuery` and pass it any options that fit your needs.
 * When your component renders, `useProcedureLogbookQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProcedureLogbookQuery({
 *   variables: {
 *   },
 * });
 */
export function useProcedureLogbookQuery(baseOptions?: Apollo.QueryHookOptions<ProcedureLogbookQuery, ProcedureLogbookQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProcedureLogbookQuery, ProcedureLogbookQueryVariables>(ProcedureLogbookDocument, options);
      }
export function useProcedureLogbookLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProcedureLogbookQuery, ProcedureLogbookQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProcedureLogbookQuery, ProcedureLogbookQueryVariables>(ProcedureLogbookDocument, options);
        }
export type ProcedureLogbookQueryHookResult = ReturnType<typeof useProcedureLogbookQuery>;
export type ProcedureLogbookLazyQueryHookResult = ReturnType<typeof useProcedureLogbookLazyQuery>;
export type ProcedureLogbookQueryResult = Apollo.QueryResult<ProcedureLogbookQuery, ProcedureLogbookQueryVariables>;