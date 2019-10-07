<template>
  <div id="living">
    <a class="back-btn" @click="$router.back(-1)"></a>
    <img class="index-head" src="../assets/wbanner.png">
    <div class="b-div">
      <a v-for="(item,index) in btns" class="btn" :href="item.href">
        <div class="btn-img">
          <img :src="item.img" alt="">
        </div>
        <div class="btn-text">
          <span class="name">{{item.text}}</span>
          <span class="zhibo">直播</span>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      btns:[
        {
          href:'http://www.pailixiang.com/album_ia363558633.html?from=singlemessage',
          text:'图片直播间',
          img:'http://518img.blu-rayvision.com/tupianzhibo.jpg'
        },
        {
          href:'http://play.yunxi.tv/livestream/flash?id=6c2122c19d2b4405af56c7e3709d3d25',
          text:'视频直播间',
          img:'http://518img.blu-rayvision.com/shipinzhibo.jpg'
        }
      ]
    }
  },
  created(){
    document.querySelector('title').innerText = '直播间'
  },
  methods:{
    
  },
  mounted(){
  }
}
</script>
<style lang="scss">
#living{
  position: absolute;
  width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  // background-color: #fff;
  // background-image: url("../assets/index-bg.jpg");
  background-size: 100% auto;
  background-position: top;
  background-repeat: no-repeat;
  // background-color: #77c1ff;
  background-color: rgba(#e9e8e8,.8);
  .index-head{
    display: block;
    width: 100%;
    margin: 0 auto;
  }

  .b-div{
    position: absolute;
    box-sizing: border-box;
    width: 96vw;
    padding: 4vw;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-25%);
    background-color: rgba(#e9e8e8,.8);
  }

  .btn{
    display: block;
    position: relative;
    width: 88vw;
    height: 46vw;
    margin: 0 auto;
    background-color: rgba(#fff,.8);
    text-align: center;
    text-decoration: none;
    border-radius: 5px;
    margin-bottom: 20px;
    overflow: hidden;
    &:last-child{
      margin-bottom: 0;
    }
    &-img{
      display: block;
      position: relative;
      width: 100%;
      height: 36vw;
      img{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        object-fit: contain;
      }
    }
    &-text{
      position: relative;
      box-sizing: border-box;
      height: 10vw;
      padding: 5px;
      span{
        display: inline-block;
        position: absolute;
      }
      .name{
        font-size: 13px;
        top: 5px;
        left: 5px;
        color: #2f2f2f;
      }
      .zhibo{
        padding: 0px 7px;
        font-size: 13px;
        height: 14px;
        line-height: 14px;
        right:  5px;
        bottom: 5px;
        color: #2f2f2f;
        background-color: #5ac6fb;
        border-radius: 10px;
      }
    }
  }
}
</style>