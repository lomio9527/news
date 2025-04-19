<template>
  <div class="alls">
    <!-- 导航 -->
    <!-- <div class="line"></div> -->
    <div class="juzhong">
      <!--  首先在elementUI的导航栏的标签中设置  background-color="#545c64"-->
      <el-menu
        mode="horizontal"
        @select="handleSelect"
       
        text-color="#fff"
        active-text-color="#ffd04b"
        :default-active="activeIndex"
        class="el-menu-demo"
        style="width: 100%;margin: auto"
      >
        <el-menu-item class="daohang"
          ><router-link to="/home"
            ><i class="iconfont logo">&#xe600;</i></router-link
          ></el-menu-item
        >
        <el-menu-item class="daohang" index="home"
          ><router-link to="/home"
            ><span>首页</span>
          </router-link></el-menu-item
        >
        <el-menu-item class="daohang" index="channel"
          ><router-link to="/channel"><span>频道</span> </router-link>
        </el-menu-item>
        
        <el-menu-item class="daohang" index="shortmessage">
       <router-link to="/shortmessage">
            <span>短讯</span>
             </router-link>
          </el-menu-item>
          
       
        <el-menu-item class="daohang" index="weather"
          ><router-link to="/weather"><span>天气</span> </router-link>
        </el-menu-item>
        <el-menu-item class="daohang" index="smbarrassing"
          ><router-link to="/embarrassing">
            <span>囧话</span>
          </router-link></el-menu-item
        >

        <el-menu-item class="search">
          <input
            v-model="wd"
            @keyup="keyup($event)"
            @keydown="keydown($event)"
            class="input-text"
            type="text"
            placeholder="搜索 "
            id="21313"
          />
          <!-- 图标 -->
          <i class="iconfont" @click="click()">&#xe632;</i>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
import axios from "axios";
/* 全局图标没用就在这里单独引入 */
//import '@/assets/logo/iconfont.css'
export default {
  data() {
    return {
      activeIndex: "1",
      wd: "", //搜索词条关键词
      arr: [], //用于存储获取到的百度服务器返回的关键词的搜索词条
      listIndex: -1, //设置初始索引，数组从0开始，因此初始成-1
    };
  },

  computed: {},
  methods: {
    /* 高亮导航栏字体 */
    handleSelect(key, keyPath) {
     // console.log(key, keyPath);
    },
    goIndex() {
      this.$router.push({ path: "/home" });
    },
     channel() {
      this.$router.push({ path: "/channel" });
    },
     
     embarrassing() {
      this.$router.push({ path: "/embarrassing" });
    },

    //keyup方法在input标签输入关键词时候不断地给百度服务器发送请求获取搜索词，然后复制给数组存储
    keyup(event) {
      //如果按的是上下键不发送请求
      console.log(event);
      if (event.keyCode === 38 || event.keyCode === 40 || event.keyCode === 13)
        return;
      axios
        .get("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su", {
          params: {
            wd: this.wd,
          },
        })
        .then((res) => {
          接收返回值;
          //console.log(res);
          this.arr = res.data.s; //接收百度服务器返回来的搜索词，存到数组
        });
    },

    //监听鼠标的点击事件
    //如果鼠标点击某一行的文字，则点击事件中的event.explicitOriginalTarget.data代表关键词
    //如果点击某一行的空白处，则点击事件中的event.explicitOriginalTarget.innerText代表关键词
    //大家可以通过console.log(event)来查看关键词所在的位置
    click(event) {
      //console.log(event);

      //如果你按的是enter，那么就跳转到百度搜索结果
      window.open("https://www.baidu.com/s?wd=" + this.wd);
    },
    //监听键盘的事件
    //如果按down，则增加当前listIndex+1，因此arr[this.listIndex]就能代表当前的词条
    //我们通过对listIndex的修改来得到当前词条在arr中的索引，然后就可以得到词条的具体信息，然后发送请求了
    keydown(event) {
     // console.log(event);
      //下键：40 上键：38
      if (event.keyCode == 38) {
        //按的上键
        this.listIndex--;
        if (this.listIndex < 0) {
          this.listIndex = this.arr.length - 1;
        }
        this.wd = this.arr[this.listIndex];
      } else if (event.keyCode == 40) {
        //说明你按的是下键
        this.listIndex++;
        if (this.listIndex > this.arr.length - 1) {
          this.listIndex = 0;
        }
        this.wd = this.arr[this.listIndex];
      } else if (event.keyCode == 13) {
        //如果你按的是enter，那么就跳转到百度搜索结果
        window.open("https://www.baidu.com/s?wd=" + this.wd);
      }
    },
      shortmessage(){
        this.$router.push('/shortmessage')
      }

  },

  mounted() {
    // default-active和 路由名称 相同时，导航栏背景高亮
   /*  this.routerName = this.$route.name; */
  },

  beforeDestroy() {
    location.reload();
  },
};
</script>

<style scoped lang = "less">
.alls{
  width: 100%;
   background-color: #545c64;
    height: 60px;
   
}
.juzhong {
  width: 1200px;
 /*  height: 100%; */
  margin: 0 auto;
 

}


/*    ⼀定要添加！important提⾼优先级 
.el-menu-item.is-active{
 //设置背景颜⾊ 
  background-color: #2D3D51 !important;
 //设置字体颜⾊ 
  color: #18909B !important;
} */

/* 点击以后的背景色进行隐藏 */
/* .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover {
    background-color: rgba(0,0,0,0);
}  */
 



/*  //设置了默认左边框为白色 */
/*  .el-menu-item{
        border-left:#fff solid 6px;
    } */

/*   //设置选中el-menu-item时的样式 */
/* .el-menu-item.is-active {
        border-left:#33A2EF solid 6px !important;
        background-color: #E2EFF9 !important;
    color: #38B2FF !important; 
    } */
/*   //设置鼠标悬停时el-menu-item的样式 */
/*   .el-menu-item:hover{
        border-left:#33A2EF solid 6px !important;
        background-color: #E2EFF9 !important;
        color: #38B2FF !important;
         //less语法，实现鼠标悬停时icon变色 
        i {
            color: #38B2FF;
        }
    } */



.header-left .daohang {
  font-size: 22px;
 
   
}
.el-menu--horizontal > .el-menu-item a,
.el-menu--horizontal > .el-menu-item a:hover {
  color: inherit;
  text-decoration: none;
}

.el-menu.el-menu--horizontal li {
  border-bottom: none;

  
}
/* 去掉li点击高亮背景色 */
.el-menu.el-menu--horizontal li:hover {
  background:none;
} 

/*    ⼀定要添加！important提⾼优先级 
.el-menu-item.is-active{
 //设置背景颜⾊ 
  background-color: #2D3D51 !important;
 //设置字体颜⾊ 
  color: #18909B !important;
} */

/* 点击以后的背景色进行隐藏 */
/* .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover {
    background-color: rgba(0,0,0,0);
} */

.el-menu--horizontal > .el-menu-item {
  margin-left: 75px;
  border: none;

}

.el-menu.el-menu--horizontal {
   /*  border-bottom: solid 1px #e6e6e6;  */
    border-bottom:none;
     background-color: #545c64;
}



/* logo */
.daohang .logo {
  color: white;
  font-size: 29px;
  text-decoration: none;
}

/* 搜索框 */

.el-menu--horizontal > .el-menu-item > .search {
  margin-left: 450px;

  width: 260px;
  display: block;
  left: 100px;

  list-style: none;
}
.input-text {
  width: 176x;
  height: 29px;
  text-indent: 10px;
  outline-style: none;
}

.search .iconfont {
  font-size: 29px;
  margin-left: 5px;
}

/* 按钮点击颜色 */
.actived {
  width: 100px;
  height: 100px;
  background-color: rgb(255, 127, 138);
}


     
@media only screen and (max-width: 768px) {
  /* 当屏幕小于768时候 使用这个样式 */
  /* 平板横屏或电脑  媒体查询.自上而下  大屏配置需要写在上文*/
  /* 就近原则,如果1024px设置了某值,
  则低于1024的所有屏幕都适用,700设置的值若是上方没有,会被使用 */
   
 /* .alls{
  width: 100%;
   background-color: #545c64;
    height: 60px;
} */
.juzhong {
  width: 420px;

  margin: 0 auto;
 

} 


.header-left .daohang {
  font-size: 18px;
}
.el-menu--horizontal > .el-menu-item a,
.el-menu--horizontal > .el-menu-item a:hover {
  color: inherit;
  text-decoration: none;
  
}

.el-menu.el-menu--horizontal li {
  border-bottom: none;
 margin-right:5px ;
 
}

.el-menu.el-menu--horizontal .el-menu-item li a {
  font-size: 40px;
  
}

.el-menu.el-menu--horizontal .el-menu-item a span{
  font-size: 12px;
  width: 10px;
 

 
}

.el-menu--horizontal > .el-menu-item {
 
  margin-left: 0px;
  border: none;
  width: 40px;
  
}

/* logo */
.daohang .logo {
  color: white;
  font-size: 29px;
  text-decoration: none;
}

/* 搜索框 */

.el-menu--horizontal > .el-menu-item > .search {
/*   margin-left: 150px; */

  width: 90px;
  display: block;
  /* left: 100px; */

  list-style: none;
}
.input-text {
  width: 80px;
  height: 25px;
  text-indent: 10px;
  outline-style: none;
}

.search .iconfont {
  font-size: 20px;
  margin-left: 5px;
}

/* 按钮点击颜色 */
.actived {
  width: 100px;
  height: 100px;
  background-color: rgb(255, 127, 138);
}

.el-menu-item .logo{
  font-size: 25px;
}


}
    

</style>