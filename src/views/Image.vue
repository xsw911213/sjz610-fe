<template>
  <div id="image">
    <img v-if="img" :src="img" alt="">
  </div>
  
</template>
<script>
export default {
  name:'index',
  data() {
    return{
      img: ''
    }
  },
  methods: {
    getImg (){
      let _this = this

      _this.axios({
        method: 'get',
        url: '/' + _this.$route.params.module,
        baseURL: _this.host.baseUrl
        //baseURL:'http://10.168.34.43:3008/api'
      }).then((res)=>{
        console.log(res)
        _this.img = res.data.data.imgurl
      })
    }
  },
  created (){
    this.getImg()
  }
}
</script>

<style lang="scss">
#image{
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
}
</style>
