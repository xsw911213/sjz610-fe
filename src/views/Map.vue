<template>
<div id="map">
  <div id="rmap">
  </div>
  <div class="btns" v-show="false">
    <!-- <a href="androidamap://navi?sourceApplication=appname&amp;poiname=fangheng&amp;lat=38.02089&amp;lon=114.59975&amp;dev=1&amp;style=2">高德地图</a> -->
    <!-- <a href="androidamap://navi?sourceApplication=appname&amp;poiname=fangheng&amp;lat=38.02089&amp;lon=114.59975&amp;dev=1&amp;style=2">高德地图</a> -->
    <!-- <a href="http://api.map.baidu.com/marker?location=38.026544,114.60936&title=石家庄学院&content=西部长青&output=html">开始导航</a> -->
  </div>
</div>
</template>
<script>
export default {
  name:'map',
  data() {
    return {
      QQhref: '',
      GDhref: '',
      location:'',
    };
  },
  methods: {
    initBaiDuMap(){
      let _this = this;
      //114.60936,38.026544
      // var map = new BMap.Map("map");          // 创建地图实例  
      // var point = new BMap.Point(114.60936,38.026544);  // 创建点坐标  
      // map.centerAndZoom(point, 16);                 // 初始化地图，设置中心点坐标和地图级别  
      // var marker = new BMap.Marker(point);        // 创建标注    
      // map.addOverlay(marker);                     // 将标注添加到地图中 

      // 坐标拾取系统  http://api.map.baidu.com/lbsapi/getpoint/index.html

      let eposi = new BMap.Point(114.301291,38.029718);

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
        }
        else {
          alert('failed'+this.getStatus());
        }        
      });
    }
  },
  mounted() {
    this.initBaiDuMap();
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

    .btns{
      position: absolute;
      width: 100%;
      min-height: 100%;
      top: 0;
      background-color: rgba(#fff,.8);
      text-align: center;

      a{
        display: inline-block;
        width: 60%;
        height: 70px;
        margin-top: 100px;
        text-align: center;
        line-height: 70px;
        text-decoration: none;
        background-color: rgb(55, 65, 68);
        color: #fff;
        border-radius: 5px;
      }
    }
  }
}

</style>


