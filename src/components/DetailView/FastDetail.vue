<template>

<div class="fast-detail">
    <van-nav-bar title="電影詳情" left-arrow @click-left="onClickLeft"  fixed />
    <van-image
        src="http://www.venice-cinemas.com.tw/upload/movie/PIC_02523fad62d73554403.jpg"
    />
    <van-panel title="玩命關頭：特別行動" desc="Fast & Furious Presents: Hobbs & Shaw" status="現正熱映">
        <div class="movieDesc">
            導　　演：	大衛雷奇<br>
            演       員	巨石強森<br>
            傑森史塔森<br>
            凡妮莎柯比<br>
            伊卓瑞斯艾巴<br>
            艾迪馬森<br>
            類　　型：	動作冒險<br>
            片　　長：	2時16分<br>
            級　　數：	輔12級<br>
            上映日期：	108.07.31(三)<br>
            <van-divider>劇情介紹</van-divider>

            <p>《玩命關頭》電影系列推出八部電影，在全球總共累積了高達50億美元的驚人票房成績之後，即將推出第一部獨立的番外篇電影：巨石強森以及傑森史塔森領銜主演的《玩命關頭：特別行動》，他們在這部全新動作片中再度飾演他們各別的角色路克哈柏和戴克蕭。<br><br>
                自從大隻佬執法人員哈柏（巨石強森 飾），一名忠心耿耿的美國外交安全局（DSS）菁英探員，以及無法無天的不法之徒戴克蕭（傑森史塔森 飾），一名前任英國軍方特種部隊菁英隊員，首次在2015年的《玩命關頭7》針鋒相對之後，這一對死對頭就一直在嗆來嗆去、拳來拳往，試圖把對方打趴。<br><br>
                但是當一名經過電腦生化基因改造並增強體能的無政府主義者布列斯頓（伊卓瑞斯艾巴 飾）掌握了一項陰險惡毒，很可能將對人類造成無法逆轉的改變的生化威脅，並且打敗了一名聰明絕頂、無畏無懼的叛變軍情六處探員（熱門影集《王冠》凡妮莎寇比 飾），而她正好是戴克蕭的妹妹海蒂蕭，這一對本來勢不兩立的死對頭就必須攜手合作、聯手出擊，擊敗唯一一個可能比他們更狠的狠角色。<br><br>
                《玩命關頭：特別行動》為《玩命關頭》宇宙打開了一個全新格局，在全球各地展開驚險刺激的冒險動作，從洛杉磯到倫敦，又從受到輻射汙染的荒蕪之地車諾比，一直到風景優美的人間樂土薩摩亞。<br><br>
            </p>
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
            @click="addToCar"
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
        name:'FastDetail',
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
            addToCar(){
                var goodsInfo = {
                    id : 2,
                    name:'玩命關頭：特別行動',
                    count:1,
                    price:150.00,
                    selected: true,
                };
                //調用store中的mutations來將商品加入購物車
                this.$store.commit("addToCar",goodsInfo);
            },
        },

    }
</script>
<style>
.fast-detail{
    padding-top:3.5rem;
    padding-bottom:2.75rem;


}
.van-goods-action {
    height:6rem;
    width:100%;
    padding-bottom:2.75rem;

}
.van-panel{
    height:100%;
    padding-bottom:10rem;
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

p{
    margin : 10px 10px 10px 15px;

}


</style>
