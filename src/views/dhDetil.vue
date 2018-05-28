<template>
  <section id="dh-detil">
    <p class="area-name">{{textData.name}}</p>
    <div v-for="(item,index) in textData.data" :key="index">
      <p class="text" v-if="item.type === 'text'">{{item.data}}</p>
      <img class="img" v-if="item.type === 'img'" :src="item.data">
      <div class="info" v-if="item.type === 'info'">
        <p class="title">{{item.title}}</p>
        <p class="info-text" v-for="(ite,inde) in item.data" :key="inde">{{ite}}</p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return{
      textData:{}
    }
  },
  mounted(){
    let id = this.$route.query.id;
    // let dataPath = 'static/dhdb/' + id

    this.textData = require('./dhdb/'+id);
    // console.log(data)

    //import data from dataPath
    // console.log(data);

    // this.axios.get().
    // then(function (response) {
    //   let datastr = response.data;
    //   console.log(datastr)
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  }
}
</script>

<style lang="scss">
#dh-detil{
  box-sizing: border-box;
  padding: 20px;

  .area-name{
    position: relative;
    text-align: center;
    font-size: 24px;
    font-weight: 900;
    margin: 10px 0 20px 0;
  }

  .text{
    font-size: 14px;
    line-height: 1.5;
  }

  .img{
    position: relative;
    width: 100%;
    margin: 10px 0;
  }

  .info{
    position: relative;
    margin-top: 10px;
    
    .title{
      color: #c00000;
      font-size: 16px;
      font-weight: 900;
      margin-bottom: 10px;
    }

    &-text{
      font-size: 14px;
      line-height: 1.5;
    }
  }
}
</style>
