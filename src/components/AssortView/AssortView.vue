<template>
    <div class="assort-view">
        <div class="side-view">
            <van-sidebar v-model="activeKey">
                <van-sidebar-item title="動作" @click="acitve(1)" />
                <van-sidebar-item title="動畫" @click="acitve(2)" />
                <van-sidebar-item title="劇情" @click="acitve(3)" />
                <van-sidebar-item title="恐怖" @click="acitve(4)" />
                <van-sidebar-item title="科幻" @click="acitve(5)" />
            </van-sidebar>
        </div>
        <div class="main-view">
            <p v-if="step == 1 " v-show="step==1"><ActionAssort></ActionAssort></p>
            <p v-if="step == 2 " v-show="step==2"><CartoonAssort></CartoonAssort></p>
            <p v-if="step == 3 " v-show="step==3">劇情</p>
            <p v-if="step == 4 " v-show="step==4">恐怖</p>
            <p v-if="step == 5 " v-show="step==5">科幻</p>
        </div>
    </div>

</template>
<script>
import { Sidebar, SidebarItem } from "vant";
import ActionAssort from "./ActionAssort.vue"
import CartoonAssort from "./CartoonAssort.vue"

    export default{
        name:'AssortView',
        components:{
            [Sidebar.name]:Sidebar,
            [SidebarItem.name]:SidebarItem,
            ActionAssort,
            CartoonAssort,
        },
        data(){
                return{
                    title:'分類',
                    navViewShow:true,
                    step: 1,
                    active: [],
                    activeKey: 0
                }
        },
        created(){
            this.$emit('onTitle',this.title)
            this.$emit('onNavShow',this.navViewShow)
        },
        methods: {
            acitve:function(index) {
                this.step = index;
                this.active.push(index);
            }
        },
    }
</script>
<style>
    .assort-view{
        padding-top:2.8rem;
        padding-bottom:2.75rem;
    }
    .van-sidebar{
        width:30%;
        float:left;
        text-align:center;
    }
    .main-view{
        float:right;
        width:70%;
        height:60rem;
        background-color:#BBBBBB;

    }
    p{
        margin:0.5rem;
    }
</style>
