// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
//導入Vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Axios from 'axios'
//改VUE原型屬性
Vue.prototype.$ajax = Axios

import { Lazyload } from 'vant';
Vue.use(Lazyload);

import Vuex from 'vuex'
Vue.use(Vuex)


//每次進入網站從localStorage調購物車資料到store
var car = JSON.parse(localStorage.getItem('car') || '[]')

var store = new Vuex.Store({
    state:{
        car:car

    },
    mutations:{
        addToCar(state,goodsInfo){
            var flag = false
            state.car.some(item => {
                if(item.id == goodsInfo.id){
                    item.count += parseInt(goodsInfo.count)
                    flag = true
                    return true
                }
            })

            if(flag==false){
                state.car.push(goodsInfo)
            }
            //把購物車商品資料存到localStorage中
            localStorage.setItem('car',JSON.stringify(state.car))
        },
    },
    getters:{
        getAllCount(state){
            var c = 0;
            state.car.forEach(item => {
                c  += item.count
            })
            return c
        },


    }


})



Vue.config.productionTip = false

//導入components
import HomeView from './components/HomeView/HomeView.vue'
import AssortView from './components/AssortView/AssortView.vue'
import SearchView from './components/SearchView/SearchView.vue'
import CarView from './components/CarView/CarView.vue'
import MineView from './components/MineView/MineView.vue'

import FastDetail from './components/DetailView/FastDetail.vue'
import AngryDetail from './components/DetailView/AngryDetail.vue'

//定義路由
var routes = [
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        component:HomeView
    },
    {
        path:'/assort',
        component:AssortView
    },
    {
        path:'/search',
        component:SearchView
    },
    {
        path:'/car',
        component:CarView
    },
    {
        path:'/mine',
        component:MineView
    },
    {
        path:'/fastDetail',
        component:FastDetail
    },
    {
        path:'/angryDetail',
        component:AngryDetail
    }
]

//創建路由對象
var router = new VueRouter({
    // routes:定義的路由
    routes
})
//切換路由返回頂部
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})

/* eslint-disable  */
new Vue({
  render: h => h(App),
  store,
  //加路由管理器
  router,

}).$mount('#app')
