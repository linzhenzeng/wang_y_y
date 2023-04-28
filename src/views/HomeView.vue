<template>
  <div class="home">
    <TopNav></TopNav>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in imgDate.images" :key="image">
        <img :src="image.pic" />
      </van-swipe-item>
    </van-swipe>
    <!-- Icon -->
    <div class="IconList">
      <div class="IconItem">
        <img src="../assets/tuijian.png" alt srcset />
        <span>每日推荐</span>
      </div>
      <div class="IconItem">
        <img src="../assets/diantai.png" alt srcset />
        <span>私人FM</span>
      </div>
      <div class="IconItem">
        <img src="../assets/gedan.png" alt srcset />
        <span>歌单</span>
      </div>
      <div class="IconItem">
        <img src="../assets/paihanban.png" alt srcset />
        <span>排行榜</span>
      </div>
    </div>
    <!-- 歌单 -->
    <div class="musicList">
      <div class="musicTop">
        <span>发现好歌单</span>
        <span>查看更多</span>
      </div>
      <div class="musicCenter">
        <div class="musicCenter_item" v-for="item in musicData.data" :key="item.id" @click="()=>{router.push({name:'gedan',query:{id:item.id}})}">
          <span>
            <img src="../assets/24gl-play.png" alt srcset />
            {{changeCount(item.playCount)}}
          </span>
          <img :src="item.picUrl" alt srcset />
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from "@/components/home/TopNav.vue";
import { onMounted, reactive, computed } from "vue";
import { getBanner, getMusic } from "@/request/api/home";
import { useRouter } from "vue-router";

export default {
  name: "HomeView",
  setup() {
    const router = useRouter()
    //轮播图数据
    const imgDate = reactive({
      images: []
    });
    //歌单数据
    let musicData = reactive({
      data: []
    });
    //过滤数字
    const changeCount =(num) =>{
      if(num>=100000000){
        return (num/100000000).toFixed(1)+'亿'
      }
      if(num>=10000){
        return (num/10000).toFixed(1)+'万'
      }
    }

    onMounted(async () => {
      //获取轮播图数据
      let resBanner = await getBanner();
      imgDate.images = resBanner.data.banners;

      //获取推荐歌单数据 getMusic
      let resMusic = await getMusic();
      musicData.data = resMusic.data.result;
    });

    return { imgDate, musicData,changeCount,router };
  },
  components: {
    TopNav
  }
};
</script>

<style lang="less" scoped>
// 轮播图样式
.van-swipe {
  width: 100%;
  height: 3rem;
  .van-swipe__track {
    .van-swipe-item {
      padding: 0 0.2rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
    }
  }
}
.IconList {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0.2rem;
  .IconItem {
    // width: 1.1rem;
    height: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-size: 0.24rem;
    img {
      width: 0.8rem;
      height: 0.8rem;
    }
  }
}
// 歌单
.musicList {
  width: 100%;
  padding: 0.2rem;
  margin-top: 0.2rem;
  .musicTop {
    display: flex;
    justify-content: space-between;

    & > span:first-child {
      font-weight: bolder;
      font-size: 0.4rem;
    }
    & > span:last-child {
      border: 0.02px solid;
      border-radius: 0.3rem;
      padding: 0.08rem;
      font-size: 0.28rem;
    }
  }
  .musicCenter {
    width: 100%;
    height: 4rem;
    overflow-x: auto;
    white-space: nowrap;
    margin-top: .3rem;
    position: relative;
    .musicCenter_item {
      display: inline-block;
      margin-left: 0.2rem;
      position: relative;
      width: 2.6rem;
      overflow: hidden;
      img {
        width: 2.6rem;
        height: 2.6rem;
        border-radius: 0.2rem;
      }
      & > span:first-child {
        position: absolute;
        top: 0.1rem;
        right: 0.2rem;
        color: white;
        display: flex;
        align-items: center;
        img{
          width:.4rem;
          height: .4rem;
        }
      }
      & > span:last-child {
        display: block;
        width: 2.6rem;
        white-space: break-spaces;
        font-size: 0.24rem;
        height: 1rem;
      }
    }
  }
  //去除滚动条
  .musicCenter::-webkit-scrollbar{
    display: none;
  }
}
</style>
