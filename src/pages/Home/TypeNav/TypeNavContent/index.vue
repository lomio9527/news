<template>
  <div>
  <div class="w">
    <div class="alls" v-for="(cat, index) in newscontent" :key="index">
      <!-- 详情页头部 -->
      <div class="header">
        <h1 title="">{{ cat.title }}</h1>
      </div>
      <div class="content main" >
        <div class="content-top">
          <span class="pindao" @click="$router.back()">
             {{ cat.channelName }}
          </span>
          <span class="time">{{ cat.pubDate }}</span>
        </div>
        <div class="content-bottom">
          <p v-html="cat.html">
           <br />
            <!-- <img :src="cat.img" alt="" width="70%" height="40%" /> -->
          </p>
        
        </div>
          
      </div>
     <!--  <Footer/> -->
    </div>
     
  </div>

  

  </div>
  
</template>

<script >
import Footer from "@/components/Footer/footer";
//引入三次封装的api请求函数getDetail
import { getDetail } from "@/api/detail";
import axios from "axios";
import { mapState } from "vuex";
export default {
  name: "TypeNavContent",
  components:{
    Footer,
  },
  data() {
    return {
      newscontent: {},
      ids: null,
      id: this.$route.params.id,
       Height: 0,
    };
  },
  computed: {},
  mounted() {
    
    
  
  },

  //接收参数  接收详情页的参数
  created() {
    //console.log(this.$route);
    //let ids = this.$route.params.id
    // console.log(ids);
    //拼接不上要么带斜杠要么数组拼接 血坑
    axios
      .get("http://ali-news.showapi.com/newsList/", {
        // 配置请求头

        headers: {
          // 模板字符串拼接,验证API的用户个人信息
          Authorization: "appcode ce0c0bc919f248c1b984fa2e18149fdf",
        },
        // 配置默认请求参数,没有参数则表示默认值
        params: {
          title: "",
          channelId: "",
          page: "",
          maxResult: 10,
          needHtml: 1,
          needAllList: "",
          needContent: 0,
          id: this.id,
        },
      })
      .then((res) => {
        //console.log(res);
        //console.log(id);
        this.newscontent = res.data.showapi_res_body.pagebean.contentlist;
        //this.newscontent = JSON.parse(JSON.stringify(res.data.showapi_res_body.pagebean.contentlist))

        // console.log(this.newscontent);
      });
  },

  methods: {},

  beforeDestroy() {
    this.$bus.$off("content"); //记得写上销毁事件的名称 不然会全部销毁
  },
};
</script>

<style scoped>
.w{
  height: 100%;
  
}

.alls {
 
  width: 1200px;
  height: 90%;

  margin: 0 auto;
z-index: 999;

}

/* 标题 */
.header {

  margin-top: 20px;
  width: 1200px;
  height: 80px;
  background-color: white;
  box-shadow: 3px 8px 10px -12px; /* 盒子做阴影效果 */

  /* 父盒子利用垂直居中 利用flex布局 在父盒子垂直居中h1 */
  display: flex;
  align-items: center;
  justify-content: center;
}

.header h1 {
  font-size: 25px;
}

/* 内容部分 */
.content {
  float: left;
  width: 1200px;
  height: 90%;
  margin-top: 30px;
  background-color: #f2f5f4;
  margin-bottom: 100px;
}

.content-top {
  width: 100%;
  height: 30px;
  padding-top: 15px;
}

.content .pindao {
  float: left;
  margin-left: 80px;
}

.content .time {
  float: right;
  margin-right: 80px;
}

.content span {
  font-size: 15px;
}

.content {
  margin-top: 50px;
  width: 100%;
  height: 100%;
}

.content-bottom {
   
  /* display: inline; */
  margin: 30px 80px 0 80px;

  width: 800px;
  height: 100%;
  font-size: 18px;
  text-align: center;
 
}

/* p标签文字内容居中 */
.content-bottom p {
  margin: 0 auto;
  width: 1000px;
  height: 100%;
  text-indent: 2em; /* p标签首行缩进 */
  text-align: justify; /* 整齐文字 */
  word-wrap: break-word;
  line-height: 30px;
  margin-bottom: 300px;
  
}

/* 图片 */

/* 图片居中 */
.content-bottom  >>> img {
  display: block;
    width: 66%;
    height: 50%;
    margin: 0 auto;
    margin-top: 10px;
}




@media only screen and (max-width: 768px) {
  .alls {
 
  width: 420px;
  height: 100%;

  margin: 0 auto;
z-index: 999;
}

/* 标题 */
.header {

  margin-top: 20px;
  width: 390px;
  height: 80px;
  background-color: white;
  box-shadow: 3px 8px 10px -12px; /* 盒子做阴影效果 */

  /* 父盒子利用垂直居中 利用flex布局 在父盒子垂直居中h1 */
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
}

.header h1 {
  font-size: 16px;
   text-indent: 2em; /* p标签首行缩进 */
}

/* 内容部分 */
.content {

  float: left;
  width: 420px;
  height: 100%;
  margin-top: 30px;
  background-color: #f2f5f4;
}

.content-top {
  width: 100%;
  height: 30px;
  padding-top: 15px;
}

.content .pindao {
  float: left;
  margin-left: 20px;
}

.content .time {
  float: right;
  margin-right: 20px;
}

.content span {
  font-size: 15px;
}

.content {
  margin-top: 50px;
  width: 100%;
  height: 100%;
}

.content-bottom {
   
  /* display: inline; */
  margin: 0 auto;

  width: 410px;
  height: 100%;
  font-size: 18px;
  text-align: center;
}

/* p标签文字内容居中 */
.content-bottom p {
  margin: 0 auto;
  width: 330px;
  height: 100%;
  text-indent: 2em; /* p标签首行缩进 */
  text-align: justify; /* 整齐文字 */
  word-wrap: break-word;
  line-height: 30px;
  margin-bottom: 300px;
}

/* 图片 */

/* 图片居中 */
.content-bottom  >>> img {
  display: block;
    width: 60%;
    height: 50%;
    margin: 0 auto;
    margin-top: 10px;
}

}

</style>