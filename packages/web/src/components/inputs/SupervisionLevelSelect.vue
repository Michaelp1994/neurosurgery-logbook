<script setup lang="ts">
  import { useAllSupervisionLevelsQuery } from "@/services/types.generated";

  const props = defineProps(["modelValue"]);
  const emits = defineEmits(["update:modelValue"]);
  const { data, error, fetching } = useAllSupervisionLevelsQuery();
</script>

<template>
  <q-select
    :model-value="modelValue"
    outlined
    emit-value
    map-options
    option-value="id"
    option-label="name"
    :options="data?.allSupervisionLevels"
    @update:model-value="(newValue) => $emit('update:modelValue', newValue)"
  />
</template>
<style scoped></style>
