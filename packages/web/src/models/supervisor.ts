import {
  CreateSupervisorInput,
  UpdateSupervisorInput,
  useAllSupervisorsQuery,
  useCreateSupervisorMutation,
  useSupervisorQuery,
  useUpdateSupervisorMutation,
} from "@/services/types.generated";
import { reactive, ref } from "vue";

const initialState: CreateSupervisorInput = {
  name: "",
};

export function getSupervisors() {
  return useAllSupervisorsQuery();
}

export function getSupervisor(id: number) {
  return useSupervisorQuery({
    variables: { input: { id } },
  });
}

export function useCreateSupervisor() {
  const createSupervisorMutation = useCreateSupervisorMutation();

  const input = reactive({
    ...initialState,
  });
  const rules = {
    name: [(val: string) => !!val || "Please enter the supervisor's name."],
  };
  function createSupervisor(input: CreateSupervisorInput) {
    const result = createSupervisorMutation.executeMutation({
      input,
    });
    return result;
  }
  return { input, createSupervisor, rules };
}

export function useUpdateSupervisor(id: number) {
  const updateSupervisorMutation = useUpdateSupervisorMutation();
  const input = reactive({
    id,
    ...initialState,
  });
  const error = ref();
  const fetching = ref(true);

  useSupervisorQuery({
    variables: { input: { id } },
  }).then((result) => {
    error.value = result.error.value;
    fetching.value = false;
    // check for errors etc
    Object.keys(input).forEach((key) => {
      input[key] = result.data.value?.supervisor[key];
    });
  });

  function updateSupervisor(input: UpdateSupervisorInput) {
    const result = updateSupervisorMutation.executeMutation({
      input,
    });
    return result;
  }
  return {
    input,
    error,
    fetching,
    updateSupervisor,
  };
}
