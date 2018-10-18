<template>
    <div class="publicfooter">
        <div class="publicFooerTop">
          <p>早10晚8，更多特卖，敬请期待！</p>
        </div>
        <div class="publicFooterMiddle">
          <ul class="clearfix">
            <li>
              <img src="../assets/imgs/shangxian.jpg" alt="">
              <p>即将上线</p>
            </li>
            <li>
              <img src="../assets/imgs/tuangou.jpg" alt="">
              <p>唯品团购</p>
            </li>
            <li>
              <img src="../assets/imgs/baozhang.jpg" alt="">
              <p>正品保证</p>
            </li>
            <li>
              <img src="../assets/imgs/kefu.jpg" alt="">
              <p>唯品客服</p>
            </li>
          </ul>
          <div class="pfDownload">
            <img src="../assets/imgs/logo.jpg" alt="">
            <p>唯品会客户端特卖抢不停</p>
            <div class="pfdBtn">
              下载
            </div>
          </div>
          <div class="pfdIndex">
            <div class="pfdiLedt">
              <p>唯品会首页</p>
              <p>关于我们</p>
            </div>
            <div class="pfdiRight">
              <p>登录</p>
              <p>注册</p>
            </div>
          </div>
        </div>
        <div class="publicFooterDown">
          <p>Copyright © 2008-2017 m.vip.com, All Rights Reserved 粤ICP备08114786号</p>
          <div class="pfdDown">
            <img src="../assets/imgs/guohui.jpg" alt=""><p>粤公网安备 44010302000068号</p>
          </div>
        </div>
        <div class="publicFixBoxLeft">
          <i class="iconfont icon-cart-copy"></i>
        </div>
        <div class="publicFixBoxRight">
          <i class="iconfont icon-jiantou"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WphPublicFooter"
    }
</script>

<style scoped>
  .publicFooerTop{
    padding: 0.2rem 0.1rem;
    border-top: 1px solid #ccc;
    color: #999;
    text-align: center;
    font-size: 0.12rem ;
    margin-bottom: 0.1rem;
  }
  .publicFooterMiddle ul{
    margin-bottom: 0.36rem;
    display:flex;
    font-size:0;
  }
  .publicFooterMiddle li{
    width: 25%;
    height: 0.57rem;
    padding: 0.14rem 0;
    border-right:1px solid #ccc;
  }
  .publicFooterMiddle li:last-child{
    border:none
  }
  .publicFooterMiddle li img{
    width: 0.38rem;
    height: 0.37rem;
    display: block;
    margin: 0 auto;
  }
  .publicFooterMiddle li p{
    color: #666;
    text-align: center;
    font-size: 0.12rem;
  }
  .clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  .pfDownload{
    height: 0.42rem;
    padding: 0.1rem 0.15rem;
    background: #f3f4f5;
  }
  .pfDownload img{
    float: left;
    width: 0.42rem;
    height: 0.42rem;
    margin-right: 0.1rem;
  }
  .pfDownload p{
    float: left;
    color: #222;
    font-size: 0.14rem;
    height: 100%;
    line-height: 0.42rem;
  }
  .pfdBtn{
    margin-top:0.06rem;
    float: right;
    width: 0.68rem;
    height: 0.28rem;
    border: 1px solid #cf3e8e;
    color: #cf3e8e;
    font-size: 0.12rem;
    text-align: center;
    line-height: 0.28rem;
    border-radius: 0.03rem;
  }
  .pfdIndex{
    height: 0.24rem;
    padding: 0.05rem 0.1rem 0 0.1rem;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    background: #f3f4f5;
  }
  .pfdIndex p{
    font-size: 0.14rem;
    color: #585c64;
    line-height: 0.24rem;
    padding: 0 0.05rem;
  }
  .pfdiLedt{
    display: flex;
  }
  .pfdiRight{
    display: flex;
  }
  .publicFooterDown{
    padding: 0.15rem 0.1rem 0 0.1rem;
    background: #f3f4f5;
  }
  .publicFooterDown p{
    font-size: 0.12rem;
    text-align: center;
    color: #ccc;
  }
  .pfdDown{
    padding: 0.2rem 0.375rem;
    display: flex;
    justify-content: center;
  }
  .pfdDown img{
    display: block;
    width: 0.2rem;
    height: 0.2rem;
  }
  .publicFixBoxLeft{
    position: fixed;
    left: 0.1rem;
    bottom: 0.2rem;
    width: 0.42rem;
    height: 0.45rem;
    border-radius: 50%;
    background: rgba(25,29,38,.95);
    z-index: 999;
    text-align: center;
    line-height: 0.45rem;
  }
  .publicFixBoxLeft i{
    display: block;
    color: white;
    font-size: 0.24rem;
  }
  .publicFixBoxRight{
    position: fixed;
    right: 0.1rem;
    bottom: 0.2rem;
    width: 0.42rem;
    height: 0.45rem;
    border-radius: 50%;
    background: rgba(25,29,38,.95);
    z-index: 999;
    text-align: center;
    line-height: 0.45rem;
  }
  .publicFixBoxRight i{
    display: block;
    color: white;
    font-size: 0.24rem;
  }
</style>
