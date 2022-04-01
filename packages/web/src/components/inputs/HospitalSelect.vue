<script setup lang="ts">
  import { getHospitals } from "@/models/hospital";

  const props = defineProps<{
    modelValue: number;
  }>();
  const emit = defineEmits<{
    (e: "update:modelValue", id: number): void;
  }>();

  const { data, fetching } = getHospitals();
</script>

<template>
  <q-select
    :model-value="props.modelValue"
    outlined
    option-value="id"
    option-label="name"
    :loading="fetching"
    emit-value
    map-options
    placeholder="Hospitals"
    :options="data?.allHospitals"
    @update:model-value="(newValue) => emit('update:modelValue', newValue)"
  />
</template>
<style scoped></style>
