<script setup lang="ts">
  import { useAllEthnicitiesQuery } from "@/services/types.generated";

  const props = defineProps<{
    modelValue: number;
  }>();
  const emit = defineEmits<{
    (e: "update:modelValue", id: number): void;
  }>();
  const { data } = useAllEthnicitiesQuery();
</script>

<template>
  <q-select
    :model-value="props.modelValue"
    outlined
    emit-value
    map-options
    option-value="id"
    option-label="name"
    :options="data?.allEthnicities"
    @update:model-value="(newValue) => emit('update:modelValue', newValue)"
  />
</template>
<style scoped></style>
