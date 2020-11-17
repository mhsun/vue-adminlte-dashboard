import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

require('../src/dist/css/adminlte.min.css')
require('../src/plugins/fontawesome-free/css/all.min.css')
require('../src/dist/js/adminlte')
require('../src/plugins/bootstrap/js/bootstrap.bundle')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
