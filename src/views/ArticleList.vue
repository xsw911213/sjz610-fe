<template>
  <section id="article-list">
    <ul class="article-list">
      <li v-for="(item,index) in articleList" class="article-list-item" :key="index">
        <a v-if="$route.params.module === 'news'" @click="toArticleDetial(item._id)" class="article-list-item-a news">
          <div class="article-list-item-a-img">
            <img :src="item.headImg" alt="">
          </div>
          <p class="article-list-item-a-title">{{item.title}}</p>
          <p class="article-list-item-a-intro">{{item.text}}</p>
        </a>
        <a v-else-if="$route.params.module === 'meetingnotice'" @click="toArticleDetial(item._id)" class="article-list-item-a meetingnotice">
          {{item.title}}
        </a>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  data(){
    return{
      articleList: []
    }
  },
  methods:{
    init(){
      let _this = this

      _this.axios({
        method: 'get',
        url: '/' + _this.$route.params.module,
        baseURL: _this.host.baseUrl
        //baseURL:'http://10.168.34.43:3008/api'
      }).then((res)=>{
        console.log(res)
        _this.articleList = res.data.data
      })
    },
    toArticleDetial(id){
      let _this = this
      this.$router.push({
        name:'articleDetial',
        params:{
          module:_this.$route.params.module,
          id:id
        }
      })
    }
  },
  mounted(){
    this.init()
  }
}
</script>

<style lang="scss">
#article-list{
  position: absolute;
  width: 100%;
  min-height: 100%;
  padding-top: 20px;
  box-sizing: border-box;
  // background-color: #fff;
  background-image: url("../assets/index-bg.jpg");
  background-size: 100% auto;
  background-position: top;
  background-repeat: no-repeat;
  background-color: #77c1ff;

  .article-list{
    position: relative;

    &-item{
      position: relative;
      width: 90vw;
      height: 15vw;
      margin: 0 auto;
      margin-bottom: 3vw;

      &-a{
        display: block;
        position: absolute;
        width: 90vw;
        height: 15vw;
        font-size: 18px;
        text-align: center;
        background-color: rgba(#fff,.8);
        border-radius: 5px;

        &.news{
          height: 28vw;
          line-height: 28vw;
          text-align: left;
        }
        &-img{
          display: inline-block;
          position: relative;
          width: 25vw;
          height: 25vw;
          margin-top: 1.5vw;
          margin-left: 1.5vw;
          background-color: rgba(158, 158, 158,.7);
              vertical-align: top;
          img{
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
         
        }
        &-title{
          position: absolute;
          width: 58vw;
          left: 30vw;
          top: 3vw;
          font-size: 18px;
          height: 18px;
          line-height: 18px;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
          color: #1a70b6;
        }

        &-intro{
          display: -webkit-box;
          position: absolute;
          width: 58vw;
          left: 30vw;
          top: 10vw;
          font-size: 14px;
          height: 42px;
          line-height: 14px;
          word-wrap: break-word;
          word-break: normal;
          color: #375772;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
