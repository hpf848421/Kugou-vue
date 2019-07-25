<template>
    <div class="plistinfoContainner">
        <div class="banner-container" :style="{background:`url(${imgUrl})`}">

        </div>
        <div class="info-desp">
          <p  :class="{'info-desp-hidden':showHidden}">{{descp}}</p>
          <img src="../assets/images/close_icon.png" @click="showHidden=!showHidden" v-if="showHidden">
          <img src="../assets/images/open_icon.png" @click="showHidden=!showHidden" v-else>
        </div>
        <div class="info-list">
          <mt-cell v-for="(cell,index) in infos" :title="cell.filename" :key="index">
            <img src="../assets/images/download_icon.png" width="20" height="20">
          </mt-cell>
        </div>
    </div>
</template>

<script>
  import {Indicator} from 'mint-ui'
    export default {
        name: "PlistInfo",
      data:function(){
          return {
            imgUrl:'',
            descp:'',
            showHidden:true,
            infos:[]
          }
      },
      computed:{

      },
      beforeRouteEnter(to,from,next){
        next((vm)=>{
            vm.$store.commit('showHead',true);
            vm.getList()
        });
      },
      beforeRouteLeave(to,from,next){
        this.$store.commit('showHead',false);
        next();
      },
      methods:{

          getList(){
            Indicator.open({
              text:'加载中',
              spinnerType:'snake'
            })
            const infoID= this.$route.params.id;
            this.$http.get(`/proxy/plist/list/${infoID}?json=true`).then(({data})=>{
              Indicator.close()
              console.log(data)
              this.$store.commit('setHeadTitle',data.info.list.specialname);
              this.imgUrl = data.info.list.imgurl.replace('{size}','400');
              this.descp = data.info.list.intro;
              this.infos = data.list.list.info;

            });
          }
      }
    }
</script>

<style scoped>

</style>
