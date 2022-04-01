import Vue from "nativescript-vue";
import Home from "./pages/LandingPage.vue";
import Vuex from "vuex";
declare let __DEV__: boolean;
// import { firebase } from "@nativescript/firebase";
// Prints Vue logs when --env.production is *NOT* set while building
import MLKit from "@nativescript/mlkit-core/vue";

Vue.use(MLKit);
// firebase.init().then(
//   () => {
//     console.log("firebase.init done");
//   },
//   (error) => {
//     console.log(`firebase.init error: ${error}`);
//   }
// );
Vue.config.silent = !__DEV__;
Vue.use(Vuex);
new Vue({
  render: (h) => h("frame", [h(Home)]),
}).$start();
