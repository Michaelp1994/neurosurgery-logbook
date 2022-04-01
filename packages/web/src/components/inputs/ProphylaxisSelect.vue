<script setup lang="ts">
  const props = defineProps<{
    modelValue: number;
  }>();
  const emit = defineEmits<{
    (e: "update:modelValue", id: number): void;
  }>();
  const options = ["Antibiotics", "DVT Prevention"];
</script>

<template>
  <q-select
    :model-value="props.modelValue"
    outlined
    :options="options"
    @update:model-value="(newValue) => emit('update:modelValue', newValue)"
  />
</template>
<style scoped></style>
