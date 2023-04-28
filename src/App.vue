<template>
  <router-view/>
  <FootMusic/>
</template>

<script>
import FootMusic from './components/Music/FootMusic.vue';

export default {
  components:{
    FootMusic
  }
}
</script>
<style lang="less">
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
