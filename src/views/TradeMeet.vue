<template>
  <div id="trademeet">
    <img v-for="i in 9" :src="`../../static/tmimg/index/trademeet_0${i}.jpg`" alt="" :key="i">
    <a class="history history1" @click="$router.push({path:'/history',query:{'history':0}})"></a>
    <a class="history history2" @click="$router.push({path:'/history',query:{'history':1}})"></a>
    <a class="history history3" @click="$router.push({path:'/history',query:{'history':2}})"></a>
    <a class="history history4" @click="$router.push({path:'/history',query:{'history':3}})"></a>
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
  background-color: #fff;
  img{
    width: 100%;
    vertical-align: top;
  }
  .history{
    display: block;
    position: absolute;
    width: 30vw;
    height: 30vw;
    // background-color: rgba(255,0,0,.6);
    // bottom: 0;

    &.history1{
      bottom: 32vw;
      right: 10vw;
    }

    &.history2{
      bottom: 32vw;
      left: 10vw;
    }

    &.history3{
      bottom: 65vw;
      right: 10vw;
    }

    &.history4{
      bottom: 65vw;
      left: 10vw;
    }
  }
}
</style>

