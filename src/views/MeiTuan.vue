<template>
  <div id="meituan">
    <div class="meituan-nav">
      <a v-for="(item,index) in navs" :key="index" :href="item.href">
        {{item.name}}
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      navs:[
        {
          name:'吃',
          href:"http://meishi.meituan.com/i/"
        },
        {
          name:'住',
          href:'https://i.meituan.com/awp/h5/hotel/search/search.html'
        },
        {
          name:'行',
          href:'https://m.ctrip.com/html5/'
        },
        {
          name:'游',
          href:'https://m.ctrip.com/webapp/ticket/ticket'
        },
        {
          name:'娱',
          href:'http://i.meituan.com/shijiazhuang/all/?cid=2&stid_b=1&cateType=poi'
        },
        {
          name:'购',
          href:'http://i.meituan.com/s/shijiazhuang-%E8%B4%AD%E7%89%A9'
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
#meituan{
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
  .meituan-nav{
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    width: 70vw;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-80%);
    justify-content: space-around;

    a{
      display: block;
      width: 20vw;
      height: 20vw;
      line-height: 20vw;
      background-color: rgba(#fff,.8);
      border-radius: 5px;
      margin-top: 20px;
      text-align: center;
      font-size: 24px;
      text-decoration: none;
      color: #0d5794;
    }
  }
}
</style>