import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    recentLinks: [
      {
        short: 'xzcvgfds',
        original: 'https://www.google.com'
      },
      {
        short: 'r4e2sd6y',
        original: 'https://www.facebook.com'
      },
      {
        short: 'vlghoesa',
        original: 'https://www.techcrunch.com'
      },
      {
        short: 'rottieiw',
        original: 'https://web.whatsapp.com'
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
})
