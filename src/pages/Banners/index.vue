<template>
    <!-- 轮播图 -->
       <!-- Swiper -->
     <!-- swiper1 -->
    <!-- <div class="title">基本效果-小圆点和左右切换</div> -->
    <div class="alls">

        <div class="swiper-container swiper1">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="@/pages/Banners/images/ban-5.png" alt="" />
            </div>
            <div class="swiper-slide">
              <img src="@/pages/Banners/images/ban-6.png" alt="" />
            </div>
            <div class="swiper-slide">
              <img src="@/pages/Banners/images/ban-7.png" alt="" />
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>

          <div class="swiper-button-prev"></div>
          <!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
          <div class="swiper-button-next"></div>
          <!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
        </div>
     
 </div>

</template>

<script>
 
import { defineComponent, onMounted } from "vue";
import Swiper, {
  Autoplay,
  EffectCoverflow,
  EffectCube,
  Pagination,
  Navigation,
} from "swiper";
Swiper.use([Autoplay, EffectCoverflow, EffectCube, Pagination, Navigation]);

// swiper-bundle.min.css 决定了小圆点和左右翻页标签，如果不需要可以不引用
import "swiper/swiper-bundle.min.css";

// swiper.less/sass/css 决定了基础的样式
//import 'swiper/swiper-bundle.css'






export default {
name:'swiper',
components:{
 
   },
 

      methods: {    
        initSwiper(){
            new Swiper('.swiper1', {
                pagination: {
                    el: '.swiper-pagination',
                },
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                },
                loop: true,
                on: {
                    navigationShow: function () {
                        console.log('按钮显示了');
                    },
                },
            });
        }
    },
    mounted() {
        // 如果为异步获取数据，需要给标签添加 v-if ，在数据获取到的回调中，如 ajax 的回调中 调用初始化 initSwiper 方法，且v-if 为 true；
        // vue3 获取异步数据同理；
        // 需要使用 this.$nextTick
        // 例：
        setTimeout(()=>{
            this.$nextTick(() => {
                 this.initSwiper();
        })
        })
    },
}
</script>
<style scoped lang ="less">

.alls{

  width: 100%;
  height:700px;


}

 .swiper-container{
   
  width: 100%;
  height: 700px;
  margin: 0 auto;

}
 
.swiper-wrapper{
  width: 100%;
  height: 700px;

}

.swiper-slide{
   /* // display: inline; */
    /* overflow: hidden; */
    width: 100%;
    height: 100%;
}

   .swiper-slide img {
       /* display: block;
        margin:0 auto ; */
        width: 100%;
        height: 100%;
       /*  object-fit: cover; */
        
      }

@media only screen and (max-width: 768px) {
  /* 当屏幕小于768时候 使用这个样式 */
  /* 平板横屏或电脑  媒体查询.自上而下  大屏配置需要写在上文*/
  /* 就近原则,如果1024px设置了某值,
  则低于1024的所有屏幕都适用,700设置的值若是上方没有,会被使用 */
   
 .alls{

  width: 420px;
  height: 180px;


}

 .swiper-container{
   
  width: 420px;
  height: 180px;
float: left;

}
 
.swiper-wrapper{
  width: 420px;
  height: 180px;

}

.swiper-slide{
   /* // display: inline; */
    /* overflow: hidden; */
    width: 420px;
    height: 180px;
}

   .swiper-slide img {
      /*  display: block;
        margin:0 auto ; */
        width: 100%;
        height: 100%;
        object-fit: cover;
        
      }
}



</style>