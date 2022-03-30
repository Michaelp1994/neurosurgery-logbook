<script setup lang="ts">
  import { useAllAsaGradesQuery } from "@/services/types.generated";
  const props = defineProps(["modelValue"]);
  const emits = defineEmits(["update:modelValue"]);

  const { data, error, fetching } = useAllAsaGradesQuery();

  const options = [
    "I - Normal Healthy Patient",
    "II - Mild Systemic Disease",
    "III - Severe Systemic Disease",
    "IV - Severe Systemic Disease that is a constant threat to life",
    "V - Moribund patient who is not expected to survive without operation",
    "VI - A declared brain-dead patient whose organs are being removed for donor purposes",
  ];
</script>

<template>
  <q-select
    :model-value="modelValue"
    outlined
    emit-value
    map-options
    option-value="id"
    option-label="name"
    :options="data?.allAsaGrades"
    @update:model-value="(newValue) => $emit('update:modelValue', newValue)"
  />
</template>
<style scoped></style>
