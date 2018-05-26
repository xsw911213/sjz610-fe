<template>
  <div id="living-detail">
    <div class="mask"></div>
    <div class="msg">
      <!-- <div class="linear-gradient-bg"></div> -->
      <p class="title">直播大厅</p>
      <ul class="text" v-if="livingMsg.length > 0">
        <li class="item" v-for="(item,index) in livingMsg" :key="index">
          <p class="item-time">{{`2018-6-${new Date(item.time).getDate()} ${new Date(item.time).getHours()}:${new Date(item.time).getMinutes() < 10 ? '0'+new Date(item.time).getMinutes() : new Date(item.time).getMinutes()}`}}</p>
          <img class="item-img" v-if="item.img" :src="item.img" alt="">
          <p class="item-text" v-if="item.text">{{item.text}}</p>
        </li>
      </ul>
      <ul class="text" v-else>
        <p class="nothing">您来早了，会议还没开始</p>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      livingMsg:[]
    }
  },
  methods:{
    e(e){
      e.preventDefault();
    },
    getMsg(){
      console.log(this.$route.query.meeting)
      this.axios({
        method: 'get',
        url: '/livingmsg',
        params:{
          meeting: this.$route.query.meeting
        },
        baseURL: this.host.baseUrl
        //baseURL:'http://10.168.34.43:3008/api'
      }).then((res)=>{
        console.log(res)
        this.livingMsg = res.data.data;
      })
    },
  },
  mounted(){
    this.getMsg();
  }
}
</script>
<style lang="scss">
#living-detail{
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
    

    .text{
      position: relative;
      width: 80vw;
      margin-left: 10vw;
      margin-top: 20px;
      box-sizing: border-box;
      padding: 20px;
      background-color: #99ecef;
      text-align: center;
      .item{
        display: inline-block;
        width: 100%;
        height: auto;
        margin-bottom: 15px;
        border-radius: 5px;
        box-sizing: border-box;
        padding: 10px;
        background-color: #ffffff;
        .item-time{
          font-size: 18px;
          text-align: left;
          color: #4671d8;
        }
        .item-img{
          width: 100%;
          margin-top: 5px;
        }
        .item-text{
          text-align: left;
          font-size: 14px;
          color: #343434;
          margin-top: 5px;
        }
        .nothing{
          color: #343434;
        }
      }
    }
  }
}
</style>