/**
 * Created by Administrator on 2017/6/1.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import { login } from '@/api/zabbix'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    serverInfo: {
      server_url: '',
      username: '',
      password: '',
      auth: ''
    },
    item:null,
    dataList:[],
  },
  getters: {
    auth: state => {
      return state.serverInfo.auth || localStorage.getItem('auth')
    },
    username: state => {
      return state.serverInfo.username || localStorage.getItem('username')
    },
    password: state => {
      return state.serverInfo.password || localStorage.getItem('password')
    },
    server_url: state => {
      return state.serverInfo.server_url || localStorage.getItem('server_url')
    }
  },
  mutations: {
    server_url (state, url) {
      state.server_url = url
      localStorage.setItem('server_url', url)
    },
    username (state, name) {
      state.server_url = name
      localStorage.setItem('username', name)
    },
    password (state, pwd) {
      state.server_url = pwd
      localStorage.setItem('password', pwd)
    },
    auth (state, auth) {
      state.auth = auth
      localStorage.setItem('auth', auth)
    },
    item (state, item) {
      state.item = item
    },
    dataList (state, data) {
      state.dataList = data
    },
  },
  actions: {
    hasLogin ({commit, state}) {
      return new Promise((resolve, reject) => {
        let item = localStorage.getItem('serverInfo')
        let islogin = false
        if (state.serverInfo.auth || (item && item.auth)) {
          islogin = true
        }
        resolve(islogin)
      })
    },
    saveConfig ({commit, state}, obj) {
      return new Promise((resolve, reject) => {
        state.serverInfo.server_url = obj.server_url
        state.serverInfo.username = obj.username
        state.serverInfo.password = obj.password
        commit('server_url', obj.server_url)
        commit('username', obj.username)
        commit('password', obj.password)
        resolve()
      })
    },
    saveAndlogin({dispatch,commit}, obj){
      return new Promise((resolve, reject) => {
        dispatch('saveConfig', obj).then(() => {
          login(obj.username, obj.password).then((res) => {
            console.log(res)
            if (res.data.result) {
              commit('auth',res.data.result)
              resolve('登陆成功')
            } else {
              resolve('登陆失败')
            }
          })
        })
      })
    }
  }
})
export default store
