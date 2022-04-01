<script setup lang="ts">
  import { getRotations } from "@/models/rotation";

  const props = defineProps<{
    modelValue: number;
  }>();
  const emit = defineEmits<{
    (e: "update:modelValue", id: number): void;
  }>();

  const { data, fetching } = getRotations();
</script>

<template>
  <q-select
    :model-value="props.modelValue"
    :loading="fetching"
    outlined
    option-value="id"
    option-label="name"
    emit-value
    map-options
    :options="data?.allRotations"
    @update:model-value="(newValue) => emit('update:modelValue', newValue)"
  />
</template>
<style scoped></style>
