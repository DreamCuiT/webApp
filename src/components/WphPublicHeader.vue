<template>
  <div class="publicHead">
    <div class="publicHeader">
      <div class="phLeft">
        <router-link :to="{path:'###'}"><i class="iconfont icon-yuanchenghuizhen-"></i></router-link>
      </div>
      <div class="phTitle">
        <input type="text">
        <div class="phhTxt">
          <span>大家都在搜索 :</span>
          <span>衬衫</span>
        </div>
      </div>
      <div class="phRight">
        <router-link :to="{path:'/sorts'}"><i class="iconfont icon-xuanxiang"></i></router-link>
      </div>
    </div>
    <div class="publicContent">
      <div class="publicContentOne" v-show="done">
        <ul>
          <li><router-link :to="{path:'/'}" :class="{'purple': taday}"><span>今日推荐</span></router-link></li>
          <li><router-link :to="{path:'/later'}" ><span>最后疯抢</span></router-link></li>
          <li><router-link :to="{path:'/fashion'}" :class="{'purple': fashion}"><span>时尚</span></router-link></li>
          <li><router-link :to="{path:'/meimeida'}"><span>美妆</span></router-link></li>
          <li><router-link :to="{path:'/mother'}" :class="{'purple': mother}"><span>母婴</span></router-link></li>
          <li><router-link :to="{path:'/appliances'}" :class="{'purple': homedian}"><span>家电</span></router-link></li>
          <li><router-link :to="{path:'/home'}"><span>家居</span></router-link></li>
          <li><router-link :to="{path:'/internation'}"><span>国际</span></router-link></li>
          <li><router-link :to="{path:'/lift'}"><span>生活</span></router-link></li>
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
  </div>

</template>

<script>
  export default {
    name: "VphPublicHeader",
    data () {
      return {
        done:true,
        dtwo:false,
        jiadian:false,
        taday:false,
        fashion:false,
        mother:false,
        homedian:false,
      }
    },
    created(){
    },
    mounted(){
      this.ispath()
    },
    methods: {
      one () {
        this.$root.Bus.$emit('showSelect', true)
        this.done = true;
          this.dtwo = false;
        return false
      },
      two (){
        this.$root.Bus.$emit('showSelect', false)
        this.dtwo=true
          this.done=false
        return false
      },
      ispath(){
        if(this.$store.state.path=="/appliances"){
          this.homedian=true
        }
        if(this.$store.state.path=="/mother"){
          this.mother=true
        }
        if(this.$store.state.path=="/fashion"){
          this.fashion=true
        }
        if(this.$store.state.path=="/"){
          this.taday=true
        }
      }
    }
  }

</script>
<style scoped>
  @import url('../assets/font/publicIconfont/iconfont.css');
  .publicHead{
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9;
    width: 100%;
  }
  .publicHeader{
    width: 100%;
    height: 0.44rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f9f9fa;
  }
  .publicHeader a{
    display: block;
  }
  .phLeft{
    width: 0.44rem;
    height: 0.44rem;
    text-align: center;
    line-height: 0.44rem;
  }
  .publicHeader i{
    font-size: 0.24rem;
    color:#585c64;
    display: block;
  }
  .phTitle{
    position:relative ;
    width: 2.85rem;
    height: 0.44rem;
  }
  .phTitle input{
    margin-top:0.07rem;
    display: block;
    width: 100%;
    height: 0.26rem;
    border: 1px solid #ccc;
    outline: 0;
    border-radius:0.5rem;
    background: #f3f4f5;
    text-indent: 0.1rem;
  }
  .phhTxt{
    position: absolute;
    left: 0.1rem;
    top: 0.12rem;
    display:flex;
  }
  .phhTxt span{
    font-size: 0.14rem;
    display: block;
    color:#98989f;
  }
  .phhTxt span:nth-child(2){
    margin-left: 0.04rem;
  }
  .phRight{
    width: 0.44rem;
    height: 0.44rem;
    text-align: center;
    line-height: 0.44rem;
  }
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
    display: flex;
    height: 0.34rem;
    flex-wrap:nowrap;
  }
  .publicContentOne li{
    display: table-cell;
    white-space: nowrap;
    height: 0.34rem;
    padding: 0;
  }
  .publicContentOne li a{
    display: block;
    margin: 0 0.1rem;
    padding-top:0.08rem ;
    color: #9a9ca1;
    height: 0.23rem;
    border-bottom: .03rem solid transparent;
  }
  .publicContentOne li span{
    font-size: 0.14rem;
    display: block;
  }
  .poBth{
    position: absolute;
    top: 0;
    right: -0.02rem;
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
    color: #585c64;
  }
  .purple{
    border-color:#d34ba8!important;
    color: #d34ba8!important;
  }
</style>
