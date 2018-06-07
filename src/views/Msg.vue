<template>
  <div id="msg">
    <img @click="e" class="head" src="../assets/msg.jpg" alt="">
    <p class="model-name">{{modelName}}</p>
    <div class="form">
      <input v-model="title" type="text" :placeholder="titlePlaceholder">
      <textarea v-model="msg" :placeholder="textareaPlaceholder"></textarea>
      <p><span>{{msg.length}}</span>/1000<span v-if="msg.length < 20" class="gray">{{spanText}}</span></p>
      <a :class="`submit ${submitDisable ? 'disable' :''}`" @click="submit">{{btnText}}</a>
    </div>
  </div>
</template>

<script>
export default {
  data (){
    return {
      modelName:'留言板',
      titlePlaceholder:'请输入标题(必填)',
      textareaPlaceholder:'内容不少于20字，请尽量叙述清晰，简明扼要。',
      btnText:'提交留言',
      title:'',
      msg:'',
      english:false
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
    spanText(){
      let text = '(还差'+(20 - this.msg.length)+'字)';
      if(this.english){
        text = '(still worse '+(20 - this.msg.length)+' letters)';
      }
      return text
    }
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

    if(this.$route.query.lang === 'en'){
      this.english = true;
      this.modelName = 'Message board';
      this.titlePlaceholder = 'Please enter a title (required)';
      this.textareaPlaceholder = 'The content is not less than 20 words. Please try to make it clear and concise.';
      this.btnText = 'Submit';
      
    }
  }
  
}
</script>

<style lang="scss">
  #msg{
    position: absolute;
    width: 100%;
    min-height: 100%;
    background-color: #fff;

    .model-name{
      position: absolute;
      font-size: 40px;
      font-weight: 600;
      top: 30vw;
      right: 8vw;
      color: #fff;
    }

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
