<template>
<div>
  <div class="w">
    <div class="loading" v-if="!Shortmessages.length" :style="{height:'100%'}">加载中...</div>
    <div class="alls" v-else>
        
      <!-- 短讯内容头部 -->
      <div class="header">
        <h1 title="">短讯</h1>
      </div>
      <div class="content">
        <!-- 占位盒子 -->
        <div class="content-top"></div>

        <!-- 短讯内容部分 -->
  
        <div  class="content-bottom" v-for="(shor,index) in Shortmessages" :key="shor.id" @click=" newsContent(shor.id)">
        
          <h1>{{ shor.channelName }}</h1>
          <p>
            {{ shor.title }}
          </p>
          <div class="data-time">
            <span class="pindao">{{shor.source }}</span>
            <span class="time">{{  shor.pubDate}}</span>
          </div>
          
        </div>
      </div>
   
   </div>
   
  </div> 
  <!-- <Footer/> -->
</div>
  
  
</template>

<script >
import Footer from "@/components/Footer/footer";
import { mapState } from "vuex";

export default {
  name: "",
  components:{
  /*  Footer, */
  },
  data() {
    return {
  
      
    };
  },

 /* 映射数据给组件 */
  computed: {
    ...mapState({
      Shortmessages:(state)=>state.shortmessage.Shortmessage
    }),
  },

 methods: {
    //传参
    newsContent(id) {
      //console.log(index);
      //this.$router.push({ path: `/typenavcontent/${index}` });
      this.$router.push({ path: "/message", query: { id } });
    },

  
  },
 /* 生命周期挂载 */
  //当页面挂载完毕之后 就通知Vuex调用接口函数进行发请求
  mounted() {
    
    this.$store.dispatch("getShortmessage");
    
  },


};


</script>

<style scoped>
.w {
  overflow: hidden;
  width: 1200px;
  height: 100%px;
  margin: 0 auto;
  background-color: #f2f5f4;
  margin-bottom: 100px;
}

.alls {
  width: 1200px;
  height: 100%;
  padding-bottom: 100px;
  margin: 0 auto;
}

/* 标题 */
.header {
  margin: 0 auto;
  margin-top: 20px;
  width: 800px;
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
  color: pink;
}

/* 内容部分 */
.content {
  width: 1000px;
  height: 100%;
  margin-top: 30px;
  margin: 0 auto;
  padding-bottom: 20px;
  /*  background-color: white; */
}

.content-top {
  width: 100%;
  height: 30px;
  /* padding-top: 5px; */
}

/* .content .pindao {
  float: left;
  margin-left: 80px;
}

.content .time {
  float: right;
  margin-right: 80px;
}
 */
/* .content span {
  font-size: 15px;
} */

/* .content {
  margin-top: 50px;
  width: 100%;
  height: 900px;
} */

.content-bottom {
  /* display: inline; */
  margin: 0 auto;
  padding: 10px 20px 0px 20px;
  width: 800px;
  height: 90px;
  font-size: 15px;
  background-color: white;
  box-shadow: 3px 8px 10px -6px;
}

.content-bottom:hover {
  border: 1px solid #ccc;
  border-style: none solid;

  border: 2px solid #ccc;
  border-width: 1px 0px;
}

/* h1标签 */
.content-bottom h1 {
  color: #52a2f3;
}

/* p标签文字内容居中 */
.content-bottom p {
  margin-top: 8px;
 -webkit-line-clamp: 1;/* 控制行数 */
  /*   下面三行跟超出行数省略配套使用/*/
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical; /* 超出行数省略 */
  /*  text-indent: 2em;    //p标签首行缩进   
  /* text-align: justify;  整齐文字 
    word-wrap: break-word;
    line-height: 30px; */
}

/* 图片 */

/* 图片居中 */
/* img {
  display: block;
  padding-top: 10px;
  margin: 0 auto;
}
 */

/* 新闻频道和时间部分 */
.data-time {
  padding-top: 8px;
  padding-bottom: 8px;
  height: 20px;
  color: #999;
  border-bottom: 1px solid #f5f5f5;
}
.data-time .pindao {
  float: left;
}
.data-time .time {
  float: right;
}


/* 底部 */
/* 数据加载中 */
.loading{
  display: block;
  text-align: center;
  margin-top: 50px;
font-size: 25px;
color: red;

}



@media only screen and (max-width: 768px) {
  .w {
  overflow: hidden;
  width: 420px;
  height: 100%px;
  margin: 0 auto;
  background-color: #f2f5f4;
  margin-bottom: 100px;
}

.alls {
  width: 420px;
  height: 100%;
  padding-bottom: 100px;
  margin: 0 auto;
}

/* 标题 */
.header {
  margin: 0 auto;
  margin-top: 20px;
  width: 390px;
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
  color: pink;
}

/* 内容部分 */
.content {
  width: 380px;
  height: 100%;
  margin-top: 30px;
  margin: 0 auto;
  padding-bottom: 20px;
  /*  background-color: white; */
}

.content-top {
  width: 100%;
  height: 30px;
  /* padding-top: 5px; */
}



.content-bottom {
  /* display: inline; */
  margin: 0 auto;
  padding: 10px 20px 0px 20px;
  width: 350px;
  height: 90px;
  font-size: 15px;
  background-color: white;
  box-shadow: 3px 8px 10px -6px;
}

.content-bottom:hover {
  border: 1px solid #ccc;
  border-style: none solid;

  border: 2px solid #ccc;
  border-width: 1px 0px;
}

/* h1标签 */
.content-bottom h1 {
  color: #52a2f3;
}

/* p标签文字内容居中 */
.content-bottom p {
  margin-top: 8px;
 -webkit-line-clamp: 1;/* 控制行数 */
  /*   下面三行跟超出行数省略配套使用/*/
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical; /* 超出行数省略 */
  /*  text-indent: 2em;    //p标签首行缩进   
  /* text-align: justify;  整齐文字 
    word-wrap: break-word;
    line-height: 30px; */
}



/* 新闻频道和时间部分 */
.data-time {
  padding-top: 8px;
  padding-bottom: 8px;
  height: 20px;
  color: #999;
  border-bottom: 1px solid #f5f5f5;
}
.data-time .pindao {
  float: left;
}
.data-time .time {
  float: right;
}


/* 底部 */
/* 数据加载中 */
.loading{
  display: block;
  text-align: center;
  margin-top: 50px;
font-size: 25px;
color: red;

}
}
</style>