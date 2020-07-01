const state = {
  userName: "Acelee",
};
const getters = {
  firstLetter: (state) => {
    return state.userName.substr(1, 1);
  },
};
const mutations = {};
const actions = {};
export default {
  namespaced: true, // 开启命名空间后，外部的调用必须带'user'空间名
  state,
  getters,
  mutations,
  actions,
  // 模块里还可以再嵌套模块，非超大型项目不建议试用
  // modules: {subUser}
};
