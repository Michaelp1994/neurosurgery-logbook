<script setup lang="ts">
  import { useAllSetLevelsQuery } from "@/services/types.generated";

  const props = defineProps(["modelValue"]);
  const emits = defineEmits(["update:modelValue"]);
  const { data, error, fetching } = useAllSetLevelsQuery();
</script>

<template>
  <q-select
    :model-value="modelValue"
    outlined
    emit-value
    option-value="id"
    option-label="name"
    map-options
    :options="data?.allSetLevels"
    @update:model-value="(newValue) => emits('update:modelValue', newValue)"
  />
</template>
<style scoped></style>
