import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login/halyk-login.vue";
import AppLayout from "../views/layouts/halyk-app-layout.vue";
import Questionnaire from "../views/questionnaire/halyk-questionnaire.vue";
import Volunteers from "../views/volunteers/halyk-volunteers.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/app",
    component: AppLayout,
    children: [
      {
        path: "questionnaire",
        name: "questionnaire",
        component: Questionnaire,
      },
      {
        path: "volunteers",
        name: "volunteers",
        component: Volunteers,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
