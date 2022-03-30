<script setup lang="ts">
  import { useAllWoundInfectionRisksQuery } from "@/services/types.generated";
  const { data, error, fetching } = useAllWoundInfectionRisksQuery();
  const props = defineProps(["modelValue"]);
  const emits = defineEmits(["update:modelValue"]);

  const options = [
    "Clean",
    "Clean/Contaminated",
    "Contaminated",
    "Dirty",
    "N/A",
    "Other",
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
    :options="data?.allWoundInfectionRisks"
    @update:model-value="(newValue) => $emit('update:modelValue', newValue)"
  />
</template>
<style scoped></style>
