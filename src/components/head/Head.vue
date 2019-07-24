<template>
  <div class="header">
    <HeadLogo>

    </HeadLogo>
    <div class="headNav">
      <HeadNav>
      </HeadNav>
      <RankHead></RankHead>
    </div>

  </div>
</template>

<script>
  import HeadLogo from './HeadLogo'
  import HeadNav from './HeadNav'
  import RankHead from './RankHead'
    export default {
        name: "Head",
      components:{
          HeadLogo,
          HeadNav,
        RankHead
      }
    }
</script>

<style scoped>

</style>
