<script setup lang="ts">
  import ConsultsTable from "@/components/tables/ConsultsTable.vue";
  import { ref } from "vue";
  const visibleColumns = ref([
    "procedureDate",
    "name",
    "urn",
    "hospital",
    "status",
    "action",
  ]);
</script>

<template>
  <q-page padding>
    <div class="row q-px-sm q-pb-sm items-center">
      <div class="text-h6">Consults</div>
      <q-space></q-space>
      <!-- <q-btn icon="visibility" rounded flat class="q-pa-sm" /> -->
      <q-btn
        icon="add"
        :to="{ name: 'createConsult' }"
        rounded
        flat
        class="q-pa-sm"
      />
    </div>
    <q-card>
      <ConsultsTable :model-value="visibleColumns" />
    </q-card>
  </q-page>
</template>

<style scoped>
  .debug {
    border: 1px black solid;
  }
</style>
