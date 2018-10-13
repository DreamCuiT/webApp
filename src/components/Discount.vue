<template>
  <div>
      <div>
          <img :src="img1" style="width:100%;height:1.1rem">
      </div>
  </div>
</template>

<script>
//引入子组件
import img from "../assets/imgs/big-img.jpg"
import img1 from "../assets/imgs/Discount-1.jpg"
// import img from "../assets/imgs/big-img.jpg"
// import img from "../assets/imgs/big-img.jpg"
// import img from "../assets/imgs/big-img.jpg"
// import img from "../assets/imgs/big-img.jpg"
// import img from "../assets/imgs/big-img.jpg"
// import img from "../assets/imgs/big-img.jpg"
// import img from "../assets/imgs/big-img.jpg"
// import img from "../assets/imgs/big-img.jpg"
// import img from "../assets/imgs/big-img.jpg"
// import img from "../assets/imgs/big-img.jpg"
// import img from "../assets/imgs/big-img.jpg"
// import img from "../assets/imgs/big-img.jpg"
// import img from "../assets/imgs/big-img.jpg"

export default {
  name: 'Discount',
  data(){
   return{
      img:img,
      img1:img1
   }
  },
}
</script>

<style>
  .big-img{
    width:100%;
    height:1.5rem;
  }
</style>
