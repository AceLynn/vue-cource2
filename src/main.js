import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Bus from "./lib/bus";
import axios from "axios";

if (process.env.NODE_ENV !== "production") {
  require("./mock");
}

Vue.prototype.$axios = axios;

Vue.config.productionTip = false;
Vue.prototype.$bus = Bus;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
