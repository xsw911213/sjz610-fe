<template>
  <div id="index">
    <div :class="`container ${!slide ? 'container-show' :''}`"  >
      <img class="index-head" src="../assets/index-head.png">
      <div style="text-align:center">
        <div class="btns">
          <a v-for="(item,index) in btns" :key="index" v-if="item.show" @click="go(item.path)">
            <img :src="item.img">
            <span>{{item.text}}</span>
          </a>
        </div> 
      </div>
    </div>

    <div :class="`loading ${slide ? '' :'loading-hide'}`" v-show="loaddivshow">
      <p class="css11b4cd01ba1caf0">一“鹿”走来，“泉”是风景</p>
      <p>都市桃花源，活力新鹿泉</p> 
    </div>
  </div>
</template>
<script>
import {btns} from "./data"


export default {
  name:'index',
  data() {
    return {
      text:'index',
      btns,
      slide: true,
      loaddivshow:true,
    }
  },
  methods:{
    go(path){
      console.log(path)
      this.$router.push({path})
    },
    loadingAnimate(){
      let _this = this;
      // _this.btns[0].show = false;

      setTimeout(()=>{
        _this.slide = !_this.slide

        setTimeout(()=>{
          _this.loaddivshow = !_this.loaddivshow
          sessionStorage.setItem('loaded', 'true');
        },2000)
      },4000)
    }
  },
  mounted(){
    let _this = this;
    let loaded = sessionStorage.getItem('loaded');
    if(loaded){
      _this.slide = false;
      _this.loaddivshow = false;
    }else{
      _this.loadingAnimate();
    }
    
    _this.axios({
        method: 'get',
        url: '/modules',
        baseURL: _this.host.baseUrl
        //baseURL:'http://10.168.34.43:3008/api'
      }).then((res)=>{
        // console.log(res);
        let getbtns = res.data.data.modules;

        btns.forEach((item,index)=>{
          //console.log(item)
          getbtns.forEach((ite,inde)=>{
            if(item.text === ite.name){
              item.show = ite.show
            }
          })
        })
      })
  }
}
</script>

<style lang="scss">
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
    background-color: rgba(0,0,0,.7);
    
    p{
      color: #fff;
      text-align: center;
      margin-top: 50px;

      &.css11b4cd01ba1caf0{
        background: linear-gradient(to bottom, #0871b9, #168f42);
        -webkit-background-clip: text;
        color: transparent;
        font-size: 30px;
        margin-top: 200px;
      }
    }
  }
  

  .container{
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background-image: url("../assets/index-bg.jpg");
    background-size: 100% auto;
    background-position: bottom;
    background-repeat: no-repeat;
    background-color: #29a6fe;
  }

  .index-head{
    width: 100%;
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
      height: 25vw;
      text-align: center;
      margin-top: 3vw;
      margin-left: 7.5vw;
      &:nth-child(3n - 2){
        margin-left: 0;
      }

      img{
        width: 12vw;
        height: 12vw;
      }
      span{
        display: block;
        margin-top: 10px;
        font-size: 14px;
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
  animation:loadinghide 2s 1;
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


