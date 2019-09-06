<template>
    <div class="hot-view" >
        <van-card
            id="1"
            num="1"
            tag="特價"
            price="80.00"
            desc="這一次，這群憤怒又討喜的鳥兒們將帶來更瘋狂、更失控的精彩內容！"
            title="The Angry Birds Movie 2"
            thumb="https://upload.wikimedia.org/wikipedia/zh/thumb/3/38/The_Angry_Birds_Movie_2_poster.jpg/220px-The_Angry_Birds_Movie_2_poster.jpg"
            currency="$"
            origin-price="100.00">

            <div slot="footer">
                <van-button size="mini" to=AngryDetail>詳細資料</van-button>
            </div>
        </van-card>

        <van-card
            num="1"
            price="150.00"
            desc="《玩命關頭》電影系列推出八部電影，在全球總共累積了高達50億美元的驚人票房成績之後，即將推出第一部獨立的番外篇電影：巨石強森以及傑森史塔森領銜主演的《玩命關頭：特別行動》，他們在這部全新動作片中再度飾演他們各別的角色路克哈柏和戴克蕭。"
            title="Fast & Furious Presents: Hobbs & Shaw"
            currency="$"
            thumb="https://upload.wikimedia.org/wikipedia/zh/thumb/3/3b/Hobbs_%26_Shaw_Poster.jpg/220px-Hobbs_%26_Shaw_Poster.jpg">
            <div slot="tags">
                <van-tag plain type="danger">最新</van-tag>
                <van-tag plain type="danger">No.1</van-tag>
            </div>
            <div slot="footer">
                <van-button size="mini"  to= FastDetail >詳細資料</van-button>
            </div>

        </van-card>
    </div>
</template>

<script>
    import { Card,Button,Tag } from 'vant';
    import DetailView from '../DetailView/DetailView.vue'

    export default{
        name:'HotView',
        components:{
            [Card.name]:Card,
            [Button.name]:Button,
            [Tag.name]:Tag,
            DetailView

        },

    }
</script>
<style>

</style>
