import { createStore } from "vuex";

export default createStore({
  state: {
    theme: "dark",
    user: null,
  },
  getters: {},
  mutations: {
    switchTheme: (state, payload) => {
      state.theme = payload;
    },
  },
  actions: {},
  modules: {},
});
