<template>
  <div class="rank-container">
    <mt-cell v-for="(cell,index) in cells" :title="cell.rankname" is-link :to="`/rank/info/${cell.rankid}`" :key="index">
      <img slot="icon" :src="cell.imgurl.replace('{size}','400')" width="60" height="60">
    </mt-cell>
  </div>
</template>

<script>

    import {Indicator} from 'mint-ui'
    export default {
      name: "Rank",
      data:function () {
        return {
          cells:[]
        }
      },
      created(){
        this.getRank()
      },
      methods:{
        getRank(){
          Indicator.open({
            title:'加载中',
            spinnerType: 'snake'
          })
          this.$http.get('/proxy/rank/list&json=true').then(({data}) => {
            Indicator.close();
            // console.log(data)
            this.cells = data.rank.list
          });
        }
      }
    }
</script>

<style scoped>

</style>
