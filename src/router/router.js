import Home from "../views/Home.vue";

export default [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: (route) => ({
      food: route.query.food,
    }),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/argu/:name",
    name: "argu",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "index" */ "../views/Argu.vue"),
  },
  {
    path: "/count-to",
    name: "count-to",
    component: () =>
      import(/* webpackChunkName: "index" */ "../views/count-to.vue"),
  },
  {
    path: "/render-page",
    name: "render-page",
    component: () =>
      import(/* webpackChunkName: "index" */ "../views/render-page.vue"),
  },
  {
    path: "/split-pane",
    name: "split-pane",
    component: () =>
      import(/* webpackChunkName: "index" */ "../views/split-pane.vue"),
  },
  {
    path: "/named_view",
    components: {
      default: () => import("@/views/About.vue"),
      email: () => import("@/views/email.vue"),
      tel: () => import("@/views/tel.vue"),
    },
  },
  {
    path: "/email",
    name: "email",
    component: () =>
      import(/* webpackChunkName: "index" */ "../views/email.vue"),
  },
  {
    path: "/tel",
    name: "tel",
    component: () => import(/* webpackChunkName: "index" */ "../views/tel.vue"),
  },
  {
    path: "/store",
    name: "store",
    component: () =>
      import(/* webpackChunkName: "index" */ "../views/store.vue"),
  },
];

// export default routes;
