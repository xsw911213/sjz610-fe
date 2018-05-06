<template>
  <div id="signin">
    <div class="head">
      <div v-if="!signed">
        <img src="../../static/icon/signin-icon.png" alt="">
        <p class="h2">请签到</p>
      </div>
      <div v-else>
        <p class="h1">已签到</p>
      </div>
    </div>
    <div class="form">
      <div v-if="!signed">
        <input v-model="phoneNumber" type="tel" placeholder="请输入手机号" @input="vailablePhone">
        <p class="error">{{errorPormot}}</p>
        <a :class="`next-btn ${ nextBtnDisabled ? 'disabled':''}`" @click="netx">下一步</a>
      </div>
      <div v-else>
        <img class="signined" src="../../static/icon/signed.png" alt="">
        <p class="signined-text">恭喜您签到成功</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'signin',
  data() {
    return {
      signed: false,
      errorPormot: '',
      phoneNumber:'',
      nextBtnDisabled: true,
    }
  },
  methods : {
    vailablePhone() {
      //手机号正则  
      var phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;  
      //电话  
      var phone = this.phoneNumber; 
      if (!phoneReg.test(phone)) { 
        this.errorPormot = "请输入有效的手机号码！"
        this.nextBtnDisabled = true;
      } else {
        this.errorPormot = "";
        this.nextBtnDisabled = false;
      }
    },
    netx(){
      if(this.nextBtnDisabled){
        return
      }

      if(this.phoneNumber === '13833106527'){
        this.signed = true;
      } else {
        this.errorPormot = "请输入您预留的手机号"
      }

      
    }
  },
  mounted(){
    // setTimeout(()=>{
    //   this.errorPormot = "请输入正确的手机号"
    // },3000)
  }
}
</script>
<style lang="scss">
#signin{
  position: absolute;
  width: 100%;
  min-height: 100%;
  background-color: #fff;

  .head{
    width: 100%;
    height: 70vw;
    background-color: #2eaff1;
    text-align: center;
    div{
      position: absolute;
      width: 100%;
      height: 100%;

      img{
        width: 22vw;
        height: 22vw;
        margin-top: 20vw;
      }

      .h2{
        color: #fff;
        margin-top: 10px;
        font-size: 40px;
      }

      .h1{
        color: #fff;
        margin-top: 25vw;
        font-size: 60px;
      }
    }

    
  }
  .form{
    width: 100%;
    text-align: center;

    div{
      input{
        display: inline-block;
        width: 60vw;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 30px;
        border: none;
        border-bottom: solid 2px #c4c4c4;
        margin-top: 50px;
      }

      .error{
        font-size: 14px;
        height: 14px;
        line-height: 14px;
        margin-top: 15px;
        color: #dd3636;
      }

      .next-btn{
        display: inline-block;
        width: 60vw;
        height: 11vw;
        line-height: 11vw;
        font-size: 24px;
        text-align: center;
        color: #fff;
        background-color: #2eaff1;
        margin-top: 20px;
      }
      .disabled{
        background-color: #d1d1d1;
      }


      .signined{
        width: 25vw;
        height: 25vw;
        margin-top: 50px;
      }

      .signined-text{
        font-size: 30px;
        color: #17b0a3;
        margin-top: 15px;
      }
    }

    
  }
}
</style>


