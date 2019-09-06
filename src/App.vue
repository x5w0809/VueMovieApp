
<template>
  <div id="app">

    <van-nav-bar  :title="title"  v-show='navViewShow'  fixed  />

    <router-view @onTitle='getTitle' @onNavShow='getShow'></router-view>

    <van-tabbar v-model="active" active-color="red" fixed>
        <van-tabbar-item icon="shop" to="/home">首頁</van-tabbar-item>
        <van-tabbar-item icon="add-square" to="/assort">分類</van-tabbar-item>
        <van-tabbar-item icon="search" to="/search">搜尋</van-tabbar-item>
        <van-tabbar-item icon="cart" to="/car" :info="$store.getters.getAllCount">購物車</van-tabbar-item>
        <van-tabbar-item icon="manager" to="/mine">我的項目</van-tabbar-item>
    </van-tabbar>



  </div>
</template>

<script>
import { NavBar,Tabbar,TabbarItem } from 'vant';

export default {

  name: 'App',

  components:{
  [NavBar.name]:NavBar,
  [Tabbar.name]:Tabbar,
  [TabbarItem.name]:TabbarItem,

  },

  data(){
    return{
        title:'',
        navViewShow:true,
        active:0,
    }
  },

  methods:{
    getTitle:function(title){
        this.title=title
    },
    getShow:function(temp){
        this.navViewShow = temp
    },
  },
}
</script>

<style>
    .van-nav-bar{
        width:23.5rem;
        height:45px;
        background-color:red;
        font-size:16px;
        font-weight:700;
        line-height:45px;
        text-align:center;
        position: fixed;
    }

    .van-nav-bar .van-nav-bar__title{
        color: white;
        font-size:18px;
        font-family:Microsoft JhengHei;
    }
    .van-nav-bar .van-nav-bar__arrow{
        color:white;
    }
    .van-tabbar{
        width:23.5rem;
        height:45px;
        font-size:16px;
        font-weight:700;
        line-height:45px;
        position: fixed;
    }

</style>

