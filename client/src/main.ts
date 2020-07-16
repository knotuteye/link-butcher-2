import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { getRecentLinks } from './api/calls'

Vue.config.productionTip = false

getRecentLinks('http://localhost:5000/slugs/all').then(data => {
  store.commit('updateRecentLinks', data)
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
