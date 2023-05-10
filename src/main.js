import Vue from 'vue'
import App from './App.vue'
import router from './router'
import globalMixin from 'Mixins/global'
import 'Api/firebase'
import Carousel3d from 'vue-carousel-3d'
import 'animate.css'

Vue.use(Carousel3d)
Vue.mixin(globalMixin)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
