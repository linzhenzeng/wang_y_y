<template>
  <div class="footMusic">
    <div class="left" @click="changeShowPopup">
      <img :src="playList[playListIndex].al.picUrl" alt srcset />
      <div class="left_name">
        <span>{{ playList[playListIndex].name }}</span>
        <span>横滑可以切换上下首哦</span>
      </div>
    </div>
    <div class="right">
      <img src="../../assets/bofan.png" alt srcset @click="play" v-if="isBtnShow" />
      <img src="../../assets/zanting.png" alt srcset @click="play" v-else />
      <img src="../../assets/caidan_back.png" alt srcset />
    </div>
    <!-- 音频 -->
    <audio
      ref="audio"
      :src="` https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}&level=lossless.mp3`"
    ></audio>
    <van-popup v-model:show="showPopup" :style="{ height:'100%',width:'100%' }" position="bottom" >
      <MusicDetail :musicList="playList[playListIndex]" :play="play" :isBtnShow="isBtnShow" />
    </van-popup>
  </div>
</template>

<script>
import { mapState, mapMutations,mapActions } from "vuex";
import MusicDetail from "@/views/MusicDetail.vue";

export default {
  mounted() {},
  methods: {
    play() {
      if (this.$refs.audio.paused) {
        //判断暂停还是播放
        this.$refs.audio.play(); //这是播放
        this.changeBtnShow(false);
      } else {
        this.$refs.audio.pause();
        this.changeBtnShow(true);
      }
    },
    ...mapMutations(["changeBtnShow", "changeShowPopup"]),
    ...mapActions(['getLyricVuex'])
  },
  computed: {
    ...mapState(["playList", "playListIndex", "isBtnShow", "showPopup",'playListIndex'])
  },
  watch: {
    playList() {
      //监听列表，发生改变就自动播放
      this.$refs.audio.autoplay = true;
      if (this.$refs.audio.paused) {
        this.changeBtnShow(false);
      }
    },
    playListIndex(){ //更新歌词
      
    },
    
  },
  components: {
    MusicDetail
  }
};
</script>

<style lang="less" scoped>
.footMusic {
  position: fixed;
  bottom: 0;
  height: 1.4rem;
  width: 100%;
  border-top: 1px solid #999;
  background-color: white;
  padding: 0.2rem;
  display: flex;
  justify-content: space-between;
  .left {
    display: flex;
    align-items: center;
    width: 5rem;
    img {
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      margin-right: 0.2rem;
    }
    .left_name {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      & > span:first-child {
        font-weight: bolder;
        font-size: 0.3rem;
      }
      & > span:last-child {
        color: gray;
        font-size: 0.24rem;
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1.5rem;
    img {
      width: 0.6rem;
      height: 0.6rem;
    }
  }
}
</style>