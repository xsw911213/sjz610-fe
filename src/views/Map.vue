<template>
  <div id="map">
    <div id="rmap">
    </div>
    <a class="showotherplace" @click="addressListShow = true">所有会场地址</a>
    <div class="address-list" @click.self="addressListShow = false"  v-show="addressListShow">
      <a class="address" @click="changeMap('xbcq')">西部长青</a>
      <a class="address" @click="changeMap('sjzxy')">石家庄学院</a>
    </div>
  </div>
</template>
<script>
  export default {
    name:'map',
    data() {
      return {
        addressListShow:false,
        point:{
          // 腾讯
          //西部长青
          // xbcq:{
          //   lan:114.292793,
          //   lng:114.292793,
          //   lat:38.025023
          // },
          // // 石家庄学院
          // sjzxy:{
          //   lan:114.60936,
          //   lng:114.60936,
          //   lat:38.026544
          // }
          // 百度
          //西部长青
          xbcq:{
            lan:114.301291,
            lat:38.029718
          },
          // 石家庄学院
          sjzxy:{
            lan:114.60936,
            lat:38.026544
          }
        }
      };
    },
    methods: {
      initBaiDuMap(point){
        let _this = this;
        //114.60936,38.026544
        // var map = new BMap.Map("map");          // 创建地图实例  
        // var point = new BMap.Point(114.60936,38.026544);  // 创建点坐标  
        // map.centerAndZoom(point, 16);                 // 初始化地图，设置中心点坐标和地图级别  
        // var marker = new BMap.Marker(point);        // 创建标注    
        // map.addOverlay(marker);                     // 将标注添加到地图中 

        // 坐标拾取系统  http://api.map.baidu.com/lbsapi/getpoint/index.html

        let eposi = new BMap.Point(point.lan,point.lat);

        

        var geolocation = new BMap.Geolocation();
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

            driving.search(new BMap.Point(r.point.lng,r.point.lat), eposi);

            _this.addressListShow = false;
          }
          else {
            alert('failed'+this.getStatus());
          }        
        });
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
        this.initBaiDuMap(this.point[prop]);
        //this.initQQMap(this.point[prop]);
      }
    },
    mounted() {
      this.initBaiDuMap(this.point.xbcq);
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
      text-align: center;
      padding: 50px 30px;
      overflow: scroll;

      a{
        display: inline-block;
        width: 70vw;
        height: 50px;
        line-height: 50px;
        background-color: rgba(45, 57, 65,1);
        border-radius: 3px;
        color: #fff;
        margin-bottom: 20px;
      }
    }


  }

</style>


