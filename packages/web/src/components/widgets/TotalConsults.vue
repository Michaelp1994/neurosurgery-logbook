<script setup lang="ts">
  import { useTotalConsultsQuery } from "@/services/types.generated";

  const { data, error, fetching } = useTotalConsultsQuery();
</script>
<template>
  <q-card class="bg-primary">
    <q-card-section horizontal>
      <q-card-section class="bg-indigo-8 text-white col-3">
        <q-icon name="person" class="text-h2" />
      </q-card-section>
      <q-card-section class="bg-indigo-5 text-white col-9">
        <div class="text-h6">Total Consults</div>

        <div class="text-h6">
          {{ data?.totalConsults }}
        </div>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>
<style scoped></style>
