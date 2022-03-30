<script setup lang="ts">
  import { getSupervisors } from "@/models/supervisor";
  import { ref, reactive } from "vue";

  const props = defineProps(["modelValue"]);
  const emits = defineEmits(["update:modelValue"]);

  const { data, error, fetching } = getSupervisors();
</script>

<template>
  <q-select
    :model-value="modelValue"
    outlined
    option-value="id"
    option-label="name"
    :loading="fetching"
    emit-value
    map-options
    placeholder="Supervisors"
    :options="data?.allSupervisors"
    @update:model-value="(newValue) => $emit('update:modelValue', newValue)"
  />
</template>
<style scoped></style>
