<template>
  <div id="signin">
    <div class="head">
      <div v-if="!signed">
        <img src="../../static/icon/signin-icon.png" alt="">
        <p class="h2">{{h2}}</p>
      </div>
      <div v-else>
        <p class="h1">{{h1}}</p>
      </div>
    </div>
    <div class="form">
      <div v-if="!signed">
        <input v-model="phoneNumber" type="tel" :placeholder="placeholder" @input="vailablePhone">
        <p class="error">{{errorPormot}}</p>
        <a :class="`next-btn ${ nextBtnDisabled ? 'disabled':''}`" @click="netx">{{btnText}}</a>
      </div>
      <div v-else>
        <img class="signined" src="../../static/icon/signed.png" alt="">
        <p class="signined-text">{{successText}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'signin',
  data() {
    return {
      h1:'已签到',
      h2:'请完成签到',
      placeholder:'请输入手机号',
      btnText:'下一步',
      successText:'恭喜您签到成功',
      signed: false,
      errorPormot: '',
      phoneNumber:'',
      nextBtnDisabled: true,
      english:false
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
        if(this.english){
            this.errorPormot = "Please enter a valid phone number!"
          }
        this.nextBtnDisabled = true;
      } else {
        this.errorPormot = "";
        this.nextBtnDisabled = false;
      }
    },
    netx(){
      let _this = this;

      if(this.nextBtnDisabled){
        return
      }

      _this.axios({
        method: 'put',
        url: '/persondata',
        data:{tel:_this.phoneNumber,signined:true},
        baseURL: _this.host.baseUrl
        //baseURL:'http://10.168.34.43:3008/api'
      }).then((res)=>{
        console.log(res);
        let data = res.data;
        if(data.code){
          _this.signed = true;
          localStorage.removeItem('localData');
          localStorage.setItem('localData', JSON.stringify({tel:_this.phoneNumber,signined:true}));
        }else{
          _this.errorPormot = "请输入您预留的手机号"
          if(_this.english){
            _this.errorPormot = "Please enter your reserved mobile number"
          }
        }
      })      
    }
  },
  mounted(){
    let localData = JSON.parse(localStorage.getItem('localData'));

    if(localData && localData.signined){
      this.signed = true;
    }
    
    console.log(this.$route.query.lang)
    
    if(this.$route.query.lang === 'en'){
      this.english = true;
      this.h1 = 'Checked in';
      this.h2 = 'Please sign in';
      this.placeholder = 'Enter phone number';
      this.btnText = 'Next';
      this.successText = 'Congratulations';
    }
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
        font-size: 24px;
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


