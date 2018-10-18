<template>
  <div id="app">
      <div class="nav-component" v-for="i in [1,2]" :key="i.id">
          <a href="#"  v-for="index in [1,2,3,4,5]" :key="index.id">
              <img :src="navImg" alt="">
          </a>
      </div>
      <Discount></Discount>
      <div class="specialtyImg">
           <h3>今日特卖 - 每天早10点晚8点上新</h3>
            <img :src="imgSrc">
      </div>
      <div class="activity">
          <div><img :src="imgSrc"></div>
          <div class="activityPageTitle">
              <p>嘉曼品牌钜献</p>
              <div>
                  <img :src="discountImg">
                  全场8.5折
              </div>
              <div>剩<span class="activityDay">3</span>天</div>
          </div>
      </div>
  </div>
</template>

<script>
//引入图片
import imgSrc from "../assets/imgs/sepac-1.jpg"
import discountImg from "../assets/imgs/pms.png"
import navImg from "../assets/imgs/nav-1.jpg"
//引入子组件
import Discount from "../components/Discount"

export default {
  name: 'SpecialtyToday',
  data(){
      return{
          imgSrc:imgSrc,
          discountImg:discountImg,
          navImg:navImg
      }
  },
  components:{
      Discount
  }
}
</script>
    
<style>
.nav-component{
    font-size:0;
    height:auto;
     clear:both;
}
.nav-component:after{
    content: ".";
    display:block;
    clear:both;
    overflow: hidden;
    visibility: hidden;
    height:0;    
    font-size:0;
}
.nav-component>a{
    display:inline-block;
    width:20%;
    text-align:center;
}
.nav-component>a>img{
    width:100%;
    height:100%;
}
.specialtyImg>h3 {
   font-size:.16rem;
   color:#4f0000;
   padding:.16rem 0 .04rem 0;
   width:100%; 
   text-align: center;
   background-color:#fff;
}
.specialtyImg>img{
    width:100%;
    height:2.3rem;
}
.activity{
    background-color:#fff;
}
.activity>div:first-child>img{
    width:100%;
    height:1.8rem;
}
.activity>div:last-child{
    box-sizing: border-box;
    width:100%;
    padding: .1rem .12rem .14rem;
}
.activity>div:last-child P{
    font-size:.16rem;
    font-weight: 600;
    width:80%;
    /* 设置文本强制在一行显示 */
    white-space: nowrap;
    overflow:hidden;
    /* 设置文本溢出显示省略号 */
    text-overflow: ellipsis;
}
.activity>div:last-child div:nth-child(2){
    font-size: .14rem;
    color:#5771a8;
    text-indent:.05rem;
    margin-top:.07rem;
}
.activity>div:last-child div:nth-child(2)>img{
    width:.19rem;
    height: .19rem;
    float:left; 
}
.activity>div:last-child div:nth-child(3){
    position:absolute;
    top:.1rem;
    right:.12rem;
    font-size:.13rem;
    color:#98989f;
}
.activityDay{
      font-size:.12rem;
      color:#98989f;
}
.activityPageTitle{
    position:relative;
}
</style>
