<script setup lang="ts">
  import HospitalsTable from "@/components/tables/HospitalsTable.vue";
</script>

<template>
  <q-page padding>
    <div class="row q-px-sm q-pb-sm items-center">
      <div class="text-h6">Hospitals</div>
      <q-space></q-space>
      <q-btn
        icon="add"
        :to="{ name: 'createHospital' }"
        rounded
        flat
        class="q-pa-sm"
      />
    </div>
    <q-card>
      <HospitalsTable />
    </q-card>
  </q-page>
</template>

<style scoped></style>
