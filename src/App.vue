<template>
  <div id="app">
      <page></page>
  </div>
</template>

<script>
//App.vue是主组件(放所有子组件)
//引入子组件
import page from "./page/page.vue"

export default {
  name: 'App',
  components:{
    //注册组件
    page
  }
}
</script>

<style>

</style>
