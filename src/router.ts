import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("./views/Home.vue"), // Placeholder component
    },
    {
        path: "/about",
        name: "About",
        component: () => import("./views/About.vue"), // Placeholder component
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
