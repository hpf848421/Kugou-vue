<template>
  <div class="newSong-container">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in swipeItems">
        <a :href="item.extra.tourl">
           <img :src="item.imgurl" alt="">
        </a>
      </mt-swipe-item>
    </mt-swipe>
    <mt-cell v-for="cell in cells" :title="cell.filename">
      <img src="../assets/images/download_icon.png" width="20" height="20">
<!--      <img slot="icon" src="../assets/images/download_icon.png" width="24" height="24">-->
    </mt-cell>
  </div>
</template>

<script>
  import {Indicator} from 'mint-ui'
    export default {
        name: "NewSongs",
      created() {
          this.getSongs()
      },
      data:function () {
        return {
          swipeItems:[],
          cells:[]
        }
      },
      methods:{
        getSongs(){
          Indicator.open({
            text:"加载中",
            spinnerType:'snake'

          })
          this.$http.get('/proxy/?json=true').then(({data})=>{
            this.swipeItems =data.banner
            this.cells = data.data
          }).then(()=>{
              Indicator.close()
          })
        }
      }

    }
</script>

<style >
  .mint-swipe {
    height: 39vw !important;
  }
  .mint-swipe-indicator {
    width: 12px !important;
    height: 12px !important;
  }

  .mint-swipe-indicators {
    bottom: 5px !important;
  }
</style>
