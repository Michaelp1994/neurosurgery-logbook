<script setup lang="ts">
  import { useAllFundingTypesQuery } from "@/services/types.generated";
  const { data, error, fetching } = useAllFundingTypesQuery();

  const props = defineProps(["modelValue"]);
  const emits = defineEmits(["update:modelValue"]);

  // const options = [
  //   "Private - ACC funded (NZ)",
  //   "Private - DHB funded (NZ)",
  //   "Private - Health insurance funded (NZ)",
  //   "Private - Self funded",
  //   "Public",
  //   "Traffic (Aus)",
  //   "Veteran (Aus)",
  //   "Workcover (Aus)",
  // ];

  const options = [
    { label: "Private", value: "PRIVATE" },
    { label: "Public", value: "PUBLIC" },
  ];
</script>

<template>
  <q-select
    :model-value="modelValue"
    outlined
    emit-value
    map-options
    option-value="id"
    option-label="name"
    :options="data?.allFundingTypes"
    @update:model-value="(newValue) => $emit('update:modelValue', newValue)"
  />
</template>
<style scoped></style>
