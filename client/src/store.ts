import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // server: 'http://localhost:5000/',
    server: window.location.href,
    recentLinks: new Array<{ _id: string; slug: string; url: string }>(),
    newTuple: null,
    connectionError: false
  },
  mutations: {
    updateRecentLinks(
      state,
      arr: Array<{ _id: string; slug: string; url: string }>
    ) {
      state.recentLinks.push(...arr)
    },

    addToRecentLinkStack(
      state,
      tuple: { _id: string; slug: string; url: string }
    ) {
      const lastItem = JSON.parse(JSON.stringify(state.recentLinks))[0]

      if (lastItem.slug != tuple.slug) {
        state.recentLinks.unshift(tuple)
      }
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
