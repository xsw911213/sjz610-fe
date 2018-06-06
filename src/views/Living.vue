<template>
  <div id="living">
    <div class="mask"></div>
    <div class="msg">
      <p class="title">现场直播</p>
      <div class="meetings">
        <img class="dom" src="../assets/living-dom.png" @click="e" alt="">
        <p class="date">6月9日</p>
        <p class="item" v-for="(item,index) in list0609" :key="index">
          <span class="time">{{item.time}}</span>
          <span class="play"></span>
          <span class="text" @click="goDetail(item.value)">{{item.text}}</span>  
        </p>
        <p class="date">6月10日</p>
        <p class="item" v-for="(item,index) in list0610" :key="index + 10">
          <span class="time">{{item.time}}</span>
          <span class="play"></span>
          <span class="text" @click="goDetail(item.value)">{{item.text}}</span>  
        </p>
        <p class="date">6月11日</p>
        <p class="item" v-for="(item,index) in list0611" :key="index + 100">
          <span class="time">{{item.time}}</span>
          <span class="play"></span>
          <span class="text" @click="goDetail(item.value)">{{item.text}}</span>  
        </p>
      </div>

      <p class="title" style="margin-top:40px;">会场地图</p>
      <v-touch v-on:pinch="scaleimg" v-on:pan="translate" v-on:panend="translateEnd" class="map">
        <img id="living-map" :style="`width:${width}px;height:${height}px;transform:translate(${translateX}px,${translateY}px)`" src="../assets/meeting-map.jpg" @click="e" alt="">
      </v-touch>
      <!-- <img class="map" src="../assets/meeting-map.jpg" @click="e" alt=""> --> 
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      // livingMsg:[],
      list0609:[
        {
          time: '9：30',
          text: '第五届石家庄旅游交易会启动仪式及巡馆',
          value: 0
        },
        {
          time: '10：30',
          text: '《全民导游》颁奖典礼',
          value: 1
        },
        {
          time:'10：50',
          text:'第五届石家庄旅游交易会重点项目发布暨签约仪式',
          value: 2
        },
        {
          time:'14：30',
          text:'2018中国·石家庄“互联网+旅游”特色小镇峰会',
          value: 3
        },
        {
          time:'17：30',
          text:'市领导会见重要嘉宾及外宾',
          value: 4
        },
        {
          time:'18：30',
          text:'推介餐叙会',
          value: 5
        },
        {
          time:'20：00',
          text:'第二届石家庄市旅游产业发展大会开幕式',
          value: 6
        }
        ,
        {
          time:'20：40',
          text:'大型实景剧《遇见·鹿泉》演出',
          value: 7
        }
      ],
      list0610:[
        {
          time:'08：00',
          text:'旅游项目线路观摩',
          value: 8
        },
      ],
      list0611:[
        {
          time:'9：30',
          text:'石家庄市创建全域旅游示范区工作推进会',
          value: 9
        },
        {
          time:'14：30',
          text:'第二届庄里外休闲活动颁奖仪式',
          value: 10
        },
      ],
      width:'',
      _width:'',
      height:'',
      _height:'',
      translateX: 0,
      otranslateX: 0,
      translateY: 0,
      otranslateY: 0
    }
  },
  methods:{
    e(e){
      e.preventDefault();
    },
    getMsg(){
      this.axios({
        method: 'get',
        url: '/livingmsg',
        params:{
          meeting: 5
        },
        baseURL: this.host.baseUrl
        //baseURL:'http://10.168.34.43:3008/api'
      }).then((res)=>{
        this.livingMsg = res.data.data;
      })
    },
    goDetail(value){
      console.log(value);
      this.$router.push({path:'/livingdetail',query:{meeting:value}})
    },
    scaleimg(e){
      //this.direction = e.direction
      let scale
      if(e.scale > 1){
        scale = 1 + e.scale * 0.01;
      }else if(e.scale === 1){
        scale = 1;
      }else{
        scale = 1 - e.scale * 0.03;
      }
      
      this.width = this.width * scale;
      this.height = this.height * scale;

      
      if(this.width < this._width){
        this.width = this._width;
        this.height = this._height;
      }
      let x = (this.width - this._width) / 2;
      let y = (this.height - this._height) / 2;
      this.translateX = 0 - x;
      this.otranslateX = 0 - x;
      this.translateY = 0 - y;
      this.otranslateY = 0 - y;
      // if(e.scale >=1 ){
        
      // }else{

      // }
      // if(this.scale >= 1){
      //   this.scale = this.scale + e.scale
      // }else{
      //   this.scale = 1;
      // }
    },
    translate(e){
      let _this = this;
      console.log(e);
      let x = e.deltaX;
      let y = e.deltaY;
      if(_this.width <= _this._width){
        x = 0;
        y = 0;
      }else{
        if(_this.translateX !== 0 || _this.translateY !== 0){
          x = _this.otranslateX + x;
          y = _this.otranslateY + y;
        }
      }
      console.log(_this.otranslateX,_this.otranslateY,x,y)
      _this.translateX = x;
      _this.translateY = y;
    },
    translateEnd(){
      this.otranslateX = this.translateX;
      this.otranslateY = this.translateY;
    }
  },
  mounted(){
    let lm = document.getElementById('living-map');
    this.height = lm.offsetHeight;
    this.width = lm.offsetWidth;
    this._height = lm.offsetHeight;
    this._width = lm.offsetWidth;
    // this.getMsg();
  }
}
</script>
<style lang="scss">
#living{
  position: absolute;
  width: 100%;
  min-height: 100%;
  background-color: #fff;
  background-image: url('../assets/living-bg.jpg');
  background-repeat: no-repeat;
  background-size: 100% auto;
  .mask{
    position: absolute;
    background: linear-gradient(rgba(0,0,0,0), #fff, #fff); /* 标准的语法（必须放在最后） */
    top: 41.8vw;
    height: 5vw;
    width: 100%;
  }

  .msg{
    // b7ebf8
    box-sizing: border-box;
    position: relative;
    padding-top: 50vw;
    padding-bottom: 30px;

    .title{
      position: relative;
      width: 190px;
      height: 26px;
      left: 50%;
      margin-left: -95px;
      text-align: center;
      line-height: 26px;
      color: #fff;
      font-size: 18px;
      background: linear-gradient(to right, #b5eaf7 , #77c9f4 ,#b5eaf7); /* 标准的语法 */
    }

    .map{
      width: 80vw;
      height: 107.8vw;
      margin: 5vw 10vw;
      overflow: auto;

      img{
        width: 100%;
        height: 100%;
        // object-fit: contain;
      }
    }

    .meetings{
      position: relative;
      width: 80vw;
      margin-left: 10vw;
      margin-top: 30px;
      box-sizing: border-box;
      border-radius: 5px;
      padding: 10px 5vw;
      box-shadow: 0 5px 10px #1e7489;
      background-color: #fffbf8;

      .dom{
        position: absolute;
        transform: translateY(-22px);
        width: 60vw;
        right: 3vw;
      }

      .date{
        position: relative;
        width: 60px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        margin-top: 10px;
        background-color: #59c7ec;
        color: #fff;
        font-size: 14px;
        &::after{
          content: "";
          display: block;
          position: absolute;
          width:0;
          height:0;
          top: 5px;
          right: -5px;
          border-width:5px 0 5px 5px;
          border-style:solid;
          border-color:transparent transparent transparent #59c7ec;/*透明 透明 透明 灰*/
        }
      }

      .item{
        line-height: 15px;
        margin-top: 10px;
        margin-bottom: 10px;
        span{
          display: inline-block;
          font-size: 12px;
        }
        .time{
          width: 50px;
          text-align: right;
          
        }
        .play{
          width: 12px;
          height: 12px;
          margin-left: 10px;
          background-color: #59c7ec;
          border-radius: 6px;
          vertical-align: middle;
          box-shadow: 1px 2px 3px #445c9e;
          &::after{
            content: "";
            display: block;
            position: absolute;
            width:0;
            height:0;
            top: 2px;
            left: 5px;
            border-width:4px 0 4px 4px;
            border-style:solid;
            border-color:transparent transparent transparent #fff;/*透明 透明 透明 灰*/
            
          }
        }
        .text{
          width: calc(68vw - 80px);
          margin-left: 5px;
          vertical-align: middle;
          transform: translateY(2px);
          // white-space: nowrap;
        }
      }
    }

  }
}
</style>