import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Bus from "./lib/bus";
import axios from "axios";

import CountTo from "_c/count-to";

if (process.env.NODE_ENV !== "production") {
  require("./mock");
}

Vue.prototype.$axios = axios;

Vue.config.productionTip = false;
Vue.prototype.$bus = Bus;

const handleClick = (event) => {
  console.log("li:", event);
  event.stopPropagation();
};
// 实现v-for
let list = [
  {
    name: "lison",
  },
  {
    name: "item",
  },
];
const getLiArr = (h) => {
  return list.map((item, index) =>
    h(
      "li",
      {
        on: {
          click: handleClick,
        },
        key: `list_item_${index}`,
      },
      item.name
    )
  );
};

new Vue({
  router,
  store,
  // render: (h) => h(App),
  // render: (h) => {
  // App 组件/函数/标签
  // return h(App);
  // return h(
  //   `div`,
  //   {
  //     attrs: {
  //       id: "box",
  //     },
  //     style: {
  //       color: "pink",
  //     },
  //   },
  //   "lison"
  // );
  // return h(
  //   CountTo,
  //   {
  //     // class是保留字，所以需要引号
  //     // class: ["count-to", true ? "aa" : "bb"],
  //     class: { "count-toc": true },
  //     props: {
  //       endVal: 100,
  //     },
  //     // 调用组件事件
  //     on: {
  //       "animation-end": (val) => {
  //         console.log("animation end");
  //       },
  //     },
  //     // 调用原生事件
  //     nativeOn: {
  //       click: () => {
  //         console.log("click");
  //       },
  //     },
  //     attrs: {
  //       id: "box",
  //     },
  //     style: {
  //       color: "pink",
  //     },
  //     // 自定义指令
  //     directives: [],
  //     slot: "",
  //     key: "",
  //     ref: "",
  //     scopedSlots: {},
  //     domProps: {
  //       innerHTML: "123",
  //     },
  //   }
  //   // "lison"
  // );
  // },
  // render: (h) => h("div", '123');
  // 属性可以放空不写
  // 第三个只能是字符串或者数组
  // render: (h) => h("div", [h("span", 111), h("span", 222)]),
  render: (h) => h(App),
  // render: (h) =>
  //   h("div", [
  //     h(
  //       "ul",
  //       {
  //         // 绑定的是html标签，绑定事件用on就可以，不需要nativeOn
  //         on: {
  //           click: (event) => {
  //             console.log(event);
  //           },
  //         },
  //       },
  //       // [
  //       //   h("li", {
  //       //     on: {
  //       //       click: (event) => {
  //       //         console.log("li:", event);
  //       //       },
  //       //     },
  //       //   }),
  //       // ]
  //       getLiArr(h)
  //     ),
  //   ]),
}).$mount("#app");
