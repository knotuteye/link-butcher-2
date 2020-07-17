import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // server: 'http://localhost:5000/',
    server: window.location.href,
    recentLinks: new Array(),
    newTuple: null,
    connectionError: false
  },
  mutations: {
    updateRecentLinks(state, arr) {
      state.recentLinks = arr
    },

    addToRecentLinkStack(state, tuple) {
      state.recentLinks.unshift(tuple)
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
