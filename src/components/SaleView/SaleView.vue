<template>
    <div class="sale-view">
        <van-swipe :autoplay="3000" class="sale-banner"   vertical>
            <van-swipe-item><img src="./sale1.jpg"></van-swipe-item>
            <van-swipe-item><img src="./sale2.jpeg"></van-swipe-item>
            <van-swipe-item><img src="./sale3.jpg"></van-swipe-item>
        </van-swipe>
    </div>
</template>
<script>
    import { Swipe, SwipeItem } from 'vant';

    export default{
        name:'SaleView',
        components:{
            [Swipe.name]: Swipe,
            [SwipeItem.name]: SwipeItem,
        }
    }
</script>
<style>
    .van-swipe {
        height:12.5rem;
    }
    .sale-banner img{
        width:100%;
        height:200px;

    }
</style>
