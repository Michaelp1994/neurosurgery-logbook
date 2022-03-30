import {
  useAllProceduresQuery,
  useProcedureQuery,
} from "@/services/types.generated";

const initialState = [];

export function getProcedures() {
  const result = useAllProceduresQuery();
  return result;
}

export function getProcedure(id: number) {
  const result = useProcedureQuery({ variables: { input: { id } } });
  return result;
}
