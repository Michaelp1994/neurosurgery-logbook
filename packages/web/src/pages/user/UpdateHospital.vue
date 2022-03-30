<script setup lang="ts">
  import { useUpdateHospital } from "@/models/hospital";
  import { useRoute, useRouter } from "vue-router";
  const route = useRoute();
  const router = useRouter();

  if (typeof route.params.id !== "string") throw Error;
  const id = parseInt(route.params.id);
  const { input, updateHospital, error, fetching } = useUpdateHospital(id);
  async function save() {
    const { data, error } = await updateHospital(input);
    if (error) throw error;
    if (!data) throw Error;
    router.push({
      name: "viewHospital",
      params: { id },
    });
  }
</script>

<template>
  <q-page padding>
    <div class="row q-px-sm q-pb-sm items-center">
      <q-btn
        icon="arrow_back"
        :to="{ name: 'viewHospital', params: { id } }"
        rounded
        flat
        class="q-pa-sm"
      />
      <div class="text-h6 q-ml-lg">Update Hospital</div>
      <q-space />
    </div>
    <q-card>
      <q-card-section>
        <template v-if="fetching"> Loading... </template>
        <template v-if="error"> Oh no Error... {{ error }} </template>
        <template v-if="input">
          <div class="row q-pa-sm">
            <div class="col-12 col-md-4">
              <q-input v-model="input.name" label="Hospital Name" outlined />
            </div>
          </div>
          <div class="row q-pa-sm">
            <div class="col-12 col-md-4">
              <q-input v-model="input.urnMask" label="URN/CRN Mask" outlined />
            </div>
          </div>
        </template>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn color="primary" class="col-12 col-md-2" @click="save"
          >Submit</q-btn
        >
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<style scoped>
  .self-center {
    align-self: center;
  }
</style>
