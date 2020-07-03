export default (store) => {
  // 当你每次提交mutation后，都会执行subscribe里面的回调函数
  // 参数 每次提交的mutations和state信息
  // console.log("store 初始化");
  // store.state.appName = 'aaaa'; // 错误的方式
  if (localStorage.state) {
    store.replaceState(JSON.parse(localStorage.state));
  }
  store.subscribe((mutation, state) => {
    // console.log(mutation, state);

    // 每次提交将信息存在本地
    localStorage.state = JSON.stringify(state);
  });
};
