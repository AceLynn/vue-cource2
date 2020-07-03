// import vue from "vue";

const mutations = {
  SET_APP_NAME(state, payload) {
    state.appName = payload;
    // state.appName = payload.appName;
  },
  SET_APP_VERSION(state) {
    // state.js 里如果没有初始化appversion，就要用set 响应更新数据
    // vue.set(state, "appVersion", "v3.0");

    // state.js 里有初始化appversion
    state.appVersion = "v3.0";
  },
  SET_STATE_VALUE(state, value) {
    state.stateValue = value;
  },
};

export default mutations;
