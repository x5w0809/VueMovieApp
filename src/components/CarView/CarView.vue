<template>
    <div class="car-view">
        <div class="car-item" v-for="item in goodsList">

                <h2>電影名稱:{{ item.name }}</h2>
                <p>數量:{{item.count}}</p>
                <p>價格:{{item.price}}</p>

        </div>


    </div>
</template>
<script>
import { Card } from "vant";
    export default{
        name:'CarView',
        components:{
            [Card.name]:Card,
        },
        data(){
          return{
            title:'購物車',
            navViewShow:true,

          }
        },
        created(){
            this.$emit('onTitle',this.title)
            this.$emit('onNavShow',this.navViewShow)

        },
        computed:{
            goodsList(){
                return this.$store.state.car
            }
        }

    }
</script>
<style>
.car-view{
    padding-top:2.75rem;
    padding-bottom:2.75rem;
}
.car-item{
    width:22rem;
    height:6.25rem;
    margin:0.6rem;
    border:0.0625rem solid #BBBBBB;
    box-shadow: 0 0 4px 0 gray;
}

</style>
