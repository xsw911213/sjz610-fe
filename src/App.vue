<template>
  <div id="app">
    <!-- <transition name="slide-fade"> -->
    <transition>
      <router-view/>
    </transition>
    <a class="goback" v-show="goBackShow" @click="goBack">
      <img src="../static/icon/goback1.png" ><span>返回</span>
    </a>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  watch:{
    $route(e){
      console.log(e)
      if(e.path === '/'){
        this.goBackShow = false;
      }else{
        this.goBackShow = true;
      }
    }
  },
  data(){
    return{
      goBackShow:false
    }
  },
  methods:{
    goBack(){
      this.$router.go(-1);
    }
  }
}
</script>

<style>
*{
  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;
}
html,body{
  width: 100%;
  height: 100%;
  /* background-color: #befbfc; */
  /* background-color: rgb(184, 184, 184); */
  background-color: #fff;
}

.goback{
  position: fixed;
  
  z-index: 100;
  top: 15px;
  left: 15px;
}

.goback img{
  display: inline-block;
  width: 16px; 
  vertical-align: middle; 
}

.goback span{
  display: inline-block;
  font-size: 16px;
  color: #fff;
  transform: translate(2px,1px);
}

#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  /* -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}

.slide-fade{
  position: absolute;left:0;right: 0;
}
.slide-fade-enter-active {
  transition: all .8s ease;
}
.slide-fade-leave-active {

  transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
{
  left:0;
  right: 0;
  transform: translateX(10px);
  opacity: 0.5;
}
</style>
