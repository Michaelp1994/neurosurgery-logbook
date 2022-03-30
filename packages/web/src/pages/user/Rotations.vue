<script setup lang="ts">
  import RotationsTable from "@/components/tables/RotationsTable.vue";
</script>

<template>
  <q-page padding>
    <div class="row q-px-sm q-pb-sm items-center">
      <div class="text-h6">Rotations</div>
      <q-space></q-space>
      <q-btn
        icon="add"
        :to="{ name: 'createRotation' }"
        rounded
        flat
        class="q-pa-sm"
      />
    </div>
    <q-card>
      <RotationsTable />
    </q-card>
  </q-page>
</template>

<style scoped></style>
