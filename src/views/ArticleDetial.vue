<template>
  <section id="article-detial">
    <div v-if="article" class="article">
      <p class="article-title">{{article.title}}</p>
      <div class="article-html" v-html="article.richText"></div>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return{
      article: null
    }
  },
  methods:{
    init(){
      let _this = this

      _this.axios({
        method: 'get',
        url: '/' + _this.$route.params.module,
        baseURL: _this.host.baseUrl,
        params: {
          _id: this.$route.params.id
        },
        //baseURL:'http://10.168.34.43:3008/api'
      }).then((res)=>{
        _this.article = res.data.data[0]
        console.log(_this.article)
      })
    }
  },
  mounted(){
    this.init()
  }
}
</script>

<style lang="scss">
#article-detial{
  position: absolute;
  width: 100%;
  min-height: 100%;
  padding: 20px;
  box-sizing: border-box;
  // background-color: #fff;
  background-image: url("../assets/index-bg.jpg");
  background-size: 100% auto;
  background-position: top;
  background-repeat: no-repeat;
  background-color: #77c1ff;
  .article{
    position: relative;
    box-sizing: border-box;
    padding: 20px;
    background-color: rgba(#fff,.8);
    border-radius: 5px;
    &-title{
      text-align: center;
      font-size: 23px;
      font-weight: 600;
    }
    &-html{
      position: relative;
      margin-top: 30px;
    }
  }
}
</style>
