<template>
  <div class="raninfo-container1">
    <div class="rank-banner-wrap" :style="{backgroundImage:'url('+imagurl+')'}"></div>
    <div class="rank-desp"></div>
    <div class="rank-desp-bottom"></div>
    <div class="rank-list"></div>
  </div>
</template>

<script>

  import { Indicator } from 'mint-ui'
    export default {
        name: "RankInfo",
      data:function () {
        return {
          imagurl:''
        }
      },
      beforeRouteEnter(to,from,next){
        next(vm => {
            vm.getList()

        })
      },
      beforeRouteLeave(to,from,next){

      },
      methods:{
        getList(){
          Indicator.open({
            text: '加载中...',
            spinnerType: 'snake'
          })

          this.$http.get('/proxy/rank/info/?rankid=${infoId}&page=1&json=true').then(({data})=>{
            Indicator.close()
          })
        }
      }
    }
</script>

<style scoped>

</style>
