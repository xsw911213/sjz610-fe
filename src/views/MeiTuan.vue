<style lang="scss">
// @font-face {  
//     font-family: 'self-font';  
//     src:url('../../static/font/self-font.ttf') format('truetype');  
//     font-weight: normal;  
//     font-style: normal;  
// } 
#meituan{
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
    width: 100%;
  }
  .local-info{
    position: relative;
    padding: 0 10vw;
    margin-top: -4vw;
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
        margin-top: 3vw;
        width: 100%;
        height: 9vw;
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
  <div id="meituan">
    <!-- <div :class="`container ${!slide ? 'container-show' :''}`"  > -->
    <div class="container"  >
      <a class="back-btn" @click="$router.back(-1)"></a>
      <img class="index-head" src="../assets/subtitle.png">
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
      </div>
    </div>

    <!-- <div :class="`loading ${slide ? '' :'loading-hide'}`" v-show="loaddivshow">
      <img class="logo" src="http://img.huashenghaoche.com/tms/test/logo.png" @click="e" alt="">
    </div> -->
  </div>
</template>
<script>
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
      btns: [
        {
          // text:'签到',
          text:{
            cn:'美食',
            en:'Delicacy'
          },
          img:'../../static/cwyl/1.png',
          show:true,
          path:'https://m.ctrip.com/webapp/you/foods/address.html?new=1&ishideheader=true&secondwakeup=true&dpclickjump=true&allianceid=4897&sid=155952&ouid=index&from=https%3A%2F%2Fm.ctrip.com%2Fhtml5%2F'
        },
        {
          // text:'签到',
          text:{
            cn:'住宿',
            en:'Accommodation'
          },
          img:'../../static/cwyl/2.png',
          show:true,
          path:'https://m.ctrip.com/webapp/hotel/?from=https%3A%2F%2Fm.ctrip.com%2Fhtml5%2F'
        },
        {
          // text:'签到',
          text:{
            cn:'出行',
            en:'Trip'
          },
          img:'../../static/cwyl/3.png',
          show:true,
          path:'https://m.ctrip.com/html5/flight/swift/index?from=https%3A%2F%2Fm.ctrip.com%2Fhtml5%2F'
        },
        {
          // text:'签到',
          text:{
            cn:'娱乐',
            en:'Entertainment'
          },
          img:'../../static/cwyl/4.png',
          show:true,
          path:'https://m.dianping.com/play/picasso/index?from=m_nav_3_xiuxianyule'
        },
        {
          // text:'签到',
          text:{
            cn:'购物',
            en:'Shopping'
          },
          img:'../../static/cwyl/5.png',
          show:true,
          path:'https://m.ctrip.com/webapp/gshop2/?from=https%3A%2F%2Fm.ctrip.com%2Fwebapp%2Ffshome%2Fcrnweb%2Fhome.html%3Fbid%3D2%26cid%3D3%26pid%3D3%23ctm_ref%3DM_ps_1home_gg_mh%26secondwakeup%3Dtrue%26dpclickjump%3Dtrue%26allianceid%3D4897%26sid%3D155952%26ouid%3Dindex%26from%3Dhttps%253A%252F%252Fm.ctrip.com%252Fhtml5%252F&bid=2&cid=3&pid=3'
        },
        {
          // text:'签到',
          text:{
            cn:'游玩',
            en:'Play'
          },
          img:'../../static/cwyl/6.png',
          show:true,
          path:'https://m.ctrip.com/webapp/vacations/tour/around?from=https%3A%2F%2Fm.ctrip.com%2Fhtml5%2F'
        },
      ],
      slide: true
    }
  },
  created(){
    document.querySelector('title').innerText = '吃住行游乐购'
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
      // this.$router.push({path})
      window.location.href = path
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
