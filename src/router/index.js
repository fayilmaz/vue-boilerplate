import { createRouter, createWebHistory } from "vue-router";
import AllComponentsView from "../views/AllComponentsView.vue";
import ButtonsView from "../views/ButtonsView.vue";
import TextInputView from "../views/TextInputView";
import TextAreaView from "../views/TextAreaView";
import CheckboxView from "../views/CheckboxView";
import LinkView from "../views/LinkView";
import RadioView from "../views/RadioView";
import SelectView from "../views/SelectView";
import ToggleView from "../views/ToggleView";
import ModalView from "../views/ModalView";
import FormView from "../views/FormView";

const routes = [
  {
    path: "/",
    name: "home",
    component: AllComponentsView,
    props: true,
  },
  {
    path: "/buttons",
    name: "buttons",
    component: ButtonsView,
    props: true,
  },
  {
    path: "/text-inputs",
    name: "text-inputs",
    component: TextInputView,
    props: true,
  },
  {
    path: "/text-areas",
    name: "text-areas",
    component: TextAreaView,
    props: true,
  },
  {
    path: "/checkboxes",
    name: "checkboxes",
    component: CheckboxView,
    props: true,
  },
  {
    path: "/links",
    name: "links",
    component: LinkView,
    props: true,
  },
  {
    path: "/radios",
    name: "radios",
    component: RadioView,
    props: true,
  },
  {
    path: "/selects",
    name: "selects",
    component: SelectView,
    props: true,
  },
  {
    path: "/toggles",
    name: "toggles",
    component: ToggleView,
    props: true,
  },
  {
    path: "/modals",
    name: "modals",
    component: ModalView,
    props: true,
  },
  {
    path: "/form",
    name: "form",
    component: FormView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
