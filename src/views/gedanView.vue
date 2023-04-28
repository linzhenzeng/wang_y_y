 <template>
  <div class="gedan">
    <!-- 上层 -->
    <div class="head">
      <img :src="state.playList.coverImgUrl" alt="" srcset="" class="bg_img">
      <div class="head_item">
      <img src="../assets/left.png" alt="" srcset="" @click="()=>{router.back()}">
      <span>歌单</span>
      </div>
      <div class="head_item">
      <img src="../assets/suosou.png" alt="" srcset="">
      <img src="../assets/caidan.png" alt="" srcset="">
      </div>
    </div>
    <div class="head_center">
      <img :src="state.playList.coverImgUrl" alt="" srcset="">
      <div class="play_div">
        <img src="../assets/24gl-play.png" alt="" srcset="">
        <span>{{ changeCount(state.playList.playCount) }}</span>
      </div>
      <div class="head_center_centen">
        <span>{{ state.playList.name }}</span>
        <div>
          <img :src="state.playList.creator.avatarUrl" alt="" srcset="">
          <span>{{ state.playList.creator.nickname }}</span>
        </div>
        <span>{{ state.playList.description }}</span>
      </div>
    </div>
    <div class="head_bottom">
      <div>
        <img src="../assets/xiao_xi.png" alt="" srcset="">
        <span>{{ state.playList.commentCount}}</span>
      </div>
      <div>
        <img src="../assets/fen_xiang.png" alt="" srcset="">
        <span>{{ state.playList.shareCount }}</span>
      </div>
      <div>
        <img src="../assets/xia_zai.png" alt="" srcset="">
        <span>下载</span>
      </div>
      <div>
        <img src="../assets/duo_xuan.png" alt="" srcset="">
        <span>多选</span>
      </div>
    </div>
    <!-- 歌单列表 -->
    <div class="music">
      <div class="music_head">
        <img src="../assets/bofan.png" alt="" srcset="">
        <span class="color_b">播放全部</span>
        <span>(共20首)</span>
        <div class="shouchang">
          +收藏({{state.playList.subscribedCount }})
        </div>
      </div>
      <div class="music_list_item" v-for="(item,index) in state.musicList" :key="index">
        <div class="item_left" @click="changeMusic(index)">
          <span class="item_num">{{ index+1 }}</span>
          <div class="item_name">
            <span>{{ item.name }}</span>
            <span>
             <span v-for="(item2,index2) in item.ar" :key="index2">{{item2.name }} </span>
            </span>
          </div>
        </div>
        <div class="item_right">
          <img src="../assets/24gl-playSquare.png" alt="" srcset="">
          <img src="../assets/caidan_back.png" alt="" srcset="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { reactive, onMounted,onBeforeMount } from "vue";
import { getGendanList,musicList } from "@/request/api/gedan";
import { useStore } from "vuex";

export default {
  setup() {
    const router = useRouter();
    const store = useStore()

    let state = reactive({
      playList:[], //歌单详情页数据
      musicList:[] //歌单歌曲数据
    })

    onBeforeMount(async () => {
      //歌单id
      //获取歌单详情
      const GendanRes = await getGendanList(
        router.currentRoute._value.query.id
        );
        state.playList = GendanRes.data.playlist
      //获取歌单歌曲详情
      const musicListRes = await musicList(router.currentRoute._value.query.id);
      state.musicList = musicListRes.data.songs
      console.log(state.musicList);
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

    //歌单点击切换
    const changeMusic = (index) =>{
      store.commit('changeMusicItem',state.musicList)
      store.commit('changePlayListIndex',index)
      store.dispatch('getLyricVuex') 
    }

    return{state,router,changeCount,changeMusic}
  }
};
</script>

<style lang="less" scoped>
.bg_img{
  width:100%;
  height: 11rem;
  position: absolute;
  top: 0;
  z-index: -1;
  filter: blur(30px);
}
.head{
  width: 100%;
  height: 1rem;
  display: flex;
    justify-content: space-between;
    align-items: center;
    .head_item{
      width: 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: .36rem;
      color: white;
      padding: .2rem;
    img{
      width: .6rem;
      height: .6rem;
    }
  }
}
.head_center{
  display: flex;
  justify-content: space-between;
  padding: .2rem;
  position: relative;
  img{
    width: 2.6rem;
    height: 2.6rem;
    border-radius: .2rem;
  }
  .play_div{
    display: flex;
    align-items: center;
    height: .4rem;
    position: absolute;
    top: .3rem;
    left: .3rem;
    img{
      width: .4rem;
      height: .4rem;
    }
    span{
      color: white;
      font-size: .24rem;
    }
  }
  .head_center_centen{
    height: 2.7rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width:60%;
    color: white;
    &>span:first-child{
      font-weight: bolder;
      font-size: .32rem;
    }
    &>span:last-child{
      font-size: .24rem;
      opacity: .8;
      height: .75rem;
      overflow: hidden;
    }
    &>div{
      display: flex;
      align-items: center;
      img{
        width: .6rem;
        height: .6rem;
        border-radius: 50%;
        margin-right: .2rem;
      }
      span{
        opacity: .8;
      }
    }
  }
}
.head_bottom{
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: .2rem;
  div{
    width: 1.2rem;
    height: 1.1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: white;
    img{
      width: .5rem;
      height: .5rem;
    }
  }
}
.music{
  background-color: white;
  border-top-left-radius: .4rem;
  border-top-right-radius: .4rem;
  width: 100%;
  padding: .2rem;
  margin-bottom: .9rem;
  .music_head{
    display: flex;
    align-items: center;
    height: 1rem;
    position: relative;
    margin-bottom: .2rem;
    img{
      width:.5rem;
      height:.5rem;
      margin-right: .5rem;
    }
    .color_b{
      font-size: .33rem ;
      font-weight: bolder;
    }
    &>span:last-child{
      color: gray;
      font-size: .22rem;
    }
    .shouchang{
      height: .8rem;
      width: 2.4rem;
      border-radius: 30px;
      background-color: red;
      position: absolute;
      right: 0;
      top: .1rem;
      color: white;
      text-align: center;
      line-height: .8rem;
    }
  }
  .music_list_item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: .9rem;
    margin-bottom: .55rem;
    .item_left{
      display: flex;
      .item_num{
        height: .9rem;
        width: .5rem;
        text-align: left;
        line-height: 1.2rem;
      }
      .item_name{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 4.5rem;
        &>span:first-child{
          font-weight: bolder;
          font-size: .32rem;
        }
        &>span:last-child{
          color: gray;
          font-size: .22rem;
          span{
            margin-right: .2rem;
          }
        }
      }
    }
    .item_right{
      width: 1.5rem;
      display: flex;
      justify-content: space-between;
      img{
        width: .6rem;
        height: .6rem;
      }
    }
  }
}
</style>