<script setup lang="ts">
  import { computed, ref } from "vue";
  import { useApplicationStore } from "@/store/Application.store";
  import { useRouter } from "vue-router";
  import { useLogin } from "@/models/user";
  import type { CombinedError } from "@urql/vue";

  const applicationStore = useApplicationStore();
  const router = useRouter();
  const { login, input, rules } = useLogin();

  const loading = ref(false);
  const showError = ref(null as null | CombinedError);

  async function submit() {
    showError.value = null;
    loading.value = true;

    const { data, error } = await login(input);
    if (error) {
      loading.value = false;
      showError.value = error;
    } else {
      if (!data) throw Error("No Data."); //TODO: replace with showing an error. (unlikely there is every not data if there is no errors)
      applicationStore.saveUser(data.login);
      router.push({ name: "dashboard" });
    }
  }
</script>

<template>
  <q-layout>
    <q-page-container>
      <q-page
        class="bg-grey-3 window-height window-width row justify-center items-center"
      >
        <q-card class="col-xs-10 col-sm-8 col-md-6 col-lg-4 border">
          <q-form greedy @submit="submit">
            <q-card-section>
              <div class="row q-px-lg">
                <div
                  class="col-12 q-px-sm q-py-lg text-center text-h4 text-weight-bold"
                >
                  Login
                </div>

                <div class="col-12 q-py-sm">
                  <q-input
                    v-model="input.email"
                    type="text"
                    label="Email"
                    square
                    filled
                    maxlength="100"
                    autocomplete="username email"
                    lazy-rules="ondemand"
                    autofocus
                    :rules="rules.email"
                    :disable="loading"
                  />
                </div>
                <div class="col-12 q-py-sm">
                  <q-input
                    v-model="input.password"
                    type="password"
                    label="Password"
                    autocomplete="password"
                    :rules="rules.password"
                    :disable="loading"
                    lazy-rules="ondemand"
                    square
                    filled
                  />
                  <div class="text-right">
                    <router-link :to="{ name: 'forgotPassword' }">
                      Forgot Password?
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="col-12 text-center text-red">
                <template v-if="showError">
                  <span
                    v-for="(error, index) in showError.graphQLErrors"
                    :key="index"
                  >
                    {{ error }}
                  </span>
                  <span v-if="showError.networkError">
                    Network Error. Please try again later.
                  </span>
                </template>
              </div>
            </q-card-section>
            <q-card-actions class="q-px-lg">
              <q-btn
                color="primary"
                label="Login"
                class="full-width"
                type="submit"
                :loading="loading"
              />
            </q-card-actions>
          </q-form>
          <q-card-section>
            <div class="text-center text-weight-light">
              Need an account?
              <router-link :to="{ name: 'register' }"> Sign Up </router-link>
            </div>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped></style>
