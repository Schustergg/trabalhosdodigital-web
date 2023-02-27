import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";
import { store } from "./store";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    alias: "/home",
    name: "home",
    component: () => import("./components/Home.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./components/Login.vue"),
  },
  {
    path: "/resultados",
    name: "resultados",
    component: () => import("./components/Resultados.vue"),
  },
  {
    path: "/criar-conta",
    name: "criar-conta",
    component: () => import("./components/CriarConta.vue"),
  },
  {
    path: "/perfil/:id",
    name: "perfil",
    component: () => import("./components/Perfil.vue"),
  },
  {
    path: "/dashboard/:id",
    name: "dashboard",
    component: () => import("./components/Dashboard.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/perfil/edicao/:id",
    name: "perfil-edicao",
    component: () => import("./components/PerfilEdicao.vue"),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(to)
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.getters.getUserIsLogged) {
      next({
        name: "login"
      });
    } else {
      next();
    }
  } else {
     next()
  }
})

export default router;