<template>
  <div :data-theme="theme" class="mainPage">
    <nav class="link p-10">
      <router-link class="link" to="/">Home</router-link>
    </nav>
    <router-view />
    <div class="fixed top-10 right-10 border-2">
      <h3 class="h3 m-2">Switch Theme</h3>
      <select
        class="m-4"
        @change.prevent="handleSwitchTheme"
        v-model="selectedTheme"
      >
        <option
          v-for="(theme, index) in themeOptions"
          :value="theme"
          :key="index"
        >
          {{ theme }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "App",
  setup() {
    const store = useStore();
    const theme = computed(() => store.state.theme);
    const selectedTheme = ref("dark");
    const themeOptions = [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
    ];

    const handleSwitchTheme = (e) => {
      store.commit("switchTheme", e.target.value);
    };

    return { theme, selectedTheme, themeOptions, handleSwitchTheme };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.mainPage {
  height: 100vh;
}
</style>
