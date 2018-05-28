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
      <li v-for="(item,index) in dhData" :key="index" @click="go(index)">
        <div class="img">
          <img :src="`../../static/dhimg/${index}.jpg`" alt="">
        </div>
        <div class="msg">
          <p class="title">{{item.name}}</p>
          <p class="text">{{item.text}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import dhData from './dhStaticData.js'
console.log(dhData.length)
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
      },
      dhData
    }
  },
  methods:{
    go(index){
      console.log(index);
      this.$router.push({path:'/dhDetil',query:{id:index}})
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
      height: 25vw;
      .img{
        position: absolute;
        width: 36vw;
        height: 25vw;
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
          overflow : hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
}
</style>
