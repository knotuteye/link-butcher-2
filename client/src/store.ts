import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // server: 'http://localhost:5000/',
    server: window.location.href,
    recentLinks: [],
    newTuple: null,
    bubbleAnim: 'jello-horizontal',
    connectionError: false
  },
  mutations: {
    updateRecentLinks(state, arr) {
      state.recentLinks = arr.reverse()
    },

    updateNewLink(state, tuple) {
      state.newTuple = tuple
    },
    updateConnectionError(state, bool) {
      state.connectionError = bool
    },
    updateBubbleAnim(state, style) {
      state.bubbleAnim = style
    }
  },
  actions: {},
  modules: {}
})