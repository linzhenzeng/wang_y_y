<template>
  <div class="Lyric">
    <p v-for="(item,index) in lyric" :key="index">
      {{ item.lrc }}
    </p>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore()

const lyric = computed(()=>{
  let arr = store.state.LyricList.lrc.lyric.split(/[(\r\n\)\r\n]+/).map(item =>{
    if(item == '' || item ==undefined){
      let lrc = '' //歌词
      let min = '' //分钟
      let sec = '' //秒
      let mill = ''  //毫秒
      return {min,sec,mill,lrc}
    }else{
      let lrc = item.split(']')[1] //歌词
      let min = item.split(']')[0].replace('[','').replace(']','').split(':')[0] //分钟
      let sec = item.split(']')[0].replace('[','').replace(']','').split(':')[1].split('.')[0] //秒
      let mill = item.split(']')[0].replace('[','').replace(']','').split(':')[1].split('.')[1]  //毫秒
      let time = parseInt(min)*60*1000+parseInt(sec)*1000+mill
      return {min,sec,mill,lrc,time}
    }
  })
  console.log(arr);
  return arr
})


</script>

<style lang="less" scoped>
.Lyric{
  width: 100%;
  height: 7rem;
  overflow: scroll;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  p{
    text-align: center;
    line-height: .8rem;
    color: white;
  }
}
</style>

