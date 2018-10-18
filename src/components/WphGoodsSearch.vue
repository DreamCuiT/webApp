<template>
    <div @onload="sortShow">
        <div class="search-box">
            <div class="icon-font">
                <i class="iconfont icon-fanhui iconleft"></i>
            </div>
            <div class="search-inner">
                <input type="text" placeholder="大家正在搜索：大衣">
            </div>
            <div class="search-btn">搜索</div>
        </div>
        <div class="history hot-search">
             <h2>最近搜索 <span>清空</span></h2>
            <div class="hot-list">
                <span>羽绒服</span>
            </div>
        </div>
        <div class="hot-search">
            <h2>热门搜索</h2>
            <div class="hot-list">
                <span>羽绒服</span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    nama:"WphGoodsSearch",
    data(){
        return{
            showSort:false
        }
    },
    methods:{
        sortShow(){
            this.$emit("show-srot",this.showSort)
        }
    },
    mounted(){
        this.sortShow()
    }
}
</script>

<style>
@import url("../assets/font/font-brant/iconfont.css");
.search-box{
    width:100%;
    height:.45rem;
       display:flex;
    justify-content: space-between;
    align-items: center;
}
.icon-font{
    font-size:0;
    padding-right:.1rem;
    display:inline-block;
    height:.45rem;
    line-height:.45rem;
    padding-left:.1rem;
}
.iconfont{
    font-size:.23rem;
}
.search-inner{
    font-size:0;
    flex:1;
    /* height:inherit; */
    text-align:center;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius:3px;
    border: 1px solid #ccc;
}
.search-inner>input{
    border:0;
    outline:0;
    padding:.06rem .1rem;
    width:100%;
    height: 100%;
    border-radius:3px;
    box-sizing: border-box;
    background-color:#f3f4f5;
    font-size:.14rem;
}
.search-btn{
    width:.6rem;
    height:inherit;
    font-size:.16rem;
    text-align:center;
    color:#555;
    line-height: .45rem;
}
 /* hot-search */
 .hot-search{
     padding:.16rem .15rem 0;
     box-sizing: border-box;
     width:100%;
     font-size:0;
 }
  .hot-search>h2{
      font-size:.12rem;
      font-weight:400;
      margin-bottom:.15rem;
  }
  .hot-list>span{
      display: inline-block;
      font-size:.12rem;
      padding: 0 .15rem;
      margin:.05rem .05rem .05rem 0;
      height:.28rem;
      line-height:.28rem;
      color:#5d78ab;
      box-sizing: border-box;
      border: 1px solid #c4cddc;
      border-radius: 2px;
  }
  /* history */
  .history{
      padding-bottom:.2rem;
      margin:.05rem 0;
      display: none;
  }
  .history>h2>span{
      font-size:.12rem;
      color:#585c64;
      float:right;
  }
</style>
