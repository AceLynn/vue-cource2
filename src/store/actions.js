import { getAppName } from "@/api/app";
import { login } from "@/api/user";
const actions = {
  // changeAppNameSync1({ commit }) {},
  // changeAppNameSync2(obj) {
  //   const commit = obj.comit;
  // },
  // updateAppName({ commit }) {
  //   getAppName()
  //     .then((res) => {
  //       console.log(res);
  //       // commit("SET_APP_NAME", res.info.appName);

  //       // method2
  //       const {
  //         // code, // 用不到，可以不设置
  //         info: { appName },
  //       } = res;
  //       commit("SET_APP_NAME", appName);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  // },
  // commit 提交, state 当前层级state, rootState 根层级的state
  // dispatch('action2', 'xxx') 调用当前actions中的其他方法
  // async updateAppName({ commit, state, rootState, dispatch }) {
  async updateAppName({ commit }) {
    try {
      const {
        info: { appName },
      } = await getAppName();
      commit("SET_APP_NAME", appName);
    } catch (err) {
      console.log(err);
    }
  },
  actions2(val) {
    console.log(val);
  },
  login({ commit }, { userName, password }) {
    login({ userName, password })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

export default actions;
