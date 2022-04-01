<script setup lang="ts">
  import { useAllOutcomesQuery } from "@/services/types.generated";
  const { data } = useAllOutcomesQuery();
  const props = defineProps<{
    modelValue: number;
  }>();
  const emit = defineEmits<{
    (e: "update:modelValue", id: number): void;
  }>();
</script>

<template>
  <q-select
    :model-value="props.modelValue"
    outlined
    emit-value
    map-options
    option-value="id"
    option-label="name"
    :options="data?.allOutcomes"
    @update:model-value="(newValue) => emit('update:modelValue', newValue)"
  />
</template>
<style scoped></style>
