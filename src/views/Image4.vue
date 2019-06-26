<template>
  <div id="image4">
    <img v-if="img" :src="img" alt="">
    <a class="back-btn" @click="$router.back(-1)"></a>
    <div class="btns">
      <a v-for="(item,index) in btns" :key="index" @click="checkBtn(item)" class="btn" :class="btnFocus === index ? 'focus' : ''">
        {{item.text}}
        <img style="display:none" :src="item.img" alt="">
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name:'image4',
  data() {
    return{
      img: 'http://518img.blu-rayvision.com/luxian-a.jpg',
      btnFocus:0,
      btns: [
        {
          text:'观摩路线A',
          img:'http://518img.blu-rayvision.com/luxian-a.jpg'
        },
        {
          text:'观摩路线B',
          img:'http://518img.blu-rayvision.com/luxian-b.jpg'
        },
        {
          text:'观摩路线C',
          img:'http://518img.blu-rayvision.com/luxian-c.jpg'
        },
        {
          text:'观摩路线D',
          img:'http://518img.blu-rayvision.com/luxian-d.jpg'
        }
      ]
    }
  },
  methods: {
    checkBtn(item){
      this.btnFocus = this.btns.indexOf(item)
      this.img = item.img
    }
  },
  created (){
  }
}
</script>

<style lang="scss">
#image4{
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
  img {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }

  .btns{
    display: flex;
    position: absolute;
    width: 100%;
    top: 11vw;;
    flex-wrap: nowrap;
    justify-content: space-evenly;

    .btn{
      display: block;
      width: 23.73vw;
      height: 11.86vw;
      font-size: 13px;
      line-height: 11.86vw;
      text-align: center;
      color: #fff;
      font-weight: 600;
      background-image: url("../assets/btn-bg_03.png");
      background-size: 100% 100%;
      &.focus{
        color: #1e3f1d;
      }
    }
  }
}
</style>
