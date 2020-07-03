const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);

// const BASIC_URL = process.env.NODE_ENV === "production" ? "/iview-admin/" : "/";

module.exports = {
  lintOnSave: false,
  // baseUrl: BASIC_URL,
  chainWebpack: (config) => {
    config.resolve.alias.set("_c", resolve("src/components"));
  },
  // 打包时不生成 .map 文件
  productionSourceMap: false,
  devServer: {
    proxy: "http://localhost:3000",
  },
};
