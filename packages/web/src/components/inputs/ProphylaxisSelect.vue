<script setup lang="ts">
  const props = defineProps(["modelValue"]);
  const emits = defineEmits(["update:modelValue"]);
  const options = ["Antibiotics", "DVT Prevention"];
</script>

<template>
  <q-select
    :model-value="modelValue"
    outlined
    :options="options"
    @update:model-value="(newValue) => $emit('update:modelValue', newValue)"
  />
</template>
<style scoped></style>
