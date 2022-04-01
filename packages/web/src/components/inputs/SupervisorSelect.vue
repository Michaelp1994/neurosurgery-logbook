<script setup lang="ts">
  import { getSupervisors } from "@/models/supervisor";

  const props = defineProps<{
    modelValue: number;
  }>();
  const emit = defineEmits<{
    (e: "update:modelValue", id: number): void;
  }>();

  const { data, fetching } = getSupervisors();
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
    placeholder="Supervisors"
    :options="data?.allSupervisors"
    @update:model-value="(newValue) => emit('update:modelValue', newValue)"
  />
</template>
<style scoped></style>
