<template>
  <div id="trademeet">
    <a class="back-btn" @click="$router.back(-1)"></a>
    <!-- http://518img.blu-rayvision.com/wangjielvfa.jpg -->
    <img src="http://518img.blu-rayvision.com/wangjielvfa.jpg" alt="">
    <a class="a a1" href="https://w.url.cn/s/AFSWJyT"></a>
    <a class="a a2" href="https://w.url.cn/s/A2XOWYm"></a>
    <a class="a a3" href="https://w.url.cn/s/Az6wxUK"></a>
  </div>
</template>

<script>
export default {
  data (){
    return{
    }
  },
  created(){
    document.querySelector('title').innerText = '往届旅发'
  },
}
</script>
<style lang="scss">
#trademeet{
  position: absolute;
  width: 100%;
  min-height: 100%;
  padding-top: 35px;
  box-sizing: border-box;
  // background-color: #fff;
  background-image: url("../assets/index-bg.jpg");
  background-size: 100% auto;
  background-position: top;
  background-repeat: no-repeat;
  background-color: #77c1ff;

  img {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }

  .a{
    display: block;
    position: absolute;
    width: 80vw;
    left: 10vw;
    top: 33vw;
    height: 30vw;
    // background-color: rgba(0,0,0,.4);

    &.a2{
      top: 78vw;
    }
    &.a3{
      top: 120vw;
    }
  }
  
}
</style>

