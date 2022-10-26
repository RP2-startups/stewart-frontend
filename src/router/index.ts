import ProjectRegister from "@/pages/ProjectRegister.vue";
import HomePage from "@/pages/HomePage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/register-project",
      name: "Register Project",
      component: ProjectRegister,
    },
    {
      path: "/",
      name: "Home page",
      component: HomePage,
    },
    {
      path: "/login",
      name: "Login",
      component: LoginPage,
      props: true
    },
    {path: "/register",
      name: "Register",
      component: RegisterPage,
      props: true}
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
