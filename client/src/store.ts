import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    recentLinks: [],
    newTuple: null,
    connectionError: false
  },
  mutations: {
    updateRecentLinks(state, arr) {
      state.recentLinks = arr
    },

    updateNewLink(state, tuple) {
      state.newTuple = tuple
    },
    updateConnectionError(state, bool) {
      state.connectionError = bool
    }
  },
  actions: {},
  modules: {}
})
