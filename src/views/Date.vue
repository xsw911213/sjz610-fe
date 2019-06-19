<template>
  <div id="date">
    <div class="nav-fixed"> 
      <div class="nav">
        <div :class="`nav-btn ${activeNav === 0 ?'active' :''}`" @click="activeNav = 0">
          <img src="../../static/icon/date-icon.png" alt="">
          <span class="week">星期四</span>
          <span class="date">6月27日</span>
        </div>
        <div :class="`nav-btn ${activeNav === 1 ?'active' :''}`" @click="activeNav = 1">
          <img src="../../static/icon/date-icon.png" alt="">
          <span class="week">星期五</span>
          <span class="date">6月28日</span>
        </div>
      </div>
    </div>
    
    <ul class="detail">
      <li v-for="(item,index) in detail[activeNav]" :key="index">
        <p class="time"><span :class="`${item.timeColor}`">{{item.time}}</span></p>
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
  data() {
    return {
      activeNav: 0,
      detail: [
        [
          {
            time: "8:00—12:00",
            timeColor: "orange",
            title: "嘉宾报道",
            text:"各接待酒店"
          },
          {
            time: "9:00",
            timeColor: "orange",
            title: "石家庄文化旅游商品展销会",
            text: "综合文化活动中心一楼大厅"
          },
          {
            time: "9:30",
            timeColor: "orange",
            title: "石家庄旅游招商项目发布暨签约仪式",
            text: "综合文化活动中心"
          },
          {
            time: "9:30",
            timeColor: "orange",
            title: "灵寿风光摄影大赛获奖作品展览及颁奖仪式",
            text: "综合文化活动中心会议室"
          },
          {
            time: "14:30",
            timeColor: "blue",
            title: "生态新灵寿·休闲后花园”2019中国（灵寿）旅游经济发展高峰论坛",
            text: "综合文化活动中心会议室"
          },
          {
            time: "17:30",
            timeColor: "blue",
            title: "市领导会见重要嘉宾及外宾",
            text: "灵寿县悦城大酒店"
          },
          {
            time: "18:00",
            timeColor: "blue",
            title: "推介餐叙会",
            text: "灵寿县悦城大酒店"
          },
          {
            time: "19:30",
            timeColor: "blue",
            title: "第四届石家庄市旅游产业发展大会开幕式",
            text: "综合文化活动中心演艺厅"
          },
          {
            time: "20:00",
            timeColor: "blue",
            title: "大型演艺活动",
            text: "综合文化活动中心演艺厅"
          },
          {
            time: "21:30",
            timeColor: "blue",
            title: "游览灵寿松阳河新区夜景灯光秀、水上灯光秀，看音乐喷泉、室外演艺活动“中山雄风”",
            text: "松阳河新区"
          }
        ],
        [
          {
            time: "8:00—16:30",
            timeColor: "orange",
            title: "旅游项目观摩",
            text: "一城、两带、三区"
          },
          {
            time: "17:00",
            timeColor: "blue",
            title: "石家庄市承办第四届河北省旅游产业发展大会“冲刺100天”誓师动员大会",
            text: "锦绣大明川休闲度假康养小镇"
          }
        ]
      ]
    };
  },
  methods: {
    changeABCD(index) {
      // console.log(this.abcd[index])
      // console.log(this.detail[2])
      // this.detail[2][0] = this.abcd[index];
      this.detail[2].splice(0,1,this.abcd[index])
    }
  },
  mounted() {
    this.changeABCD(0);
  }
};
</script>

<style lang="scss">
//#2c3e50
#date {
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

  .nav-fixed {
    position: fixed;
    box-sizing: border-box;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 10;
    //background-color: rgba(#a7f0f1,.9);
    // background-color: #77c1ff;

    .nav {
      display: flex;

      padding: 2vw;
      //margin-top: 45px;
      justify-content: space-evenly;
      // background-color: rgba(#a7f0f1,.9);
      //background-color: transparent;

      .nav-btn {
        display: inline-block;
        width: 20vw;
        // height: 10vw;
        padding: 3px 0;
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 2px 3px 5px #888888;

        &.active {
          background-color: #3e94da;
          color:rgb(255, 255, 255);
        }

        &::before {
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

        img {
          //display: inline-block;
          display: none;
          position: absolute;
          width: 8vw;
          height: 8vw;
          top: 1.5vw;
          left: 1.5vw;
        }

        .week {
          display: inline-block;
          //position: absolute;
          width: 20vw;
          height: 17px;
          text-align: center;
          // top: 1vw;
          // left: 15.5vw;
          font-size: 15px;
        }
        .date {
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

  .detail {
    position: relative;
    box-sizing: border-box;
    padding: 10px;
    margin-top: calc(20px + 14vw);
    // background: -webkit-linear-gradient(#a7f0f1, #ffffff); /* Safari 5.1 - 6.0 */

    .abcd-nav{
      display: flex;
      justify-content: space-around;
      margin-bottom: 10px;
      a{
        display: inline-block;
        color: #414bd4;
        // background-color: #fff;
        // padding: 5px;
        // border-radius: 3px;
      }
    }

    li {
      position: relative;
      margin-bottom: 15px;

      .time {
        font-size: 18px;
        border-bottom: solid 2px #a9dbdd;
        padding: 5px;

        .blue {
          color: #42a0d5;
        }

        .orange {
          color: #c7a011;
        }
      }

      .info {
        box-sizing: border-box;
        position: relative;
        padding: 15px 10px;
        background-color: #fff;
        margin-top: 15px;
        border-radius: 5px;
        box-shadow: 2px 3px 5px #888888;

        .title {
          color: #242323;
          font-size: 16px;
        }

        .text {
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
