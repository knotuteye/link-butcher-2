import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    recentLinks: [],
    newTuple: null
  },
  mutations: {
    updateRecentLinks: function(state, arr) {
      state.recentLinks = arr
    }
  },
  actions: {},
  modules: {}
})
