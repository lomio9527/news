<template>
  <!-- 首页 -->
  <div class="home">
  <!-- 轮播图 -->
  <div class="banners">
   
 <Banners/>
  </div> 

<!-- 中间内容部分 -->

    <!-- 中部导航栏 --> 
<Recommend/>
<!-- 内容 -->
  <TypeNav/> 
  


  
    
   <!-- 底部 -->
  
 <Footer/>
  
   
  
  </div>
</template>

<script>
//引入组件 
import Banners from "@/pages/Banners/index";
import Recommend from "@/pages/Home/Recommend/index";
import TypeNav from "@/pages/Home/TypeNav/typenav";
import Footer from "@/components/Footer/footer";


export default {

  //注册组件
components:{
  Banners,
  Recommend,
  TypeNav,
  Footer,

  
},
beforeDestroy(){
  location. reload()
}
}
</script>

<style scoped>

.home{
  width: 100%;
 height: 100%;
 margin: 0 auto;

}

@media only screen and (max-width: 768px) {
.home{
  width: 420px;
 height: 100%;
 margin: 0 auto;

}
}

/* 设置地步置底 内容部分必须设置占满中间 */



/* 设置地步置底 */


</style>