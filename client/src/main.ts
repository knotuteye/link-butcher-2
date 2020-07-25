import Vue from 'vue'
import App from './App.vue'
import store from './store'

const infiniteScroll = require('vue-infinite-scroll')

Vue.config.productionTip = false
Vue.use(infiniteScroll)

new Vue({
  store,
  directives: { infiniteScroll },
  render: h => h(App)
}).$mount('#app')
