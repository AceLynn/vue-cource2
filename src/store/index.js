import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import user from "./module/user";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true, // 开启命名空间后，外部的调用必须带module对应的空间名
  getters,
  state,
  mutations,
  actions,
  modules: { user },
});
