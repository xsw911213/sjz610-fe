<template>
  <div id="card-case">
    <div v-if="signed" class="head">
      <p class="status">名片夹</p>
    </div>
    <div v-else class="head">
      <p class="sigin-promot">请完成签到</p>
      <a class="go-sigin" @click="$router.push({path:'/signin'})">去签到</a>
    </div>

    <div class="list">
      <div class="line" v-for="(item,index) in table" :key="index">
        <p class="colum name">{{item.name}}</p>
        <a class="colum tel" :href="`tel:${item.tel}`">{{item.tel}}</a>
        <p class="colum part">{{item.part}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CardCase',
    data(){
      return {
        signed: false,
        table:[]
      }
    },
    mounted(){
      let _this = this;
      let localData = JSON.parse(localStorage.getItem('localData'));
      // console.log(localData);
      if(localData && localData.signined){
      //if(true){
        _this.signed = true;

        _this.axios({
          method: 'get',
          url: '/persondata',
          // params:{tel:localData.tel},
          baseURL: _this.host.baseUrl
          //baseURL:'http://10.168.34.43:3008/api'
        }).then((res)=>{
          let data = res.data.data;
          console.log(data);
          function sortSrt(a,b)
          {
            return a.index - b.index
          }
          _this.table = data.sort(sortSrt);
          console.log(_this.table)
          // _this.nickname = data.name;
          // sessionStorage.setItem('remark', JSON.stringify(data.remark));
        })
      }
    }
  }
</script>
<style lang="scss">
  #card-case{
    position: absolute;
    width: 100%;
    min-height: 100%;
    background-color: #fff;

    .head{
      position: relative;
      width: 100vw;
      height: 50vw;
      box-sizing: border-box;
      padding: 30px;
      background-image: url('../assets/ndividual-center-head-bg.jpg');
      background-size: 100% 100%;

      .nickname{
        margin-top: 20px;
        font-size: 40px;
        color: #3e3e3e;
        text-align: center;
      }

      .status{
        margin-top: 30px;
        font-size: 40px;
        color: #fff;
        text-align: center;
      }

      .sigin-promot{
        position: relative;
        margin-top: 30px;
        font-size: 35px;
        text-align: center;
        color: #3e3e3e;
      }

      .go-sigin{
        position: relative;
        display: inline-block;
        padding: 10px 20px;
        background-color: #fff;
        color: #459cf4;
        font-size: 20px;
        border-radius: 5px;
        margin-left: 50%;
        margin-top: 25px;
        transform: translateX(-50%);
      }
    }

    .list{
      position: relative;
      width: 100vw;
      height: 100vw;
      margin-top: 40px;
      overflow: scroll;
      .line{
        display: flex;
        justify-content: space-around;
        width: 95vw;
        line-height: 30px;
        height: 30px;
        margin-left: 2.5vw;
        margin-top: 5px;
        border-bottom: solid 1px rgb(204, 204, 204);

        .colum{
          font-size: 14px;

          &.name{
            width: 15vw;
            text-align: center;
          }
          &.part{
            width: 50vw;
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          &.tel{
            width: 30vw;
            text-align: center;
            text-decoration: none;
          }
        }
      }
      
    }
  }
</style>
