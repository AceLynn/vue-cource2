import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import user from "./module/user";
import saveInLocal from "@/plugin/saveInLocal";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV === "development", // 是否开启严格模式，控制 store 是否可以直接赋值修改等; 生产模式关闭以屏蔽错误，开发环境开启用于调试
  namespaced: true, // 开启命名空间后，外部的调用必须带module对应的空间名
  getters,
  state,
  mutations,
  actions,
  modules: { user },
  // 插件是数组
  plugins: [saveInLocal],
});
