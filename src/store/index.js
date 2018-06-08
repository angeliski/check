import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

Vue.use(Vuex);

const storage = new VuexPersist({
  key: 'check',
  storage: window.sessionStorage,
});


export default new Vuex.Store({
  modules: {
  },
  plugins: [storage.plugin],
});
