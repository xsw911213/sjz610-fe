<template>
  <div id="history">
    <p class="title">{{textData.title}}</p>
    <div v-for="(item,index) in textData.article" :key="index">
      <p class="text" v-if="item.type === 'text'">{{item.data}}</p>
      <img class="img" v-if="item.type === 'img'" :src="item.data">
      <!-- <div class="info" v-if="item.type === 'info'">
        <p class="title">{{item.title}}</p>
        <p class="info-text" v-for="(ite,inde) in item.data" :key="inde">{{ite}}</p>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      textData:{}
    }
  },
  mounted(){
    let id = this.$route.query.history;
    // let dataPath = 'static/dhdb/' + id

    this.textData = require('./history/'+id);

    window.scrollTo(0,0);
  }
}
</script>
<style lang="scss">
#history{
  box-sizing: border-box;
  padding: 10px;
  background-color: #fff;
  .title{
    position: relative;
    font-size: 18px;
    font-weight: 900;
    text-align: center;
    margin: 30px 0;  
  }

  .text{
    position: relative;
    font-size: 14px;
    line-height: 20px;
    text-indent: 2em;
    margin: 10px 0; 
  }

  .img{
    width: 100%;
  }
}
</style>

