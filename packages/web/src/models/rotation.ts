import {
  CreateRotationInput,
  UpdateRotationInput,
  useAllRotationsQuery,
  useCreateRotationMutation,
  useCurrentRotationQuery,
  useRotationQuery,
  useUpdateRotationMutation,
} from "@/services/types.generated";
import { reactive, ref } from "vue";

const initialState: CreateRotationInput = {
  name: "",
  startDate: "",
  endDate: "",
  setLevelId: null,
  hospitalId: null,
  supervisorIds: [],
};

export function getRotations() {
  return useAllRotationsQuery();
}

export function currentRotation() {
  return useCurrentRotationQuery();
}

export function getRotation(id: number) {
  return useRotationQuery({
    variables: { input: { id } },
  });
}

export function useCreateRotation() {
  const createRotationMutation = useCreateRotationMutation();

  const input = reactive({
    ...initialState,
  });
  const rules = {
    name: [(val: string) => !!val || "Please enter a name for the rotation."],
    startDate: [(val: string) => !!val || "Please enter a start date"],
    endDate: [
      (val: string) => !!val || "Please enter a end date",
      (val: string) =>
        val > input.startDate ||
        "The end date must be later then the start date.",
    ],
    setLevelId: [(val: string) => !!val || "Please select a SET level"],
    hospitalId: [(val: string) => !!val || "Please select a hospital"],
    supervisorIds: [
      (val: number[]) =>
        !!val.length || "Please select atleast one supervisor.",
    ],
  };
  function createRotation(input: CreateRotationInput) {
    const result = createRotationMutation.executeMutation({
      input,
    });
    return result;
  }
  return { input, rules, createRotation };
}

export function useUpdateRotation(id: number) {
  const updateRotationMutation = useUpdateRotationMutation();
  const input = reactive({
    id,
    ...initialState,
  });
  const error = ref();
  const fetching = ref(true);

  useRotationQuery({
    variables: { input: { id } },
  }).then((result) => {
    error.value = result.error.value;
    fetching.value = false;
    // check for errors etc
    Object.keys(input).forEach((key) => {
      input[key] = result.data.value?.rotation[key];
    });
    input.setLevelId = result.data.value?.rotation.setLevel.id;
    input.supervisorIds = result.data.value?.rotation.supervisors.map(
      (supervisor) => {
        return supervisor.id;
      }
    );
  });

  function updateRotation(input: UpdateRotationInput) {
    const result = updateRotationMutation.executeMutation({
      input,
    });
    return result;
  }
  return {
    input,
    error,
    fetching,
    updateRotation,
  };
}
