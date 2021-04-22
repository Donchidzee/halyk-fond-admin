import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login/halyk-login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
