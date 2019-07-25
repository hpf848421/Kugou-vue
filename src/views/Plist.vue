<template>
<div class="plist">
  <mt-cell v-for="(cell,index) in list" :title="cell.specialname" :label="String(cell.playcount)" :key="index" is-link :to="`/plist/info/${cell.specialid}`">
    <img slot="icon" :src="cell.imgurl.replace('{size}',400)" width="60" height="60">
  </mt-cell>
</div>
</template>

<script>
  import {Indicator} from 'mint-ui'
    export default {
        name: "Plist",
        data:function(){
          return {
            list:[]
          }
        },
        created() {
          this.getList();
        },
      methods:{
          getList(){
            Indicator.open({
              text:'加载中',
              spinnerType:'snake'
            });
            this.$http.get('/proxy/plist/index&json=true').then(({data}) => {
              Indicator.close()
              // console.log(data)
              this.list = data.plist.list.info
            })
          }
      }
    }
</script>

<style scoped>

</style>
