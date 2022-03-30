<script setup lang="ts">
  import { useAllAdmissionCategoriesQuery } from "@/services/types.generated";

  const props = defineProps(["modelValue"]);
  const emits = defineEmits(["update:modelValue"]);
  const { data, error, fetching } = useAllAdmissionCategoriesQuery();
</script>

<template>
  <q-select
    :model-value="modelValue"
    outlined
    emit-value
    map-options
    option-value="id"
    option-label="name"
    placeholder="Admission Category"
    :options="data?.allAdmissionCategories"
    @update:model-value="(newValue) => $emit('update:modelValue', newValue)"
  />
</template>
<style scoped></style>
