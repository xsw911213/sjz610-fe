<template>
  <section id="article-list">
    <div v-if="$route.params.module === 'news'" class="article-list-rgba"></div>
    <a class="back-btn" @click="$router.back(-1)"></a>
    <!-- <img class="sub-head" src="../assets/subtitle.png"> -->
    <div v-if="$route.params.module === 'news'" class="news-center">
      <p class="news-center-title">新闻中心</p>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <a v-for="(item,index) in swiperList" :key="index" @click="toArticleDetial(item._id)" class="swiper-slide">
            <div class="swiper-slide-img">
              <img :src="item.headImg" alt="">
            </div>
            <p class="swiper-slide-title">{{item.title}}</p>
          </a>
        </div>
        <!-- 如果需要分页器 -->
        <!-- <div class="swiper-pagination"></div> -->
        
        <!-- 如果需要导航按钮 -->
        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> -->
        
        <!-- 如果需要滚动条 -->
        <!-- <div class="swiper-scrollbar"></div> -->
    </div>
      <p class="news-center-yw">要文</p>
    </div>
    <ul class="article-list">
      <li v-for="(item,index) in articleList" class="article-list-item" :key="index">
        <a v-if="$route.params.module === 'news'" @click="toArticleDetial(item._id)" class="article-list-item-a news">
          <div class="article-list-item-a-img">
            <img :src="item.headImg" alt="">
          </div>
          <p class="article-list-item-a-title">{{item.title}}</p>
          <p class="article-list-item-a-intro">{{item.text}}</p>
        </a>
        <a v-else-if="$route.params.module === 'meetingnotice'" @click="toArticleDetial(item._id)" class="article-list-item-a meetingnotice">
          {{item.title}}
        </a>
      </li>
    </ul>
  </section>
</template>
<script>
import Swiper from 'swiper'
export default {
  data(){
    return{
      articleList: [],
      swiperList: []
    }
  },
  created(){
    let pageTitle = ''
    if(this.$route.params.module === 'meetingnotice'){
      pageTitle = '会议通知'
    }else if(this.$route.params.module === 'news'){
      pageTitle = '新闻中心'
    }
    document.querySelector('title').innerText = pageTitle
  },
  methods:{
    init(){
      let _this = this

      _this.axios({
        method: 'get',
        url: '/' + _this.$route.params.module,
        baseURL: _this.host.baseUrl
        //baseURL:'http://10.168.34.43:3008/api'
      }).then((res)=>{
        console.log(res)
        _this.articleList = res.data.data
        _this.swiperList = res.data.data.reverse().slice(0,5)
        setTimeout(() => {
          new Swiper ('.swiper-container', {
            loop: true,
            autoplay: {
              delay: 3000
            },
            // 如果需要分页器
            // pagination: '.swiper-pagination',
            // // 如果需要前进后退按钮
            // nextButton: '.swiper-button-next',
            // prevButton: '.swiper-button-prev',
            // // 如果需要滚动条
            // scrollbar: '.swiper-scrollbar',
          })
        }, 100);
        
        console.log(_this.swiperList)
      })
    },
    toArticleDetial(id){
      let _this = this
      this.$router.push({
        name:'articleDetial',
        params:{
          module:_this.$route.params.module,
          id:id
        }
      })
    }
  },
  mounted(){
    this.init()
    
  }
}
</script>

<style lang="scss">
@import 'swiper/dist/css/swiper.css';

.swiper-container {
  width: 90vw;
  height: 40vw;
  margin: 20px auto;
  
  .swiper-slide{
    display: block;
    background-color: rgba(158, 158, 158,.7);

    &-img{
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      img{
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &-title{
      position: absolute;
      width: 100%;
      bottom: 0;
      text-align: center;
      color: #fff;
      background-color: rgba(#000,.6);
    }
  }
}

#article-list{
  position: absolute;
  width: 100%;
  min-height: 100%;
  // padding-top: 20px;
  box-sizing: border-box;
  // background-color: #fff;
  background-image: url("../assets/index-bg.jpg");
  background-size: 100% auto;
  background-position: top;
  background-repeat: no-repeat;
  background-color: #77c1ff;
  .article-list-rgba{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(#fff,.6);
  }

  .sub-head{
    width: 100%;
  }

  .news-center{
    position: relative;
    margin-top: 10vw;

    &-title{
      position: relative;
      font-size: 25px;
      color: #d60212;
      text-align: center;
      &::before{
        content: "";
        display: block;
        position: absolute;
        width: 22vw;
        height: 2px;
        top: 50%;
        left: 8vw;
        margin-top: -1px;
        background-color: #d60212;
      }
      &::after{
        content: "";
        display: block;
        position: absolute;
        width: 22vw;
        height: 2px;
        top: 50%;
        right: 8vw;
        margin-top: -1px;
        background-color: #d60212;
      }
    }

    &-yw{
      position: relative;
      font-size: 22px;
      color: #d60212;
      padding-left: 8vw;
    }
  }

  .article-list{
    position: relative;
    margin-top: 5vw;

    &-item{
      position: relative;
      width: 90vw;
      // height: 28vw;
      margin: 0 auto;
      margin-bottom: 3vw;

      &-a{
        display: block;
        position: relative;
        width: 90vw;
        height: 28vw;
        font-size: 18px;
        background-color: rgba(#fff,.9);
        border-radius: 5px;

        &.news{
          height: 28vw;
          line-height: 28vw;
          text-align: left;
        }
        &.meetingnotice{
          box-sizing: border-box;
          height: 14vw;
          padding: 0 15px;
          font-size: 14px;
          line-height: 14vw;
          text-align: center;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
        }
        &-img{
          display: inline-block;
          position: relative;
          width: 25vw;
          height: 25vw;
          margin-top: 1.5vw;
          margin-left: 1.5vw;
          background-color: rgba(158, 158, 158,.7);
          vertical-align: top;
          img{
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
         
        }
        &-title{
          position: absolute;
          width: 58vw;
          left: 30vw;
          top: 3vw;
          font-size: 20px;
          height: 24px;
          line-height: 24px;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
          color: #000;
        }

        &-intro{
          display: -webkit-box;
          position: absolute;
          width: 58vw;
          left: 30vw;
          top: 12vw;
          font-size: 14px;
          height: 51px;
          line-height: 17px;
          word-wrap: break-word;
          word-break: normal;
          color: #375772;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
