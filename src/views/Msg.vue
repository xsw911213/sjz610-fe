<template>
  <div id="msg">
    <img @click="e" class="head" src="../assets/msg.jpg" alt="">
    <div class="form">
      <input v-model="title" type="text" placeholder="请输入标题(必填)">
      <textarea v-model="msg" placeholder="内容不少于20字，请尽量叙述清晰，简明扼要。"></textarea>
      <p><span>{{msg.length}}</span>/1000<span v-if="msg.length < 20" class="gray">(还差{{20 - msg.length}}字)</span></p>
      <a :class="`submit ${submitDisable ? 'disable' :''}`" @click="submit">提交留言</a>
    </div>
  </div>
</template>

<script>
export default {
  data (){
    return {
      title:'',
      msg:'',
    }
  },
  computed:{
    submitDisable(){
      if(this.title.length > 0 && this.msg.length >= 20){
        return false;
      }else{
        return true;
      }
    },
  },
  methods:{
    e(e){
      e.preventDefault();
    },
    submit(){
 
      if(!this.submitDisable){
        this.axios({
          method: 'post',
          url: '/msg',
          data:{
            title: this.title,
            msg: this.msg
          },
          baseURL: this.host.baseUrl
          //baseURL:'http://10.168.34.43:3008/api'
        }).then((res)=>{
          console.log(res)
          //  this.livingMsg = res.data.data;
        })
      }else{
        console.log(111)
      }
    }
  },
  mounted(){
    this.title = '';
    this.msg = '';
  }
  
}
</script>

<style lang="scss">
  #msg{
    position: absolute;
    width: 100%;
    min-height: 100%;
    background-color: #fff;

    .head{
      position: relative;
      width: 100%;
    }
    .form{
      position: relative;
      box-sizing: border-box;
      padding: 20px;

      input{
        display: block;
        position: relative;
        height: 40px;
        width: 100%;
        font-size: 23px;
        border: none;
        border-bottom: solid 1px rgb(238, 238, 238);;
      }

      textarea{
        display: block;
        width: 100%;
        font-size: 16px;
        box-sizing: border-box;
        padding: 5px;
        line-height: 1.5;
        margin-top: 20px;
        height: 120px;
        border: solid 1px rgb(238, 238, 238);
        resize:none;
      }

      p{
        text-align: right;
        span{
          color: #fe0000;
          &.gray{
            color: #2c3e50;
          }
        }
      }

      .submit{
        display: block;
        position: relative;
        width: 280px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        margin-left: 50%;
        margin-top: 30px;
        font-size: 18px;
        transform: translateX(-50%);
        background-color: #439ff5;
        color: #fff;

        &.disable{
          background-color: #ccc;
        }
      }
    }
  }
</style>
