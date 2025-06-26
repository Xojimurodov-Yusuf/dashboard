import { createRouter, createWebHistory } from "vue-router";
import ProductComentPage from "@/pages/comments/ProductComentPage.vue";
import ProductsPage from "@/pages/products/ProductsPage.vue";

const routes = [
  { path: "/", name: ProductsPage, component: ProductsPage },
  {
    path: "/comment/:id",
    name: ProductComentPage,
    component: ProductComentPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
