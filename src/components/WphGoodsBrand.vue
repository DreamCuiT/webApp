<template>
      <div class="brand"> 
          <ul class="brand-nav-ul">
              <li v-for="(itme,index) of brandNav" :key="index" @click="topColor(index)">
                  <div class="brand-nav-class">
                      <div  :class="itme.class"  :style="{webkitMaskImage:'url('+itme.imgSrc+')'}" style="height:.24rem;width:.24rem;-webkit-mask-size: 100% 100%;margin:0 auto;"></div>
                      <!-- <img :src="itme.imgSrc" style="width:.24rem;height:.24rem;margin:0 auto;"> -->
                     <span :class="itme.classFont">{{itme.text}}</span>
                  </div>
              </li>
          </ul>
          <div style="width: 100%;height:0.005rem;background: #585c64; opacity:.3"></div>
          <div class="swipreBox">
               <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="../assets/brandImgs/swipre-1.jpg" alt="" class="big-img" style="width:100%;height:1.12rem"></div>
                    <div class="swiper-slide"><img src="../assets/brandImgs/swipre-2.jpg" alt="" class="big-img" style="width:100%;height:1.12rem"></div>
                    <div class="swiper-slide"><img src="../assets/brandImgs/swipre-3.jpg" alt="" class="big-img" style="width:100%;height:1.12rem"></div>
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>
            </div>
          </div>
          <div class="brandSortBox">
              <h2 class="brandSortBox-title">猜你喜欢<div><span style="font-size:.12rem;color:#585c64;margin-right:.05rem;vertical-align: top;">换一换</span><img src="../assets/brandImgs/next.png" style="width:.16rem;height:.16rem;float:right"></div></h2>
              <ul class="brandSortBox-ul">
                  <li v-for="(itme,index) of brandshop" :key="index">
                     <div class="brandSortBox-item" v-for="(m,indexA) of brandshop[index].itmes" :key="indexA">
                         <div>
                              <img :src="m.imgs.brandTop" class="shop-itme ">
                         </div>
                         <div>
                             <img :src="m.imgs.brand" class="shop-itme shop-show">
                         </div>
                         <span class="die">{{m.brankName.textTap}}</span>
                         <span class="die die-show">{{m.brankName.text}}</span>
                     </div>
                  </li>
                  <!-- <li>
                     <div class="brandSortBox-item">
                         <div>
                              <img src="../assets/brandImgs/shop-2.png" class="shop-itme ">
                         </div>
                         <div>
                             <img src="../assets/brandImgs/shop-1.png" class="shop-itme shop-show">
                         </div>
                         <span class="die">菲比</span>
                          <span class="die die-show">菲比</span>
                     </div>
                     <div class="brandSortBox-item">
                         <div>
                              <img src="../assets/brandImgs/shop-2.png" class="shop-itme ">
                         </div>
                         <div>
                             <img src="../assets/brandImgs/shop-1.png" class="shop-itme shop-show">
                         </div>
                         <span class="die">菲比</span>
                          <span class="die die-show">菲比</span>
                     </div>
                     <div class="brandSortBox-item">
                         <div>
                              <img src="../assets/brandImgs/shop-2.png" class="shop-itme ">
                         </div>
                         <div>
                             <img src="../assets/brandImgs/shop-1.png" class="shop-itme shop-show">
                         </div>
                         <span class="die">菲比</span>
                          <span class="die die-show">菲比</span>
                     </div>
                  </li> -->
              </ul>
          </div>
          <div class="brandSortBox"  v-for="(itme,index) of brandSortBoxData" :key="index">
                <h2 class="brandSortBox-title">{{itme.titleText}}<div><span style="font-size:.12rem;color:#585c64;margin-right:.05rem;vertical-align: top;">更多</span><img src="../assets/brandImgs/go.png" style="width:.08rem;height:.08rem;float:right;margin-top: 5px"></div></h2>
                   <ul class="brandSortBox-ul">
                        <li v-for="(itmeLi,i) of brandSortBoxData[index].brandSortBoxItme" :key="i">
                            <div class="brandSortBox-item" v-for="(itmeImg,subImg) of brandSortBoxData[index].brandSortBoxItme[i].imgs" :key="subImg">
                                <img :src="itmeImg.imgSrc" class="brandImg">
                            </div>
                        </li>   
                    </ul>    
          </div>
      </div>  
</template>

<script>
import Swiper  from "../../static/swiper.js"
// import brandImg from "../../static/brandImg/imgSrcArr.js"

export default {
  name: 'WphGoodsBrand',
  data(){
      return{
          brandShow:true,
        //   defaultColor:"#585c64",
        //   pitchColor:"#e83a9b",
          brandNav:[
              {
                  text:"猜你喜欢",
                  imgSrc:require("../assets/brandImgs/useLove.png"),
                  class:"defaultColor",
                  classFont:"defaultFontColor"
              },
              {
                  text:"女装",
                  imgSrc:require("../assets/brandImgs/woman.png"),
                  class:"defaultColor",
                  classFont:"defaultFontColor"
              },
               {
                  text:"鞋靴",
                  imgSrc:require("../assets/brandImgs/shoe.png"),
                  class:"defaultColor",
                  classFont:"defaultFontColor"
              },
               {
                  text:"美妆",
                  imgSrc:require("../assets/brandImgs/beauty.png"),
                  class:"defaultColor",
                  classFont:"defaultFontColor"
              },
               {
                  text:"母婴",
                  imgSrc:require("../assets/brandImgs/mom.png"),
                  class:"defaultColor",
                  classFont:"defaultFontColor"
              },
               {
                  text:"男装",
                  imgSrc:require("../assets/brandImgs/man.png"),
                  class:"defaultColor",
                  classFont:"defaultFontColor"
              },
               {
                  text:"精品",
                  imgSrc:require("../assets/brandImgs/watch.png"),
                  class:"defaultColor",
                  classFont:"defaultFontColor"
              },
               {
                  text:"运动户外",
                  imgSrc:require("../assets/brandImgs/sport.png"),
                  class:"defaultColor",
                  classFont:"defaultFontColor"
              },
               {
                  text:"内衣",
                  imgSrc:require("../assets/brandImgs/Underwear.png"),
                  class:"defaultColor",
                  classFont:"defaultFontColor"
              },
               {
                  text:"家具家访",
                  imgSrc:require("../assets/brandImgs/suitepng.png"),
                  class:"defaultColor",
                  classFont:"defaultFontColor"
              },
               {
                  text:"家电数码",
                  imgSrc:require("../assets/brandImgs/iphone.png"),
                  class:"defaultColor",
                  classFont:"defaultFontColor"
              },
               {
                  text:"维风尚",
                  imgSrc:require("../assets/brandImgs/style.png"),
                  class:"defaultColor",
                  classFont:"defaultFontColor"
              },
               {
                  text:"箱包",
                  imgSrc:require("../assets/brandImgs/bag.png"),
                  class:"defaultColor",
                  classFont:"defaultFontColor"
              },
               {
                  text:"唯品生活",
                  imgSrc:require("../assets/brandImgs/lifepng.png"),
                  class:"defaultColor",
                  classFont:"defaultFontColor"
              },
               {
                  text:"唯品·奢",
                  imgSrc:require("../assets/brandImgs/shechi.png"),
                  class:"defaultColor",
                  classFont:"defaultFontColor"
              },
               {
                  text:"唯品国际",
                  imgSrc:require("../assets/brandImgs/international.png"),
                  class:"defaultColor",
                  classFont:"defaultFontColor"
              },
              {
                  text:"唯品牌",
                  imgSrc:require("../assets/brandImgs/brank.png"),
                  class:"defaultColor",
                  classFont:"defaultFontColor"
              },
              {
                  text:"唯品优选",
                  imgSrc:require("../assets/brandImgs/good.png"),
                  class:"defaultColor",
                  classFont:"defaultFontColor"
              }
          ],
          brandshop:[
                        {
                            itmes:[
                                    {
                                        imgs:{
                                            brand:require("../assets/brandImgs/shop-1.png"),
                                            brandTap:require("../assets/brandImgs/shop-2.png")
                                            },
                                        brankName:{
                                            text:"菲比",
                                            textTap:"贝拉米"   
                                        }
                                        
                                    },
                                    {
                                        imgs:{
                                            brand:require("../assets/brandImgs/shop-3.png"),
                                            brandTap:require("../assets/brandImgs/shop-4.png")
                                            },
                                        brankName:{
                                            text:"新经典",
                                            textTap:"木林森"   
                                        }
                                        
                                    },
                                    {
                                        imgs:{
                                            brand:require("../assets/brandImgs/shop-5.png"),
                                            brandTap:require("../assets/brandImgs/shop-6.png")
                                            },
                                        brankName:{
                                            text:"里美",
                                            textTap:"开丽"   
                                        }
                                        
                                    }
                                ]
                        },
                        {
                            itmes:[
                                    {
                                        imgs:{
                                            brand:require("../assets/brandImgs/shop-7.png"),
                                            brandTap:require("../assets/brandImgs/shop-8.png")
                                            },
                                        brankName:{
                                            text:"汇美舍",
                                            textTap:"金贝勒"   
                                            
                                        }
                                    },
                                    {
                                       imgs:{
                                            brand:require("../assets/brandImgs/shop-9.png"),
                                            brandTap:require("../assets/brandImgs/shop-10.png")
                                        },
                                        brankName:{
                                            text:"奥康",
                                            textTap:"H7"   
                                        }
                                        
                                    },
                                    {
                                        
                                       imgs:{
                                            brand:require("../assets/brandImgs/shop-11.png"),
                                            brandTap:require("../assets/brandImgs/shop-12.png")
                                        },
                                        brankName:{
                                            text:"雀氏",
                                            textTap:"潮宏基"   
                                        }
                                        
                                    }
                                ]
                        },
                ],
          brandSortBoxData:[
                {   
                    titleText:"女装",
                    brandSortBoxItme:[
                        {
                            imgs:[
                                {imgSrc:require("../assets/brandImgs/women-1.jpg")},
                                {imgSrc:require("../assets/brandImgs/women-2.jpg")},
                                {imgSrc:require("../assets/brandImgs/women-3.jpg")},
                            ]
                        },
                        {
                            imgs:[
                                {imgSrc:require("../assets/brandImgs/women-4.jpg")},
                                {imgSrc:require("../assets/brandImgs/women-5.jpg")},
                                {imgSrc:require("../assets/brandImgs/women-6.jpg")},
                            ]
                        },
                        {
                            imgs:[
                                {imgSrc:require("../assets/brandImgs/women-7.jpg")},
                                {imgSrc:require("../assets/brandImgs/women-8.jpg")},
                                {imgSrc:require("../assets/brandImgs/women-9.jpg")},
                            ]
                        },
                        {
                            imgs:[
                                {imgSrc:require("../assets/brandImgs/women-10.jpg")},
                                {imgSrc:require("../assets/brandImgs/women-11.jpg")},
                                {imgSrc:require("../assets/brandImgs/women-12.jpg")},
                            ]
                        }
                    ]
                },
                {   
                    titleText:"男装",
                    brandSortBoxItme:[
                        {
                            imgs:[
                                {imgSrc:require("../assets/brandImgs/women-1.jpg")},
                                {imgSrc:require("../assets/brandImgs/women-2.jpg")},
                                {imgSrc:require("../assets/brandImgs/women-3.jpg")},
                            ]
                        },
                        {
                            imgs:[
                                {imgSrc:require("../assets/brandImgs/women-4.jpg")},
                                {imgSrc:require("../assets/brandImgs/women-5.jpg")},
                                {imgSrc:require("../assets/brandImgs/women-6.jpg")},
                            ]
                        },
                        {
                            imgs:[
                                {imgSrc:require("../assets/brandImgs/women-7.jpg")},
                                {imgSrc:require("../assets/brandImgs/women-8.jpg")},
                                {imgSrc:require("../assets/brandImgs/women-9.jpg")},
                            ]
                        },
                        {
                            imgs:[
                                {imgSrc:require("../assets/brandImgs/women-10.jpg")},
                                {imgSrc:require("../assets/brandImgs/women-11.jpg")},
                                {imgSrc:require("../assets/brandImgs/women-12.jpg")},
                            ]
                        }
                    ]
                },
                {   
                    titleText:"鞋靴",
                    brandSortBoxItme:[
                        {
                            imgs:[
                                {imgSrc:require("../assets/brandImgs/women-1.jpg")},
                                {imgSrc:require("../assets/brandImgs/women-2.jpg")},
                                {imgSrc:require("../assets/brandImgs/women-3.jpg")},
                            ]
                        },
                        {
                            imgs:[
                                {imgSrc:require("../assets/brandImgs/women-4.jpg")},
                                {imgSrc:require("../assets/brandImgs/women-5.jpg")},
                                {imgSrc:require("../assets/brandImgs/women-6.jpg")},
                            ]
                        },
                        {
                            imgs:[
                                {imgSrc:require("../assets/brandImgs/women-7.jpg")},
                                {imgSrc:require("../assets/brandImgs/women-8.jpg")},
                                {imgSrc:require("../assets/brandImgs/women-9.jpg")},
                            ]
                        },
                        {
                            imgs:[
                                {imgSrc:require("../assets/brandImgs/women-10.jpg")},
                                {imgSrc:require("../assets/brandImgs/women-11.jpg")},
                                {imgSrc:require("../assets/brandImgs/women-12.jpg")},
                            ]
                        }
                    ]
                },
            ]
      }
      
  },
  methods:{
    swiperSlide(){
      new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
        loop:true,
        pagination: {
          el: '.swiper-pagination',
        },
      })
    },
   showBrand(){
       //触发当前实例上的事件。参数都会传给父组件的监听器回调。父组件就获取到子组件data，mentods
        this.$emit("show-All-Brand",this.brandShow)
    },
    topColor(index){
        console.log(index)
        for(let i in this.brandNav){
            this.brandNav[i].class = "defaultColor";
        }
         for(let n in this.brandNav){
            this.brandNav[n].classFont = "defaultFontColor";
        }
        this.brandNav[index].class= "pitchColor"
        this.brandNav[index].classFont= "pitchFontColor"
    }
  },
  mounted(){
      this.swiperSlide()
      this.showBrand()
  },
}
</script>

<style>
 /* nav-color */
 .defaultColor{
     background-color:#585c64;
 }
 .pitchColor{
     background-color:#e83a9b;
 }
 .defaultFontColor{
    color:#585c64;
 }
 .pitchFontColor{
     color:#e83a9b;
 }
    .brand{
       /* flex:1; */
       overflow-y:auto;
       overflow-x: hidden;
       height:6.42rem;
    }
    .brand::-webkit-scrollbar{
        display:none !important;
        width:0 !important;
    }
    .brand-nav-ul{
        padding:.13rem  .05rem .001rem;
        font-size:0;
        white-space: nowrap;
        overflow-x:auto;
        overflow-y:hidden;
        /* border-bottom:.005rem solid #585c64; */
    }
     .brand-nav-ul::-webkit-scrollbar{
        display:none !important;
        width:0 !important;
    }
     .brand-nav-ul>li{
         display:inline-block;
     }
    .brand-nav-class{
        width:.65rem;
        height:.48rem;
        font-size:0;
        text-align:center;
    } 
    .brand-nav-class>span{
        font-size:.12rem;
    }
    .swipreBox{
         padding:.15rem .15rem 0 .15rem;
    }
    .swiper-container{
        width:100%;
        /* box-sizing: border-box; */
        /* height:1.27rem; */
    }
    .swiper-pagination{
    text-align:right;
    display: inline-block;
    }
    .swiper-pagination>span{
        vertical-align: bottom;
        background: #fff;
        border: .5px solid #455164;
        width:.05rem;
        height:.05rem;
        opacity: 1;
    }
    .swiper-pagination .swiper-pagination-bullet-active{
        background: #455164;
        border:.5px solid #fff;
    }
    /* brandSortBox-title */
    .brandSortBox{
        padding-top:.05rem;
    }
    .brandSortBox-title{
        font-size:.14rem;
        font-weight: 400;
        color:#222;
        padding:.17rem .15rem;
        box-sizing: border-box;
        display:flex;
        justify-content: space-between;
        align-items:center;
    }
    .brandSortBox-ul{
        font-size:0;
        padding:0 .15rem;
    }
    .brandSortBox-ul>li{
        display: flex;
    }
    .brandSortBox-item{
        font-size:0;
        text-align:center;  
        display: inline-block;
        flex:1;
        /* padding:.32rem 0 .16rem 0; */
        margin-left:.02rem;
        margin-bottom:.02rem;
        background-color:#f3f3f3
    }
    .shop-itme {
        display: none;
       width:.64rem;
       height:.32rem;
       margin:.16rem auto 0;
    }
    .shop-show{
        display: block;
    }
    .die{
        font-size:.12rem;
        color:#98989f; 
        display:none;
    }
    .die-show{
        display:block;
        margin-top:.16rem;
        margin-bottom:.16rem;
    }
    .brandImg{
        width:1.13rem;
        height:1.12rem;
    }
</style>
