<template>
  <div id="app">
    <Head/>
    <div class="main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>

    </div>
    <DetailPlayer></DetailPlayer>
    <Player></Player>
  </div>
</template>

<script>
  import Head from './components/head/Head'
  import DetailPlayer from './components/DetailPlayer'
  import Player from './components/Player'

export default {
  name: 'App',
  components:{
    Head,
    DetailPlayer,
    Player
  }
}
</script>

<style>
#app {

}
</style>
