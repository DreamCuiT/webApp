<template>
  <div id="app">
      <img :src="img" alt="" class="big-img">
      <wph-specialty-today></wph-specialty-today>
  </div>
</template>

<script>
//引入子组件
import WphSpecialtyToday from "../components/WphSpecialtyToday"
import img from "../assets/imgs/big-img.jpg"

export default {
  name: 'mypage',
  data(){
   return{
      img:img
   }
  },
  components:{
    //注册组件
    WphSpecialtyToday
  }
}
</script>

<style>
  .big-img{
    width:100%;
    height:1.5rem;
  }
</style>
