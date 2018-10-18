<template>
  <div>
      <div>
         <p><img :src="discountArr[0]" style="width:100%;height:1.1rem"></p>
      </div>
      <div>
          <p><img :src="discountArr[1]" style="width:100%;height:.386rem"></p>
          <p class="flex-box"><img :src="discountArr[2]" style="width:33.3333333%;height:1.435rem"><img :src="discountArr[3]" style="width:33.333333%;height:1.435rem"><img :src="discountArr[4]" style="width:33.333333%;height:1.435rem"></p>
      </div>
      <div><p><img :src="nullImg" style="width:100%"></p></div>
       <div>
          <p><img :src="discountArr[5]" style="width:100%;"></p>
          <p class="flex-box"><img :src="discountArr[6]" style="width:33.3333333%;height:1.435rem"><img :src="discountArr[7]" style="width:33.333333%;height:1.435rem"><img :src="discountArr[8]" style="width:33.333333%;height:1.435rem"></p>
      </div>
      <div><p><img :src="nullImg" style="width:100%"></p></div> 
       <div>
          <p><img :src="discountArr[9]" style="width:100%;"></p>
          <p class="flex-box"><img :src="discountArr[10]" style="width:33.3333333%;height:1.435rem"><img :src="discountArr[11]" style="width:33.333333%;height:1.435rem"><img :src="discountArr[12]" style="width:33.333333%;height:1.435rem"></p>
      </div>
      <div>
          <p class="flex-box"><img :src="discountArr[13]" style="width:50%;height:.386rem"><img :src="discountArr[14]" style="width:50%;height:.386rem"></p>
          <p class="flex-box"><img :src="discountArr[15]" style="width:33.3333333%;height:.86rem"><img :src="discountArr[16]" style="width:33.333333%;height:.86rem"><img :src="discountArr[17]" style="width:33.333333%;height:.86rem"></p>
      </div>
      <p><img :src="discountArr[18]" style="width:100%;"></p>
  </div>
</template>

<script>
//引入子组件
import img from "../assets/imgs/big-img.jpg"
import discount1 from "../assets/imgs/discount-1.jpg"
import discount2 from "../assets/imgs/discount-2.jpg"
import discount3 from "../assets/imgs/discount-3.jpg"
import discount4 from "../assets/imgs/discount-4.jpg"
import discount5 from "../assets/imgs/discount-5.jpg"
import discount6 from "../assets/imgs/discount-6.jpg"
import discount7 from "../assets/imgs/discount-7.jpg"
import discount8 from "../assets/imgs/discount-8.jpg"
import discount9 from "../assets/imgs/discount-9.jpg"
import discount10 from "../assets/imgs/discount-10.jpg"
import discount11 from "../assets/imgs/discount-11.jpg"
import discount12 from "../assets/imgs/discount-12.jpg"
import discount13 from "../assets/imgs/discount-13.jpg"
import discount14 from "../assets/imgs/discount-14.jpg"
import discount15 from "../assets/imgs/discount-15.jpg"
import discount16 from "../assets/imgs/discount-16.jpg"
import discount17 from "../assets/imgs/discount-17.jpg"
import discount18 from "../assets/imgs/discount-18.jpg"
import discount19 from "../assets/imgs/discount-19.jpg"
import nullImg from "../assets/imgs/null.jpg"


export default {
  name: 'Discount',
  data(){
   return{
      img:img,
      discountArr:[
        discount1,
        discount2,
        discount3,
        discount19,
        discount4,
        discount5,
        discount6,
        discount7,
        discount8,
        discount9,
        discount10,
        discount11,
        discount12,
        discount13,
        discount14,
        discount15,
        discount16,
        discount17,
        discount18,
      ],
      nullImg:nullImg
   }
  },
}
</script>

<style>
  .big-img{
    width:100%;
    height:1.5rem;
  }
  .flex-box{
    display: flex;
  }
</style>
