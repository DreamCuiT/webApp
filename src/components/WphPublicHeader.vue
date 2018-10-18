<template>
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
      <router-link :to="{path:'/###'}"><i class="iconfont icon-xuanxiang"></i></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VphPublicHeader',
  data () {
    return {
      msg: ''
    }
  }
}
</script>
<style scoped>
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
</style>
