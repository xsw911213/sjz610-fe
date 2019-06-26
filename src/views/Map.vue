<template>
  <div id="map">
    <div id="rmap">
    </div>
    <a class="back-btn" @click="$router.back(-1)"></a>
    <a class="showotherplace" @click="addressListShow = true">所有会场地址</a>
    <div class="address-list" @click.self="addressListShow = false"  v-show="addressListShow">
      <a class="address-item" v-for="(item,index) in addressList" :key="index" @click="changeMap(item)">
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
        addressListShow:false,
        point:{
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
            address:'灵寿县城东街与南环201交口北行200米',
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
            address:'市灵寿县同下村同新路1号',
            location:'yxgdzkxx',
            img:'http://518img.blu-rayvision.com/%E5%8C%BB%E7%A7%91%E9%AB%98%E7%AD%89%E4%B8%93%E7%A7%91%E5%AD%A6%E6%A0%A1.JPEG'
          }
        ],
        selectedPoint:{},
        userLocation:{
          lng:'',
          lat:''
        }
      };
    },
    methods: {
      initBaiDuMap(point){
        let _this = this;
        _this.selectedPoint = point;
        //114.60936,38.026544
        // var map = new BMap.Map("map");          // 创建地图实例  
        // var point = new BMap.Point(114.60936,38.026544);  // 创建点坐标  
        // map.centerAndZoom(point, 16);                 // 初始化地图，设置中心点坐标和地图级别  
        // var marker = new BMap.Marker(point);        // 创建标注    
        // map.addOverlay(marker);                     // 将标注添加到地图中 

        // 坐标拾取系统  http://api.map.baidu.com/lbsapi/getpoint/index.html

        let eposi = new BMap.Point(point.lan,point.lat);

        if(this.userLocation.lng && this.userLocation.lat){
          var map = new BMap.Map("rmap");
          map.centerAndZoom(eposi,12);

          var driving = new BMap.DrivingRoute(map, {
            renderOptions: {
              map: map, 
              autoViewport: true
            }
          });

          driving.search(new BMap.Point(_this.userLocation.lng,_this.userLocation.lat), eposi);

          _this.addressListShow = false;
        }else{
          var geolocation = new BMap.Geolocation();
          geolocation.enableSDKLocation();
          geolocation.getCurrentPosition(function(r){
            if(this.getStatus() == BMAP_STATUS_SUCCESS){
              // alert('您的位置：'+r.point.lng+','+r.point.lat);
              var map = new BMap.Map("rmap");
              map.centerAndZoom(eposi,12);

              var driving = new BMap.DrivingRoute(map, {
                renderOptions: {
                  map: map, 
                  autoViewport: true
                }
              });
              _this.userLocation.lng = r.point.lng
              _this.userLocation.lat = r.point.lat

              driving.search(new BMap.Point(r.point.lng,r.point.lat), eposi);

              _this.addressListShow = false;
            }
            else {
              alert('failed'+this.getStatus());
            }        
          });
        }

        
      },
      initQQMap(point){
        let _this = this;

        let geolocation = new qq.maps.Geolocation("GTVBZ-57D3X-KM54N-7M4J5-VOFQ7-64FTJ", "qqmap");

        // 目标位置
        let epoi = new qq.maps.LatLng(point.lat,point.lng);
        
        geolocation.getLocation( ( e =>{
          console.log(e);
          //alert(JSON.stringify(e))
          // 当前位置
          let spoi = {
            lat:e.lat,
            lng:e.lng
          }

          var map = new qq.maps.Map(document.getElementById("rmap"), {
            center: epoi,      // 地图的中心地理坐标。
            zoom:12           
          })
        }) )

        function init() {
            //定义map变量 调用 qq.maps.Map() 构造函数   获取地图显示容器
            console.log(qq)
            var map = new qq.maps.Map(document.getElementById("rmap"), {
                center: new qq.maps.LatLng(39.916527,116.397128),      // 地图的中心地理坐标。
            });
        }

        //调用初始化函数地图
        init();
      },
      changeMap(prop){
        this.initBaiDuMap(this.point[prop.location]);
        //this.initQQMap(this.point[prop]);
      },
      openBaiduMapApp(){
        // lat,lng
        let _this = this
        console.log(`baidumap://map/direction?mode=driving&destination=${_this.selectedPoint.lat},${_this.selectedPoint.lan}`)
        window.location.href = `baidumap://map/direction?mode=driving&destination=${_this.selectedPoint.lat},${_this.selectedPoint.lan}`
      }
    },
    mounted() {
      this.initBaiDuMap(this.point.zsbg);
      //this.initQQMap(this.point.xbcq)
      
    }
  };
</script>

<style lang="scss">
  #map {
    position: absolute;
    width: 100%;
    min-height: 100%;
    top: 0;

    #rmap{
      position: absolute;
      width: 100%;
      min-height: 100%;
      top: 0;
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


