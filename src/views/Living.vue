<template>
  <div id="living">
    <img class="head" src="../assets/living-head.jpg" @click="e">
    <div class="msg">
      <div class="linear-gradient-bg"></div>
      <ul class="text">
        <li class="item" v-for="(item,index) in livingMsg" :key="index">
          <p class="item-time">{{item.time}}</p>
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
      livingMsg:[
        {
          time:'2018-06-10 14:00',
          img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525600667966&di=cc5b7a40c04360c0cd89aaac8754ff59&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D0d3aeeb8c01349546a13e0243f36f734%2Fc83d70cf3bc79f3dab39b209b1a1cd11728b292a.jpg',
          text:'河北省省常委石家庄市委书记宣布首届,河北省省常委石家庄市委书记宣布首届'
        },
        {
          time:'2018-06-10 14:00',
          img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525600667966&di=cc5b7a40c04360c0cd89aaac8754ff59&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D0d3aeeb8c01349546a13e0243f36f734%2Fc83d70cf3bc79f3dab39b209b1a1cd11728b292a.jpg',
          text:''
        },
        {
          time:'2018-06-10 14:00',
          img:'',
          text:'河北省省常委石家庄市委书记宣布首届,河北省省常委石家庄市委书记宣布首届'
        },
      ]
    }
  },
  methods:{
    e(e){
      e.preventDefault();
    }
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

