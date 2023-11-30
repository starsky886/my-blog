import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);//应用插件
import setting from './setting'
import banner from './banner'

export default new Vuex.Store({
    //仓库配置对象
    modules:{
        setting,
        banner
    },
    strict: true
})