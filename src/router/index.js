
import Vue from 'vue'
import VueRouters from 'vue-router'

import Home from '@/views/Home'
import About from '@/views/About'
import Blog from '@/views/Blog'
import Message from '@/views/Message'
import Project from '@/views/Project'
import BlogDetail from '@/views/Blog/Detail.vue'
import setTitle from '@/utils/setTitle'
Vue.use(VueRouters)

const router = new VueRouters({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        name: '首页'
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        name: '关于我'
      }
    },

    {
      path: '/blog',
      name: 'Blog',
      component: Blog,
      meta: {
        name: '文章'
      }
    },
    {
      path: '/blog/cate/:categoryId',
      name: 'CategoryBlog',
      component: Blog,
      meta: {
        name: '文章'
      }
    },
    {
      path: '/blog/:id',
      name: 'BlogDetail',
      component: BlogDetail,
      meta: {
        name: '文章详情'
      }
    },
    {
      path: '/message',
      name: 'Message',
      component: Message,
      meta: {
        name: '留言板'
      }
    },
    {
      path: '/project',
      name: 'Project',
      component: Project,
      meta: {
        name: '项目&效果'
      }
    },
  ]
})

router.afterEach((to,from)=>{
  setTitle.setSiteTitle(to.meta.name)
})
export default router

