import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    priceAll: [],
  },
  mutations: {
    add(state, payload) {
      state.cart.push(payload);
    },
    remove(state, payload) {
      state.cart.splice(payload, 1);
    },
    removeAll(state) {
      state.cart = [];
    },
    priceAll(state) {
      const value = state.cart.price.reduce((a, b) => a + b, 0);
      state.priceAll.push(value);
    },
  },

  actions: {
    add({ commit }) {
      commit("add");
    },
    remove({ commit }) {
      commit("remove");
    },
    removeAll({ commit }) {
      commit("removeAll");
    },
    priceAll({ commit }) {
      commit("priceAll");
    },
  },
});
