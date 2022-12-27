<template>
  <div class="flex justify-center">
    <ButtonsView />
    <TextInputView />
    <TextAreaView />
  </div>
</template>

<script>
import { useStore } from "vuex";
import ButtonsView from "./ButtonsView.vue";
import TextInputView from "./TextInputView.vue";
import TextAreaView from "./TextAreaView.vue";
export default {
  name: "AllComponentsView",
  components: { ButtonsView, TextInputView, TextAreaView },
  setup() {
    const store = useStore();
    return { store };
  },
};
</script>
