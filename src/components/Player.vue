<template>
    <div class="auto-view" :class="{'audio_panel_hide':toggleHide}">
      <div class="audio-panel-control" @click="togglePanel" :class="{'toggleContral':toggleHide}">
<!--        <mt-spinner type="snake" :size="27"></mt-spinner>-->
      </div>

      <div class="audio-pannel">
          <img alt="" class="player-img" src="http://m.kugou.com/v3/static/images/index/logo_kugou.png">
          <div class="player-status">

          </div>
          <div class="player-controls">
                  <div class="player-play">

                  </div>
                  <div class="player-nextSong">

                  </div>
          </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Player",
      data:function () {
        return {
          toggleHide:false
        }
      },
      methods:{
        togglePanel(){
            this.toggleHide = !this.toggleHide;
        }
      }
    }
</script>

<style >

</style>
