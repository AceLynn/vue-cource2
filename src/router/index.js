import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import routes from "./router";

Vue.use(VueRouter);

// const routes = [
//   {
//     path: "/",
//     name: "Home",
//     component: Home
//   },
//   {
//     path: "/about",
//     name: "About",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "about" */ "../views/About.vue")
//   }
// ];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes,
});

const HAS_LOGINED = false;
router.beforeEach((to, from, next) => {
  // to.meta && setTitle(to.meta.title);
  if (to.name != "login") {
    if (HAS_LOGINED) {
      next();
    } else {
      next({ name: "login" });
    }
  } else {
    if (HAS_LOGINED) {
      next({ name: "home" });
    } else {
      next();
    }
  }
});

// router.afterEach((to, from) => {});

export default router;
