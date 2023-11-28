import getComponentRootDom from "./getComponentRootDom"
import Icon from '@/components/Icon'
import style from './showMessage.module.less'

export default function (options = {}) {
  const content = options.content
  const type = options.type || 'info'
  const duration = options.duration || 1000
  const container = options.container || document.body

  //创建消息元素
  const div = document.createElement('div')
  const iconDom = getComponentRootDom(Icon, {
    type
  })

  //设置样式
  div.innerHTML = `<span class="${style.icon}">${iconDom.outerHTML}</span><div>${content}</div>`
  div.className = `${style.message} ${style["message-" + type]}`

  //将div加入到容器里
  //容器position是否改动过
  if (container !== document.body && getComputedStyle(container).position === 'static') {
    container.style.position = 'relative'
  }

  container.appendChild(div)

  //强制刷新重新渲染
  div.clientHeight

  //回归正常位置
  div.style.transform = `translate(-50%,-50%)`
  div.style.opacity = 1,

    console.log(div)
  //等一段事件消失
  setTimeout(() => {
    div.style.transform = `translate(-50%,-50%) translateY(-25px)`
    div.style.opacity = 0;
    //移除元素
    div.addEventListener('transitionend', () => {
      div.remove()
      //执行回调函数
      options.callback && options.callback()
    }, {
      once: true
    })
  }, duration)
}