<template>
  <div class="raninfo-container1">
    <div class="rank-banner-wrap" :style="{backgroundImage:'url('+imagurl+')'}">
      <div class="rank-time">
        <p>上次更新时间:{{getToday()}}</p>
      </div>
    </div>

    <div class="rank-list">
      <mt-cell v-for="(cell,index) in cells" :title="cell.filename" :key="index">
        <img src="../assets/images/download_icon.png" width="20" height="20">
        <span class="rankF" :class="{'rank-list-good':index<3,'rank-list-first':index==0,'rank-list-second':index==1,'rank-list-third':index==2}">{{index+1}}

        </span>
      </mt-cell>
    </div>
  </div>
</template>

<script>

  import { Indicator } from 'mint-ui'
    export default {
        name: "RankInfo",
      data:function () {
        return {
          imagurl:'',
          cells:[],
          opacity:0
        }
      },
      beforeRouteEnter(to,from,next){
        next(vm => {
          vm.$store.commit('showHead',true);

            vm.getList()
          window.onscroll = () => {
            vm.opacity = window.pageYOffset / 250
            vm.$store.commit('setHeadStyle', {background: `rgba(43,162,251,${vm.opacity})`})
          }
        })
      },
      beforeRouteLeave(to,from,next){
        console.log(1)
        this.$store.commit('showHead',false);
        next()
      },
      mounted(){
          // window.onscroll = function (e) {
          //   this.opacity = window.pageYOffset/200;
          //
          //   this.$store.commit('setHeadStyle',{background:`rgba(43,162,251,${this.opacity})`});
          // }
      },
      methods:{
          getToday(){
            const time = new Date()
            const year = time.getFullYear()
            let month = time.getMonth() + 1
            let date = time.getDate()
            if(month < 10) month = '0' + month
            if(date < 10) date = '0' + date
            return `${year}-${month}-${date}`
          },
        getList(){
          Indicator.open({
            text: '加载中...',
            spinnerType: 'snake'
          })
          const infoId=this.$route.params.id;
          this.$http.get(`/proxy/rank/info/?rankid=${infoId}&page=1&json=true`).then(({data})=>{
            Indicator.close()
            // console.log(data);
            this.imagurl = data.info.banner7url.replace('{size}','400');
            this.cells = data.songs.list;
            this.$store.commit('setHeadTitle',data.info.rankname);
          })
        }
      }
    }
</script>

<style scoped>

</style>
