import Vue from 'vue'
import Router from 'vue-router'
import app from "../App.vue"
import page from "@/page/page.vue"
import goodsSort from "@/page/goodsSort.vue"
import goodsSearch from "@/page/goodsSearch.vue"

import wphGoodsSort from "@/components/WphGoodsSort.vue"
import wphGoodsBrand from "@/components/WphGoodsBrand.vue"
// import search from "@/components/WphGoodsSearch.vue"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name:"app",
      component: app
    },
    {
      path: "/page",
      name:"mypage",
      component: page
    },
    {
      path:"/goodsSearch",
      // name:"mygoodsSearch",
      component:goodsSearch,
    },
    {
      path: "/sorts",
      // name:"goodsSort",
      component: goodsSort,
      children:[{
        path:"/",
        name:"wphGoodsSort",
        component:wphGoodsSort
      },{
        path:"/brand",
        name:"wphGoodsbrand",
        component:wphGoodsBrand
      }]
    }
  ],
  mode:"history"
})
