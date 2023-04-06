import Vue from 'vue'
import App from './App.vue'
import router from './router'
import globalMixin from 'Mixins/global'
import 'Api/firebase'

Vue.mixin(globalMixin)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
