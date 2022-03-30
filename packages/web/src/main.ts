// VUE
import { createApp } from "vue";
import App from "./App.vue";

//PINIA
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

//VUE ROUTER
import { createRouter, createWebHistory } from "vue-router";
import routes from "./router/routes";
import beforeEachFunc from "./router/routerGuard";

//QUASAR
import { Quasar } from "quasar";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";

//URQL
import urql from "@urql/vue";
import authExchange from "./plugins/authExchange";
import cacheExchange from "./plugins/cacheExchange";

import { dedupExchange } from "@urql/core";
import { multipartFetchExchange } from "@urql/exchange-multipart-fetch";

// APEXCHARTS
import VueApexCharts from "vue3-apexcharts";

//VUE
const app = createApp(App);

// PINIA
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);

// ROUTER
const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach(beforeEachFunc);
app.use(router);
//URQL

// const path =
//   window.location.protocol +
//   "//" +
//   window.location.hostname +
//   ":" +
//   window.location.port +
//   "/graphql";
app.use(urql, {
  url: import.meta.env.VITE_SERVER_URL,
  //url: path,
  exchanges: [
    dedupExchange,
    cacheExchange,
    authExchange,
    multipartFetchExchange,
  ],
});

//QUASAR
app.use(Quasar);

//APEXCHARTS
app.use(VueApexCharts);

app.mount("#app");
