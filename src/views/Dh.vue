<template>
  <div id="dh">
    <swiper :options="swiperOption">
      <swiper-slide >
        <img src="../assets/dh/slider0.jpg" alt="">
      </swiper-slide>
      <swiper-slide >
        <img src="../assets/dh/slider1.jpg" alt="">
      </swiper-slide>
      <swiper-slide >
        <img src="../assets/dh/slider2.jpg" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <ul class="list">
      <li>
        <div class="img">
          <img src="../assets/dh/slider0.jpg" alt="">
        </div>
        <div class="msg">
          <p class="title">西柏坡</p>
          <p class="text">景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区景区</p>
        </div>
      </li>
      <li>
        <div class="img">
          <img src="../assets/dh/slider1.jpg" alt="">
        </div>
        <div class="msg">
          <p class="title">抱犊寨</p>
          <p class="text">景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区景区</p>
        </div>
      </li>
      <li>
        <div class="img">
          <img src="../assets/dh/slider2.jpg" alt="">
        </div>
        <div class="msg">
          <p class="title">西柏坡</p>
          <p class="text">景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区景区</p>
        </div>
      </li>
      <li>
        <div class="img">
          <img src="../assets/dh/slider0.jpg" alt="">
        </div>
        <div class="msg">
          <p class="title">西柏坡</p>
          <p class="text">景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区介绍景区景区</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOption: {
        loop : true,
        autoplay:true,
        pagination: {
          el: '.swiper-pagination',
          // type: 'progressbar'
        }
      }
    }
  }
}
</script>
<style lang="scss">
#dh{
  position: absolute;
  width: 100%;
  min-height: 100%;
  background-color: #fff;
  .swiper-container{
    height: 50vw;
    background-color: #fff;
    overflow: hidden;

    .swiper-slide{
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .list{
    position: relative;
    background-color: #fff;

    li{
      position: relative;
      height:24vw;
      .img{
        position: absolute;
        width: 36vw;
        height:24vw;
        top: 0;
        left: 0;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .msg{
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 36vw;
        padding: 5px;

        .title{
          font-size: 18px;
          color: #333;
        }

        .text{
          font-size: 13px;
          color: #717171;
          margin-top: 5px;
        }
      }
    }
  }
}
</style>
