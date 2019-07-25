<template>
  <div class="header">
    <HeadLogo>

    </HeadLogo>
    <div class="headNav">

      <RankHead  v-if="head.toggle" :title="head.title" :cstyle="head.style"></RankHead>

      <HeadNav v-else>
      </HeadNav>
    </div>

  </div>
</template>

<script>
  import HeadLogo from './HeadLogo'
  import HeadNav from './HeadNav'
  import RankHead from './RankHead'
  import { mapGetters } from 'vuex'
    export default {
        name: "Head",
      computed:{
          ...mapGetters(['head'])
      },
      components:{
          HeadLogo,
          HeadNav,
        RankHead
      }
    }
</script>

<style scoped>

</style>
