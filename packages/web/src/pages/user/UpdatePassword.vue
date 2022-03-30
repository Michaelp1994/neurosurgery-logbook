<script setup lang="ts">
  import { useUpdatePassword } from "@/models/user";
  import { reactive } from "vue";
  import { useRouter } from "vue-router";
  const router = useRouter();
  const input = reactive({ currentPassword: "", newPassword: "" });
  const { updatePassword } = useUpdatePassword();

  async function save() {
    const { data, error } = await updatePassword(input);
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
      <div class="text-h6 q-ml-lg">Update Password</div>

      <q-space />
    </div>
    <q-card>
      <div class="q-pa-sm">
        <div class="row q-pa-sm">
          <div class="col-12 col-md-6 q-py-sm">
            <q-input
              v-model="input.currentPassword"
              outlined
              label="Current Password"
              type="password"
              autocomplete="current-password"
            />
          </div>
          <q-space class="col-md-6"></q-space>
          <div class="col-12 col-md-6 q-py-sm">
            <q-input
              v-model="input.newPassword"
              label="New Password"
              outlined
              type="password"
              autocomplete="new-password"
            />
          </div>
        </div>
      </div>
      <q-card-actions>
        <q-btn color="primary" class="col-12 col-md-2" @click="save">
          Submit
        </q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<style scoped></style>
