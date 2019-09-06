<template>
    <div class="search-view">
    </div>
</template>
<script>
    export default{
        name:'SearchView',
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
