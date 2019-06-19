<template>
  <div id="trademeet">
    <a v-for="i in 4" class="history history1" @click="$router.push({path:'/history',query:{'history':(i-1)}})">
      <img :src="`../../static/tmimg/index/trademeet${i}.jpg`">
      <span>第{{i}}界石家庄旅游发展大会（旅游交易会）</span>
    </a>
  </div>
</template>

<script>
export default {
  data (){
    return{

    }
  }
}
</script>
<style lang="scss">
#trademeet{
  position: absolute;
  width: 100%;
  min-height: 100%;
  padding-top: 20px;
  box-sizing: border-box;
  // background-color: #fff;
  background-image: url("../assets/index-bg.jpg");
  background-size: 100% auto;
  background-position: top;
  background-repeat: no-repeat;
  background-color: #77c1ff;
  .history{
    display: block;
    position: relative;
    width: 100%;
    height: 24vw;
    margin-top: 15px;
    background-color: rgba(#fff,.7);
    img{
      display: block;
      position: absolute;
      height: 20vw;
      top: 2vw;
      left: 2vw;
    }
    span{
      display: block;
      position: absolute;
      font-size: 14px;
      left: 30vw;
      top: 2vw;
    }
  }
  
}
</style>

