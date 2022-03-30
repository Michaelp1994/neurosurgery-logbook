<script setup lang="ts">
  import { ref } from "vue";
  import { useApplicationStore } from "@/store/Application.store";
  import { useRouter } from "vue-router";
  import { useRegister } from "@/models/user";
  import VueHcaptcha from "@hcaptcha/vue3-hcaptcha";
  import type { CombinedError } from "@urql/vue";
  const { registerUser, input, rules } = useRegister();
  const router = useRouter();
  const applicationStore = useApplicationStore();

  const VITE_CAPTCHA_PUBLIC_KEY = import.meta.env.VITE_CAPTCHA_PUBLIC_KEY;
  const repeatPassword = ref("");
  const loading = ref(false);
  const captcha = ref<VueHcaptcha>(null);
  const showError = ref(null as null | CombinedError);
  const captchaError = ref(false);

  function captchaVerified(token: string) {
    input.captchaToken = token;
    captchaError.value = false;
  }

  async function submit() {
    if (!input.captchaToken) {
      captchaError.value = true;
      return;
    }
    loading.value = true;
    showError.value = null;
    const { data, error } = await registerUser(input);
    if (error) {
      loading.value = false;
      showError.value = error;
      if (error.graphQLErrors.length) {
        input.captchaToken = "";
        captcha.value.reset();
      }
    } else {
      if (!data) throw Error("No Data."); //TODO: replace with showing an error. (unlikely there is every not data if there is no errors)
      applicationStore.saveUser(data.register);
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
        <q-card class="col-xs-10 col-sm-8 col-md-6 col-lg-4">
          <q-form refs="form" greedy @submit="submit">
            <q-card-section>
              <div class="row q-px-md">
                <div
                  class="col-12 q-py-lg text-center text-h4 text-weight-bold"
                >
                  Register
                </div>
                <div class="col-12 q-py-xs">
                  <q-input
                    v-model="input.email"
                    :rules="rules.email"
                    label="Email"
                    square
                    maxlength="100"
                    autocomplete="email"
                    filled
                    autofocus
                    :disable="loading"
                  />
                </div>
                <div class="col-12 q-py-xs">
                  <q-input
                    v-model="input.password"
                    :rules="rules.password"
                    type="password"
                    label="Password"
                    autocomplete="new-password"
                    placeholder="Type your password"
                    square
                    filled
                    :disable="loading"
                  />
                </div>
                <div class="col-12 q-py-xs">
                  <q-input
                    v-model.lazy="repeatPassword"
                    :rules="rules.repeatPassword"
                    type="password"
                    label="Confirm Password"
                    autocomplete="new-password"
                    placeholder="Type your password"
                    square
                    filled
                    :disable="loading"
                  />
                </div>
                <div class="col-12 q-py-xs">
                  <q-input
                    v-model="input.firstName"
                    :rules="rules.firstName"
                    label="First Name"
                    autocomplete="given-name"
                    square
                    maxlength="50"
                    filled
                    :disable="loading"
                  />
                </div>
                <div class="col-12 q-py-xs">
                  <q-input
                    v-model="input.lastName"
                    :rules="rules.lastName"
                    label="Last Name"
                    autocomplete="family-name"
                    maxlength="50"
                    square
                    :disable="loading"
                    filled
                  />
                </div>
                <div class="col-12 q-py-md text-center">
                  <vue-hcaptcha
                    ref="captcha"
                    :sitekey="VITE_CAPTCHA_PUBLIC_KEY"
                    @verify="captchaVerified"
                    @expired="input.captchaToken = ''"
                  />
                  <span v-if="captchaError" class="text-red">
                    Please fill out the captcha.
                  </span>
                </div>
                <div class="col-12 q-py-xs text-center text-red">
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
              </div>
            </q-card-section>
            <q-card-actions class="q-pa-md">
              <q-btn
                color="primary"
                class="full-width"
                label="Register"
                type="submit"
                :loading="loading"
              />
            </q-card-actions>
          </q-form>
          <q-card-section>
            <div class="text-center text-weight-light">
              Already have an account?
              <router-link :to="{ name: 'login' }"> Log in </router-link>
            </div>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped></style>
