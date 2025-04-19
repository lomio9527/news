<template>
  <div>
    <div class="weather-alls">
      <!-- 头部 -->
      <div class="weather-header">
        <div class="weather-header-word">
          <span>天气</span>
        </div>
        <div class="weather-header-imgs">
          <img src="./images/weather.jpg" alt="" />
        </div>
      </div>

      <!-- 搜索框 -->
      <div class="weather-search">
        <input type="text" placeholder="输入搜索" class="btnipnut" />
        <button class="weather-search-btn">搜索</button>
      </div>

      <!-- 天气内容 -->
      <div class="weather-content" >
       
        <el-row :gutter="20"  v-for="(wea,index) in daily" :key="index">
          <el-col :span="6"><div class="grid-content bg-purple">
            <div class="weather-content-a">
            <p>{{wea.day.weather}}</p>
             <p>温度:{{wea.day.temphigh}}℃-风速:{{wea.day.windpower}}</p>
              <p>{{wea.date}}  {{wea.week}}</p>
            </div>            
            </div></el-col>
        
        </el-row>
         
      </div>
      
    </div>
    <!--  <div class="footer">
  <Footer/>
    </div> -->
  </div>
</template>

<script>
import Footer from "@/components/Footer/footer";
import { mapGetters } from "vuex";
export default {
  components:{
    /*  Footer, */
  },
  data() {
    return {
      TYsweatehr:[],
    }
  },

  mounted() {
   
  },

  //映射仓库数据
    computed:{
      /* 直接拿数组过来 daily  gatters是直接传递数组 没有模块划分的说法*/
    ...mapGetters(['daily'])
},  
};
</script>

<style scoped >
/* 头部图片文字部分 */

.weather-alls {
  width: 1200px;
  margin: 0 auto;
 
}

.weather-header {
  width: 1000px;
  height: 200px;
  margin: 0 auto;
}

/*  头部文字*/
.weather-header-word {
  float: left;
  width: 70px;
  height: 50px;

  margin-top: 50px;
}

.weather-header span {
  /* 设置字体类型 */
  font-family: 微软雅黑;
  text-align: center;
  font-size: 30px;
  color: white;
  /* 设置字体阴影 */
  text-shadow: 3px 3px 3px #00f;
  font-weight: 900;
}

/* 头部图片 */
.weather-header-imgs {
  float: right;
  width: 300px;
  height: 120px;
  margin-top: 7px;
}

img {
  width: 300px;
  height: 120px;
}

/* 搜索部分 */

.weather-search {
  width: 750px;
  height: 50px;
  margin: 0 auto;
}
.weather-search .btnipnut {
  height: 43px;
  width: 646px;
  border: none;
  /* 四角圆角 */
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  text-indent: 10px;
  /* 去掉input 点击出现的边框 */
  /*   outline: none; */
}

/* 点击input输入框颜色发生改变 outline*/
input:focus {
  outline: 1px solid #409eff;
}

.weather-search-btn {
  margin-left: 5px;
  width: 95px;
  height: 45px;
  border: none;
  background-color: #409eff;
  border-radius: 4px;
}

/* 天气内容部分 */

.weather-content{
  
  width: 880px;
  height: 700px;
  margin: 0 auto;
}



.el-row {
float: left;
  

 
  margin-top: 30px;
  /* margin-bottom: 100px; */
 
}

.el-col{
 margin-left: 22px;
 border: none;

  
  
}

.bg-purple {
  border: 1px solid #eaeeed ;
} 

/* 鼠标选中盒子阴影效果 */
.bg-purple:hover{
box-shadow:  0 2px 12px 4px  rgba(0, 0, 0, 0.15);
}


.grid-content {
  border-radius: 4px;
  min-width: 190px;

}


/* 挺起内容文字部分 */
.weather-content-a{
  text-align: center;
  
}

.weather-content-a p{
color: #6495ed;
  padding: 15px 0 15px 0;
  font-size: 20px;
  font-family: 方正姚体;
}


/* 底部 */
.footer{
width: 100%;
 position: fixed;
 bottom: 0;

}




@media only screen and (max-width: 768px) {
  
.weather-alls {
  width: 420px;
  margin: 0 auto;
 
}

.weather-header {
  width: 420px;
  height: 200px;
  margin: 0 auto;
}

/*  头部文字*/
.weather-header-word {
  float: left;
  width: 70px;
  height: 50px;

  margin-top: 50px;
}

.weather-header span {
  /* 设置字体类型 */
  font-family: 微软雅黑;
  text-align: center;
  font-size: 30px;
  color: white;
  /* 设置字体阴影 */
  text-shadow: 3px 3px 3px #00f;
  font-weight: 900;
  margin-left: 10px;
}

/* 头部图片 */
.weather-header-imgs {
  float: right;
  width: 300px;
  height: 120px;
  margin-top: 7px;
}

img {
  width: 300px;
  height: 120px;
}

/* 搜索部分 */

.weather-search {
  width: 350px;
  height: 50px;
  margin: 0 auto;
}
.weather-search .btnipnut {
  height: 43px;
  width: 246px;
  border: none;
  /* 四角圆角 */
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  text-indent: 10px;
  /* 去掉input 点击出现的边框 */
  /*   outline: none; */
}

/* 点击input输入框颜色发生改变 outline*/
input:focus {
  outline: 1px solid #409eff;
}

.weather-search-btn {
  margin-left: 5px;
  width: 95px;
  height: 45px;
  border: none;
  background-color: #409eff;
  border-radius: 4px;
}

/* 天气内容部分 */

.weather-content{
  
  width: 420px;
  height: 1000px;
  margin: 0 auto;
}



.el-row {
float: left;
  
  margin-top: 30px;
  /* margin-bottom: 100px; */
 
}

.el-col{
 margin-left: 14px;
 border: none;

  
  
}

.bg-purple {
  border: 1px solid #eaeeed ;
} 

/* 鼠标选中盒子阴影效果 */
.bg-purple:hover{
box-shadow:  0 2px 12px 4px  rgba(0, 0, 0, 0.15);
}


.grid-content {
  border-radius: 4px;
  min-width: 190px;

}


/* 挺起内容文字部分 */
.weather-content-a{
  text-align: center;
  
}

.weather-content-a p{
color: #6495ed;
  padding: 15px 0 15px 0;
  font-size: 20px;
  font-family: 方正姚体;
}


/* 底部 */
.footer{
width: 100%;
 position: fixed;
 bottom: 0;

}

}
</style>