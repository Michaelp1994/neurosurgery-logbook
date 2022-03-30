<script setup lang="ts">
  import { useUpdateProfile } from "@/models/user";
  import { useRouter } from "vue-router";
  const router = useRouter();
  const { input, error, fetching, updateProfile } = useUpdateProfile();

  async function save() {
    const { data, error } = await updateProfile(input);
    if (error) throw error;
    if (!data) throw Error;
    router.push({
      name: "viewProfile",
    });
    //
  }
</script>

<template>
  <q-page padding>
    <div class="row q-px-sm q-pb-sm items-center">
      <q-btn
        icon="arrow_back"
        :to="{ name: 'viewProfile' }"
        rounded
        flat
        class="q-pa-sm"
      />
      <div class="text-h6 q-ml-lg">Update Profile</div>
      <q-space />
    </div>
    <q-card>
      <template v-if="fetching"> Loading... </template>
      <template v-if="error"> Oh no Error... {{ error }} </template>
      <template v-if="input">
        <div class="row q-pa-lg">
          <div class="col-12 col-md-4 q-py-sm">
            <q-input v-model="input.email" label="Email" outlined />
          </div>
          <q-space class="col-md-8" />
          <div class="col-12 col-md-4 q-py-sm">
            <q-input v-model="input.firstName" label="First Name" outlined />
          </div>
          <q-space class="col-md-8" />
          <div class="col-12 col-md-4 q-py-sm">
            <q-input v-model="input.lastName" label="Last Name" outlined />
          </div>
          <q-space class="col-md-8" />
        </div>
      </template>
      <q-card-actions>
        <q-btn color="primary" class="col-12 col-md-2" @click="save">
          Submit
        </q-btn>
        <!-- <div class="row">
          <q-space></q-space>
          <div class="col-1 align-right q-pa-md">
          </div>
        </div> -->
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<style scoped></style>
