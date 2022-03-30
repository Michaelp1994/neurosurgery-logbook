<script setup lang="ts">
  import { useCreateRotation } from "@/models/rotation";
  import { useRouter } from "vue-router";
  import HospitalSelect from "@/components/inputs/HospitalSelect.vue";
  import SupervisorSelect from "@/components/inputs/SupervisorSelect.vue";
  import { useApplicationStore } from "@/store/Application.store";
  import { UserRole } from "@/services/types.generated";
  import SetLevelSelect from "@/components/inputs/SetLevelSelect.vue";
  const applicationStore = useApplicationStore();
  const user = applicationStore.credentials;
  const router = useRouter();
  const { input, rules, createRotation } = useCreateRotation();
  async function submit() {
    const { data, error } = await createRotation(input);
    if (error) throw error;
    if (!data) throw Error;
    router.push({
      name: "viewRotation",
      params: { id: data.createRotation.id },
    });
  }
</script>

<template>
  <q-page padding>
    <div class="row q-px-sm q-pb-sm items-center">
      <q-btn
        icon="arrow_back"
        :to="{ name: 'rotations' }"
        rounded
        flat
        class="q-pa-sm"
      />
      <div class="q-ml-lg text-h6">Create Rotation</div>
      <q-space />
    </div>
    <q-card>
      <q-form greedy @submit="submit">
        <q-card-section>
          <div class="row q-py-sm">
            <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
              <q-input
                v-model="input.name"
                :rules="rules.name"
                outlined
                label="Rotation Name"
                autofocus
              />
            </div>
          </div>
          <div class="row q-py-sm">
            <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
              <q-input
                v-model="input.startDate"
                :rules="rules.startDate"
                type="date"
                stack-label
                outlined
                label="Rotation Start Date"
              />
            </div>
          </div>
          <div class="row q-py-sm">
            <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
              <q-input
                v-model="input.endDate"
                :rules="rules.endDate"
                type="date"
                stack-label
                outlined
                label="Rotation End Date"
              />
            </div>
          </div>
          <div class="row q-py-sm">
            <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
              <SetLevelSelect
                v-model="input.setLevelId"
                :rules="rules.setLevelId"
                label="SET Level"
              />
            </div>
          </div>
          <div class="row q-py-sm">
            <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
              <HospitalSelect
                v-model="input.hospitalId"
                :rules="rules.hospitalId"
                label="Hospital"
              />
            </div>
          </div>
          <div class="row q-py-sm">
            <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
              <SupervisorSelect
                v-model="input.supervisorIds"
                :rules="rules.supervisorIds"
                label="Supervisors"
                multiple
                use-chips
              />
            </div>
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn
            color="primary"
            class="col-12 col-md-2"
            label="Create"
            type="submit"
          />
        </q-card-actions>
      </q-form>
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

<style scoped></style>
