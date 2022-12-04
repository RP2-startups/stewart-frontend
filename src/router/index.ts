import ProjectRegister from "@/pages/ProjectRegister.vue";
import HomePage from "@/pages/HomePage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
import SearchPage from "@/pages/SearchPage.vue";
import Project from "@/pages/Project.vue";
import Members from "@/subpages/Members.vue";
import Posts from "@/subpages/Posts.vue";
import About from "@/pages/About.vue";
import Contact from "@/pages/Contact.vue";
import ProjectList from "@/pages/ProjectList.vue";
import Files from "@/subpages/Files.vue";

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
      props: true,
    },
    {
      path: "/register",
      name: "Register",
      component: RegisterPage,
      props: true,
    },
    {
      path: "/search",
      name: "Search Page",
      component: SearchPage,
    },
    {
      path: "/project",
      name: "Project Page",
      component: Project,
      children: [
        {
            path: "posts",
            component: Posts
        },
        {
          path: "members",
          component: Members,
        },
        {
          path: "files",
          component: Files,
        },
        {
          path: "oc",
          components: Contact,
        },
        {
          path: "ac",
          components: About,
        },
      ],
    },
    {
      path: "/about",
      name: "About Page",
      component: About,
    },
    {
      path: "/contact",
      name: "Contact Page",
      component: Contact,
    },
    {
      path: "/projectregister",
      name: "Project Register",
      component: ProjectRegister
    },
    {
      path: "/projectlista/:input",
      name: "ProjectList",
      component: ProjectList,
      props: true,
    },
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
