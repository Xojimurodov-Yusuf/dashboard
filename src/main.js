import "./assets/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import Vue3Toastify from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const app = createApp(App);
const pinia = createPinia();

app.use(Vue3Toastify, {
  autoClose: 3000,
  position: "top-center",
  style: {
    fontSize: "20px",
    fontWeight: "bold",
  },
});

app.use(router);
app.use(pinia);
app.mount("#app");
