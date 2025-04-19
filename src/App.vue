<template>
  <div>
    <Header />
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
//引入

//app渲染her这一步 引入即可
/* import Home from "@/pages/Home" */

//引入swiper样式
import "swiper/swiper.min.css";
import Header from "./components/Header/index.vue";

export default {
  name: "App",
  components: {
    Header,
  },
//限制api只请求一次次数  这样就不用一直请求损耗api次数
  mounted(){
    
    /* 天气 */
     this.$store.dispatch("getWeather",{});
     /* 新闻列表 */
     this.$store.dispatch("getNewsList");
    /* 新闻频道 */
    this.$store.dispatch("getChannel");
    /* 频道详情页 */
   
   
},

  //页面刷新方法 provide / inject声明注入法
  provide() {
    // 父组件中返回要传给下级的数据
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      //定义状态
      isRouterAlive: true,
    };
  },
  methods: {
    reload() {
      //重置   然后要使用的页面进行 inject: ['reload'] 引用   this.reload() //调用刷新
      this.isRouterAlive = false;
      this.$nextTick(function () {
        this.isRouterAlive = true;
      });
    },
  },
};
</script>

<style>
</style>
