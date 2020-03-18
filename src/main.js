import Vue from 'vue'
import router from './router'
import App from './App.vue'
import VScrollLock from 'v-scroll-lock'

Vue.config.productionTip = false

Vue.use(VScrollLock)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
