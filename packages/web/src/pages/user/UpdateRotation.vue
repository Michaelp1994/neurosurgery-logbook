<script setup lang="ts">
  import { useUpdateRotation } from "@/models/rotation";
  import { useRoute, useRouter } from "vue-router";
  import HospitalSelect from "@/components/inputs/HospitalSelect.vue";
  import SupervisorSelect from "@/components/inputs/SupervisorSelect.vue";
  import SetLevelSelect from "@/components/inputs/SetLevelSelect.vue";
  import { useApplicationStore } from "@/store/Application.store";
  import { UserRole } from "@/services/types.generated";
  const applicationStore = useApplicationStore();
  const user = applicationStore.credentials;
  const route = useRoute();
  const router = useRouter();

  if (typeof route.params.id !== "string") throw Error;
  const id = parseInt(route.params.id);
  const { input, updateRotation, error, fetching } = useUpdateRotation(id);
  async function save() {
    const { data, error } = await updateRotation(input);
    if (error) throw error;
    if (!data) throw Error;
    router.push({
      name: "viewRotation",
      params: { id },
    });
  }
</script>

<template>
  <q-page padding>
    <div class="row q-px-sm q-pb-sm items-center">
      <q-btn
        icon="arrow_back"
        :to="{ name: 'viewRotation', params: { id } }"
        rounded
        flat
        class="q-pa-sm"
      />
      <div class="text-h6 q-ml-lg">Update Rotation</div>
      <q-space />
    </div>
    <q-card>
      <q-card-section>
        <template v-if="fetching"> Loading... </template>
        <template v-if="error"> Oh no Error... {{ error }} </template>
        <template v-if="input">
          <div class="row q-py-sm">
            <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
              <q-input
                v-model="input.name"
                outlined
                label="Rotation Name"
                autofocus
              />
            </div>
            <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
              <q-input
                v-model="input.startDate"
                type="date"
                stack-label
                outlined
                label="Start Date"
              />
            </div>
            <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
              <q-input
                v-model="input.endDate"
                type="date"
                stack-label
                outlined
                label="End Date"
              />
            </div>
            <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
              <SetLevelSelect v-model="input.setLevelId" label="SET Level" />
            </div>
            <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
              <HospitalSelect v-model="input.hospitalId" label="Hospital" />
            </div>
            <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
              <SupervisorSelect
                v-model="input.supervisorIds"
                label="Supervisors"
                multiple
                use-chips
              />
            </div>
          </div>
        </template>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn color="primary" class="col-12 col-md-2" @click="save"
          >Submit</q-btn
        >
      </q-card-actions>
      <q-expansion-item
        v-if="user!.role === UserRole.ADMIN"
        expand-separator
        label="Debug"
      >
        <q-card>
          <q-card-section>
            <pre>
        {{ input }}
      </pre
            >
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
