<template>
  <div class="flex justify-center">
    <ButtonsView />
    <TextInputView />
  </div>
</template>

<script>
import { useStore } from "vuex";
import ButtonsView from "./ButtonsView.vue";
import TextInputView from "./TextInputView.vue";
export default {
  name: "AllComponentsView",
  components: { ButtonsView, TextInputView },
  setup() {
    const store = useStore();
    return { store };
  },
};
</script>
