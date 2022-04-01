<script setup lang="ts">
  import { useAllAdmissionCategoriesQuery } from "@/services/types.generated";

  const props = defineProps<{
    modelValue: number;
  }>();

  const emit = defineEmits<{
    (e: "update:modelValue", id: number): void;
  }>();

  const { data } = useAllAdmissionCategoriesQuery();
</script>

<template>
  <q-select
    :model-value="props.modelValue"
    outlined
    emit-value
    map-options
    option-value="id"
    option-label="name"
    placeholder="Admission Category"
    :options="data?.allAdmissionCategories"
    @update:model-value="(newValue) => emit('update:modelValue', newValue)"
  />
</template>
<style scoped></style>
