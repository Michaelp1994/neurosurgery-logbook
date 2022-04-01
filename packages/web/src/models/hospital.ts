import {
  CreateHospitalInput,
  useAllHospitalsQuery,
  useHospitalQuery,
  useCreateHospitalMutation,
  UpdateHospitalInput,
  useUpdateHospitalMutation,
} from "@/services/types.generated";
import { reactive, Ref, ref } from "vue";

const initialState: CreateHospitalInput = {
  name: "",
  urnMask: "",
};

export function useCreateHospital() {
  const createHospitalMutation = useCreateHospitalMutation();

  const input = reactive({
    ...initialState,
  });
  const rules = {
    name: [(val: string) => !!val || "Please enter the hospital name."],
    urnMask: [(val: string) => !!val || "Please enter the URN Mask."],
  };
  function createHospital(input: CreateHospitalInput) {
    const result = createHospitalMutation.executeMutation({
      input,
    });
    return result;
  }
  return { input, rules, createHospital };
}

export function getHospital(id: Ref<number>) {
  return useHospitalQuery({
    variables: { input: { id } },
  });
}

export function getHospitals() {
  return useAllHospitalsQuery();
}

export function useUpdateHospital(id: number) {
  const updateHospitalMutation = useUpdateHospitalMutation();
  const input = reactive({
    id,
    ...initialState,
  });
  const error = ref();
  const fetching = ref(true);

  useHospitalQuery({
    variables: { input: { id } },
  }).then(
    (result) => {
      error.value = result.error.value;
      fetching.value = false;
      // check for errors etc
      Object.keys(input).forEach((key) => {
        input[key] = result.data.value?.hospital[key];
      });
    },
    (error) => {
      console.log(error);
    }
  );

  function updateHospital(input: UpdateHospitalInput) {
    const result = updateHospitalMutation.executeMutation({
      input,
    });
    return result;
  }
  return {
    input,
    error,
    fetching,
    updateHospital,
  };
}
