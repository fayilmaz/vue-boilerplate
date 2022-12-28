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
  },
  setup() {
    const store = useStore();
    return { store };
  },
};
</script>
