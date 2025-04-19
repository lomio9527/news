<template>
  <div class="w">
    <div class="alls">
      <div class="header">
        <h1 title="">笑话大全</h1>
      </div>
      
      <div class="content" >
        <!-- 占位盒子 -->
      
        <div class="content-top">
          <span class="pindao"></span>
          <span class="time"></span>
        </div>

        <!-- 笑话部分 -->
       
        <div
          class="content-bottom"
          v-for="(cate, index) in formattedJokes"
          :key="index"         
        >
          {{ index + 1 }}. {{ cate }}
        </div>
        <div class="load " ><h5 >数据加载中 <span class="dotting"></span></h5>
        
</div>
      </div>
    </div>
  </div>
</template>

<script >
import { mapState } from "vuex";

export default {
//使用options.d.ts 当中的inject变量 获取APP 里的配置状态(然后在需要调用的接口当中 加入this.reload)
inject:['reload'],
  name: "",
  data() {
    return {
      timer: null,
    
    };
  },




  /* 生命周期挂载 */
  //当页面挂载完毕之后 就通知Vuex调用接口函数进行发请求
  mounted() {
    this.$store.dispatch("getEmbarrassing");
      /*  window.onbeforeunload = e => {      //刷新时弹出提示
        return ''
    }; */
    
  },

  /* 映射数据给组件 */
  computed: {
    ...mapState({
      TYEmbarrassing: (state) => state.embarrassing.Embarrassing,
    }),
    
    formattedJokes() {
      if (!this.TYEmbarrassing) return [];
      
      // 处理对象格式
      if (this.TYEmbarrassing.result) {
        // 返回包含诗句和出处的完整字符串
        return [`${this.TYEmbarrassing.result.name} ${this.TYEmbarrassing.result.from}`];
      }
      
      return [];
    }
  },

  methods: {
    /* 定义定时器函数 - 每2秒刷新一次数据 */
    flashs() {
      const cate = this.TYEmbarrassing.length;
      if (cate >= 0) {
        this.timer = setInterval(() => {
          this.$store.dispatch("getEmbarrassing");
        }, 2000);
      }
    },
    
  },

  /* 生命周期创建完成 */
  created() {
    /* 调用计时器 */
    this.flashs();
  },

beforeUpdate() {
    
},

  /* 生命周期销毁前计时器 */
  beforeDestroy() {
    if (this.timer) {
      //如果定时器还在运行 或者直接关闭，不用判断
      clearInterval(this.timer); //关闭
      this.timer = null;
    };
   
    /* 强制刷新页面 三种用法*/
    //this.reload() //调用刷新
    location. reload()
    //this.$router.go(0)
  },

  destroyed() {
      
  }, // 生命周期 - 销毁完成
  activated() {
      
  } // 如果页面有keep-alive缓存功能，这个函数会触发





};


</script>

<style scoped>
.body{
 background-color: #f2f5f4;
}
.w {
  overflow: hidden;
  width: 1200px;
  height: 100%px;
  margin: 0 auto;
 
}

/* .alls {
  width: 1200px;
  height: 100%;

  margin: 0 auto;
} */

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
  /*  background-color: white; */
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

/* .content {
  margin-top: 50px;
  width: 100%;
  height: 900px;
} */

.content-bottom {
  /* display: inline; */
  margin: 0 auto;
  padding: 20px 20px 0 20px;
  width: 800px;
  height: 100%;
  font-size: 18px;
  background-color: white;
  box-shadow: 3px 8px 10px -6px;
}

/* p标签文字内容居中 */
/* .content-bottom p{
    margin:0 auto; 
    width: 1000px;
    height: 840px;
    text-indent: 2em;   p标签首行缩进 
    text-align: justify;  整齐文字 
    word-wrap: break-word;
    line-height: 30px;

} */

/* 图片 */

/* 图片居中 */
img {
  display: block;
  padding-top: 10px;
  margin: 0 auto;
}


/* 数据加载中 */
.load{
  
  background-color: yellow;
 margin: 0 auto;
 width: 840px;
  height: 90px;
  font-size: 25px;
  color: pink;
  background-color: white;
  box-shadow: 3px 8px 10px -6px;
  top: 50px;
 
}

 /* 下面两句跟上面的display: table 一起使用 让a居中 */
h5 {
   width: 840px;
  height: 90px;
  /* flex布局垂直居中需要设置宽高 */
  display: flex;
align-items: center;
justify-content: center;
    
}

span{
  color:  #8a8080;
}




.dotting {
    display: inline-block; min-width: 2px; min-height: 2px;
    box-shadow: 2px 0 currentColor, 6px 0 currentColor, 10px 0 currentColor; /* for IE9+, ..., 3个点 */
    animation: dot 4s infinite step-start both; /* for IE10+, ... */
    *zoom: expression(this.innerHTML = '...'); /*  for IE7. 若无需兼容IE7, 此行删除 */
}
.dotting:before { content: '...'; } /* for IE8. 若无需兼容IE8, 此行以及下一行删除*/
.dotting::before { content: ''; } /* for IE9+ 覆盖 IE8 */
:root .dotting { margin-right: 8px; } /* for IE9+,FF,CH,OP,SF 占据空间*/

@keyframes dot {
    25% { box-shadow: none; }                                  /* 0个点 */
    50% { box-shadow: 2px 0 currentColor; }                    /* 1个点 */
    75% { box-shadow: 2px 0 currentColor, 6px 0 currentColor;  /* 2个点 */ }
}



@media only screen and (max-width: 768px) {
  .w {
  overflow: hidden;
  width: 420px;
  height: 100%px;
  margin: 0 auto;
 
}



/* 标题 */
.header {
  margin: 0 auto;
  margin-top: 20px;
  width: 380px;
  height: 80px;
  background-color: white;
  box-shadow: 3px 8px 10px -12px; /* 盒子做阴影效果 */

  /* 父盒子利用垂直居中 利用flex布局 在父盒子垂直居中h1 */
  display: flex;
  align-items: center;
  justify-content: center;
}


/* 内容部分 */
.content {
  width: 380px;
  height: 100%;
  margin-top: 30px;
  margin: 0 auto;
  /*  background-color: white; */
}





.content-bottom {
  /* display: inline; */
  margin: 0 auto;
  padding: 20px 20px 0 20px;
  width: 350px;
  height: 100%;
  font-size: 18px;
  background-color: white;
  box-shadow: 3px 8px 10px -6px;
}



/* 数据加载中 */
.load{
  
  background-color: yellow;
 margin: 0 auto;
 width: 600px;
  height: 90px;
  font-size: 25px;
  color: pink;
  background-color: white;
  box-shadow: 3px 8px 10px -6px;
  top: 50px;
 
}

 /* 下面两句跟上面的display: table 一起使用 让a居中 */
h5 {
   width: 380px;
  height: 90px;
  /* flex布局垂直居中需要设置宽高 */
  display: flex;
align-items: center;
justify-content: center;
    
}
}
</style>