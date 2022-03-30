<script setup lang="ts">
  import { useProfileQuery } from "@/services/types.generated";

  const { data, fetching, error } = useProfileQuery({});
</script>

<template>
  <q-page padding>
    <div class="row q-px-sm q-pb-sm items-center">
      <div class="text-h6">Profile</div>
      <q-space></q-space>
      <q-btn
        icon="password"
        :to="{ name: 'updatePassword' }"
        rounded
        class="q-pa-sm"
        flat
      />
      <q-btn
        icon="edit"
        :to="{ name: 'updateProfile' }"
        rounded
        class="q-pa-sm"
        flat
      />
    </div>
    <q-card>
      <q-card-section>
        <template v-if="fetching"> Loading... </template>
        <template v-if="error"> Oh no Error... {{ error }} </template>
        <template v-if="data">
          <div class="row q-pa-sm">
            <div class="col-12 col-md-4">
              <q-input
                v-model="data.profile.email"
                label="Email"
                readonly
                outlined
              />
            </div>
          </div>
          <div class="row q-pa-sm">
            <div class="col-12 col-md-4">
              <q-input
                v-model="data.profile.firstName"
                label="First Name"
                readonly
                outlined
              />
            </div>
          </div>
          <div class="row q-pa-sm">
            <div class="col-12 col-md-4">
              <q-input
                v-model="data.profile.lastName"
                label="Last Name"
                readonly
                outlined
              />
            </div>
          </div>
          <div class="row q-pa-sm">
            <div class="col-12 col-md-4">
              <q-input
                v-model="data.profile.role"
                label="User Role"
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

<style scoped></style>
