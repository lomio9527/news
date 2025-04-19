<template>
  <div class="ty">
    <div class="loading" v-if="!listcontents.length" :style="{height:'100%'}">加载中...</div>
    <div class="type" v-else>
      <!-- 新闻内容部分  -->
      <div class="lists">
        
        <ul class="new-content" >
          <li
            class="content"
            v-for="(list, index) in listcontents"
            :key="index"
            @click="goFocus(index)"
          >
            <div class="content-img">
              <img  :src="list.img" alt="" @error.once="moveImg"/>
            </div>
            <div class="content-bottom">
              <div class="content-bottom-title">
                <a title="">{{ list.title }}</a>
              </div>
              <div class="content-bottom-p">
                <div class="content-bottom-p-time">
                  <p>{{ list.pubDate }}</p>
                </div>
                <div class="content-bottom-p-pindao">
                  <p>{{ list.source }}</p>
                </div>
              </div>
            </div>
          </li>

          <!-- 第二行ul -->
        </ul>
        <!--  <ul class="new-content"></ul> -->
      </div>

      <!-- 更多内容  v-if="a<listcontents.length"-->
      <div class="moreMore" >
        <a class="list-more" @click="litMore()">更多内容></a>
      </div>
   
    </div>
  </div>
</template>

<script>
//引入辅组函数 mapState
import { mapGetters } from "vuex";
import { getlist } from "@/api/channel";
//import { reqlibiao } from "@/api/newslist.js";
import axios from "axios";
export default {
  name: "",
  data() {
    return {
      id: "null",
      listcontents: [],
   
      page: 1, //默认请求api第一页内容
      isActive:true,
      pageIndex: 0, //默认展示第一页的内容
    };
  },

  //当页面挂载完毕之后 就通知Vuex调用接口函数进行发请求
  mounted() {
    //派发的时候也要记得带id
    //this.$store.dispatch("getNewslist");
  },

  computed: {
    height(){
      if(isActive){

      }
    }
  },

  methods: {
    reqlibiao() {
      //console.log(this.$route);
      //接收query参数id
      let id = this.$route.query.channelId;
      if (id) {
        this.id = id;
        window.localStorage.setItem("id", id);
      } else {
        this.id = window.sessionStorage.getItem("id");
      }
      //console.log(this.$route.query.channelId);
      axios
        .get("http://ali-news.showapi.com/newsList", {
          // 配置请求头

          headers: {
            // 模板字符串拼接,验证API的用户个人信息
            Authorization: "appcode ce0c0bc919f248c1b984fa2e18149fdf",
          },
          // 配置默认请求参数,没有参数则表示默认值
          params: {
            title: "",
            channelId: id,
            page:this.page,//默认请求api第一页内容
            maxResult: 50,
            needHtml: 1,
            needAllList: "",
            needContent: 0,
          },
        })
        .then((res) => {
           //console.log(res);

          //this.listcontents = res.data.showapi_res_body.pagebean.contentlist;
          this.listcontents = this.listcontents.concat(res.data.showapi_res_body.pagebean.contentlist);
          //this.listcontents =  JSON.parse(JSON.stringify(this.listcontents =res.data.showapi_res_body.pagebean.contentlist));
          //JSON.parse(JSON.stringify(this.listcontents = res.data.showapi_res_body.pagebean.contentlist));
          //console.log(this.listcontents);

         this.listcontents = this.listcontents.filter(function (item) { return item.img != '=' && item.img  });


        });
    },

    goFocus(index) {
    //  console.log(id);
      //k是随便定义的 怎么命名都可以 传递query参数的    
        this.$router.push({ name: "listdetail", params:{ index }});
      
    },


    /* 获取更多 */
    litMore(){
      /*  页数递增*/
        this.page++;    
      this. reqlibiao()
    },

/*  裂图替换 */
  moveImg(event){
      event.currentTarget.src = require("@/assets/error.png");
      event.currentTarget.style.width = "auto";
      return true;
    },

  },



  created() {

    /* 调用请求接口 */
    this.reqlibiao();
  },
 

};
</script>

<style scoped>
.body {
  background: #f2f5f4;
  
}
/* 屏幕等于1440px */
@media screen and (max-width: 1440px) and (min-width: 1440px) {
.type {

  width: 1200px;
  height: 100%;

  margin: 0 auto;
 
}

}

.lists {
  overflow: hidden;
  width: 1200px;
  height: 100%;
  margin: 0 auto;
}

.new-content {
   
  width: 1200px;
  height: 300px;
   cursor: pointer;
}

.content {
  float: left;
  
  width: 280px;
  height: 280px;
  border-radius: 7px; /* 四个角百略圆 */
  background-color: white;
  margin: 10px;
}

.content-img {
  width: 280px;
  height: 160px;
  /*  background-color: blue; */
}

.content-img img {
  width: 100%;
  height: 100%;
}

.content-bottom {
  width: 280px;
  height: 120px;
  /* background-color: yellow; */
}

.content-bottom-title {
  width: 260px;
  height: 40px;
  /*  background-color: pink; */
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 25px;
}
.content-bottom-title a {
  color: black;
  font-size: 20px;
  word-break: break-all; /* 换行 */
  -webkit-line-clamp: 2; /* 控制行数 */
  /*   下面三行跟超出行数省略配套使用/*/
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical; /* 超出行数省略 */
}

/* 时间频道部分 */

.content-bottom-p {
  width: 250px;
  height: 35px;
  /* background-color: skyblue;  */
  margin: 0 auto;
}

.content-bottom-p p {
  margin-top: 10px;
  margin-right: 10px;
  font-size: 10px;
}

.content-bottom-p-time {
  float: left;
  /*  background-color: blue; */
  width: 150px;
  height: 35px;
}

.content-bottom-p-time p {
  -webkit-line-clamp: 1; /* 控制行数 */
  /*   下面三行跟超出行数省略配套使用/*/
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical; /* 超出行数省略 */
}

.content-bottom-p-pindao {
  float: right;
  width: 100px;
  height: 35px;
  /* background-color: yellow; */
}
.content-bottom-p-pindao p {
  text-align: center;
  -webkit-line-clamp: 1; /* 控制行数 */
  /*   下面三行跟超出行数省略配套使用/*/
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical; /* 超出行数省略 */
}

/* 中间两个li 之间空出距离 */

.content-bottom:hover {
  margin-top: 5px;
  transition: 0.5s;
}

/* 更多 */
.moreMore {
  overflow: hidden;
  background-color: #f3f8ff;
  width: 200px;
  height: 40px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 50px;
  
}

.list-more {
  display: block;
  text-align: center;
  padding-top: 8px;
  font-size: 20px;
}

/* 其它  查看天气 查看娱乐段子 */

.other-img {
  width: 100%;
  height: 100%;
}

.other-left {
  float: left;
  height: 300px;
  width: 590px;

/*   background-color: yellow; */
}

.other-right {
  float: right;
  height: 300px;
  width: 590px;
/*   background-color: blue; */
}

/*  文字定位*/
.other-zong {
  position: relative;
}

.text {
  position: absolute;
  top: 130px;
  left: 150px;
  text-align: center;
  color: white;
  margin: 0 auto;
  font-size: 30px;
}





/* 数据加载中 */
.loading{
  display: block;
  text-align: center;
  margin-top: 100px;
font-size: 25px;
color: red;

}


@media only screen and (max-width: 768px) {
  .type {

  width: 420px;
  height: 100%;

  margin: 0 auto;
 
}

.lists {
  overflow: hidden;
  width: 420px;
  height: 100%;
  margin: 0 auto;
}

.new-content {
   
  width: 420px;
  height: 300px;
   cursor: pointer;
   margin: 0 30px;
}

.content {
  float: left;
  
  width: 380px;
  height: 280px;
  border-radius: 7px; /* 四个角百略圆 */
  background-color: white;
  margin: 30px;
}

.content-img {
  width: 300px;
  height: 190px;
  /*  background-color: blue; */
}

.content-img img {
  width: 100%;
  height: 100%;
}

.content-bottom {
  width: 300px;
  height: 100px;
  /* background-color: yellow; */
  /* margin: 0 auto; */
}

.content-bottom-title {
  width: 260px;
  height: 40px;
  /*  background-color: pink; */
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 25px;
}
.content-bottom-title a {
  color: black;
  font-size: 20px;
  word-break: break-all; /* 换行 */
  -webkit-line-clamp: 2; /* 控制行数 */
  /*   下面三行跟超出行数省略配套使用/*/
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical; /* 超出行数省略 */
}

/* 时间频道部分 */

.content-bottom-p {
  width: 250px;
  height: 35px;
  /* background-color: skyblue;  */
  margin: 0 auto;
}

.content-bottom-p p {
  margin-top: 10px;
  margin-right: 10px;
  font-size: 10px;
}

.content-bottom-p-time {
  float: left;
  /*  background-color: blue; */
  width: 150px;
  height: 35px;
}

.content-bottom-p-time p {
  -webkit-line-clamp: 1; /* 控制行数 */
  /*   下面三行跟超出行数省略配套使用/*/
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical; /* 超出行数省略 */
}

.content-bottom-p-pindao {
  float: right;
  width: 100px;
  height: 35px;
  /* background-color: yellow; */
}
.content-bottom-p-pindao p {
  text-align: center;
  -webkit-line-clamp: 1; /* 控制行数 */
  /*   下面三行跟超出行数省略配套使用/*/
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical; /* 超出行数省略 */
}

/* 中间两个li 之间空出距离 */

.content-bottom:hover {
  margin-top: 5px;
  transition: 0.5s;
}

/* 更多 */
.moreMore {
  overflow: hidden;
  background-color: pink;
  width: 200px;
  height: 40px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 50px;
  
}

.list-more {
  display: block;
  text-align: center;
  padding-top: 8px;
  font-size: 20px;
}

/* 其它  查看天气 查看娱乐段子 */

.other-img {
  width: 100%;
  height: 100%;
}

.other-left {
  float: left;
  height: 300px;
  width: 590px;

/*   background-color: yellow; */
}

.other-right {
  float: right;
  height: 300px;
  width: 590px;
/*   background-color: blue; */
}

/*  文字定位*/
.other-zong {
  position: relative;
}

.text {
  position: absolute;
  top: 130px;
  left: 150px;
  text-align: center;
  color: white;
  margin: 0 auto;
  font-size: 30px;
}
}
</style>