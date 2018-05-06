<template>
  <div id="msg">
    <img @click="e" class="head" src="../assets/msg.jpg" alt="">
    <div class="form">
      <input v-model="title" type="text" placeholder="请输入标题">
      <textarea v-model="msg" placeholder="内容不少于20字，请尽量叙述清晰，简明扼要。"></textarea>
      <p><span>{{msg.length}}</span>/1000</p>
      <a :class="`submit ${submitDisable ? 'disable' :''}`">提交留言</a>
    </div>
  </div>
</template>

<script>
export default {
  data (){
    return {
      title:'挺好',
      msg:'',
    }
  },
  computed:{
    submitDisable(){
      if(this.title.length > 0 && this.msg.length > 20){
        return false;
      }else{
        return true;
      }
    },
  },
  methods:{
    e(e){
      e.preventDefault();
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
