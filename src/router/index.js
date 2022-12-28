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
    title: "Button",
    component: ButtonsView,
    props: true,
  },
  {
    path: "/text-inputs",
    name: "text-inputs",
    title: "Text Input",
    component: TextInputView,
    props: true,
  },
  {
    path: "/text-areas",
    name: "text-areas",
    title: "Text Area",
    component: TextAreaView,
    props: true,
  },
  {
    path: "/checkboxes",
    name: "checkboxes",
    title: "Checkbox",
    component: CheckboxView,
    props: true,
  },
  {
    path: "/links",
    name: "links",
    title: "Link",
    component: LinkView,
    props: true,
  },
  {
    path: "/radios",
    name: "radios",
    title: "Radio",
    component: RadioView,
    props: true,
  },
  {
    path: "/selects",
    name: "selects",
    title: "Select",
    component: SelectView,
    props: true,
  },
  {
    path: "/toggles",
    name: "toggles",
    title: "Toggles",
    component: ToggleView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
