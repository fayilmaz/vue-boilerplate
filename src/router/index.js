import { createRouter, createWebHistory } from "vue-router";
import AllComponentsView from "../views/AllComponentsView.vue";
import ButtonsView from "../views/ButtonsView.vue";
import TextInputView from "../views/TextInputView";

const routes = [
  {
    path: "/",
    name: "home",
    title: "All Components View",
    component: AllComponentsView,
    props: true,
  },
  {
    path: "/buttons",
    name: "buttons",
    title: "Buttons View",
    component: ButtonsView,
    props: true,
  },
  {
    path: "/text-inputs",
    name: "text-inputs",
    title: "Text Inputs View",
    component: TextInputView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
