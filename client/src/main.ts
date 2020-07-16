import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

particlesJS.load('overlay', './js/particles.json', function() {
  console.log('callback - particles.js config loaded')
})

