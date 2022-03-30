<script setup lang="ts">
  import { useCreateHospital } from "@/models/hospital";
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import UrnMaskHelperTable from "@/components/UrnMaskHelperTable.vue";
  const router = useRouter();
  const loading = ref(false);
  const { input, createHospital, rules } = useCreateHospital();

  async function submit() {
    const { data, error } = await createHospital(input);
    if (error) throw error;
    if (!data) throw Error;
    router.push({
      name: "viewHospital",
      params: { id: data.createHospital.id },
    });
  }
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
      <div class="q-ml-lg text-h6">Create Hospital</div>
      <q-space />
    </div>
    <q-card>
      <q-form @submit="submit">
        <q-card-section>
          <div class="row q-py-sm justify-center">
            <div class="col-12 col-md-6 col-lg-4 q-pa-sm">
              <q-input
                v-model="input.name"
                :rules="rules.name"
                outlined
                label="Hospital Name"
                autofocus
              />
            </div>
          </div>
          <div class="row q-py-sm justify-center">
            <div class="col-12 col-md-6 col-lg-4 q-pa-sm">
              <q-input
                v-model="input.urnMask"
                outlined
                label="URN/CRN Mask"
                hint="Example: ###/###/###"
              >
                <template #append>
                  <q-icon name="help_outline" />
                  <urn-mask-helper-table />
                </template>
              </q-input>
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
