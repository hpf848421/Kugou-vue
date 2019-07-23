<template>
  <div class="logo-container">
    <div class="head-logo">
      <a href="#">
        <img src="http://m.kugou.com/v3/static/images/index/logo.png">
      </a>
    </div>
    <div class="search" @click="searchClick">
      <img src="http://m.kugou.com/v3/static/images/index/search.png">
    </div>
  </div>

</template>

<script>
    export default {
        name: "HeadLogo",
      methods:{
          searchClick(){
            alert(1)
          }
      }
    }
</script>

<style scoped>

</style>
