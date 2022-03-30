<script setup lang="ts">
  import { getSupervisor } from "@/models/supervisor";
  import { useRoute } from "vue-router";
  const route = useRoute();
  if (typeof route.params.id !== "string") throw Error;
  const id = parseInt(route.params.id);
  const { data, fetching, error } = getSupervisor(id);
</script>

<template>
  <q-page padding>
    <div class="row q-px-sm q-pb-sm items-center">
      <q-btn
        icon="arrow_back"
        :to="{ name: 'supervisors' }"
        rounded
        flat
        class="q-pa-sm"
      />
      <div class="text-h6 q-ml-lg">View Supervisor</div>
      <q-space />
      <q-btn
        icon="edit"
        :to="{ name: 'updateSupervisor', params: { id } }"
        rounded
        class="q-pa-sm"
        flat
      />
    </div>
    <q-card>
      <template v-if="fetching"> Loading... </template>
      <template v-if="error"> Oh no Error... {{ error }} </template>
      <template v-if="data">
        <div class="q-pa-sm">
          <div class="row q-pa-sm">
            <div class="col-12 col-md-6">
              <q-input
                v-model="data.supervisor.name"
                label="Supervisor Name"
                readonly
                outlined
              />
            </div>
          </div>
        </div>
      </template>
    </q-card>
  </q-page>
</template>

<style scoped>
  .self-center {
    align-self: center;
  }
</style>
