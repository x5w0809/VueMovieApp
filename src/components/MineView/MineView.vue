<template>
    <div class="mine-view">
    </div>
</template>
<script>
    export default{
        name:'MineView',
        data(){
          return{
             navViewShow:false
          }
        },
        created(){

            this.$emit('onNavShow',this.navViewShow)
        },
    }
</script>
<style>
</style>
