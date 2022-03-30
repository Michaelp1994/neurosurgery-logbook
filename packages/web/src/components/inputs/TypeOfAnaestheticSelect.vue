<script setup lang="ts">
  import { useAllTypeOfAnaestheticsQuery } from "@/services/types.generated";
  const { data, error, fetching } = useAllTypeOfAnaestheticsQuery();

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
    :options="data?.allTypeOfAnaesthetics"
    @update:model-value="(newValue) => $emit('update:modelValue', newValue)"
  />
</template>
<style scoped></style>
