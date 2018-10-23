<template>
  <div >
      <div class="nav-component" v-for="(i,index) in navImg" :key="index">
          <router-link to="#"  v-for="(a,n) in navImg[index].nav" :key="n">
              <img :src="a.imgSrc">
          </router-link>
      </div>
      <Discount></Discount>
      <div class="specialtyImg">
           <h3>今日特卖 - 每天早10点晚8点上新</h3>
            <!-- <img :src="imgSrc"> -->
      </div>
      <div class="activityBox">
          <div class="activity" v-for="(activity,index) of activityInif" :key="index">
            <div><img :src="activity.activityImg"></div>
            <div class="activityPageTitle">
                <p>{{activity.activityName}}</p>
                <div>
                    <img :src="discountImg">
                        {{activity.activityZhe}}
                </div>
                <div>剩<span class="activityDay">{{activity.activityDay[0]}}</span>{{activity.activityDay[1]}}</div>
            </div>
        </div>    
      </div>
  </div>
</template>

<script>
//引入图片
import discountImg from "../assets/imgs/pms.png"

//引入子组件
import Discount from "../components/Discount"

export default {
  name: 'SpecialtyToday',
  data(){
      return{
        //   imgSrc:imgSrc,
          discountImg:discountImg,
          navImg:[
              {
                  nav:[
                      {
                          imgSrc:require("../assets/imgs/nav-1.jpg")
                      },
                      {
                          imgSrc:require("../assets/imgs/nav-2.jpg")
                      },
                      {
                          imgSrc:require("../assets/imgs/nav-3.jpg")
                      },
                      {
                          imgSrc:require("../assets/imgs/nav-4.jpg")
                      },
                      {
                          imgSrc:require("../assets/imgs/nav-5.jpg")
                      }
                  ]
              },
              {
                   nav:[
                      {
                          imgSrc:require("../assets/imgs/nav-6.jpg")
                      },
                      {
                          imgSrc:require("../assets/imgs/nav-7.jpg")
                      },
                      {
                          imgSrc:require("../assets/imgs/nav-8.jpg")
                      },
                      {
                          imgSrc:require("../assets/imgs/nav-9.jpg")
                      },
                      {
                          imgSrc:require("../assets/imgs/nav-10.jpg")
                      }
                  ]
              }
          ],
          activityInif:[
              {
                  activityImg:require("../assets/imgs/sepac-1.jpg"),
                  activityName:"嘉曼品牌钜献",
                  activityDay:["3","天"],
                  activityZhe:" 全场8.5折"
              },
              {
                  activityImg:require("../assets/imgs/todayHot-1.jpg"),
                  activityName:"万圣潮童变装秀-母婴童装",
                  activityDay:["3","天"],
                  activityZhe:" 全场5.5折"
              },
              {
                  activityImg:require("../assets/imgs/todayHot-2.jpg"),
                  activityName:"衣香丽影YSING今日大牌女装专场",
                  activityDay:["2","天"],
                  activityZhe:" 全场6.5折"
              },
              {
                  activityImg:require("../assets/imgs/todayHot-3.jpg"),
                  activityName:"嘉曼品帕罗paluopo绒暖冬日上新专场-今日大牌牌钜献",
                  activityDay:["1","天"],
                  activityZhe:" 全场1.5折"
              },
              {
                  activityImg:require("../assets/imgs/todayHot-4.jpg"),
                  activityName:"帕罗paluopo绒暖冬日上新专场-今日大牌",
                  activityDay:["20","天"],
                  activityZhe:" 全场8.5折"
              },
              {
                  activityImg:require("../assets/imgs/todayHot-5.jpg"),
                  activityName:"潮靴盛典--GIORGIO FABIANI 欧洲名鞋馆专场",
                  activityDay:["3","天"],
                  activityZhe:" 全场8.5折"
              },
              {
                  activityImg:require("../assets/imgs/todayHot-6.jpg"),
                  activityName:"今日大牌一件包邮--迪士尼卡通玩具专场直发货",
                  activityDay:["3","天"],
                  activityZhe:" 全场8.5折"
              },
              {
                  activityImg:require("../assets/imgs/todayHot-7.jpg"),
                  activityName:"瑞典FOREO LUNA天后同款淡纹洁面仪海外专场",
                  activityDay:["3","天"],
                  activityZhe:" 全场8.5折"
              },
              {
                  activityImg:require("../assets/imgs/todayHot-8.jpg"),
                  activityName:"宝姿PORTS男女装混合专场",
                  activityDay:["3","天"],
                  activityZhe:" 全场8.5折"
              },
              {
                  activityImg:require("../assets/imgs/todayHot-9.jpg"),
                  activityName:"MSAY扮美季女装专场",
                  activityDay:["3","天"],
                  activityZhe:" 全场8.5折"
              },
              {
                  activityImg:require("../assets/imgs/todayHot-10.jpg"),
                  activityName:"百丽BeLLE男女鞋混合专场",
                  activityDay:["3","天"],
                  activityZhe:" 全场8.5折"
              },
              {
                  activityImg:require("../assets/imgs/todayHot-11.jpg"),
                  activityName:"好物温暖家-主会场",
                  activityDay:["3","天"],
                  activityZhe:" 全场8.5折"
              },
              {
                  activityImg:require("../assets/imgs/todayHot-12.jpg"),
                  activityName:"欧莱雅Loreal化妆品专场",
                  activityDay:["3","天"],
                  activityZhe:"购物满259/399元即送相应礼品，数量有限，送完即止"
              },
              {
                  activityImg:require("../assets/imgs/todayHot-13.jpg"),
                  activityName:"雅诗兰黛EsteeLauder化妆品专场",
                  activityDay:["3","天"],
                  activityZhe:" 全场8.5折"
              },
              {
                  activityImg:require("../assets/imgs/todayHot-14.jpg"),
                  activityName:"韩束KANS化妆品专场",
                  activityDay:["3","天"],
                  activityZhe:" 购物满指定金额即送相应礼品，数量有限，送完即止,新人专享，折上8折优惠"
              },
              {
                  activityImg:require("../assets/imgs/todayHot-15.jpg"),
                  activityName:"皮尔·卡丹pierre cardin袜子保暖专场",
                  activityDay:["3","分"],
                  activityZhe:" 全场8.5折"
              },
              {
                  activityImg:require("../assets/imgs/todayHot-16.jpg"),
                  activityName:"美鞋放肆购-天美意teenmix女鞋包混合专场",
                  activityDay:["3","天"],
                  activityZhe:" 全场8.5折"
              },
              {
                  activityImg:require("../assets/imgs/todayHot-17.jpg"),
                  activityName:"耐克Nike运动休闲男女专场",
                  activityDay:["3","天"],
                  activityZhe:" 全场8.5折"
              },
              {
                  activityImg:require("../assets/imgs/todayHot-18.jpg"),
                  activityName:"嘉曼品牌钜献",
                  activityDay:["3","天"],
                  activityZhe:" 全场8.5折"
              },
              {
                  activityImg:require("../assets/imgs/todayHot-19.jpg"),
                  activityName:"嘉曼品牌钜献",
                  activityDay:["3","天"],
                  activityZhe:" 全场8.5折"
              },
              {
                  activityImg:require("../assets/imgs/todayHot-20.jpg"),
                  activityName:"嘉曼品牌钜献",
                  activityDay:["3","天"],
                  activityZhe:" 全场8.5折"
              },
              {
                  activityImg:require("../assets/imgs/todayHot-21.jpg"),
                  activityName:"嘉曼品牌钜献",
                  activityDay:["3","天"],
                  activityZhe:" 全场8.5折"
              },
              {
                  activityImg:require("../assets/imgs/todayHot-22.jpg"),
                  activityName:"嘉曼品牌钜献",
                  activityDay:["3","天"],
                  activityZhe:" 全场8.5折"
              },
              {
                  activityImg:require("../assets/imgs/todayHot-23.jpg"),
                  activityName:"嘉曼品牌钜献",
                  activityDay:["3","天"],
                  activityZhe:" 全场8.5折"
              },
              {
                  activityImg:require("../assets/imgs/todayHot-24.jpg"),
                  activityName:"嘉曼品牌钜献",
                  activityDay:["3","天"],
                  activityZhe:" 全场8.5折"
              },
              {
                  activityImg:require("../assets/imgs/todayHot-25.jpg"),
                  activityName:"嘉曼品牌钜献",
                  activityDay:["3","天"],
                  activityZhe:" 全场8.5折"
              },
              {
                  activityImg:require("../assets/imgs/todayHot-26.jpg"),
                  activityName:"嘉曼品牌钜献",
                  activityDay:["3","天"],
                  activityZhe:" 全场8.5折"
              },
              {
                  activityImg:require("../assets/imgs/todayHot-27.jpg"),
                  activityName:"嘉曼品牌钜献",
                  activityDay:["3","天"],
                  activityZhe:" 全场8.5折"
              },
              {
                  activityImg:require("../assets/imgs/todayHot-28.jpg"),
                  activityName:"嘉曼品牌钜献",
                  activityDay:["3","天"],
                  activityZhe:" 全场8.5折"
              },
              {
                  activityImg:require("../assets/imgs/todayHot-29.jpg"),
                  activityName:"嘉曼品牌钜献",
                  activityDay:["3","天"],
                  activityZhe:" 全场8.5折"
              },
               {
                  activityImg:require("../assets/imgs/todayHot-30.jpg"),
                  activityName:"嘉曼品牌钜献",
                  activityDay:["3","天"],
                  activityZhe:" 全场8.5折"
              },
          ]
      }
  },
  components:{
      Discount
  }
}
</script>
    
<style>
.nav-component{
    font-size:0;
    height:auto;
     clear:both;
}
.nav-component:after{
    content: ".";
    display:block;
    clear:both;
    overflow: hidden;
    visibility: hidden;
    height:0;    
    font-size:0;
}
.nav-component>a{
    display:inline-block;
    width:20%;
    height:20%;
    text-align:center;
}
.nav-component>a>img{
    width:100%;
    height:100%;
}
.specialtyImg>h3 {
   font-size:.16rem;
   color:#4f0000;
   padding:.16rem 0 .04rem 0;
   width:100%; 
   text-align: center;
   background-color:#fff;
}
.specialtyImg>img{
    width:100%;
    height:2.3rem;
}
.activityBox{
    background-color:#f3f4f5
}
.activity{
    background-color:#fff;
    margin-top:.1rem;
}
.activity>div:first-child>img{
    width:100%;
    height:1.8rem;
}
.activity>div:last-child{
    box-sizing: border-box;
    width:100%;
    padding: .1rem .12rem .14rem;
}
.activity>div:last-child P{
    font-size:.16rem;
    font-weight: 600;
    width:80%;
    /* 设置文本强制在一行显示 */
    white-space: nowrap;
    overflow:hidden;
    /* 设置文本溢出显示省略号 */
    text-overflow: ellipsis;
}
.activity>div:last-child div:nth-child(2){
    font-size: .14rem;
    color:#5771a8;
    text-indent:.05rem;
    margin-top:.07rem;
}
.activity>div:last-child div:nth-child(2)>img{
    width:.19rem;
    height: .19rem;
    float:left; 
}
.activity>div:last-child div:nth-child(3){
    position:absolute;
    top:.1rem;
    right:.12rem;
    font-size:.13rem;
    color:#98989f;
}
.activityDay{
      font-size:.12rem;
      color:#98989f;
}
.activityPageTitle{
    position:relative;
}
</style>
