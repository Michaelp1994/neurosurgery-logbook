<script setup lang="ts">
  import { getHospital } from "@/models/hospital";
  import { ref, watch } from "vue";
  import { useRoute } from "vue-router";
  const route = useRoute();
  if (typeof route.params.id !== "string") throw Error;
  const id = ref(parseInt(route.params.id));
  const { data, fetching, error } = getHospital(id);
  watch(
    () => route.params.id,
    (newId) => {
      if (typeof newId === "string") id.value = parseInt(newId);
    }
  );
</script>

<template>
  <q-page padding>
    <div class="row q-px-sm q-pb-sm items-center">
      <q-btn
        icon="arrow_back"
        :to="{ name: 'hospitals' }"
        rounded
        flat
        class="q-pa-sm"
      />
      <div class="text-h6 q-ml-lg">View Hospital</div>
      <q-space />
      <q-btn
        icon="edit"
        :to="{ name: 'updateHospital', params: { id } }"
        rounded
        class="q-pa-sm"
        flat
      />
    </div>
    <q-card>
      <q-card-section>
        <template v-if="fetching"> Loading... </template>
        <template v-if="error"> Error... {{ error }} </template>
        <template v-if="data">
          <div class="row q-pa-sm">
            <div class="col-12 col-md-4">
              <q-input
                v-model="data.hospital.name"
                label="Hospital Name"
                readonly
                outlined
              />
            </div>
          </div>
          <div class="row q-pa-sm">
            <div class="col-12 col-md-4">
              <q-input
                v-model="data.hospital.urnMask"
                label="URN/CRN Mask"
                readonly
                outlined
              />
            </div>
          </div>
        </template>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style scoped>
  .self-center {
    align-self: center;
  }
</style>
