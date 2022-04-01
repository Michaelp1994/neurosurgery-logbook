<script setup lang="ts">
  import { getProcedures } from "@/models/procedure";

  const props = defineProps<{
    modelValue: number;
  }>();
  const emit = defineEmits<{
    (e: "update:modelValue", id: number): void;
  }>();

  const { data, fetching } = getProcedures();
  const procedureLabel = (procedure) => {
    //if (!procedure) return null;
    return `${procedure.name} (${procedure.type.name})`;
  };
</script>

<template>
  <q-select
    :model-value="props.modelValue"
    outlined
    option-value="id"
    :option-label="procedureLabel"
    :loading="fetching"
    emit-value
    map-options
    placeholder="Hospitals"
    :options="data?.allProcedures"
    @update:model-value="(newValue) => emit('update:modelValue', newValue)"
  />
</template>
<style scoped></style>
