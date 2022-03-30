<script setup lang="ts">
  import { useAllUnplannedIcusQuery } from "@/services/types.generated";
  const { data, error, fetching } = useAllUnplannedIcusQuery();

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
    :options="data?.allUnplannedIcus"
    @update:model-value="(newValue) => $emit('update:modelValue', newValue)"
  />
</template>
<style scoped></style>
