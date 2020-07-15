import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    recentLinks: []
  },
  mutations: {
    updateRecentLinks(state, arr) {
      state.recentLinks = arr
    }
  },
  actions: {},
  modules: {}
})
