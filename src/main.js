import Vue from 'vue'
import App from './App.vue'
import './styles/global.less'
import router from '@/router/index'
import showMessage from '@/utils/showMessage'
import { getBanner } from './api/banner'
import vLoading from '@/direactive/loading'
import vLazy from '@/direactive/lazy'
import store from './store'
Vue.directive('loading', vLoading)
Vue.directive('lazy', vLazy)
// import './api/banner'
import './mock'
import './eventBus'
getBanner()
store.dispatch("setting/fetchSetting");


Vue.prototype.$showMessage = showMessage
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
