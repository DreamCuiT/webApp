<template>
  <div class="publicContent">
    <div class="publicContentOne" v-show="done">
      <ul>
        <li><p><span>今日推荐</span></p></li>
        <li><p><span>最后疯抢</span></p></li>
        <li><p><span>时尚</span></p></li>
        <li><p><span>美妆</span></p></li>
        <li><p><span>母婴</span></p></li>
        <li><p><span>家电</span></p></li>
        <li><p><span>家居</span></p></li>
        <li><p><span>国际</span></p></li>
        <li><p><span>生活</span></p></li>
      </ul>
      <div class="poBth" @click="two">
        <i class="iconfont icon-down-trangle"></i>
      </div>
    </div>
    <div class="publicContentTwo" v-show="dtwo">
      <div class="pctNvaOne">
        <h3>精选推荐</h3>
        <div class="ptBtn" @click="one">
          <i class="iconfont icon-shang"></i>
        </div>
        <ul class="clearfix">
          <li>
            <img src="../assets/imgs/tujiian.png" alt="">
            <span>今日推荐</span>
          </li>
          <li>
            <img src="../assets/imgs/fengqiang.png" alt="">
            <span>最后疯抢</span>
          </li>
          <li>
            <img src="../assets/imgs/shizhuang.png" alt="">
            <span>时装</span>
          </li>
          <li>
            <img src="../assets/imgs/meizhuang.png" alt="">
            <span>美妆</span>
          </li>
          <li>
            <img src="../assets/imgs/muying.png" alt="">
            <span>母婴</span>
          </li>
          <li>
            <img src="../assets/imgs/tujiian.png" alt="">
            <span>今日推荐</span>
          </li>
          <li>
            <img src="../assets/imgs/tujiian.png" alt="">
            <span>今日推荐</span>
          </li>
          <li>
            <img src="../assets/imgs/jiadian.png" alt="">
            <span>家电</span>
          </li>
          <li>
            <img src="../assets/imgs/jiaju.png" alt="">
            <span>家居</span>
          </li>
          <li>
            <img src="../assets/imgs/guoji.png" alt="">
            <span>国际</span>
          </li>
          <li>
            <img src="../assets/imgs/shenghuo.png" alt="">
            <span>生活</span>
          </li>
        </ul>
      </div>
      <div class="pctNvaTwo">
        <h3>更多推荐</h3>
        <ul class="clearfix">
          <li><p>女装</p></li>
          <li><p>男装</p></li>
          <li><p>鞋包</p></li>
          <li><p>户外运动</p></li>
          <li><p>家居家纺</p></li>
          <li><p>数码家电</p></li>
          <li><p>大家电</p></li>
          <li><p>家具家装</p></li>
          <li><p>手表配饰</p></li>
          <li><p>男女内衣</p></li>
          <li><p>喂风尚</p></li>
          <li><p>唯品优选</p></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "VphPublicContent",
        data () {
          return {
            done:true,
            dtwo:false
          }
        },
        methods: {
          one : function () {
            this.done = true,
              this.dtwo = false
          }
          ,
          two : function(){
            this.dtwo=true,
            this.done=false
          }
        }
    }
</script>

<style scoped>
  .publicContent{
    width: 100%;
    position: relative;
  }
  .publicContentOne{
    background: #f9f9fa;
    overflow-x: scroll;
  }
  .publicContentOne ul{
    width: 100%;
    display: table;
    height: 0.34rem;
  }
  .publicContentOne li{
    display: table-cell;
    white-space: nowrap;
  }
  .publicContentOne li p{
    margin: 0 0.1rem;
    padding-top:0.08rem ;
  }
  .publicContentOne li span{
    font-size: 0.14rem;
    display: block;
  }
  .poBth{
    position: absolute;
    top: 0;
    right: 0;
    width: 0.4rem;
    height: 0.34rem;
    text-align: center;
    line-height: 0.34rem;
    background: #f9f9fa;
  }
  .poBth i{
    display: block;
    font-size: 0.18rem;
    color: #585c64;
  }
  .pctNvaOne{
    width: 100%;
    position: relative;
  }
  .publicContentTwo h3{
    font-size: 0.12rem;
    color: #585c64;
    margin-left: 0.1rem;
    font-weight: 100;
    height: 0.34rem;
    line-height: 0.34rem;
  }
  .ptBtn{
    position: absolute;
    top: 0;
    right: 0;
    width: 0.4rem;
    height: 0.34rem;
    text-align: center;
    line-height: 0.34rem;
    background: white;
  }
  .ptBtn i{
    display: block;
    font-size: 0.18rem;
    color: #585c64;
  }
  .pctNvaOne li{
    width: 25%;
    height: 0.58rem;
    float: left;
    padding-top:0.14rem ;
  }
  .pctNvaOne li img{
    width: 0.2rem;
    height: 0.2rem;
    display: block;
    margin: 0 auto;
  }
  .pctNvaOne li span{
    display: block;
    font-size: 0.12rem;
    text-align: center;
    margin-top: 0.08rem;
    color: #585c64;
  }
  .clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  .pctNvaTwo li{
    width: 25%;
    float: left;
    height: 0.43rem;
    padding-top: 0.05rem;
  }
  .pctNvaTwo li p{
    font-size: 0.12rem;
    width: 0.78rem;
    height: 0.38rem;
    background: #f3f4f5;
    text-align: center;
    line-height: 0.38rem;
    margin: auto;
    border-radius: 0.02rem;
  }

</style>
