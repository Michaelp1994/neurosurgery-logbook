<script setup lang="ts">
  import SupervisorsTable from "@/components/tables/SupervisorsTable.vue";
</script>

<template>
  <q-page padding>
    <div class="row q-px-sm q-pb-sm items-center">
      <div class="text-h6">Supervisors</div>
      <q-space></q-space>
      <q-btn
        icon="add"
        :to="{ name: 'createSupervisor' }"
        rounded
        flat
        class="q-pa-sm"
      />
    </div>
    <q-card>
      <SupervisorsTable />
    </q-card>
  </q-page>
</template>

<style scoped></style>
