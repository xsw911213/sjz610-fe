<template>
  <div id="living">
    <div class="b-div">
      <a v-for="(item,index) in btns" class="btn" :href="item.href">
        {{item.text}}
      </a>
    </div>
    
  </div>
</template>
<script>
export default {
  data(){
    return{
      btns:[
        {
          href:'http://www.baidu.com',
          text:'视频直播间'
        },
        {
          href:'http://www.baidu.com',
          text:'视频直播间'
        },
        {
          href:'http://www.baidu.com',
          text:'视频直播间'
        }
      ]
    }
  },
  methods:{
    
  },
  mounted(){
  }
}
</script>
<style lang="scss">
#living{
  position: absolute;
  width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  // background-color: #fff;
  background-image: url("../assets/index-bg.jpg");
  background-size: 100% auto;
  background-position: top;
  background-repeat: no-repeat;
  background-color: #77c1ff;

  .b-div{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }

  .btn{
    display: block;
    position: relative;
    width: 70vw;
    height: 25vw;
    margin: 0 auto;
    line-height: 25vw;
    background-color: rgba(#fff,.8);
    text-align: center;
    text-decoration: none;
    border-radius: 3vw;
    margin-bottom: 20px;
    color: #117cd3;
  }
}
</style>