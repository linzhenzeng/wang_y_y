<template>
  <div class="MusicDetail">
    <div class="bg_gary"></div>
    <img :src="props.musicList.al.picUrl" alt srcset class="bg_img" />
    <!-- 头 -->
    <div class="detail_top">
        <img src="../assets/left.png" alt srcset @click="store.commit('changeShowPopup')"/>
        <div class="top_name">
          <Vue3Marquee class="marquee"><span>{{ props.musicList.name }}</span></Vue3Marquee>
          <span v-for="(item,index) in props.musicList.ar" :key="index">{{ item.name }}</span>
        </div>
      <img src="../assets/fen_xiang.png" alt />
    </div>
    <!-- 中间 -->
    <div class="detail_center" @click="()=>{store.commit('changeLyric_cd')}">
        <div class="cd" v-if="store.state.Lyric_cd">
            <img src="../assets/cd_zhen.png" alt="" srcset="" class="cd_zhen" :class="{'cd_zhen_active':!store.state.isBtnShow}">
            <img src="../assets/cd.png" alt="" srcset="" class="cd_img">
            <img :src="props.musicList.al.picUrl" alt="" srcset="" class="cd_bg" :style="{'animation-play-state':store.state.isBtnShow?'paused':'running' }">
        </div>
        <Lyric v-else/>
    </div>
    <!-- 下面 -->
    <div class="detail_bottom" >
        <div class="bottom_top_img">
            <img src="../assets/ai_xin.png" alt="" srcset="">
            <img src="../assets/xia_zai_bottom.png" alt="" srcset="">
            <img src="../assets/chang-pian.png" alt="" srcset="">
            <img src="../assets/xiao_xi.png" alt="" srcset="">
            <img src="../assets/xun_huan.png" alt="" srcset="">
        </div>
        <div class="bottom_bottom_img">  
            <img src="../assets/xun_huan.png" alt="" srcset="">
            <img src="../assets/left_go.png" alt="" srcset="">
            <img src="../assets/bofan_white.png" alt="" srcset="" @click="play" v-if="store.state.isBtnShow"/>
            <img src="../assets/zanting_white.png" alt="" srcset="" @click="play" v-else/>
            <img src="../assets/right_go.png" alt="" srcset="">
            <img src="../assets/caidan.png" alt="" srcset="">
        </div>
    </div>
  </div>
</template>

<script setup>
import { Vue3Marquee } from 'vue3-marquee';
import 'vue3-marquee/dist/style.css';
import { useStore } from "vuex";
import Lyric from '@/components/Music/Lyric.vue';

const props = defineProps({
  musicList: Object,
  play:Function,
});

const store = useStore()

</script>

<style lang="less" scoped>
.bg_gary{
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  filter: blur(70px);
  background-color: black;
}
.bg_img {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  filter: blur(80px);
}
img {
  width: 0.6rem;
  height: 0.6rem;
}
.marquee{
    width: 3rem;
}
.detail_top {
  width: 100%;
  height: 1.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .2rem;
  border-bottom: 1px solid #999;
    .top_name {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: white;
      align-items: center;
      flex: 1;
      & span:first-child{
        font-size: .34rem;
        font-weight: bolder;
        margin-bottom: .06rem;
      }
      &>span:last-child{
        font-size: .28rem;
        opacity: .8;
      }
    }
  
}
//cd
.detail_center{
    width: 100%;
    height: 9rem;
    position: relative;
    overflow: hidden;
    .cd{
        width: 100%;
        height: 9rem;
        display: flex;
        justify-content: center;
        .cd_zhen{
            position: absolute;
            top: -0.25rem;
            right: 23%;
            width: 2.5rem;
            height: 3.5rem;
            transform: translateX(85%);
            transform-origin: 0 0;
            transform: rotate(-10deg);
            transition: all 1.5s;
            z-index: 3;
        }
        .cd_zhen_active{
          position: absolute;
            top: -0.25rem;
            right: 23%;
            width: 2.5rem;
            height: 3.5rem;
            transform: translateX(85%);
            transform-origin: 0 0;
            transform: rotate(5deg);
            transition: all 1.5s;
            z-index: 3;
        }
        .cd_img{
            position: absolute;
            top: 55%;
            width: 5.5rem;
            height: 5.5rem;
            transform: translateY(-55%);
            z-index: 2;
          }
            .cd_bg{
              position: absolute;
              top: 25%;
              width: 4.9rem;
              height: 4.9rem;
              border-radius: 50%;
              animation: rogter_img 10s linear infinite;
          }
          
    }
}
@keyframes rogter_img {
    0%{
      transform: rotateZ(0deg);
    }
    100%{
      transform: rotateZ(360deg);
    }
}
.detail_bottom{
    height: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .bottom_top_img{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 .6rem;
        img{
            width: .5rem;
            height: .5rem;
        }
        &>img:nth-child(4){
            width: .55rem;
            height: .55rem;
        }
        &>img:last-child{
            width: .6rem;
            height: .6rem;
        }
    }
    .bottom_bottom_img{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 .6rem;
        padding-bottom: .2rem;
        img{
            width: .5rem;
            height: .5rem;
        }
        &>img:nth-child(3){
            width: 1rem;
            height: 1rem;
        }
        &>img:first-child,&>img:last-child{
            width: .6rem;
            height: .6rem;
        }
    
    }
}
</style>