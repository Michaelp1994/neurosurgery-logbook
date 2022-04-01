<script setup lang="ts">
  import { ConsultQuery } from "@/services/types.generated";
  defineProps<{
    modelValue?: ConsultQuery["consult"]["procedures"];
  }>();
</script>

<template>
  <q-list bordered seperator>
    <q-item-label header>Selected Procedures:</q-item-label>
    <template
      v-for="selectedProcedure in modelValue"
      :key="selectedProcedure.id"
    >
      <q-item>
        <q-item-section>
          <q-item-label>{{ selectedProcedure?.procedure.name }} </q-item-label>
          <q-item-label caption>
            Type: {{ selectedProcedure?.procedure.type.name }}
          </q-item-label>
        </q-item-section>
        <q-item-section>
          {{ selectedProcedure.supervisionLevel.name }}
        </q-item-section>
      </q-item>
      <q-separator />
    </template>
  </q-list>
</template>
<style scoped></style>
