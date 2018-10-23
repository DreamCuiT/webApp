<template>
  <div class="goodsPage">
      <div class="goodsSortTop">
          <div class="icon-font"><i class="iconfont icon-fanhui iconleft"></i></div>
          <div class="tap">
              <p><span  :class='clickShow'><router-link to="/sorts/" style="color:inherit">分类</router-link></span><span   :class='clickHidden'><router-link to='/brand' style="color:inherit">品牌</router-link></span></p>
          </div>
          <div class="icon-font"><router-link to="/page"><i class="iconfont icon-home"></i></router-link></div>
      </div>
      <div v-if="scrollEvent">
           <div class="searchBox">
                <router-link to="/goodsSearch">
                    <img :src="search">
                    <span class="titleText">搜索品牌或商品</span>
                    <router-link to="" class="allBrand" v-if="show">全部品牌</router-link>
                </router-link>
            </div>
            <div v-if="show">
                    <ul class="brand-nav-ul" :class="navShow">
                    <li v-for="(itme,index) of brandNav" :key="index" @click="topColor(index) ">
                        <router-link :to="'#'+itme.href" class="anchor" ></router-link>
                        <div class="brand-nav-class">
                            <div  :class="itme.class"  :style="{webkitMaskImage:'url('+itme.imgSrc+')'}" style="height:.24rem;width:.24rem;-webkit-mask-size: 100% 100%;margin:0 auto;"></div>
                            <span :class="itme.classFont">{{itme.text}}</span>
                        </div>
                    </li>
                </ul>   
            </div>
      </div>
          <!-- 监听子组件的show-all-brand事件，执行brandshow（） -->
      <router-view @show-All-Brand="brandshow" @show-srot="sortShow"></router-view> 
  </div>
</template>

<script>
//引入子组件
import WphGoodsSort from "../components/WphGoodsSort"
import WphGoodsBrand from "../components/WphGoodsBrand"
import  searchImg from "../assets/brandImgs/search.png"

export default {
  name: 'goodsSort',
   data(){
    return{
      search:searchImg,
      clickShow:"clickShow",
      clickHidden:"brant",
      show:false,
      scrollEvent:true,
      clickNav:false,
      navShow:"",
      brandNav:[
              {
                  href:"useLove",
                  text:"猜你喜欢",
                  imgSrc:require("../assets/brandImgs/useLove.png"),
                  class:"pitchColor",
                  classFont:"pitchFontColor"
              },
              {
                  href:"woman",
                  text:"女装",
                  imgSrc:require("../assets/brandImgs/woman.png"),
                  class:"defaultColor",
                  classFont:"defaultFontColor"
              },
               {
                  href:"shoe",
                  text:"鞋靴",
                  imgSrc:require("../assets/brandImgs/shoe.png"),
                  class:"defaultColor",
                  classFont:"defaultFontColor"
              },
               {
                   href:"beauty",
                  text:"美妆",
                  imgSrc:require("../assets/brandImgs/beauty.png"),
                  class:"defaultColor",
                  classFont:"defaultFontColor"
              },
               {
                   href:"mom",
                  text:"母婴",
                  imgSrc:require("../assets/brandImgs/mom.png"),
                  class:"defaultColor",
                  classFont:"defaultFontColor"
              },
               {
                   href:"man",
                  text:"男装",
                  imgSrc:require("../assets/brandImgs/man.png"),
                  class:"defaultColor",
                  classFont:"defaultFontColor"
              },
               {
                   href:"watch",
                  text:"精品",
                  imgSrc:require("../assets/brandImgs/watch.png"),
                  class:"defaultColor",
                  classFont:"defaultFontColor"
              },
               {
                   href:"sport",
                  text:"运动户外",
                  imgSrc:require("../assets/brandImgs/sport.png"),
                  class:"defaultColor",
                  classFont:"defaultFontColor"
              },
               {
                   href:"Underwear",
                  text:"内衣",
                  imgSrc:require("../assets/brandImgs/Underwear.png"),
                  class:"defaultColor",
                  classFont:"defaultFontColor"
              },
               {
                   href:"suitepng",
                  text:"家具家访",
                  imgSrc:require("../assets/brandImgs/suitepng.png"),
                  class:"defaultColor",
                  classFont:"defaultFontColor"
              },
               {
                   href:"iphone",
                  text:"家电数码",
                  imgSrc:require("../assets/brandImgs/iphone.png"),
                  class:"defaultColor",
                  classFont:"defaultFontColor"
              },
               {
                   href:"style",
                  text:"维风尚",
                  imgSrc:require("../assets/brandImgs/style.png"),
                  class:"defaultColor",
                  classFont:"defaultFontColor"
              },
               {
                   href:"bag",
                  text:"箱包",
                  imgSrc:require("../assets/brandImgs/bag.png"),
                  class:"defaultColor",
                  classFont:"defaultFontColor"
              },
               {
                   href:"lifepng",
                  text:"唯品生活",
                  imgSrc:require("../assets/brandImgs/lifepng.png"),
                  class:"defaultColor",
                  classFont:"defaultFontColor"
              },
               {
                   href:"shechi",
                  text:"唯品·奢",
                  imgSrc:require("../assets/brandImgs/shechi.png"),
                  class:"defaultColor",
                  classFont:"defaultFontColor"
              },
               {
                   href:"international",
                  text:"唯品国际",
                  imgSrc:require("../assets/brandImgs/international.png"),
                  class:"defaultColor",
                  classFont:"defaultFontColor"
              },
              {
                  href:"brank",
                  text:"唯品牌",
                  imgSrc:require("../assets/brandImgs/brank.png"),
                  class:"defaultColor",
                  classFont:"defaultFontColor"
              },
              {
                  href:"good",
                  text:"唯品优选",
                  imgSrc:require("../assets/brandImgs/good.png"),
                  class:"defaultColor",
                  classFont:"defaultFontColor"
              }
          ],
    }
  },
  components:{
    //注册组件
    WphGoodsSort,
    WphGoodsBrand
  },
  methods:{
    cheakbox(){
      if(this.show){//true:显示brand页面
          this.clickHidden = "clickShow";//改变class
          this.clickShow = "brant";
      }else{//true:显示brand页面
          this.clickHidden = "brant";
          this.clickShow = "clickShow";
      }
    },
    brandshow(brandShow){
    this.show = brandShow[0];//判断显示那个页面
    //  console.log(this.clickNav?"点击":"没有点击",brandShow[1]?"没有滚动":"滚动了")
     if(this.clickNav == true||brandShow[1] == true){//如果点击，或者没有滚动条事件
        this.clickNav = false//点击事件初始化
        this.scrollEvent = true;//不隐藏
     }
     else if(brandShow[1] == false){//发生滚动事件    
        this.clickNav = false//点击事件初始化
        this.scrollEvent = brandShow[1];//隐藏
     }
         this.cheakbox();
    },
    sortShow(showSort){
      this.show = showSort
      this.cheakbox() 
    },
     topColor(index){
         this.clickNav = true;
        for(let i in this.brandNav){
            this.brandNav[i].class = "defaultColor";
        }
         for(let n in this.brandNav){
            this.brandNav[n].classFont = "defaultFontColor";
        }
        this.brandNav[index].class= "pitchColor"
        this.brandNav[index].classFont= "pitchFontColor" 

         var anchor = this.$el.querySelector('#'+this.brandNav[index].href)
        document.documentElement.scrollTop = anchor.offsetTop
        document.body.scrollTop = anchor.offsetTop
        anchor.scrollIntoView(true);
        // this.navShow = "navShow"
    },
  },
}
</script>

<style>
@import url("../assets/font/font-brant/iconfont.css");
@import url( "../assets/css/mypage.css"); 
.goodsPage{
  height:100%;
  display:flex;
  flex-direction: column;
  /* overflow: hidden; */
}
.goodsPage::-webkit-scrollbar{
        display:none !important;
        width:0 !important;
    }
 /* header */
.goodsSortTop{
        width:100%;
        height:4.4em;
        background:#fbfbfa;
        font-size:1px;
        display:flex;
        justify-content: space-between;
        /* position:fixed;
        top:0; */
        z-index: 100;
        visibility: visible;
    }
    .tap{
      flex:1;
      display: flex;
      justify-content: center;
      align-items: center;
    }    
    .tap>p{
      border:1px solid #585c64;
      width:auto; 
      border-radius:3px;
    }
    .tap>p>span{
      display: inline-block;
      width:.8rem;
      height:.25rem;
      font-size:.14rem;
      text-align:center;
      line-height: .25rem;
    }
    .clickShow{
      color:#fff !important;
      background-color:#585c64 !important;
    }
    .brant{
      color:#585c64;
      background-color:#fff;
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
    .icon-font{
      font-size:0;
      width:.41rem;
      padding-left:.15rem;
      height:.44rem;
      text-align:left;
      line-height:.44rem;
    }
    .icon-font .icon-fanhui{
      font-size:.16rem;
    }
    .iconfont{
      color:#222;
      font-weight: 600;
      font-size:.25rem;
    }
      
    /* search */
    .searchBox{
      width:100%;
      box-sizing: border-box;
      padding:.1rem .15rem;
      background-color:#f3f4f5;
      font-size:0; 
      position: relative; 
      visibility: visible;
    }
    .searchBox>a{
      height:.35rem;
      background-color:#fff;
      display:flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #d8d8d8;
      border-radius:1px;
    }
     .searchBox>a>img{
       width:.14rem;
       height:.14rem;
       margin-right:.05rem;
     }
    .titleText{
      font-size:.14rem;
      color:#98989f;
    }
    /* goodsMain */
    .goodsMain{
      overflow: hidden;
      flex:1;
      display:flex;
    }
    /* allBrand */
    .allBrand{
      position: relative;
      right:-.55rem;
      height:50%;
      border-left:2px solid rgba(152,152,159,.5);
      width:1.13rem;
      font-size:.14rem;
      text-align:center;
      line-height:inherit;
      color:#222;
      font-weight:600;
      /* display:none; */
    }
</style>
