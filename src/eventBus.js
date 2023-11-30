// //事件总线
// const listeners = {}
// export default {

//     //监听某一个事件
//     $on(eventName, handle) {
//         if (!listeners[eventName]) {
//             listeners[eventName] = new Set()
//         }
//         listeners[eventName].add(handle)
//     },
//     //取消监听
//     $off(eventName, handle) {
//         if (!listeners[eventName]) {
//             return
//         }
//         listeners[eventName].delete(handle)
//     },

//     //触发事件
//     $emit(eventName, ...args) {
//         if (!listeners[eventName]) {
//             return
//         }
//         for(const handle of listeners[eventName]) {
//             handle(...args)
//         }
//     }

// }

import Vue from 'vue';

/**
 * 事件名：mainScroll
 * 含义：主区域滚动条位置变化后触发
 * 参数：滚动的Dom元素，如果是undefine，则表示dom元素不存在
 * 
 * 
 * 事件名：setMainScroll
 * 含义：当需要设置滚动区域时触发
 * 参数：滚动高度
 * 
 */
const app = new Vue({})
Vue.prototype.$bus = app
export default app