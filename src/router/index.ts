import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
// 一级路由
import Layout from '@/Layout/index.vue'
Vue.use(VueRouter)
// 路由配置规则
const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'loginIndex',
    component: () => import(/* webpackChunkName: 'login' */ '@/views/login/index.vue')
  },
  {
    path: '/',
    component: Layout,
    name: 'loginIndex',
    children: [
      {
        // 默认子路由
        path: '',
        name: 'home',
        component: () => import(/* webpackChunkName: 'home' */ '@/views/home/index.vue')
      },
      {
        path: '/role',
        name: 'role',
        component: () => import(/* webpackChunkName: 'role' */ '@/views/role/index.vue')
      },
      {
        path: '/menu',
        name: 'menu',
        component: () => import(/* webpackChunkName: 'menu' */ '@/views/menu/index.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
