import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);//应用插件
import setting from './setting'
import banner from './banner'
import about from './about'
import project from './project'

export default new Vuex.Store({
    //仓库配置对象
    modules:{
        setting,
        banner,
        about,
        setting,
        project
    },
    strict: true
})