<template>
  <div class="goodsPage">
      <div class="goodsSortTop">
          <div class="icon-font"><i class="iconfont icon-fanhui iconleft"></i></div>
          <div class="tap">
              <p><span  :class='clickShow'><router-link to="/sorts/" style="color:inherit">分类</router-link></span><span   :class='clickHidden'><router-link to='/brand' style="color:inherit">品牌</router-link></span></p>
          </div>
          <div class="icon-font"><router-link to="/page"><i class="iconfont icon-home"></i></router-link></div>
        </div>
        <div class="searchBox">
              <router-link to="/goodsSearch">
                <img :src="search">
                <span class="titleText">搜索品牌或商品</span>
                <router-link to="" class="allBrand" v-if="show">全部品牌</router-link>
              </router-link>
      </div>
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
      show:false
    }
  },
  components:{
    //注册组件
    WphGoodsSort,
    WphGoodsBrand
  },
  methods:{
    cheakbox(){
      if(this.show){
          this.clickHidden = "clickShow";
          this.clickShow = "brant";
      }else{
          this.clickHidden = "brant";
          this.clickShow = "clickShow";
      }
    },
    brandshow(brandShow){
      this.show = brandShow
      this.cheakbox() 
    },
    sortShow(showSort){
      this.show = showSort
      this.cheakbox() 
    }
  },
  // mounted(){
  //    this.cheakbox() 
  // }
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
