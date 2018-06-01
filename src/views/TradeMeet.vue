<template>
  <div id="trademeet">
    <img v-for="i in 9" :src="`../../static/tmimg/index/trademeet_0${i}.jpg`" alt="" :key="i">
  </div>
</template>

<script>
export default {
  data (){
    return{

    }
  }
}
</script>
<style lang="scss">
#trademeet{
  position: absolute;
  width: 100%;
  min-height: 100%;
  background-color: #fff;
  img{
    width: 100%;
    vertical-align: top;
  }
}
</style>

