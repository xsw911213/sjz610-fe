<template>
  <div id="living">
    <div class="msg">
      <p class="title">会场地图</p>
      <img class="map" src="../assets/meeting-map.jpg" @click="e" alt="">
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
          time: '14：00',
          text: '2018中国（石家庄）“互联网+旅游”特色小镇峰会',
          value: 0
        },
        {
          time:'19：50',
          text:'第二届石家庄市旅游产业发展大会开幕式',
          value: 1
        },
        {
          time:'开幕式后',
          text:'大型实景演出',
          value: 2
        }
      ],
      list0610:[
        {
          time:'08：00',
          text:'旅游项目线路观摩',
          value: 3
        },
      ],
      list0611:[
        {
          time:'8：00',
          text:'《全民导游》颁奖典礼',
          value: 6
        },
        {
          time:'10：00',
          text:'石家庄市创建全域旅游示范市工作推进会',
          value: 4
        },
      ],
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
    }
  },
  mounted(){
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
      margin: 5vw 10vw;
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
        }
      }
    }

  }
}
</style>