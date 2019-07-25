<template>
    <div class="nav-container" :style="cstyle">
        <div class="nav-back" @click="gotoBack"></div>
         <div class="nav-title">{{title}}</div>
    </div>
</template>

<script>
    export default {
        name: "RankHead",
      props:[ "title",
        "cstyle"],
      methods:{
        gotoBack(){
            this.$router.go(-1);
          }
      }
    }
</script>

<style scoped>
  .nav-container{
    position: fixed;
    top: 51px;
    width: 100%;
    height: 43px;
    z-index: 1000;
    line-height: 43px;
    font-size: 18px;
    color: white;
  }
.nav-back{
  float: left;
  background: url("../../assets/images/goback_icon.png") no-repeat center;
  width: 24px;
  height: 100%;
  background-size: 60% 60%;
  margin-left: 10px;
}
  .nav-title{
    text-align: center;
    height: 100%;
    width: 100%;
  }
</style>
