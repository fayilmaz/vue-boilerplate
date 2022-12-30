<template>
  <div class="flex flex-wrap justify-center pb-10">
    <ButtonsView />
    <TextInputView />
    <TextAreaView />
    <CheckboxView />
    <LinkView />
    <RadioView />
    <SelectView />
    <ToggleView />
    <FormView />
    <ModalView />
  </div>
</template>

<script>
import { useStore } from "vuex";
import ButtonsView from "./ButtonsView.vue";
import TextInputView from "./TextInputView.vue";
import TextAreaView from "./TextAreaView.vue";
import CheckboxView from "./CheckboxView.vue";
import LinkView from "./LinkView.vue";
import RadioView from "./RadioView.vue";
import SelectView from "./SelectView.vue";
import ToggleView from "./ToggleView.vue";
import ModalView from "./ModalView.vue";
import FormView from "./FormView.vue";
export default {
  name: "AllComponentsView",
  components: {
    ButtonsView,
    TextInputView,
    TextAreaView,
    CheckboxView,
    LinkView,
    RadioView,
    SelectView,
    ToggleView,
    ModalView,
    FormView,
  },
  setup() {
    const store = useStore();
    return { store };
  },
};
</script>
