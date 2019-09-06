<template>
    <div class="tab-bar">
        <router-link to='/home'>首頁</router-link>
        <router-link to='/assort'>分類</router-link>
        <router-link to='/search' >搜索</router-link>
        <router-link to='/car'>購物車</router-link>
        <router-link to='/mine'>我的</router-link>
    </div>
</template>
<script>
    export default{
        name:'TabBarView',
    }
</script>
<style>
.tab-bar{
    height:50px;
    position: fixed;
    bottom: 0;
    width:23.5px;
    border-top:1px solid gray;
}
.tab-bar a{
    display:inline-block;
    line-height:50px;
    width:19%;
    text-align:center;
}
</style>
