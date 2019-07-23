<template>
  <div class="navbox">
      <mt-navbar v-model="selectedNavC" class="container">
          <mt-tab-item id="head-nav1">新歌</mt-tab-item>
          <mt-tab-item id="head-nav2">排行</mt-tab-item>
          <mt-tab-item id="head-nav3">歌单</mt-tab-item>
          <mt-tab-item id="head-nav4">歌手</mt-tab-item>
      </mt-navbar>
  </div>
</template>

<script>
    export default {
        name: "HeadNav",
      data:function () {
        return {
          selectedNav:'head-nav1'
        }
      },
       computed:{
          selectedNavC:{
            get(){
              return this.selectedNav;
            },
            set(nav){
              // this.selectedNavC = nav;
              this.selectedNav = nav;
                const idnex=nav.substr(-1);
                this.goRouter(Number(idnex));
            }
          }
       },
      methods:{
          goRouter(index){
            switch (index) {
              case 1:
                this.$router.push({path:'/'});
                break;
              case 2:
                this.$router.push({path:'/rank'});
                break;
              case 3:
                this.$router.push({path:'/plist'});
                break;
              case 4:
                this.$router.push({path:'/singer'});
                break;
            }
          }
      }
    }
</script>

<style >
  .mint-tab-item {
    padding: 12px 0 !important;
  }

  .mint-tab-item-label {
    font-size: 16px !important;
  }
</style>
