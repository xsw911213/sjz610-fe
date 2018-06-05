<template>
  <div id="pdate">
    <div class="nav-fixed"> 
      <div class="nav">
        <div :class="`nav-btn ${activeNav === 0 ?'active' :''}`" @click="activeNav = 0">
          <img src="../../static/icon/date-icon.png" alt="">
          <span class="week">星期日</span>
          <span class="date">6月9日</span>
        </div>
        <div :class="`nav-btn ${activeNav === 1 ?'active' :''}`"  @click="activeNav = 1">
          <img src="../../static/icon/date-icon.png" alt="">
          <span class="week">星期一</span>
          <span class="date">6月10日</span>
        </div>
        <!-- <div :class="`nav-btn ${activeNav === 2 ?'active' :''}`"  @click="activeNav = 2">
          <img src="../../static/icon/date-icon.png" alt="">
          <span class="week">星期二</span>
          <span class="date">6月11日</span>
        </div> -->
      </div>
    </div>
    
    <ul class="detail">
      <li v-for="(item,index) in detail[activeNav]" :key="index">
        <p class="time">时间 / <span :class="`${item.timeColor}`">{{item.time}}</span></p>
        <div class="info">
          <p class="title">{{item.title}}</p>
          <!-- <p class="text" v-html="item.text"></p> -->
        </div>
      </li>
    </ul>
    线路{{linetype}}
  </div>
</template>
<script>
export default {
  data(){
    return{
      activeNav : 0,
      detail:[[],[],[]],
      linetype:'a',
    }
  },
  mounted(){
    let remark = JSON.parse(sessionStorage.getItem('remark'));
    console.log(remark)
    let arr1 = remark.split(';');
    console.log(arr1)
    this.linetype = arr1[1].split('#')[1]
    arr1[1] = arr1[1].split('#')[0]
    arr1.forEach((element,index) => {
      if(element){
        let arr = element.split(',');
        let obj = {
          title:arr[0],
          time:arr[1],
          timeColor:'blue',
        }
        if(obj.time.indexOf('6月9') >= 0){
          this.detail[0].push(obj)
        }else if(obj.time.indexOf('6月10') >= 0){
          this.detail[1].push(obj)
        }else if(obj.time.indexOf('6月11') >= 0){
          this.detail[2].push(obj)
        }
        // console.log(this.detail)
      }
    });
  }
}
</script>

<style lang="scss">
//#2c3e50
#pdate{
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  min-height: 100%;
  padding-top: 45px;

  // background-color: #a7f0f1;
  background: -webkit-linear-gradient(#a7f0f1, #ffffff); /* Safari 5.1 - 6.0 */
  

  .nav-fixed{
    position: fixed;
    box-sizing: border-box;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 10;
    //background-color: rgba(#a7f0f1,.9);
    background-color: #a7f0f1;

    .nav{
      display: flex;
      padding: 2vw;
      margin-top: 45px;
      justify-content: space-around;
      // background-color: rgba(#a7f0f1,.9);
      //background-color: transparent;

      .nav-btn{
        display: inline-block;
        width: 30vw;
        height: 14vw;
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 2px 3px 5px #888888;

        &.active{
          background-color: #2fbcd6;
        }

        &::before{
          content: "";
          display: inline-block;
          position: absolute;
          width: 2px;
          height: 11vw;
          top: 1.5vw;
          left: 13.5vw;
          background-color: #dde7f2;
        }

        img{
          display: inline-block;
          position: absolute;
          width: 11vw;
          height: 11vw;
          top: 1.5vw;
          left: 1.5vw;
        }

        .week{
          display: inline-block;
          position: absolute;
          top: 3vw;
          left: 15.5vw;
          font-size: 15px;
        }
        .date{
          display: inline-block;
          position: absolute;
          top: calc(4vw + 15px);
          font-size: 14px;
          left: 15.5vw;
        }
      }
    }
  }
  

  .detail{
    position: relative;
    box-sizing: border-box;
    padding: 10px;
    margin-top: calc(20px + 14vw);
    // background: -webkit-linear-gradient(#a7f0f1, #ffffff); /* Safari 5.1 - 6.0 */

    li{
      position: relative;
      margin-bottom: 15px;

      .time{
        font-size: 18px;
        border-bottom: solid 2px #a9dbdd;
        padding: 5px;

        .blue{
          color: #42a0d5;
        }

        .orange{
          color: #e5c34d;
        }
      }

      .info{
        box-sizing: border-box;
        position: relative;
        padding: 15px 10px;
        background-color: #fff;
        margin-top: 15px;
        border-radius: 5px;
        box-shadow: 2px 3px 5px #888888;

        .title{
          color: #242323;
          font-size: 16px;
        }

        .text{
          color: #3d3c3c;
          font-size: 14px;
          margin-top: 15px;
          line-height: 1.5;
        }
      }
    }
  }
}
</style>
