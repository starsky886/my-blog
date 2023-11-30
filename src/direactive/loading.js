import styles from './loading.module.less'
import loadingUrl from '@/assets/loading.svg'
function createImgLoading() {
    const img = document.createElement('img')
    img.dataset.role = 'loading'
    img.src = loadingUrl
    img.className = styles.loading
    return img
}
function getLoadingImg(el) {
    return el.querySelector("img[data-role=loading]")
}
export default {
    bind(el, binding) {
        //根据binding的信息，决定创建或者删除元素，加到el上
        const curImg = getLoadingImg(el)
        if (binding.value) {
            if (!curImg) {
                let img = createImgLoading()
                el.appendChild(img)
            }
        } else {
            if (curImg) {
                curImg.remove()
            }
        }
    },
    update(el, binding) {
           //根据binding的信息，决定创建或者删除元素，加到el上
           const curImg = getLoadingImg(el)
           if (binding.value) {
               if (!curImg) {
                   let img = createImgLoading()
                   el.appendChild(img)
               }
           } else {
               if (curImg) {
                   curImg.remove()
               }
           }
    }
}