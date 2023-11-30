import Vue from 'vue'
import App from './App.vue'
import './styles/global.less'
import router from '@/router/index'
import showMessage from '@/utils/showMessage'
import { getBanner } from './api/banner'
import vLoading from '@/direactive/loading'
Vue.directive('loading', vLoading)
// import './api/banner'
import './mock'
import './eventBus'
getBanner()


Vue.prototype.$showMessage = showMessage
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
