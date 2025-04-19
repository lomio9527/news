<template>
  <div>
    <div class="w">
      <div class="alls">
        <!-- 详情页头部 -->
        <div class="header">
          <h1 title="">{{ listcontentss.title }}</h1>
        </div>

        <div class="content">
          <div class="content-top">
            <span class="pindao" @click="$router.back()">
              {{ listcontentss.source }}
            </span>
            <span class="time">{{ listcontentss.pubDate }}</span>
            <!-- <span class="time2">{{listcontentss.img}}</span> -->
          </div>

          <div class="content-bottom">
            <p v-html="listcontentss.html">
              {{ listcontentss.html }} <br />
              <!-- <img  :src="listcontentss.img" alt="" width="80%" height="40%"> -->
              <img src="" alt="" />
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- <div><Footer /></div> -->
  </div>
</template>

<script >
import Footer from "@/components/Footer/footer";
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "TypeNavContent",
  components: {
   /*  Footer, */
  },
  data() {
    return {
      listcontentss: [],
      ids: null,
    };
  },

  mounted() {
    //this.$bus.$on('getInfos',this.getInfos)
    this.reqlibiao();
    this.$bus.$on("getInfos", (option) => {
      // console.log(option);
      //对传递过来的数据option进行处理
    });
  },

  //映射仓库数据
  computed: {},

  methods: {
    reqlibiao() {
      //console.log(this.$route);
      //接收query参数id
      /* if(sessionStorage.id !=false){
        
        console.log(id);
    } */
      let id = localStorage.id;
      //console.log(id);
      let ids = this.$route.params.index;
      //console.log(this.$route.params.index);
      //console.log(iid);

      //console.log(id);
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
            channelId: id,
            page: "",
            maxResult: 50,
            needHtml: 1,
            needAllList: "",
            needContent: 0,
          },
        })
        .then((res) => {
          //console.log(res);
          this.listcontentss =
            res.data.showapi_res_body.pagebean.contentlist[ids];

          //console.log(this.listcontentss[0].title);   让prams参数对应的上里面的索引号才能取值
          //this.listcontentss[ids]
          //this.listcontents =  JSON.parse(JSON.stringify(this.listcontents =res.data.showapi_res_body.pagebean.contentlist));
          //JSON.parse(JSON.stringify(this.listcontents = res.data.showapi_res_body.pagebean.contentlist));
          // console.log(this.listcontentss);
        });
    },
  },
  created() {},
  //接收参数  接收详情页的参数
};
</script>

<style scoped>
.w {
 /*  float: left; */
  background-color:  white;
  width: 100%;
  height: 100%;
}

.alls {
  width: 1200px;
  height: 100%;

  margin: 0 auto;
}

/* 标题 */
.header {
  margin-top: 20px;
  width: 1200px;
  height: 80px;
  background-color: #f2f5f4;
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
  width: 1200px;
  height: 100%;
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
  font-size: 25px;
  cursor: pointer;
}

.content .time {
  float: right;
  margin-right: 80px;
}

.content span {
  font-size: 15px;
}

/* .content {
  margin-top: 50px;
  width: 100%;
  height: 100%;
  margin-bottom: 10%;
}
 */
.content-bottom {
  /* display: inline; */
  margin: 30px 80px 0 80px;

  width: 800px;
  height: 100%;
  font-size: 18px;
  text-align: center;
  padding-bottom: 10%;
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
}

/* 图片处理  使用vue 穿透 >>>*/
.content-bottom >>> img {
  display: block;
  width: 66%;
  height: 50%;
  margin: 0 auto;
  margin-top: 10px;
}

/* 图片 */

/* 图片居中 */
/*   img{
      display: block;
        padding-top: 10px;
      margin :0 auto ;
      margin-bottom: 50px;
      width: 20%;
      height: 50%;
  } */

/* img {
    display: block;
    width: 50%;
    height: 50%;
    margin: 0 auto;
} */

/* 数据加载中 */
.loading {
  display: block;
  text-align: center;
  margin-top: 100px;
  font-size: 25px;
  color: red;
}

@media only screen and (max-width: 768px) {
  .w {
    float: left;
    background-color: #f2f5f4;
    width: 420px;
    height: 100%;
  }

  .alls {
    width: 420px;
    height: 100%;

    margin: 0 auto;
  }

  /* 标题 */
  .header {
    margin-top: 15px;
    width: 420px;
    height: 80px;
    background-color: white;
    box-shadow: 3px 8px 10px -12px; /* 盒子做阴影效果 */

    /* 父盒子利用垂直居中 利用flex布局 在父盒子垂直居中h1 */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .header h1 {
    font-size: 18px;
  }

  /* 内容部分 */
  .content {
    width: 420px;
    height: 100%;
    margin-top: 30px;
    background-color: white;
    text-align: center;
  }

  .content-top {
    width: 100%;
    height: 30px;
    padding-top: 15px;
  }

  .content .pindao {
    float: left;
    margin-left: 20px;
    font-size: 18px;
    cursor: pointer;
  }

  .content .time {
    float: right;
    margin-right: 20px;
  }

  .content span {
    font-size: 15px;
  }

  /* .content {
  margin-top: 50px;
  width: 100%;
  height: 100%;
  margin-bottom: 10%;
}
 */
  .content-bottom {
    /* display: inline; */
    margin: 0 auto;

    width: 410px;
    height: 100%;
    font-size: 18px;
    text-align: center;
    padding-bottom: 10%;
  }

  /* p标签文字内容居中 */
  .content-bottom p {
    margin: 0 auto;
    width: 330px;
    height: 100%;
    text-indent: 2em; /* p标签首行缩进 */
    text-align: justify; /* 整齐文字 */
    word-wrap: break-word;
    line-height: 20px;
    font-size: 15px;
  }

  /* 图片处理  使用vue 穿透 >>>*/
  .content-bottom >>> img {
    display: block;
    width: 66%;
    height: 50%;
    margin: 0 auto;
    margin-top: 10px;
  }

  .content .main {
    width: 60%;
  }

  /* 数据加载中 */
  .loading {
    display: block;
    text-align: center;
    margin-top: 100px;
    font-size: 25px;
    color: red;
  }
}
</style>