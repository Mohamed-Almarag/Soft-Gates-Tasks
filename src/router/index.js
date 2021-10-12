import { createRouter, createWebHistory } from "vue-router";
// import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "TaskOne",
    component: () =>
      import(/* webpackChunkName: "task-one" */ "../views/TaskOne.vue"),
  },
  {
    path: "/task-two",
    name: "TaskTwo",
    component: () =>
      import(/* webpackChunkName: "task-two" */ "../views/TaskTwo.vue"),
  },
  {
    path: "/task-three",
    name: "TaskThree",
    component: () =>
      import(/* webpackChunkName: "task-three" */ "../views/TaskThree.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
