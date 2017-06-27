// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import { Message } from 'element-ui';
import {getServerUrl} from '@/utils/http'
import './assets/base.css'
import 'element-ui/lib/theme-default/index.css'
import * as filters from './filters'; // 全局vue filter
Vue.use(ElementUI)

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
});

const whiteList = ['/setting','/404'];// 不重定向白名单
router.beforeEach((to, from, next) => {
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    }else{
      if(!getServerUrl() && !store.getters.auth){
        next({name:"设置"});
        Message.error("请配置服务器");
      }else{
        next()
      }
    }
})


Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
