<template>
  <div id="individual-center">
    <div class="head">
      <p class="nickname">{{nickname}}</p>
      <p class="status">完成签到</p>
    </div>
    <div class="entry-list">
      <a @click="$router.push({path:'/date'})">会议日程 <img src="../assets/arrow.png"></a>
      <a>个人日程 <img src="../assets/arrow.png"></a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nickname:'王局长',
    }
  }
}
</script>

<style lang="scss">
#individual-center{
  position: absolute;
  width: 100%;
  min-height: 100%;
  background-color: #fff;

  .head{
    position: relative;
    width: 100vw;
    height: 50vw;
    box-sizing: border-box;
    padding: 30px;
    background-image: url('../assets/ndividual-center-head-bg.jpg');
    background-size: 100% 100%;

    .nickname{
      margin-top: 20px;
      font-size: 40px;
      color: #3e3e3e;
      text-align: center;
    }

    .status{
      margin-top: 30px;
      font-size: 20px;
      color: #fff;
      text-align: center;
    }
  }

  .entry-list{
    position: relative;
    width: 100%;

    a{
      display: block;
      box-sizing: border-box;
      padding: 20px 20px;
      font-size: 18px;
      color: #333;
      border-bottom: solid 1px #bfbfbf;
      
      img{
        display: inline-block;
        position: absolute;
        width: 16px;
        height: 16px;
        right: 20px;
      }
    }
  }
}
</style>
