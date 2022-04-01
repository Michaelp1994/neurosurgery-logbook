<script setup lang="ts">
  import { useAllSetLevelsQuery } from "@/services/types.generated";

  const props = defineProps<{
    modelValue: number;
  }>();
  const emit = defineEmits<{
    (e: "update:modelValue", id: number): void;
  }>();

  const { data } = useAllSetLevelsQuery();
</script>

<template>
  <q-select
    :model-value="props.modelValue"
    outlined
    emit-value
    option-value="id"
    option-label="name"
    map-options
    :options="data?.allSetLevels"
    @update:model-value="(newValue) => emit('update:modelValue', newValue)"
  />
</template>
<style scoped></style>
