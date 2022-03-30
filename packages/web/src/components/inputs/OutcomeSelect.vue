<script setup lang="ts">
  import { useAllOutcomesQuery } from "@/services/types.generated";
  const { data, error, fetching } = useAllOutcomesQuery();
  const props = defineProps(["modelValue"]);
  const emits = defineEmits(["update:modelValue"]);
</script>

<template>
  <q-select
    :model-value="modelValue"
    outlined
    emit-value
    map-options
    option-value="id"
    option-label="name"
    :options="data?.allOutcomes"
    @update:model-value="(newValue) => $emit('update:modelValue', newValue)"
  />
</template>
<style scoped></style>
