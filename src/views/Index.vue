<style lang="scss">
// @font-face {  
//     font-family: 'self-font';  
//     src:url('../../static/font/self-font.ttf') format('truetype');  
//     font-weight: normal;  
//     font-style: normal;  
// } 
#index{
  position: absolute;
  width: 100%;
  min-height: 100%;

  .loading{
    visibility:visible;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: #fff;

    .logo{
      position: absolute;
      width: 300px;
      margin: auto;
      top: 0;
      bottom: 180px;
      left: 0;
      right: 0;
    }

    .logo-text{
      position: absolute;
      width: 90vw;
      margin: auto;
      top: 140px;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
  

  .container{
    // opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background-image: url("../assets/index-bg.jpg");
    background-size: 100% auto;
    background-position: top;
    background-repeat: no-repeat;
    background-color: #7AC0F9;
  }

  .index-head{
    display: block;
    width: 38vw;
    margin: 0 auto;
  }
  .local-info{
    position: relative;
    padding: 0 10vw;
    margin-top: -10vw;
    p{
      position: relative;
      color: #fff;
      margin-bottom: 3px;
    }
    .check-lang{
      width: 60px;
      height: 22px;
      border: solid 2px #fff;
      text-align: center;
      border-radius: 6px;
      a{
        display: inline-block;
        position: absolute;
        width: 30px;
        height: 22px;
        left: 0;
        background-color: rgba(0,0,0,0);
        color: #fff;
        &:last-child{
          left: 30px;
        }

        &.selected{
          background-color: #fff;
          color: #25619c;
        }
      }
    }

    .weather{
      width: 60px;
      font-size: 25px;
      border-bottom: solid 1px #fff;
    }

    .date{
      width: 60px;
      font-size: 18px;
    }

    .weekday{
      width: 60px;
      font-size: 19px;
      height: 20px;
    }
  }

  .modules{
    position: relative;
    text-align:center;
    margin-top: 15vw;
    .notice{
      display: block;
      position: relative;
      width: 77vw;
      height: 9vw;
      line-height: 9vw;
      color: #fff;
      margin: 0 auto;
      border-radius: 4.5vw;
      background-color: rgba(#2a94f1,.7);

      marquee{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        text-align: center;
        p{
          display: inline-block;
          margin-left: 30px;
        }
      }
    }
    .hotline{
      display: block;
      position: relative;
      width: 77vw;
      height: 9vw;
      line-height: 9vw;
      color: #fff;
      margin: 6vw auto 0;
      border-radius: 8px;
      background-color: rgba(#2a94f1,.7);
    }
  }

  .btns{
    display: inline-flex;
    width: 90vw;
    // margin-left: 5vw;
    margin-top: 3vw;
    flex-wrap: wrap;
    justify-content: flex-start;

    a{
      display: block;
      width: 25vw;
      height: 20vw;
      text-align: center;
      margin-top: 3vw;
      margin-left: 7.5vw;
      border-radius: 8px;
      background-color: rgba(#2a94f1,.7);
      &:nth-child(3n - 2){
        margin-left: 0;
      }

      img{
        margin-top: 3px;
        width: 12vw;
        height: 12vw;
      }
      span{
        display: block;
        // margin-top: 5px;
        font-size: 14px;
        color: #fff;
        height: 14px;
      }
    }
  }

  .bottom-btns{
    display: inline-flex;
    width: 90vw;
    // margin-left: 5vw;
    margin-top: 2vw;
    flex-wrap: wrap;
    justify-content: space-around;

    a{
      display: block;
      width: 25vw;
      height: 13vw;
      text-align: center;
      margin-top: 1vw;
      margin-left: 7.5vw;
      border-radius: 8px;
      &:nth-child(3n - 2){
        margin-left: 0;
      }

      img{
        margin-top: 5px;
        width: 10vw;
        height: 10vw;
      }
      span{
        display: block;
        // margin-top: 5px;
        font-size: 13px;
        color: #fff;
        height: 14px;
      }
    }
  }
}


@keyframes loadinghide {
  0%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
}

.loading-hide{
  animation:loadinghide 1.5s 1;
  animation-fill-mode: both;
}

@keyframes containershow {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}

.container-show{
  animation:containershow 2s 1;
  animation-fill-mode: both;
}
</style>

<template>
  <div id="index">
    <!-- <div :class="`container ${!slide ? 'container-show' :''}`"  > -->
    <div class="container"  >
      <img class="index-head" src="../assets/metting-logo.png">
      <div class="local-info">
        <p @click="checkLang" class="check-lang">
          <a :class="lang ==='cn' ?'selected':''">中</a>
          <a :class="lang ==='en' ?'selected':''">EN</a>
        </p>
        <p class="weather">{{localInfo.temperatureCurr}}℃</p>
        <p class="date">{{localInfo.date}}</p>
        <p class="weekday">{{localInfo.week[lang]}}</p>
      </div>
      <div class="modules">
        <a class="notice" @click="$router.push({name:'ArticleList',params:{module:'meetingnotice'}})">
          <marquee v-if="marqueeList.length > 0" direction="left" scrollamount="6">
            <p v-for="(item,index) in marqueeList" :key="index">{{item.title}}</p>
          </marquee>
        </a>
        <div class="btns">
          <!-- <a v-for="(item,index) in btns" :key="index" v-if="index === 8 ? singined && item.show: item.show" @click="go(item.path)"> -->
          <a v-for="(item,index) in btns" :key="index" v-if="item.show" @click="go(item.path)">
            <img :src="item.img">
            <span>{{item.text[lang]}}</span>
          </a>
        </div>
        <!-- <a class="hotline">{{hotline[lang]}}：88888888</a> -->
        <div class="bottom-btns">
          <!-- <a>
            <img src="../../static/icon/b1.png" alt="">
            <span>逛会展</span>
          </a> -->
          <!-- <a>
            <img src="../../static/icon/b2.png" alt="">
            <span>吃住行游购娱</span>
          </a> -->
          <!-- <a>
            <img src="../../static/icon/sigin.png" alt="">
            <span>个人中心</span>
          </a> -->
        </div>
      </div>
    </div>

    <!-- <div :class="`loading ${slide ? '' :'loading-hide'}`" v-show="loaddivshow">
      <img class="logo" src="http://img.huashenghaoche.com/tms/test/logo.png" @click="e" alt="">
    </div> -->
  </div>
</template>
<script>
import {btns} from "./data"
export default {
  name:'index',
  data() {
    return {
      marqueeList: [],
      lang: 'cn',
      localInfo: {
        temperatureCurr: '',
        date: '',
        week: {
          cn: '',
          en: ''
        }
      },
      hotline: {
        cn:'24小时热线',
        en:'hotline'
      },
      text:'index',
      btns,
      slide: true
    }
  },
  created(){
    document.querySelector('title').innerText = '第四届石家庄市旅游产业发展大会'
  },
  methods:{
    checkLang () {
      if(this.lang === 'cn'){
        this.lang = 'en'
      } else {
        this.lang = 'cn'
      }
    },
    go(path){
      this.$router.push({path})
    },
    loadingAnimate(){
      let _this = this;
    }
  },
  mounted(){
    let _this = this;
    
    _this.axios({
      method: 'get',
      url: '/modules',
      baseURL: _this.host.baseUrl
      //baseURL:'http://10.168.34.43:3008/api'
    }).then((res)=>{
      // console.log(res);
      let data = res.data
      let getbtns = data.data.modules

      btns.forEach((item,index)=>{
        //console.log(item)
        getbtns.forEach((ite,inde)=>{
          if(item.text.cn === ite.name){
            item.show = ite.show
          }
        })
      })

      _this.axios({
        method: 'get',
        url: '/meetingnotice',
        baseURL: _this.host.baseUrl
        //baseURL:'http://10.168.34.43:3008/api'
      }).then((res)=>{
        console.log(res)
        _this.marqueeList = res.data.data
      })

      _this.localInfo.temperatureCurr = data.w.temperature
      let now = new Date(data.serverTime);
      let month = now.getMonth() + 1;
      let strDate = now.getDate();
      let weekArr = [
        {cn: '星期日',en: 'Sunday'},
        {cn: '星期一',en: 'Monday'},
        {cn: '星期二',en: 'Tuesday'},
        {cn: '星期三',en: 'Wednesday'},
        {cn: '星期四',en: 'Thursday'},
        {cn: '星期五',en: 'Friday'},
        {cn: '星期六',en: 'Saturday'},
      ]
      let week = weekArr[now.getDay()];
      _this.localInfo.week = week
      _this.localInfo.date = `${month}/${strDate}`
    })
  }
}
</script>
