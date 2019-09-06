<template>
    <div class="detail-view">
        《玩命關頭》電影系列推出八部電影，在全球總共累積了高達50億美元的驚人票房成績之後，即將推出第一部獨立的番外篇電影：巨石強森以及傑森史塔森領銜主演的《玩命關頭：
    </div>
</template>
<script>
    export default{
        name:'DetailView',
        computed: {
            id() {
                return this.$route.params.id
            },
        },
        methods: {
            addToCar(id) {
                var carList = this.$store.state.goodsList
                var idExist = carList.find(item => {
                    return item.id == id
                })
                if (!idExist) {
                    var data = {
                        url: this.smallImage,
                        title: this.filmDetail.title,
                        price: Math.floor(Math.random() * 100),
                        stock: '盒',
                        number: 1,
                        select: false,
                        id: this.id
                    }
                    this.$store.commit('addGoods', data)
                    this.addSuccess = true
                } else {
                    return alert('已加入購物車')
                }
            },
        }

    }
</script>
<style>
    .detail-view{
        background-color:#DDDDDD;
        position:fixed;
        top:0;
        left:0;
        bottom:0;
        width:100%;
        z-index:99;
    }
</style>
