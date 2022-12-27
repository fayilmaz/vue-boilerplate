<template>
  <div class="flex justify-center">
    <ButtonsView />
  </div>
</template>

<script>
import { useStore } from "vuex";
import ButtonsView from "./ButtonsView.vue";
export default {
  name: "AllComponentsView",
  components: { ButtonsView },
  setup() {
    const store = useStore();
    return { store };
  },
};
</script>
