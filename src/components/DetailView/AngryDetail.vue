<template>

<div class="angry-detail">
    <van-nav-bar title="電影詳情" left-arrow @click-left="onClickLeft" fixed  />

    <van-image
        src="https://upload.wikimedia.org/wikipedia/zh/thumb/3/38/The_Angry_Birds_Movie_2_poster.jpg/220px-The_Angry_Birds_Movie_2_poster.jpg"
    />
    <van-panel title="憤怒鳥玩電影2：冰的啦" desc="The Angry Birds Movie 2" status="現正熱映">
        <div class="movieDesc">
            導　　演：	索普范奧爾曼.約翰萊斯<br>
            演　　員：	彼得汀克萊傑<br>
            比爾哈德爾<br>
            傑森蘇戴西斯<br>
            喬許蓋德<br>
            李利萊爾豪艾里<br>
            類　　型：	冒險動畫<br>
            片　　長：	1時36分<br>
            級　　數：	普遍級<br>
            上映日期：	108.08.14(三)<br>
            <van-divider>劇情介紹</van-divider>
        </div>
    </van-panel>

    <van-goods-action>
          <van-goods-action-icon
            icon="wap-nav"
            text="電影列表"

          />
          <van-goods-action-icon
            icon="shop"
            text="首頁"
            to="/home"
          />
          <van-goods-action-button
            type="warning"
            text="加入購物車"

          />
          <van-goods-action-button
            type="danger"
            text="購買"

          />
    </van-goods-action>
</div>
</template>

<script>
    import { GoodsAction,GoodsActionIcon,GoodsActionButton,Panel,Image,Divider,NavBar } from 'vant'

    export default{
        name:'AngryDetail',
        components:{
            [GoodsAction.name]:GoodsAction,
            [GoodsActionIcon.name]:GoodsActionIcon,
            [GoodsActionButton.name]:GoodsActionButton,
            [Panel.name]:Panel,
            [Image.name]:Image,
            [Divider.name]:Divider,
            [NavBar.name]:NavBar,
        },
        methods:{
            onClickLeft:function(){
                this.$router.back(-1)
            },
        },
    }
</script>
<style>
.angry-detail{
    padding-top:3.5rem;
    padding-bottom:2.75rem;

}
.van-goods-action {
    height:6rem;
    width:100%;
    padding-bottom:2.75rem;

}
.van-panel{
    height:40rem;
}
.van-cell__title{
    font-size:20px;
}
.van-image{
    margin:auto;
    display:block;
    height:20.3rem;
    width:13.75rem;
}
.van-divider{
    padding: 16px;
    color:black;
    border-color: black;
}
</style>
