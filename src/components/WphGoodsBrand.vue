<template>
      <div class="brand" ref="scrollBox"> 
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
              <h2 class="brandSortBox-title" id="useLove">猜你喜欢<div @click="goNext"><span style="font-size:.12rem;color:#585c64;margin-right:.05rem;vertical-align: top;">换一换</span><img src="../assets/brandImgs/next.png" style="width:.16rem;height:.16rem;float:right"></div></h2>
              <ul class="brandSortBox-ul">
                  <li v-for="(itme,index) of brandshop" :key="index">
                     <div class="brandSortBox-item" v-for="(m,indexA) of brandshop[index].itmes" :key="indexA">
                         <div style="overflow:hidden;height:.32rem;width:.64rem;position:relative;margin-top:.32rem;">
                             <div :class="shophidden" class="moveBox">
                                    <img :src="m.imgs.brandTap" class="shop-itme" :class="shopshow">
                                <!-- </div>
                                <div> -->
                                    <img :src="m.imgs.brand" class="shop-itme shopshow" >
                             </div>
                         </div>
                        <div style="overflow:hidden;height:.16rem;width:.64rem;position:relative;margin-top:.16rem;margin-bottom:.16rem">
                           <div class="moveBox" :class="shophidden">
                                 <span class="die" :class="shopshow">{{m.brankName.textTap}}</span>
                                <span class="die shopshow">{{m.brankName.text}}</span>
                           </div>
                        </div>
                     </div>
                  </li>
              </ul>
          </div>
          <div class="brandSortBox" :id="itme.id" v-for="(itme,index) of brandSortBoxData" :key="index">
                <h2 class="brandSortBox-title" >{{itme.titleText}}<div><span style="font-size:.12rem;color:#585c64;margin-right:.05rem;vertical-align: top;">更多</span><img src="../assets/brandImgs/go.png" style="width:.08rem;height:.08rem;float:right;margin-top: 5px"></div></h2>
                <ul class="brandSortBox-ul">
                    <li v-for="(itmeLi,i) of brandSortBoxData[index].brandSortBoxItme" :key="i">
                        <div class="brandSortBox-item" v-for="(itmeImg,subImg) of brandSortBoxData[index].brandSortBoxItme[i].imgs" :key="subImg">
                            <img :src="itmeImg.imgSrc" class="brandImg">
                        </div>
                    </li>   
                </ul>    
          </div>
          <div :class="goTopClass" @click="goTop"></div>
      </div>  
</template>

<script>
import Swiper  from "../../static/swiper.js"

export default {
  name: 'WphGoodsBrand',
  data(){
      return{
          brandShow:true,
          navShow:"",
          pitchColor:"#e83a9b",
          shophidden:"",
          shopshow:"",
          goTopClass:"",
          scrollEvent:true,
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
                    id:"woman",
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
                    id:"man",
                    titleText:"男装",
                    brandSortBoxItme:[
                        {
                            imgs:[
                                {imgSrc:require("../assets/brandImgs/man-1.jpg")},
                                {imgSrc:require("../assets/brandImgs/man-2.jpg")},
                                {imgSrc:require("../assets/brandImgs/man-3.jpg")},
                            ]
                        },
                        {
                            imgs:[
                                {imgSrc:require("../assets/brandImgs/man-4.jpg")},
                                {imgSrc:require("../assets/brandImgs/man-5.jpg")},
                                {imgSrc:require("../assets/brandImgs/man-6.jpg")},
                            ]
                        },
                        {
                            imgs:[
                                {imgSrc:require("../assets/brandImgs/man-7.jpg")},
                                {imgSrc:require("../assets/brandImgs/man-8.jpg")},
                                {imgSrc:require("../assets/brandImgs/man-9.jpg")},
                            ]
                        },
                        {
                            imgs:[
                                {imgSrc:require("../assets/brandImgs/man-10.jpg")},
                                {imgSrc:require("../assets/brandImgs/man-11.jpg")},
                                {imgSrc:require("../assets/brandImgs/man-12.jpg")},
                            ]
                        }
                    ]
                },
                {   
                    id:"shoe",
                    titleText:"鞋靴",
                    brandSortBoxItme:[
                        {
                            imgs:[
                                {imgSrc:require("../assets/brandImgs/shoe-1.jpg")},
                                {imgSrc:require("../assets/brandImgs/shoe-2.jpg")},
                                {imgSrc:require("../assets/brandImgs/shoe-3.jpg")},
                            ]
                        },
                        {
                            imgs:[
                                {imgSrc:require("../assets/brandImgs/shoe-4.jpg")},
                                {imgSrc:require("../assets/brandImgs/shoe-5.jpg")},
                                {imgSrc:require("../assets/brandImgs/shoe-6.jpg")},
                            ]
                        },
                        {
                            imgs:[
                                {imgSrc:require("../assets/brandImgs/shoe-7.jpg")},
                                {imgSrc:require("../assets/brandImgs/shoe-8.jpg")},
                                {imgSrc:require("../assets/brandImgs/shoe-9.jpg")},
                            ]
                        },
                        {
                            imgs:[
                                {imgSrc:require("../assets/brandImgs/shoe-10.jpg")},
                                {imgSrc:require("../assets/brandImgs/shoe-11.jpg")},
                                {imgSrc:require("../assets/brandImgs/shoe-12.jpg")},
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
        this.$emit("show-All-Brand",[this.brandShow,this.scrollEvent])
    },
    goNext(){
        //点击添加样式
       this.shophidden = 'shophidden';
       let that = this;
       let arr = [];
       //异步改变图片
        var p = new Promise(function (resolve, reject) {
            for(let i=0; i<that.brandshop.length; i++){
                // console.log(that.brandshop[i])
                arr.push(that.brandshop[i].itmes)
            }
            resolve(arr)
            setTimeout(()=>{
                //图片动画完成后，去除css
                that.shophidden = ""
            },300)
        }).then(function(r){
            //图片动画完成后，交换数据中的src
           setTimeout(()=>{
               for(let i=0; i<r.length; i++){
                for(let key in r[i]){
                    let swap =  r[i][key].imgs.brand;
                    r[i][key].imgs.brand = r[i][key].imgs.brandTap;
                    r[i][key].imgs.brandTap = swap;
                    let swapText =  r[i][key].brankName.text;
                    r[i][key].brankName.text = r[i][key].brankName.textTap;
                    r[i][key].brankName.textTap = swapText;
                    // console.log(r[i][key].imgs)
                }
            }
           },300)
        }).catch(function (reason) {
                // console.log(reason)
            });
    },
    //监听scroll
    listenScroll(){
    let that = this;
    //获取注册过ref的Dom，添加onscroll事件
    that.$refs.scrollBox.addEventListener("scroll",function(){
          if(that.$refs.scrollBox.scrollTop>1000){
              that.scrollEvent = false;
              that.goTopClass = "goTopShow";
              that.showBrand()
          }else{
              that.scrollEvent = true;
              that.goTopClass = "goTopHidden";
              that.showBrand()  
          }
      },true)
    },
    //goTop
    goTop(){
        this.$refs.scrollBox.scrollTop = 0
    }
  },
  mounted(){
      this.swiperSlide()
      this.showBrand()
      this.listenScroll()
  },
}
</script>

<style>
html{
    position: relative;
}
 /* 锚点 */
 .anchor{
     display:block;
     width:100%;
     height:100%;
     position:absolute;
     -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    -moz-user-focus: none;
    -moz-user-select: none;
 }
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
        background-color:#fff;
        visibility:visible;
        opacity:1;
        z-index: 10;
        /* border-bottom:.005rem solid #585c64; */
    }
     .brand-nav-ul::-webkit-scrollbar{
        display:none !important;
        width:0 !important;
    }
     .brand-nav-ul>li{
         display:inline-block;
         position:relative;
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
        /* position: relative; */
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
         /* position:absolute; */
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
        background-color:#f3f3f3;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* padding-top:.32rem;
        padding-bottom:.16rem; */
    }
    .moveBox{
        height:100%;
        width:.64rem;
        position:relative;
        top:-100%
    }
    .shop-itme {
       width:.64rem;
       height:.32rem;
       margin:.0rem auto 0;
       position: absolute;
    }
    .shophidden{
       visibility: visible;
       animation: move .3s none;
    }
    @keyframes move {
        0%{
             transform:translateY(0);
        }
        99%{
             transform:translateY(100%);
        }
        100%{
             transform:translateY(0);
        }
    }
    .shopshow{
        display: block;
        transform:translateY(100%);
        transition: transform 1s;
    }
    .die{
        font-size:.12rem;
        color:#98989f; 
        line-height:inherit;
        transform:translateY(0);
        /* position: absolute; */

    }
    .die-hidden{

    }
    .die-show{
        display:block;
         transform:translateY(100%);
        transition: transform 1s;
    }
    .brandImg{
        width:1.13rem;
        height:1.12rem;
    }
    /* goTop */
    .goTopShow{
        width:.44rem;
        height:.44rem;
        background:url(../assets/brandImgs/goTop.png) no-repeat;
        background-size:100% 100%;
        position:fixed;
        bottom:-.44rem;
        right:.15rem;
        z-index: 10;
        display: block;
        transform: translateY(-120%);
        transition: transform .5s;
    }
    .goTopHidden{
        width:.44rem;
        height:.44rem;
        background:url(../assets/brandImgs/goTop.png) no-repeat;
        background-size:100% 100%;
        position:fixed;
        bottom:-.44rem;
        right:.15rem;
        z-index: 10;
        display: block;
        transform: translateY(0%);
        transition: transform .5s;
    }
</style>
