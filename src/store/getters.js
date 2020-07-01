const getters = {
  appNameWithVersion: (state) => {
    // return state.appName + "v2.0";
    // return `${state.appName} v2.0`;
    return `${state.appName} ${state.appVersion}`;
  },
};

export default getters;
