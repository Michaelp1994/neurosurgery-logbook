<script setup lang="ts">
  import { getProcedures } from "@/models/procedure";
  import { AllProceduresQuery } from "@/services/types.generated";

  const props = defineProps(["modelValue"]);
  const emits = defineEmits(["update:modelValue"]);

  const { data, error, fetching } = getProcedures();
  const procedureLabel = (procedure) => {
    //if (!procedure) return null;
    return `${procedure.name} (${procedure.type.name})`;
  };
</script>

<template>
  <q-select
    :model-value="modelValue"
    outlined
    option-value="id"
    :option-label="procedureLabel"
    :loading="fetching"
    emit-value
    map-options
    placeholder="Hospitals"
    :options="data?.allProcedures"
    @update:model-value="(newValue) => $emit('update:modelValue', newValue)"
  />
</template>
<style scoped></style>
