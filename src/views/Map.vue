<template>
  <div id="diymap">
    <iframe id="rmap" :src="iframeSrc"></iframe>
    <a class="back-btn" @click="$router.back(-1)"></a>
    <!-- <div class="select-map">
      <a @click="checkMap('qq')" :class="maptype === 'qq' ?'f':''">腾讯地图</a>
      <a @click="checkMap('bd')" :class="maptype === 'bd' ?'f':''">百度地图</a>
    </div> -->
    <a class="showotherplace" @click="addressListShow = true">所有会场地址</a>
    <div class="address-list" @click.self="addressListShow = false"  v-show="addressListShow">
      <a class="address-item" v-for="(item,index) in addressList" :key="index" @click="changeMap(item,index)">
        <div class="address-item-img">
          <img :src="item.img" alt="">
        </div>
        <p class="address-item-name">
          {{item.name}}
        </p>
        <p class="address-item-address">
          {{item.address}}
        </p>
      </a>
    </div>
    <!-- <a class="open-baidu-map-app" @click="openBaiduMapApp">在百度地图上打开</a> -->
  </div>
</template>
<script>
  export default {
    name:'map',
    data() {
      return {
        maptype:'qq',
        addressListShow:false,
        qqpoint:{
          // 腾讯
          // 中山宾馆
          zsbg:{
            lan:114.388810,
            lat:38.308870
          },
          // 尚客优快捷酒店
          sky:{
            lan:114.369051,
            lat:38.315705
          },
          // 驿家365
          yj365:{
            lan:114.377840,
            lat:38.316560
          },
          // 华洋宾馆
          hybg:{
            lan:114.316011,
            lat: 38.249432
          },
          // 悦城大酒店
          ycdjd:{
            lan:114.377785,
            lat:38.300007
          },
          // 综合文化活动中心
          zhwnhdzx:{
            lan:114.371840,
            lat: 38.303090
          },
          // 医学高等专科学校
          yxgdzkxx:{
            lan: 114.418184,
            lat: 38.261751
          }
        },
        bdpoint:{
          // 百度
          // 中山宾馆
          zsbg:{
            lan:114.395322,
            lat:38.314899
          },
          // 尚客优快捷酒店
          sky:{
            lan:114.375217,
            lat:38.322133
          },
          // 驿家365
          yj365:{
            lan:114.384187,
            lat:38.322236
          },
          // 华洋宾馆
          hybg:{
            lan:114.322877,
            lat: 38.255158
          },
          // 悦城大酒店
          ycdjd:{
            lan:114.393206,
            lat:38.32166
          },
          // 综合文化活动中心
          zhwnhdzx:{
            lan:114.380523,
            lat: 38.316932
          },
          // 医学高等专科学校
          yxgdzkxx:{
            lan: 114.42452,
            lat: 38.267735
          }
        },
        addressList:[
          {
            name:'中山宾馆',
            address:'灵寿县人民东路130号',
            location:'zsbg',
            img:'http://518img.blu-rayvision.com/%E4%B8%AD%E5%B1%B1%E5%AE%BE%E9%A6%86.jpg'
          },
          {
            name:'尚客优快捷酒店',
            address:'灵寿县北环东路25号',
            location:'sky',
            img:'http://518img.blu-rayvision.com/%E4%B8%87%E8%B1%AA%E5%BA%97%EF%BC%88%E5%B0%9A%E5%AE%A2%E4%BC%98%E5%BF%AB%E6%8D%B7%E9%85%92%E5%BA%97%EF%BC%89.jpg'
          },
          {
            name:'驿家365连锁酒店',
            address:'灵寿县北环路7号',
            location:'yj365',
            img:'http://518img.blu-rayvision.com/%E9%A9%BF%E5%8A%A0365%E8%BF%9E%E9%94%81%E9%85%92%E5%BA%97.jpg'
          },
          {
            name:'华洋宾馆',
            address:'鹿泉区黄壁庄镇京获路20号水电厂院内',
            location:'hybg',
            img:'http://518img.blu-rayvision.com/%E5%8D%8E%E6%B4%8B%E5%AE%BE%E9%A6%86.png'
          },
          {
            name:'悦城大酒店',
            address:'河北省石家庄市灵寿县灵寿镇第一中学北(城东街东)',
            location:'ycdjd',
            img:'http://518img.blu-rayvision.com/%E6%82%A6%E5%9F%8E%E5%A4%A7%E9%85%92%E5%BA%97-%283%29.jpg'
          },
          {
            name:'综合文化活动中心',
            address:'灵寿县古城路与城西街交汇处县委员会对过',
            location:'zhwnhdzx',
            img:'http://518img.blu-rayvision.com/%E7%BB%BC%E5%90%88%E4%B8%AD%E5%BF%83.jpg'
          },
          {
            name:'医学高等专科学校',
            address:'灵寿县同下村同新路1号',
            location:'yxgdzkxx',
            img:'http://518img.blu-rayvision.com/%E5%8C%BB%E7%A7%91%E9%AB%98%E7%AD%89%E4%B8%93%E7%A7%91%E5%AD%A6%E6%A0%A1.JPEG'
          }
        ],
        iframeSrc:'',
        addressIndex:0
      };
    },
    methods: {
      checkMap(mapType){
        this.maptype = mapType
        this.changeMap(this.addressList[this.addressIndex],this.addressIndex)
      },
      changeMap(address,index){
        console.log(address)
        this.addressIndex = index
        let location = this[`${this.maptype}point`][address.location]
        let src = `https://apis.map.qq.com/uri/v1/marker?marker=coord:${location.lat},${location.lan};title:${address.name};addr:${address.address}&referer=4JPBZ-5NMC3-SHN32-3J2TM-4RPLQ-R3FP4`
        this.iframeSrc = src
        this.addressListShow = false
      },
    },
    mounted() {
      // this.initBaiDuMap(this.point.zsbg);
      this.changeMap(this.addressList[this.addressIndex],this.addressIndex)
    }
  };
</script>

<style lang="scss">
  #diymap {
    position: absolute;
    width: 100%;
    min-height: 100%;
    top: 0;

    #rmap{
      position: absolute;
      width: 100%;
      min-height: 100%;
      top: 0;
      border:none;
    }
    .select-map{
      box-sizing: border-box;
      position: absolute;
      width: 100px;
      top: 100px;
      border-radius: 3px;
      background-color: rgba(#fff,.8);
      a{
        display: block;
        box-sizing: border-box;
        width: 100px;
        padding: 10px;
        border-radius: 3px;
        text-align: center;
        &.f{
          background-color: rgba(45, 57, 65, 0.8);
          color: #fff;
        }
      }
    }

    .open-baidu-map-app{
      position: absolute;
      box-sizing: border-box;
      width: 100%;
      bottom: 0;
      padding: 10px;
      border-radius: 3px;
      text-align: center;
      background-color: rgba(45, 57, 65,.8);
      color: #fff;
    }

    .showotherplace{
      position: absolute;
      box-sizing: border-box;
      right: 10px;
      top: 10px;
      padding: 10px;
      border-radius: 3px;
      background-color: rgba(45, 57, 65,.8);
      color: #fff;
    }

    .address-list{
      box-sizing: border-box;
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(#fff,0.9);
      padding: 30px 0px;
      overflow: scroll;

      .address-item{
        display: block;
        width: 94%;
        margin: 0 auto 20px auto;
        height: 100px;
        border-radius: 4px;
        border: 1px solid #ebeef5;
        background-color: #fff;
        overflow: hidden;
        color: #303133;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        // line-height: 50px;
        // background-color: rgba(45, 57, 65,1);
        // border-radius: 3px;
        // color: #fff;
        // margin-bottom: 20px;
        // text-align: center;
        // border-bottom: solid 1px rgba(45, 57, 65,1);

        &-img{
          display: block;
          position: absolute;
          width: 86px;
          height: 86px;
          top: 7px;
          left: 7px;
          background-color: #d4d4d4;
          img{
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        &-name{
          display: block;
          position: absolute;
          top: 10px;
          left: 100px;
          font-size: 16px;
        }
        &-address{
          display: block;
          position: absolute;
          top: 50px;
          left: 100px;
          font-size: 13px;
        }
      }
    }


  }

</style>


