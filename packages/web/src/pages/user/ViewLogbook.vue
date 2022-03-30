<script setup lang="ts">
  import LogbookTable from "@/components/tables/LogbookTable.vue";
</script>

<template>
  <q-page padding>
    <div class="row q-px-sm q-pb-sm items-center">
      <div class="text-h6">Logbook</div>
      <q-space></q-space>
      <q-btn icon="add" rounded flat class="q-pa-sm" />
    </div>
    <q-card>
      <LogbookTable />
    </q-card>
  </q-page>
</template>

<style scoped></style>
