<template>
    <div class="home-view">
        <TitleView name='上映中...' icon='video'></TitleView>
        <van-swipe :autoplay="3000"  class="banner">
              <van-swipe-item> <img  src="./Fast.jpg"> </van-swipe-item>
              <van-swipe-item> <img  src="./Dark.jpg"> </van-swipe-item>
              <van-swipe-item> <img  src="./Lion.jpg"> </van-swipe-item>
              <van-swipe-item> <img  src="./Fury.jpg"> </van-swipe-item>
              <van-swipe-item> <img  src="./Angry.jpg"> </van-swipe-item>
        </van-swipe>

        <TitleView name=' 熱賣影片' icon='fire'></TitleView>
        <HotView></HotView>
        <DetailView v-if="DetailShow"></DetailView>
        <TitleView name=' 精選活動' icon='gift'></TitleView>
        <SaleView></SaleView>

        <TitleView name=' 聯絡我們' icon='service'></TitleView>
        <div class="service">
            <br>
            Name : 廖政蓎 (Mick)
            <br>
            Email : x5w0809@gmail.com
            <br>
            Phone : 0937319671
        </div>

    </div>
</template>
<script>
    import { Swipe,SwipeItem,Lazyload } from 'vant';
    import TitleView from '../TitleView/TitleView.vue'
    import HotView  from '../HotView/HotView.vue'
    import SaleView  from '../SaleView/SaleView.vue'
    import DetailView from '../DetailView/DetailView.vue'

    export default{
        name:'HomeView',
        components:{
             [Swipe.name]:Swipe,
             [SwipeItem.name]:SwipeItem,
             [Lazyload.name]:Lazyload,
             TitleView,
             HotView,
             SaleView,
             DetailView
        },
        data(){
          return{
              title:'免出門!影視網',
              navViewShow:true,
              DetailShow:false,

          };
        },
        created(){
            this.$emit('onTitle',this.title)
            this.$emit('onNavShow',this.navViewShow)

        },
    }
</script>

<style>
.home-view{
    padding-top:2.75rem;
    padding-bottom:2.75rem;
    background-color:#666666;
}
.banner.van-swipe{
    height:33.5rem;
}
.banner img{
    width:100%;

}
.title{
    text-align:center;
    font-size:20px;
}
.service{
    height:10rem;
    background-color:#AAAAAA;
    color:white;
    font-size:18px;
    text-align:center;
    line-height:1.85rem;
}

</style>

