import { ref, computed, reactive, Ref } from "vue";
import { DateTime } from "luxon";
import {
  CreateConsultInput,
  useCreateConsultMutation,
  useUpdateConsultMutation,
  useConsultQuery,
  UpdateConsultInput,
  useImageUploadMutation,
  Scalars,
  useAllConsultsQuery,
} from "@/services/types.generated";
import { useApplicationStore } from "@/store/Application.store";

const initialState = {
  name: "",
  urn: "",
  selectedProcedures: [],
  hospitalId: null,
  supervisorId: null,
  rotationPeriodId: null,
  setLevelId: null,
  procedureDate: DateTime.now().toISODate(),
  dateOfBirth: null,
  startTime: null,
  endTime: null,
  gender: null,
  ethnicityId: null,
  admissionDate: null,
  admissionCategoryId: null,
  unplannedReadmissionId: null,
  fundingTypeId: null,
  diagnosisDate: null,
  preManagementDiagnosis: null,
  recognisedCoMorbidities: null,
  asaGradeId: null,
  woundInfectionRiskId: null,
  typeOfAnaestheticId: null,
  prophylaxis: null,
  finalDiagnosis: null,
  pathologicalDiagnoses: null,
  unplannedIcuId: null,
  returnToTheatreId: null,
  dischargeDate: null,
  outcomeId: null,
  mortalityClassificationId: null,
  recurrenceDate: null,
  discussedAtMdm: null,
  comments: null,
  isCompleted: false,
};
// HELPER FUNCTIONS.
function _procedureDuration(
  startTime: string | undefined,
  endTime: string | undefined
) {
  if (!endTime || !startTime) return { hours: 0, minutes: 0 };
  const { hours, minutes } = DateTime.fromISO(endTime)
    .diff(DateTime.fromISO(startTime), ["hours", "minutes"])
    .toObject();
  if (typeof hours === "undefined" || typeof minutes === "undefined")
    throw Error;
  return { hours: Math.abs(hours), minutes: Math.abs(minutes) };
}

function _patientAge(
  dateOfBirth: string | undefined,
  procedureDate: string | undefined
) {
  if (!dateOfBirth || !procedureDate) return 0;
  const endTime = DateTime.fromISO(procedureDate);
  const startTime = DateTime.fromISO(dateOfBirth);
  return endTime.diff(startTime, ["years", "months"]).toObject().years;
}

export function useCreateConsult() {
  const applicationStore = useApplicationStore();
  const createConsultMutation = useCreateConsultMutation();
  const input = reactive({
    ...initialState,
  });
  input.selectedProcedures = [];
  const rules = {
    name: [(val: string) => !!val || "Please enter the patient's name."],
    urn: [(val: string) => !!val || "Please enter the patient's URN/CRN."],
    hospitalId: [(val: string) => !!val || "Please select the hospital."],
    supervisorId: [(val: string) => !!val || "Please select your supervisor."],
    rotationPeriodId: [(val: string) => !!val || "Please select the rotation."],
    setLevelId: [(val: string) => !!val || "Please select a SET level."],
    procedureDate: [
      (val: string) => !!val || "Please enter the date of procedure.",
    ],
    dateOfBirth: [
      (val: string) => !!val || "Please enter the patient's date of birth.",
      (val: string) =>
        val < input.procedureDate ||
        "The date of birth cannot be earlier then the procedure date.",
    ],
    admissionDate: [(val: string) => !!val || "Please enter a admission date."],
    fundingTypeId: [(val: string) => !!val || "Please select a funding type."],
    diagnosisDate: [(val: string) => !!val || "Please enter a diagnosis date."],
    dischargeDate: [(val: string) => !!val || "Please enter a discharge date."],
  };
  if (applicationStore.currentRotation) {
    console.log("User has a current Rotation, setting defaults.");
    console.log(applicationStore.currentRotation);
    input.rotationPeriodId = applicationStore.currentRotation?.id;
    input.hospitalId = applicationStore.currentRotation?.hospital.id;
    input.setLevelId = applicationStore.currentRotation?.setLevel.id;
  }
  const procedureDuration = computed(() => {
    return _procedureDuration(input.startTime, input.endTime);
  });

  const patientAge = computed(() => {
    return _patientAge(input.dateOfBirth, input.procedureDate);
  });
  function createConsult(input: CreateConsultInput) {
    const result = createConsultMutation.executeMutation({
      input,
    });
    return result;
  }
  return { input, procedureDuration, patientAge, createConsult, rules };
}

export function useUpdateConsult(id: number) {
  const updateConsultMutation = useUpdateConsultMutation();
  const input = reactive({
    id,
    ...initialState,
  });
  const error = ref();
  const fetching = ref(true);
  const procedureDuration = computed(() => {
    return _procedureDuration(input.startTime, input.endTime);
  });
  const patientAge = computed(() => {
    return _patientAge(input.dateOfBirth, input.procedureDate);
  });

  useConsultQuery({
    variables: { input: { id } },
  }).then(
    (result) => {
      error.value = result.error.value;
      fetching.value = false;
      // check for errors etc
      if (!result.data.value) throw Error();
      Object.keys(input).forEach((key) => {
        input[key] = result.data.value.consult[key];
      });

      input.id = id;
      input.rotationPeriodId = result.data.value.consult.rotationPeriod.id;
      input.selectedProcedures = result.data.value.consult.procedures.map(
        (procedure) => {
          return {
            procedureId: procedure.procedure.id,
            supervisionLevel: procedure.supervisionLevel,
          };
        }
      );
    },
    (error) => {
      console.log(error);
    }
  );

  function updateConsult(input: UpdateConsultInput) {
    const result = updateConsultMutation.executeMutation({
      input,
    });
    return result;
  }
  return {
    input,
    error,
    fetching,
    updateConsult,
    procedureDuration,
    patientAge,
  };
}

export function resetConsult(newConsult: CreateConsultInput) {
  Object.assign(newConsult, initialState);
  newConsult.selectedProcedures = [];
}

export function getConsults() {
  return useAllConsultsQuery();
}

export function getConsult(id: Ref<number>) {
  return useConsultQuery({
    variables: { input: { id } },
  });
}

export function useImageUpload() {
  const imageUploadMutation = useImageUploadMutation();

  function imageUpload(file: Scalars["Upload"]) {
    console.log(file);
    const result = imageUploadMutation.executeMutation({
      input: { file },
    });
    return result;
  }

  return { imageUpload };
}
