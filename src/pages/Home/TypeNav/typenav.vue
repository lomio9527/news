<template>
  <div class="ty">
    <div class="type">
      <!-- 新闻内容部分  -->
      <div class="lists">
        <ul class="new-content-ul">
          <router-link to="/typenavcontent">
            <li
              class="content-li"
              v-for="(newss, ind) in TyNewsList"
              :key="newss.id"            
            >
              <router-link
                :to="{ name: 'typenavcontent', params: { id: newss.id} }"
              >
                <div class="content-img">
                  <img :src="newss.img" alt="" @error.once="moveImg"/>
                </div>
                <div class="content-bottom">
                  <div class="content-bottom-title">
                    <a title="">{{ newss.title }}</a>
                  </div>
                  <div class="content-bottom-p">
                    <div class="content-bottom-p-time">
                      <p>{{ newss.channelName }}</p>
                    </div>
                    <div class="content-bottom-p-pindao">
                      <p>{{ newss.source }}</p>
                    </div>
                  </div>
                </div>
              </router-link>
            </li>
          </router-link>
        </ul>
      </div>

      <!-- 更多内容 -->
      <div class="moreMore">
        <router-link to="/channelList"
          ><a class="list-more" href="javascript:;">更多内容> </a></router-link
        >
      </div>
      <div class="other">
        <div class="other-left other-zong">
          <router-link to="/weather">
            <img
              class="other-img"
              src="@/pages/Home/TypeNav/images/tinqi.jpg"
              alt=""
            />
            <h1 class="text">查看看近期的天气吗</h1>
          </router-link>
        </div>

        <div class="other-right other-zong">
          <router-link to="/embarrassing">
            <img
              class="other-img"
              src="@/pages/Home/TypeNav/images/tinqi.jpg"
              alt=""
            />
            <h1 class="text">看个娱乐小段休闲一下</h1>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//引入辅组函数 mapState
import { mapState } from "vuex";
import axios from 'axios'
import requests from '@/api/request';
export default {
  name: "",
  data() {
    return {
      id: null,
      page:1,
      listcontents:[],
    };
  },

  //当页面挂载完毕之后 就通知Vuex调用接口函数进行发请求
  mounted() {
    //派发一个action函数getNewsList 这个名字要跟仓库中action定义的函数名一致
    //这里就是相当于调用action函数使用请求接口函数,getNewsList是向仓库怕发一个action函数名过去，仓库收到
    //仓库收到action函数名被调用就执行这个函数并请求数据
    // this.fasong()
  },

  computed: {
    //映射数据过来放到TyNewsList  这个时候已经是有数据了
    ...mapState({
      TyNewsList: (state) => state.home.newsList,
    }),
  },

  methods: {
    moveImg(event){
      event.currentTarget.src = require("@/assets/error.png");
      event.currentTarget.style.width = "auto";
      return true;
    },

}
}
</script>

<style scoped>
.ty {
  width: 100%;
  height: 100%;
  background: #f2f5f4;
}

.type {
  overflow: hidden;
  width: 1200px;
  height: 100%;

  margin: 0 auto;
}

.lists {
  overflow: hidden;
  width: 100%;
  height: 100%;
padding-bottom: 20px;
}

.new-content-ul {
  width: 1200px;
  height: 100%;

  margin: 0 auto;
 
}

.content-li {
  float: left;
  /*  display:inline-block; */
  width: 280px;
  /* //height: 280px; */
  border-radius: 7px; /* 四个角百略圆 */
  /* background-color: white; */
  margin: 10px;

  /* overflow:auto; */
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
/* 取消a标签下划线 */
a{text-decoration: none!important;}


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
/* .content-li :hover {
  padding-top: 5px;
  transition: 0.5s;
}
 */

/* 鼠标选中盒子阴影效果 */
.content-li:hover {
  box-shadow: 0 3px 15px 8px rgba(0, 0, 0, 0.2);
}

/* 更多 */
.moreMore {
  background-color: #f3f8ff;
  width: 200px;
  height: 40px;
  margin: 0 auto;
  margin-top: 10px;
}

.list-more {
  display: block;
  text-align: center;
  padding-top: 8px;
  font-size: 20px;
}

/* 其它  查看天气 查看娱乐段子 */
.other {
  height: 300px;
  width: 1200px;

  margin: 0 auto;
  margin-top: 20px;
}

.other-img {
  width: 100%;
  height: 100%;
}

.other-left {
  float: left;

  height: 300px;
  width: 590px;
}

.other-right {
  float: right;
  display: inline-block;
  height: 300px;
  width: 590px;
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



@media only screen and (max-width: 768px) {
.ty {
  width: 420px;
  height: 100%;
  background: #f2f5f4;
}

  .type {
  overflow: hidden;
  width: 420px;
  height: 100%;

  margin: 0 auto;
}

.type {
  overflow: hidden;
  width: 420px;
  height: 100%;

  margin: 0 auto;
}

.lists {
  overflow: hidden;
  width: 420px;
  height: 100%;
padding-bottom: 20px;
}

.content-img {
  width: 350px;
  height: 260px;
  margin: 0 auto;
  /*  background-color: blue; */
}


.content-bottom {
  width: 350px;
  height: 120px;
  /* background-color: yellow; */
}

.content-bottom a{
  font-size: 15px;
}

.new-content-ul {
  width: 420px;
  height: 100%;

  margin: 0 auto;
 
}
.content-li {
  float: left;
  /*  display:inline-block; */
  width: 380px;
  /* //height: 280px; */
  border-radius: 7px; /* 四个角百略圆 */
  /* background-color: white; */
  margin: 15px 20px;
   
  /* overflow:auto; */
}


/* 更多 */
.moreMore {
  background-color: pink;
  width: 200px;
  height: 40px;
  margin: 0 auto;
  margin-top: 10px;
}

.list-more {
  display: block;
  text-align: center;
  padding-top: 13px;
  font-size: 15px;
}



.other {
  height: 100px;
  width: 420px;

  margin: 0 auto;
  margin-top: 20px;
}

.other-left {
  /* float: left;
 */
  height: 170px;
  width: 300px;
  margin: 10px 60px;
}

.other-right {
 /*  float: right; */
  display: inline-block;
  height: 170px;
  width: 300px;
  margin: 10px 60px;
}


/*  文字定位*/
.other-zong {
  position: relative;
}

.text {
  position: absolute;
  top: 50px;
  left: 50px;
  text-align: center;
  color: white;
  margin: 0 auto;
  font-size: 10px;
}
}
</style>