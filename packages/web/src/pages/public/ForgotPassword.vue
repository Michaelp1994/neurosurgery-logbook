<script setup lang="ts">
  import { ref } from "vue";
  import { useForgotPassword } from "@/models/user";
  import VueHcaptcha from "@hcaptcha/vue3-hcaptcha";
  import type { CombinedError } from "@urql/vue";

  const VITE_CAPTCHA_PUBLIC_KEY = import.meta.env.VITE_CAPTCHA_PUBLIC_KEY;
  const { input, forgotPassword, rules } = useForgotPassword();

  const loading = ref(false);
  const submitted = ref(false);
  const showError = ref(null as null | CombinedError);
  const captchaError = ref(false);
  const captcha = ref<VueHcaptcha>(null);

  function captchaCompleted(token: string) {
    input.captchaToken = token;
    captchaError.value = false;
  }

  async function submit() {
    submitted.value = false;
    showError.value = null;
    if (!input.captchaToken) {
      captchaError.value = true;
      return;
    }
    loading.value = true;
    const { error } = await forgotPassword(input);
    if (error) {
      showError.value = error;
      loading.value = false;
      if (error.graphQLErrors.length) {
        input.captchaToken = "";
        captcha.value.reset();
      }
    } else {
      loading.value = false;
      input.captchaToken = "";
      captcha.value.reset();
      submitted.value = true;
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
          <q-form :submit="submit">
            <q-card-section>
              <div class="row q-px-md">
                <div
                  class="col-12 q-py-lg text-center text-h4 text-weight-bold"
                >
                  Forgot Password
                </div>
                <div class="col-12 q-py-md">
                  Enter your user account's email address and we will send you a
                  password reset link.
                </div>
                <div class="col-12 q-py-md">
                  <q-input
                    v-model="input.email"
                    type="text"
                    label="Email"
                    square
                    filled
                    maxlength="100"
                    :rules="rules.email"
                    autofocus
                    :disable="loading"
                  />
                </div>
                <div class="col-12 q-py-md text-center">
                  <vue-hcaptcha
                    ref="captcha"
                    :sitekey="VITE_CAPTCHA_PUBLIC_KEY"
                    @expired="input.captchaToken = ''"
                    @verify="captchaCompleted"
                  />
                  <span v-if="captchaError" class="text-red">
                    Please fill out the captcha.
                  </span>
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
                <span v-if="submitted" class="text-green">
                  Check your email for a link to reset your password. If it
                  doesn't appear within a few minutes, check your spam folder.
                </span>
              </div>
            </q-card-section>

            <q-card-actions class="q-px-lg">
              <q-btn
                color="primary"
                class="full-width q-pa-xl"
                label="Continue"
                :loading="loading"
                type="submit"
              />
            </q-card-actions>
            <q-card-section>
              <div class="text-center text-weight-light">
                Remembered?
                <router-link :to="{ name: 'login' }"> Login </router-link>
              </div>
            </q-card-section>
          </q-form>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped></style>
