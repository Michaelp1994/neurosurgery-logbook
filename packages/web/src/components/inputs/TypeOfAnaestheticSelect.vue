<script setup lang="ts">
  import { useAllTypeOfAnaestheticsQuery } from "@/services/types.generated";
  const { data } = useAllTypeOfAnaestheticsQuery();

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
    :options="data?.allTypeOfAnaesthetics"
    @update:model-value="(newValue) => emit('update:modelValue', newValue)"
  />
</template>
<style scoped></style>
