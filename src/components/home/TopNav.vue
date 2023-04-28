<template>
  <div class="topNav">
    <div>
        <van-icon name="search" size="0.5rem"/>
    </div>
    <div>
      <span>我的</span>
      <span class="avctive">发现</span>
      <span>云村</span>
      <span>视频</span>
    </div>
    <div>
        <van-icon name="wap-nav" size="0.5rem"/>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.topNav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .2rem;
    &>div:nth-child(1),&>div:nth-child(3){
        width: 0.7rem;
        height: 0.7rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &>div:nth-child(2){
        display: flex;
        justify-content: space-around;
        flex: 1;
        padding: 0px .6rem;
        font-size: .34rem
    }
    .avctive{
        font-weight: bold;
    }
}
</style>