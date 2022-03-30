<script setup lang="ts">
  import { getHospitals } from "@/models/hospital";

  const props = defineProps(["modelValue"]);
  const emits = defineEmits(["update:modelValue"]);

  const { data, error, fetching } = getHospitals();
</script>

<template>
  <q-select
    :model-value="modelValue"
    outlined
    option-value="id"
    option-label="name"
    :loading="fetching"
    emit-value
    map-options
    placeholder="Hospitals"
    :options="data?.allHospitals"
    @update:model-value="(newValue) => $emit('update:modelValue', newValue)"
  />
</template>
<style scoped></style>
