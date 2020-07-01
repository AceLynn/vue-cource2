module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "off" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "prettier/prettier": ["off"],
    "no-unused-vars": 'off',
    "no-unused-labels": 'off',
    "no-irregular-whitespace": "off", //这禁止掉 空格报错检查
  },
  globals: {
    AMap: false,
    AMapUI: false,
  },
};
