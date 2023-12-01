//设置网站标题的公共方法

let routerTitle = ""
let siteTitle = ""
function setTitle() {
    if (!routerTitle && !siteTitle) {
        document.title = 'loading...'
    } else if (routerTitle && !siteTitle) {
        document.title = routerTitle
    } else if (!routerTitle && siteTitle) {
        document.title = siteTitle
    } else {
        document.title = `${siteTitle}-${routerTitle}`
    }
}
export default {
    setRouterTitle(title) {
        routerTitle = title
        setTitle()
    },
    setSiteTitle(title) {
        siteTitle = title
        setTitle()
    }
}
