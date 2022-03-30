<script setup lang="ts">
  import { ref } from "vue";
  import { useResetPassword } from "@/models/user";
  import type { CombinedError } from "@urql/vue";
  import { useRouter, useRoute } from "vue-router";

  const router = useRouter();
  const route = useRoute();

  if (typeof route.params.emailToken !== "string") throw Error;
  if (typeof route.params.id !== "string") throw Error;

  const emailToken = route.params.emailToken;
  const id = parseInt(route.params.id);

  const { input, resetPassword, rules } = useResetPassword(id, emailToken);

  const loading = ref(false);
  const repeatPassword = ref("");
  const showError = ref(null as null | CombinedError);

  async function submit() {
    showError.value = null;
    loading.value = true;
    const { error } = await resetPassword(input);
    if (error) {
      showError.value = error;
      loading.value = false;
    } else {
      router.push({ name: "login" });
    }
  }
</script>

<template>
  <q-layout>
    <q-page-container>
      <q-page
        class="bg-grey-3 window-height window-width row justify-center items-center"
      >
        <q-card class="col-xs-10 col-sm-8 col-md-6 col-lg-3">
          <q-form :submit="submit">
            <q-card-section>
              <div class="row q-px-md">
                <div
                  class="col-12 q-py-lg text-center text-h4 text-weight-bold"
                >
                  Reset Password
                </div>
                <div class="col-12 q-py-md">
                  <q-input
                    v-model="input.newPassword"
                    :rules="rules.newPassword"
                    type="password"
                    label="Password"
                    autocomplete="new-password"
                    placeholder="Type your password"
                    square
                    filled
                    :disable="loading"
                  />
                </div>
                <div class="col-12 q-py-md">
                  <q-input
                    v-model.lazy="repeatPassword"
                    :rules="rules.repeatPassword"
                    type="password"
                    label="Password"
                    autocomplete="new-password"
                    placeholder="Type your password"
                    square
                    filled
                    :disable="loading"
                  />
                </div>
              </div>
              <div class="col-12 q-py-md text-center">
                <template v-if="showError">
                  <span
                    v-for="(error, index) in showError.graphQLErrors"
                    :key="index"
                    class="text-red"
                  >
                    {{ error }}
                  </span>
                  <span v-if="showError.networkError" class="text-red">
                    Network Error. Please try again later.
                  </span>
                </template>
              </div>
            </q-card-section>
            <q-card-actions class="q-px-lg q-pb-lg">
              <q-btn
                color="primary"
                class="full-width q-pa-xl"
                label="Reset Password"
                type="submit"
              />
            </q-card-actions>
          </q-form>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped></style>
