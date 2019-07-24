<template>
    <div class="nav-container">
        <div class="nav-back"></div>
         <div class="nav-title"></div>
    </div>
</template>

<script>
    export default {
        name: "RankHead"
    }
</script>

<style scoped>
  .nav-container{
    position: fixed;
    top: 51px;
    width: 100%;
    height: 43px;
  }
.nav-back{
  float: left;
  background: url("../../assets/images/goback_icon.png") no-repeat center;
  width: 30px;
  height: 100%;
  margin-left: 10px;
}
  .nav-title{
    text-align: center;
    height: 100%;
    width: 100%;
  }
</style>
