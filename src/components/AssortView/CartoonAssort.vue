<template>
    <div class="cartoon-assort" >
        <van-card
            num="1"
            tag="特價"
            price="80.00"
            desc="這一次，這群憤怒又討喜的鳥兒們將帶來更瘋狂、更失控的精彩內容！"
            title="The Angry Birds Movie 2"
            thumb="https://upload.wikimedia.org/wikipedia/zh/thumb/3/38/The_Angry_Birds_Movie_2_poster.jpg/220px-The_Angry_Birds_Movie_2_poster.jpg"
            currency="$"
            origin-price="100.00">

            <div slot="footer">
                <van-button size="mini" to='AngryDetail'>詳細資料</van-button>
            </div>
        </van-card>
    </div>
</template>
<script>
import { Card,Button,Tag } from "vant";
    export default{
        name:'CartoonAssort',
        components:{
            [Card.name]:Card,
            [Button.name]:Button,
            [Tag.name]:Tag,

        }
    }
</script>
<style>

</style>
