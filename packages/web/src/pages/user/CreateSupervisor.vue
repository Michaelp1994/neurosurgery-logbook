<script setup lang="ts">
  import { useCreateSupervisor } from "@/models/supervisor";
  import { ref, watchEffect } from "vue";
  import { useRouter } from "vue-router";
  const router = useRouter();
  const loading = ref(false);
  const { input, createSupervisor, rules } = useCreateSupervisor();
  async function submit() {
    const { data, error } = await createSupervisor(input);
    if (error) throw error;
    if (!data) throw Error;
    router.push({
      name: "viewSupervisor",
      params: { id: data.createSupervisor.id },
    });
  }
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
      <div class="q-ml-lg text-h6">Create Supervisor</div>
      <q-space />
    </div>
    <q-card>
      <q-form @submit="submit">
        <q-card-section>
          <div class="row q-py-sm">
            <div class="col-xs-12 col-md-6 col-lg-4 q-pa-sm">
              <q-input
                v-model="input.name"
                :rules="rules.name"
                label="Supervisor Name"
                outlined
                autofocus
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
    </q-card>
  </q-page>
</template>

<style scoped></style>
