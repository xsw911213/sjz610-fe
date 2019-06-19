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
        <div :class="`nav-btn ${activeNav === 2 ?'active' :''}`"  @click="activeNav = 2">
          <img src="../../static/icon/date-icon.png" alt="">
          <span class="week">星期二</span>
          <span class="date">6月11日</span>
        </div>
      </div>
    </div>
    <div class="detail">
      <p>{{detail[activeNav]}}</p>
    </div>
    
  </div>
</template>
<script>
export default {
  data(){
    return{
      activeNav : 0,
      detail: [
        '西部长青璞祯酒店→西部长青德明古镇→新杏苑路→山前大道→动物园（路过）→抱犊寨→山前大道→鹿泉智慧城市中心→山前大道→西北外环→大年初一风情小镇→西北外环→环抱北路→花田原乡小镇（路过）→岸下石窑小镇（路过）→环抱西路→谷家峪美丽乡村（路过）→环抱南路→土门关驿道小镇→环抱南路→山前大道→河北国山宾馆午餐→北斗路→花西街→望佛路→十里花廊（路过）→石柏大街→京赞线→食草堂艺术园区→京赞线→金凤路→君乐宝奶业小镇→金凤路→青银辅路→石铜路→碧水街→青龙山大道→北国奥特莱斯·水世界→碧水街→旅游路→杰明房车木屋营地→旅游路→羊角庄路→衡井线→山前大道→紫藤西山庄园（路过）→中以农科小镇→山前大道→南二环西延→龙泉寺（路过）→西部长青璞祯酒店',
        '国源朗怡酒店→京赞线→槐安西路→龙泉古镇（路过）→山前大道→龙泉湖西门（路过）→河北长城影视文创园（路过）→南二环西延→龙泉湖南门（路过）→京赞线→食草堂艺术园区→京赞线→金凤路→君乐宝奶业小镇→金凤路→青银辅路→石铜路→碧水街→青龙山大道→北国奥特莱斯·水世界→碧水街→旅游路→杰明房车木屋营地→山前大道→南二环西延→龙泉寺（路过）→西部长青璞祯酒店午餐→西部长青柳仙谷停车场→西部长青德明古镇→新杏苑路→山前大道→动物园（路过）→抱犊寨→山前大道→鹿泉智慧城市中心→山前大道→西北外环→大年初一风情小镇→西北外环→环抱北路→花田原乡小镇（路过）→岸下石窑小镇（路过）→环抱西路→谷家峪美丽乡村（路过）→环抱南路→土门关驿道小镇→环抱南路→山前大道→北斗路→花西街→望佛路→十里花廊（路过）→石柏大街→京赞线→国源朗怡酒店',
        '国源朗怡酒店→京赞线→食草堂艺术园区（路过）→金凤路→君乐宝奶业小镇→金凤路→青银辅路→石铜路→碧水街→青龙山大道→北国奥特莱斯·水世界→碧水街→旅游路→杰明房车木屋营地→旅游路→羊角庄路→衡井线→山前大道→河北长城影视文创园（路过）→龙泉湖西门（路过）→龙泉古镇（路过）→众诚假日酒店午餐→山前大道→抱犊寨→山前大道→鹿泉智慧城市中心→山前大道→环抱北路→花田原乡小镇→环抱北路→岸下石窑小镇（路过）→环抱西路→谷家峪美丽乡村（路过）→环抱南路→→土门关驿道小镇→环抱南路→山前大道→动物园（路过）→新杏苑路→西部长青柳仙谷停车场→西部长青德明古镇→南二环西延→龙泉寺（路过）→龙泉湖南门（路过）→京赞线→食草堂艺术园区→京赞线→国源朗怡酒店'
      ],
    }
  },
  mounted(){
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
  // padding-top: 45px;

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
      // margin-top: 45px;
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
