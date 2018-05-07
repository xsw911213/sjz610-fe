<template>
  <div id="living">
    <img class="head" src="../assets/living-head1.jpg" @click="e">
    <div class="msg">
      <div class="linear-gradient-bg"></div>
      <ul class="text">
        <li class="item" v-for="(item,index) in livingMsg" :key="index">
          <p class="item-time">{{`2018-6-${new Date(item.time).getDate()} ${new Date(item.time).getHours()}:${new Date(item.time).getMinutes() < 10 ? '0'+new Date(item.time).getMinutes() : new Date(item.time).getMinutes()}`}}</p>
          <img class="item-img" v-if="item.img" :src="item.img" alt="">
          <p class="item-text" v-if="item.text">{{item.text}}</p>
        </li>
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
      this.axios({
        method: 'get',
        url: '/livingmsg',
        params:{
          meeting: 5
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
#living{
  position: absolute;
  width: 100%;
  min-height: 100%;
  background-color: #fff;
  .head{
    position: relative;
    width: 100%;
    vertical-align: top;
  }
  .msg{
    // b7ebf8
    position: relative;
    padding-bottom: 30px;
    
    .linear-gradient-bg{
      position: absolute;
      width: 100%;
      height: 300px;
      background: -webkit-linear-gradient(#b7ebf8, #ffffff); /* Safari 5.1 - 6.0 */
    }
    .text{
      position: relative;
      width: 80vw;
      margin-left: 10vw;
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
      }
    }
  }
}
</style>