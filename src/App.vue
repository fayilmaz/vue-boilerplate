<template>
  <div :data-theme="theme" class="mainPage h-full">
    <nav class="link p-10 flex justify-center">
      <router-link class="link m-3" to="/">{{
        $t("menu_all_components")
      }}</router-link>
      <router-link class="link m-3" to="/buttons">{{
        $t("menu_button")
      }}</router-link>
      <router-link class="link m-3" to="/text-inputs">{{
        $t("menu_text_input")
      }}</router-link>
      <router-link class="link m-3" to="/text-areas">{{
        $t("menu_text_area")
      }}</router-link>
      <router-link class="link m-3" to="/checkboxes">{{
        $t("menu_checkbox")
      }}</router-link>
      <router-link class="link m-3" to="/links">{{
        $t("menu_link")
      }}</router-link>
      <router-link class="link m-3" to="/radios">{{
        $t("menu_radio")
      }}</router-link>
      <router-link class="link m-3" to="/selects">{{
        $t("menu_select")
      }}</router-link>
      <router-link class="link m-3" to="/toggles">{{
        $t("menu_toggle")
      }}</router-link>
      <router-link class="link m-3" to="/modals">{{
        $t("menu_modal")
      }}</router-link>
      <router-link class="link m-3" to="/form">{{
        $t("menu_form")
      }}</router-link>
    </nav>
    <router-view />
    <div class="fixed top-10 right-10 border-2">
      <form>
        <h3 class="h3 m-2">{{ $t("switch_language") }}</h3>
        <select
          class="m-4"
          @change.prevent="handleChangeLanguage"
          v-model="selectedLang"
        >
          <option v-for="(lang, index) in langs" :value="lang.key" :key="index">
            {{ lang.name }}
          </option>
        </select>
      </form>
      <form>
        <h3 class="h3 m-2">{{ $t("switch_theme") }}</h3>
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
      </form>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import i18next from "i18next";

export default {
  name: "App",
  components: {},
  setup() {
    const store = useStore();
    const theme = computed(() => store.state.theme);
    const selectedTheme = ref("dark");
    const selectedLang = ref("en");
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

    const langs = [
      { name: "English", key: "en" },
      { name: "Türkçe", key: "tr" },
    ];

    const handleSwitchTheme = (e) => {
      store.commit("switchTheme", e.target.value);
    };

    const handleChangeLanguage = (e) => {
      i18next.changeLanguage(e.target.value);
    };

    return {
      theme,
      selectedTheme,
      selectedLang,
      themeOptions,
      handleSwitchTheme,
      handleChangeLanguage,
      langs,
    };
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

.router-link-active {
  font-weight: 700;
}
</style>
