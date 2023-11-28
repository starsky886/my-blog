//事件总线
const listeners = {}
export default {

    //监听某一个事件
    $on(eventName, handle) {
        if (!listeners[eventName]) {
            listeners[eventName] = new Set()
        }
        listeners[eventName].add(handle)
    },
    //取消监听
    $off(eventName, handle) {
        if (!listeners[eventName]) {
            return
        }
        listeners[eventName].delete(handle)
    },

    //触发事件
    $emit(eventName, ...args) {
        if (!listeners[eventName]) {
            return
        }
        for(const handle of listeners[eventName]) {
            handle(...args)
        }
    }

}

// import Vue from 'vue';
// export default new Vue({})