<template>
    <div class="title-view">
        <h3><van-icon :name="icon" />{{name}}</h3>
    </div>
</template>
<script>
    import { Icon } from 'vant';

    export default{
        name:'TitleView',
        components:{
            [Icon.name]:Icon
        },
        props:['name','icon'],
    }
</script>
<style>
    .title-view{
        height:3.5rem;
        line-height: 3.5rem;
        text-align:center;

    }
    .title-view > h3{
        font-size:18px;
        color:white
    }
</style>
