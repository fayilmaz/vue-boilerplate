<template>
  <div class="home">
    <div>Home Page</div>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  name: "HomePage",
  components: {},
  setup() {
    const store = useStore();
    return { store };
  },
};
</script>
