
import Vue from 'vue'
import VueRouters from 'vue-router'

import Home from '@/views/Home'
import About from '@/views/About'
import Blog from '@/views/Blog'
import Message from '@/views/Message'
import Project from '@/views/Project'
import BlogDetail from '@/views/Blog/Detail.vue'
Vue.use(VueRouters)

const router = new VueRouters({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },

    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/blog/cate/:categoryId',
      name: 'CategoryBlog',
      component: Blog
    },
    {
      path: '/blog/:id',
      name: 'BlogDetail',
      component: BlogDetail
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    },
    {
      path: '/project',
      name: 'Project',
      component: Project
    },
  ]
})
export default router

