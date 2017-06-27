import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home'
import layout from '@/components/layout'
import setting from '@/page/setting'
import page404 from '@/page/page404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '主页',
      component: layout,
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: '欢迎',
          component: home
        },
        {
          path: 'setting',
          name: '设置',
          component: setting
        },
        {
          path: '404',
          name: '错误',
          component: page404
        }
      ]
    },
    {
      path: '*',
      name: '其他',
      redirect: {name:"错误"}
    }
  ]
})
