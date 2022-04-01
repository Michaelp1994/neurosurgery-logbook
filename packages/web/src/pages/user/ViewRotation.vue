<script setup lang="ts">
  import { getRotation } from "@/models/rotation";
  import { useRoute } from "vue-router";
  import { UserRole } from "@/services/types.generated";
  import { useApplicationStore } from "@/store/Application.store";

  const applicationStore = useApplicationStore();

  const user = applicationStore.credentials;

  const route = useRoute();
  if (typeof route.params.id !== "string") throw Error;
  const id = parseInt(route.params.id);
  const { data, fetching, error } = getRotation(id);
</script>

<template>
  <q-page padding>
    <div class="row q-px-sm justify-center q-pb-sm items-center">
      <q-btn
        icon="arrow_back"
        :to="{ name: 'rotations' }"
        rounded
        flat
        class="q-pa-sm"
      />
      <div class="text-h6 q-ml-lg">View Rotation</div>
      <q-space />
      <q-btn
        icon="edit"
        :to="{ name: 'updateRotation', params: { id } }"
        rounded
        class="q-pa-sm"
        flat
      />
    </div>
    <q-card>
      <template v-if="fetching"> Loading... </template>
      <template v-if="error"> Oh no Error... {{ error }} </template>
      <template v-if="data">
        <div class="row q-px-sm">
          <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
            <q-input
              v-model="data.rotation.name"
              outlined
              readonly
              label="Rotation Name"
              autofocus
            />
          </div>

          <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
            <q-input
              v-model="data.rotation.startDate"
              type="date"
              stack-label
              outlined
              readonly
              label="Start Date"
            />
          </div>

          <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
            <q-input
              v-model="data.rotation.endDate"
              type="date"
              stack-label
              outlined
              readonly
              label="End Date"
            />
          </div>

          <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
            <q-input
              :model-value="data.rotation.setLevel.name"
              outlined
              readonly
              label="Set Level"
            />
          </div>

          <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
            <q-input
              v-model="data.rotation.hospital.name"
              label="Hospital"
              readonly
              outlined
            />
          </div>
        </div>

        <div class="row q-px-sm justify-center">
          <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
            <q-toolbar class="bg-primary text-white shadow-2">
              <q-toolbar-title>Supervisors</q-toolbar-title>
            </q-toolbar>
            <q-list bordered separator>
              <q-item
                v-for="supervisor in data.rotation.supervisors"
                :key="supervisor.id"
              >
                <q-item-section>{{ supervisor.name }}</q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>
      </template>
      <q-expansion-item
        v-if="user!.role === UserRole.ADMIN"
        expand-separator
        label="Debug"
      >
        <q-card>
          <q-card-section>
            <pre v-if="data">
            
        {{ data.rotation }}

            </pre>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-card>
  </q-page>
</template>

<style scoped>
  .self-center {
    align-self: center;
  }
</style>
