<template>
  <div id="individual-center">
    <div v-if="signed" class="head">
      <p class="nickname">{{nickname}}</p>
      <p class="status">完成签到</p>
      <a class="resign" @click="resign">信息有误？重新签到</a>
    </div>
    <div v-else class="head">
      <p class="sigin-promot">请完成签到</p>
      <a class="go-sigin" @click="$router.push({path:'/signin'})">去签到</a>
    </div>
    <div class="entry-list">
      <!-- <a @click="$router.push({path:'/date'})">会议日程 <img src="../assets/arrow.png"></a> -->
      <a v-if="signed" @click="goPersonalDate">个人日程 <img src="../assets/arrow.png"></a>
      <a v-if="signed" @click="$router.push({path:'/image'})">秩序手册 <img src="../assets/arrow.png"></a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nickname: '',
      signed: false,
      remark:''
    }
  },
  methods:{
    resign(){
      sessionStorage.clear();
      localStorage.clear();
      this.$router.push({path:'/signin'})
    },
    goPersonalDate(){
      // console.log(this.remark)
      this.$router.push({path:'/pdate'})
    }
  },
  mounted(){
    let _this = this;
    let localData = JSON.parse(localStorage.getItem('localData'));
    // console.log(localData);
    if(localData && localData.signined){
      _this.signed = true;

      _this.axios({
        method: 'get',
        url: '/persondata',
        params:{tel:localData.tel},
        baseURL: _this.host.baseUrl
        //baseURL:'http://10.168.34.43:3008/api'
      }).then((res)=>{
        let data = res.data.data[0];
        console.log(data);
        _this.nickname = data.name;
        sessionStorage.setItem('remark', JSON.stringify(data.remark));
      })
    }
    
  }
}
</script>

<style lang="scss">
#individual-center{
  position: absolute;
  width: 100%;
  min-height: 100%;
  background-color: #fff;

  .head{
    position: relative;
    width: 100vw;
    height: 50vw;
    box-sizing: border-box;
    padding: 30px;
    background-image: url('../assets/ndividual-center-head-bg.jpg');
    background-size: 100% 100%;

    .nickname{
      margin-top: 20px;
      font-size: 40px;
      color: #3e3e3e;
      text-align: center;
    }

    .status{
      margin-top: 30px;
      font-size: 20px;
      color: #fff;
      text-align: center;
    }

    .sigin-promot{
      position: relative;
      margin-top: 30px;
      font-size: 35px;
      text-align: center;
      color: #3e3e3e;
    }

    .go-sigin{
      position: relative;
      display: inline-block;
      padding: 10px 20px;
      background-color: #fff;
      color: #459cf4;
      font-size: 20px;
      border-radius: 5px;
      margin-left: 50%;
      margin-top: 25px;
      transform: translateX(-50%);
    }

    .resign{
      display: block;
      position: absolute;
      right: 5px;
      bottom: 5px;
      font-size: 12px;
    }
  }

  .entry-list{
    position: relative;
    width: 100%;

    a{
      display: block;
      box-sizing: border-box;
      padding: 20px 20px;
      font-size: 18px;
      color: #333;
      border-bottom: solid 1px #bfbfbf;
      
      img{
        display: inline-block;
        position: absolute;
        width: 16px;
        height: 16px;
        right: 20px;
      }
    }
  }
}
</style>
