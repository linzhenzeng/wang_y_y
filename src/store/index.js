import { createStore } from 'vuex'
import { getLyric } from "@/request/api/gedan";

export default createStore({
  state: {
    playList: [{ //默认数据
      al: { //专辑
        id: 2643348,
        name: "爱，不解释",
        picUrl: "https://p2.music.126.net/mW53BkMgGy37I7yVrUg-aQ==/109951163117902077.jpg",
        tns: [],
        pic_str: "109951163117902077",
        pic: 109951163117902080
      },
      id:'28059417',
      name:'他不懂',
      ar:[{name:'张杰'}]
    }],
    isBtnShow:true, //播放按钮显示  true是暂停
    playListIndex:0, //默认下标
    showPopup:false, //弹出层显示
    Lyric_cd:true, //歌词和cd显示  true是cd
    LyricList:[] //歌词数据
  },
  getters: {
  },
  mutations: {
    changeBtnShow(state,value){
      state.isBtnShow = value
    },
    changeMusicItem(state,value){
      state.playList = value
    },
    changePlayListIndex(state,value){
      state.playListIndex = value
    },
    changeShowPopup(state,value){
      state.showPopup = !state.showPopup
    },
    changeLyric_cd(state,value){
      state.Lyric_cd = !state.Lyric_cd
    },
    changeLyricList(state,value){
      state.LyricList = value
    },
    
  },
  actions: {
   async getLyricVuex(context,value){ //异步获取歌词
     const res = await getLyric(context.state.playList[context.state.playListIndex].id)
     context.commit('changeLyricList',res.data);
     console.log(context.state.LyricList);
    }
  },
  modules: {
  }
})
