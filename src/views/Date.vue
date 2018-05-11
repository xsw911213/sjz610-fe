<template>
  <div id="date">
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
        <div :class="`nav-btn ${activeNav === 2 ?'active' :''}`"  @click="activeNav = 2">
          <img src="../../static/icon/date-icon.png" alt="">
          <span class="week">星期二</span>
          <span class="date">6月11日</span>
        </div>
      </div>
    </div>
    
    <ul class="detail">
      <li v-for="(item,index) in detail[activeNav]" :key="index">
        <p class="time">时间 / <span :class="`${item.timeColor}`">{{item.time}}</span></p>
        <div class="info">
          <p class="title">{{item.title}}</p>
          <p class="text" v-html="item.text"></p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return{
      activeNav : 0,
      detail:[
        [
          {
            time:'14：00-16：00',
            timeColor:'orange',
            title:'2018中国（石家庄）“互联网+旅游”特色小镇峰会',
            text:'石家庄市鹿泉区国山宾馆'
          },
          {
            time:'19：50',
            timeColor:'orange',
            title:'第二届石家庄市旅游产业发展大会开幕式',
            text:'石家庄市鹿泉区西部长青景区水上乐园'
          },
          {
            time:'开幕式后',
            timeColor:'orange',
            title:'大型实景演出',
            text:'石家庄市鹿泉区西部长青景区水上乐园'
          },
          {
            time:'全天（10：00 开幕式）',
            timeColor:'blue',
            title:'第五届石家庄旅游交易会',
            text:'石家庄市鹿泉智慧城市广场'
          }
        ],
        [
          {
            time:'08：00-18：00',
            timeColor:'blue',
            title:'旅游项目线路观摩',
            text:'观摩路线：<br>（1）西部长青德明古镇；<br>（2）土门关驿道小镇；<br>（3）大年初一风情小镇；<br>（4）智慧城市广场；<br>（5）抱犊寨；<br>（6）龙泉古镇；<br>（7）中以农科小镇；<br>（8）杰明房车木屋营地；<br>（9）北国水世界·奥特莱斯；<br>（10）君乐宝奶业小镇；<br>（11）食草堂艺术园区；<br>（12）岸下石窑小镇；<br>（13）谷家峪美丽乡村；<br>（14）稻香村；<br>（15）花田原乡小镇；<br>（16）十里花廊；<br>（17）河北长城影视文创园；<br>（18）龙泉湖；<br>（19）紫藤西山庄园。'
          },
          {
            time:'全天',
            timeColor:'blue',
            title:'第五届石家庄旅游交易会',
            text:'石家庄市鹿泉智慧城市广场'
          }
        ],
        [
          {
            time:'8：50-9：50',
            timeColor:'blue',
            title:'《全民导游》颁奖典礼。',
            text:'全市全域旅游推进会地点。'
          },
          {
            time:'10：00—11：00',
            timeColor:'blue',
            title:'石家庄市创建全域旅游示范市工作推进会',
            text:'石家庄市鹿泉智慧城市广场'
          },
          // {
          //   time:'10：00—11：00',
          //   timeColor:'blue',
          //   title:'石家庄市创建全域旅游示范市工作推进会',
          //   text:'石家庄市鹿泉智慧城市广场'
          // },
          {
            time:'全天',
            timeColor:'blue',
            title:'第五届石家庄旅游交易会',
            text:'石家庄市鹿泉智慧城市广场'
          }
        ]
      ]
    }
  }
}
</script>

<style lang="scss">
//#2c3e50
#date{
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  min-height: 100%;
  padding-top: 45px;

  // background-color: #a7f0f1;
  background: -webkit-linear-gradient(#a7f0f1, #ffffff); /* Safari 5.1 - 6.0 */
  

  .nav-fixed{
    position: fixed;
    width: 100%;
    height: 18vw;
    top: 0;
    left: 0;
    z-index: 10;
  }
  .nav{
    display: flex;
    box-sizing: border-box;
    padding: 2vw;
    margin-top: 45px;
    justify-content: space-between;
    background-color: rgba(#a7f0f1,.9);
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
