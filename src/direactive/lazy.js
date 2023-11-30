import eventBus from '@/eventBus'
import debounds from '@/utils/debounds'
import defaultImg from '@/assets/default.gif'

let imgs = []
function setImage(img) {
    //处理每一个图片
    //初始化一张默认图
    img.dom.src = defaultImg

    const clientHeight = document.documentElement.clientHeight
    const rect = img.dom.getBoundingClientRect()
    if (!(rect.top < -rect.height || rect.top > clientHeight)) {
        //在可视区域内 
        const tempImage = new Image()
        tempImage.onload = () => {
            img.dom.src = img.src
        }
        tempImage.src = img.src
        //处理完之后将图片移出imgs
        imgs = imgs.filter((i) => {
            return i !== img
        })
    }
}
function setImages() {
    for (const img of imgs) {
        setImage(img)
    }
}
function handleScroll() {
    setImages()
}
eventBus.$on('mainScroll', debounds(handleScroll, 50))
export default {
    inserted(el, binding) {
        const img = {
            dom: el,
            src: binding.value,
        }
        imgs.push(img)
        setImage(img)
    },
    unbind(el, binding) {
        imgs = imgs.filter(t => {
            return t.dom != el
        })
    }
}