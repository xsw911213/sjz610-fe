<template>
  <div id="date">
    <div class="nav-fixed"> 
      <div class="nav">
        <div :class="`nav-btn ${activeNav === 0 ?'active' :''}`" @click="activeNav = 0">
          <img src="../../static/icon/date-icon.png" alt="">
          <span class="week">星期五</span>
          <span class="date">6月8日</span>
        </div>
        <div :class="`nav-btn ${activeNav === 1 ?'active' :''}`" @click="activeNav = 1">
          <img src="../../static/icon/date-icon.png" alt="">
          <span class="week">星期六</span>
          <span class="date">6月9日</span>
        </div>
        <div :class="`nav-btn ${activeNav === 2 ?'active' :''}`"  @click="activeNav = 2">
          <img src="../../static/icon/date-icon.png" alt="">
          <span class="week">星期日</span>
          <span class="date">6月10日</span>
        </div>
        <div :class="`nav-btn ${activeNav === 3 ?'active' :''}`"  @click="activeNav = 3">
          <img src="../../static/icon/date-icon.png" alt="">
          <span class="week">星期一</span>
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
      activeNav : 1,
      detail:[
        [
          {
            time:'全天',
            timeColor:'orange',
            title:'报到',
            text:'国源朗怡酒店、众诚假日酒店、翠屏山迎宾馆、西部长青·璞祯酒店、敬业酒店、建研会议服务有限公司、御景园、国山宾馆、鹿泉宾馆、中茂海悦酒店'
          }
        ],
        [
          {
            time:'9点30分',
            timeColor:'orange',
            title:'第五届石家庄旅游交易会启动仪式及巡馆',
            text:'鹿泉智慧城市中心'
          },
          {
            time:'10点30分',
            timeColor:'orange',
            title:'《全民导游》颁奖典礼',
            text:'鹿泉智慧城市中心'
          },
          {
            time:'10点50分',
            timeColor:'orange',
            title:'第五届石家庄旅游交易会重点项目发布暨签约仪式',
            text:'鹿泉智慧城市中心二楼荣华厅'
          },
          {
            time:'14点30分',
            timeColor:'blue',
            title:'2018中国·石家庄“互联网+旅游”特色小镇峰会',
            text:'鹿泉区国山宾馆'
          },
          {
            time:'17点30分',
            timeColor:'blue',
            title:'市领导会见重要嘉宾及外宾',
            text:'西部长青·璞祯酒店三楼行云流水多功能厅'
          },
          {
            time:'18点30分',
            timeColor:'blue',
            title:'推介餐叙会',
            text:'西部长青·璞祯酒店三楼高山流水宴会厅'
          },
          {
            time:'20点',
            timeColor:'blue',
            title:'第二届石家庄市旅游产业发展大会开幕式',
            text:'西部长青水上乐园'
          },
          {
            time:'20点40分',
            timeColor:'blue',
            title:'大型实景剧《遇见·鹿泉》演出',
            text:'西部长青水上乐园'
          }
        ],
        [
          {
            time:'08：00-18：00',
            timeColor:'blue',
            title:'旅游项目观摩线路A：',
            text:'西部长青璞祯酒店<br>西部长青德明古镇<br>新杏苑路<br>山前大道<br>动物园（路过）<br>抱犊寨<br>山前大道<br>鹿泉智慧城市中心<br>山前大道<br>西北外环<br>大年初一风情小镇<br>西北外环<br>环抱北路<br>花田原乡小镇（路过）<br>岸下石窑小镇（路过）<br>环抱西路<br>谷家峪美丽乡村（路过）<br>环抱南路<br>土门关驿道小镇<br>环抱南路<br>山前大道<br>河北国山宾馆午餐<br>北斗路<br>花西街<br>望佛路<br>十里花廊（路过）<br>石柏大街<br>京赞线<br>食草堂艺术园区<br>京赞线<br>金凤路<br>君乐宝奶业小镇<br>金凤路<br>青银辅路<br>石铜路<br>碧水街<br>青龙山大道<br>北国奥特莱斯·水世界<br>碧水街<br>旅游路<br>杰明房车木屋营地<br>旅游路<br>羊角庄路<br>衡井线<br>山前大道<br>紫藤西山庄园（路过）<br>中以农科小镇<br>山前大道<br>南二环西延<br>龙泉寺（路过）<br>西部长青璞祯酒店'
          },
          {
            time:'08：00-18：00',
            timeColor:'blue',
            title:'旅游项目观摩线路B：',
            text:'翠屏山迎宾馆<br>御园路<br>京赞线<br>槐安西路<br>龙泉古镇（路过）<br>山前大道<br>龙泉湖西门（路过）<br>河北长城影视文创园（路过）<br>南二环西延<br>龙泉湖南门（路过）<br>京赞线<br>食草堂艺术园区<br>京赞线<br>金凤路<br>君乐宝奶业小镇<br>金凤路<br>青银辅路<br>石铜路<br>碧水街<br>青龙山大道<br>北国奥特莱斯·水世界<br>碧水街<br>旅游路<br>杰明房车木屋营地<br>旅游路<br>羊角庄路<br>衡井线<br>山前大道<br>紫藤西山庄园（路过）<br>中以农科小镇<br>山前大道<br>南二环西延<br>龙泉寺（路过）<br>西部长青璞祯酒店午餐<br>西部长青柳仙谷停车场<br>西部长青德明古镇<br>新杏苑路<br>山前大道<br>动物园（路过）<br>抱犊寨<br>山前大道<br>鹿泉智慧城市中心<br>山前大道<br>西北外环<br>大年初一风情小镇<br>西北外环<br>环抱北路<br>花田原乡小镇（路过）<br>岸下石窑小镇（路过）<br>环抱西路<br>谷家峪美丽乡村（路过）<br>环抱南路<br>土门关驿道小镇<br>环抱南路<br>山前大道<br>北斗路<br>花西街<br>望佛路<br>十里花廊（路过）<br>石柏大街<br>京赞线<br>御园路<br>翠屏山迎宾馆'
          },
          {
            time:'08：00-18：00',
            timeColor:'blue',
            title:'旅游项目观摩线路C：',
            text:'国源朗怡酒店<br>京赞线<br>食草堂艺术园区（路过）<br>金凤路<br>君乐宝奶业小镇<br>金凤路<br>青银辅路<br>石铜路<br>碧水街<br>青龙山大道<br>北国奥特莱斯·水世界<br>碧水街<br>旅游路<br>杰明房车木屋营地<br>旅游路<br>羊角庄路<br>衡井线<br>山前大道<br>紫藤西山庄园（路过）<br>中以农科小镇<br>山前大道<br>河北长城影视文创园（路过）<br>龙泉湖西门（路过）<br>龙泉古镇（路过）<br>众诚假日酒店午餐<br>山前大道<br>抱犊寨<br>山前大道<br>鹿泉智慧城市中心<br>山前大道<br>环抱北路<br>花田原乡小镇<br>环抱北路<br>岸下石窑小镇（路过）<br>环抱西路<br>谷家峪美丽乡村（路过）<br>环抱南路<br>土门关驿道小镇<br>环抱南路<br>山前大道<br>动物园（路过）<br>新杏苑路<br>西部长青柳仙谷停车场<br>西部长青德明古镇<br>南二环西延<br>龙泉寺（路过）<br>龙泉湖南门（路过）<br>京赞线<br>食草堂艺术园区<br>京赞线<br>国源朗怡酒店'
          },
          {
            time:'08：00-18：00',
            timeColor:'blue',
            title:'旅游项目观摩线路D：',
            text:'众诚假日酒店<br>山前大道<br>抱犊寨<br>山前大道<br>鹿泉智慧城市中心<br>山前大道<br>环抱北路<br>花田原乡小镇（路过）<br>岸下石窑小镇（路过）<br>环抱西路<br>谷家峪美丽乡村（路过）<br>环抱南路<br>土门关驿道小镇<br>环抱南路<br>山前大道<br>动物园（路过）<br>新杏苑路<br>西部长青德明古镇<br>南二环西延<br>龙泉寺（路过）<br>龙泉湖南门（路过）<br>京赞线<br>国源朗怡午餐<br>京赞线<br>食草堂艺术园区<br>京赞线<br>金凤路<br>君乐宝奶业小镇<br>金凤路<br>青银辅路<br>石铜路<br>碧水街<br>青龙山大道<br>北国奥特莱斯·水世界<br>碧水街<br>旅游路<br>杰明房车木屋营地<br>旅游路<br>羊角庄路<br>衡井线<br>山前大道<br>紫藤西山庄园（路过）<br>中以农科小镇<br>山前大道<br>河北长城影视文创园（路过）<br>龙泉湖西门（路过）<br>龙泉古镇<br>山前大道<br>众诚假日酒店'
          },
          // ,
          // {
          //   time:'全天',
          //   timeColor:'blue',
          //   title:'第五届石家庄旅游交易会',
          //   text:'石家庄市鹿泉智慧城市广场'
          // }
        ],
        [
          {
            time:'9点30分',
            timeColor:'orange',
            title:'石家庄市创建全域旅游示范区工作推进会',
            text:'鹿泉智慧城市中心二楼荣华厅'
          },
          {
            time:'14点30分',
            timeColor:'blue',
            title:'第二届庄里外休闲活动颁奖仪式',
            text:'鹿泉智慧城市中心'
          },
          // {
          //   time:'10：00—11：00',
          //   timeColor:'blue',
          //   title:'石家庄市创建全域旅游示范市工作推进会',
          //   text:'石家庄市鹿泉智慧城市广场'
          // },
          // {
          //   time:'全天',
          //   timeColor:'blue',
          //   title:'第五届石家庄旅游交易会',
          //   text:'鹿泉智慧城市中心'
          // }
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
  //padding-top: 45px;

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
      //margin-top: 45px;
      justify-content: space-between;
      // background-color: rgba(#a7f0f1,.9);
      //background-color: transparent;

      .nav-btn{
        display: inline-block;
        width: 20vw;
        // height: 10vw;
        padding: 3px 0;
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 2px 3px 5px #888888;

        &.active{
          background-color: #2fbcd6;
        }

        &::before{
          content: "";
          //display: inline-block;
          display: none;
          position: absolute;
          width: 2px;
          height: 11vw;
          top: 1.5vw;
          left: 13.5vw;
          background-color: #dde7f2;
        }

        img{
          //display: inline-block;
          display: none;
          position: absolute;
          width: 8vw;
          height: 8vw;
          top: 1.5vw;
          left: 1.5vw;
        }

        .week{
          display: inline-block;
          //position: absolute;
          width: 20vw;
          height: 17px;
          text-align: center;
          // top: 1vw;
          // left: 15.5vw;
          font-size: 15px;
        }
        .date{
          display: inline-block;
          // position: absolute;
          width: 20vw;
          height: 17px;
          text-align: center;
          // top: calc(1vw + 20px);
          font-size: 13px;
          // left: 15.5vw;
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
