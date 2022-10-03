<template>

<div>
  <div class="board">
    <el-card class ="maincard" :body-style="{padding:'3px' ,height:'79vh'}">
    <el-container >
<!--   ---------------------------头部区域------------------------------------- -->
  <el-header  class= "head">
    <div>
<el-row :gutter="20">
  <el-col :span="6"><div > </div></el-col>
  <el-col :span="2">
    <div ><i class="el-icon-back"></i>
    <i class="el-icon-right"></i></div>
    </el-col>
  <el-col :span="8">
    <div class="search-bar"> 
    <i class="el-icon-search" ></i>
  <input type='text' placeholder="Search" @keyup.enter = "search" v-model = "searchwords"> 
 </div></el-col>
  <el-col :span="6"><div ></div></el-col>
</el-row>
    </div>
    </el-header>
 <!--   ---------------------------头部区域------------------------------------- -->
 <!--   ---------------------------左侧菜单------------------------------------- -->
  <el-container>
    <el-aside width="180px" class="aside">
<el-menu
text-color="#6e6e6e"
router
>

     <el-menu-item-group>
          <template v-slot:title class="menugroup" :style= "{ fontSize:'20px'}">LOGO</template>
         
    <el-menu-item index="/">
        <i class="el-icon-s-grid"></i>
        <template v-slot:title>首页</template>
      </el-menu-item>

        </el-menu-item-group>
   <el-menu-item-group>
          <template v-slot:title class="menugroup" :style= "{ fontSize:'20px'}">发现</template>
         
    <el-menu-item index="/musiclibrary">
        <i class="el-icon-s-fold"></i>
        <template v-slot:title>乐库</template>
      </el-menu-item>

    <el-menu-item index="/mv">
        <i class="el-icon-film"></i>
        <template v-slot:title>视频</template>
      </el-menu-item>
    <el-menu-item index="/radio">
        <i class="el-icon-headset"></i>
        <template v-slot:title>电台</template>
      </el-menu-item>
          <el-menu-item index="/songList">
        <i class="el-icon-star-off"></i>
        <template v-slot:title>歌单</template>
      </el-menu-item>
        </el-menu-item-group>

   <el-menu-item-group>
          <template v-slot:title class="menugroup" :style= "{ fontSize:'20px'}">美化</template>
         
    <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <template v-slot:title>主题</template>
      </el-menu-item>
         </el-menu-item-group>
          <el-menu-item-group>
          <template v-slot:title class="menugroup" :style= "{ fontSize:'20px'}">收藏</template>
         
         </el-menu-item-group>
</el-menu>




 


    </el-aside>



<el-container>







 <!--   ---------------------------左侧菜单------------------------------------- -->




    <el-main>
    <router-view ref="components" v-on:searchpage_db="searchpage_db" :key="$route.query" v-if="isRouterAlive"></router-view>
    <audio ref="audio" controls = "controls" :preload="preload" @canplay="getDuration"></audio>
    <el-button @click = "test"></el-button>
<!--     <search-page v-on:headCallBack="searchpage_db"></search-page> -->
    </el-main>

  <el-footer class='footer'>
   <div>
<el-row :gutter="20">
  <el-col :span="2"><div >  <el-image
      style="width: 80px; height: 80px"
      :src="this.onplayInfo.al.picUrl"
      :fit="fit"></el-image></div></el-col>

  <el-col :span="4">
    <div >{{this.onplayInfo.name}}</div>
    <div >{{this.onplayInfo.ar[0].name}}</div>
    </el-col>

  <el-col :span="12" :style="{paddingTop:'10px'}">
  
  <el-row>

  <el-col :span = "5">   </el-col>
 <el-col :span = "5">   <img src="../assets/img/2.svg"></el-col>
  <el-col :span = "5">
     <div @click ="pause" v-if ="playstatus">   <img src="../assets/img/3.svg" class="imgbutton"> </div>
  <div @click ="play" v-if ="!playstatus">   <img src="../assets/img/play.svg" class="imgbutton"> </div></el-col>
 
   <el-col :span = "5">   <img src="../assets/img/4.svg"></el-col>
   <el-col :span = "5">   </el-col>
  </el-row>
  <div><el-slider v-model="value" @change = "changeprogress"></el-slider></div>

   </el-col>


  <el-col :span="6" >
    <el-row>
<el-col :span = "4">   <div > <img src="../assets/img/5.svg" :style="{height:'20px',width:'20px',paddingTop:'34px',paddingLeft:'10px'}"></div>  </el-col>
<el-col :span = "10">    <div :style="{paddingTop:'25px'}"><el-slider v-model="vol" @change="changevol"></el-slider></div>   </el-col>
<el-col :span = "5"> 

 
    <el-popover placement="top" :width="290" trigger="click" :show-arrow=0 class="popover" title="当前播放">
      <template #reference>
        <img src="../assets/img/1.svg" class="imgbutton" :style="{height:'20px',width:'20px',paddingTop:'34px',paddingLeft:'60px'}">
      </template>
      
      <el-scrollbar height="200px">
      <el-table  @row-dblclick = "list_dblick" :data="this.songs" :show-header="0" max-height="200px" :row-style="{height:'25px' ,padding:'0'}" :cell-style="{height:'25px' ,padding:'5px'}"   >
           <el-table-column width="35" #default = "scope"> 
           <i class="el-icon-loading" v-if="scope.row.id == this.onplayInfo.id" />
          
           </el-table-column>
        <el-table-column width="200"  prop="name"  show-overflow-tooltip/>
         <!--  <i class="el-icon-close" />
         <div> {{scope.name}}</div>  -->
      
        <el-table-column width="50" #default= "scope"> <i class="el-icon-close"  @click="songs_delete(scope.row,scope.$index)"/></el-table-column>
      </el-table>
     
       
  </el-scrollbar>
    </el-popover>
  
  
  
  
  
  <div @click="showlist"></div>  </el-col>
    </el-row>
  

    
    </el-col>
</el-row>
    </div>


  </el-footer>








 </el-container>

  </el-container>
</el-container>
    
    </el-card>
    </div>
 
</div>

</template>

<script>
import app from '../App.vue'
import SearchPage from '../components/SearchPage.vue'

export default {
  
  name:"Home",
  components:{
 

  },
  created () {
  // this.vol = this.$refs.audio.volume
  },
  data () {
    return {
      playrules:0,
      isRouterAlive: true,
      playtotal:"",
      onplaynum:0,
      onplayInfo:{
        id:"",
        name:"",
        al:{
          picUrl:"",
        },
        ar:[{name:""}],
      },
      songs:[],
      playstatus:0,
      Menulist: {},
      vol:50,
      searchwords:"",
      value:"",
        queryInfo:{
         pagenum:1,
         pagesize:6,
        }
    
    }
  },
  mounted(){

   this.getcurrenttime();
   this.timer = setInterval(() => {
       setTimeout(this.getcurrenttime, 0)
   }, 1000*1)
  },
  methods: {
    list_dblick(){
    //改变正在播放的信息 onplay
    //传出正在播放的num
    //注意list改变时(添加新歌？)，num也要更新
    },
    playnext(){
      switch(this.playrules){
        case 0 : this.$refs.audio.src = this.geturl(this.songs[this.onplaynum].id)
                 break;
        case 1 : this.$refs.audio.src = this.geturl(this.songs[this.onplaynum+1].id)
                 break;
        case 2 : this.$refs.audio.src = this.geturl(this.songs[Math.floor(Math.random()*this.playtotal)].id)
                 break;

      }
    },
  async  geturl(id){
     const {data:res} = await this.$http.get('/song/url',{params:{id:id}})
     return  res.data[0].url
    },
    reload () {
     this.isRouterAlive = false;
    // this.isRouterAlive =true
    this.$nextTick(() => (this.isRouterAlive = true))
   },   
 
    playnext(){

    },
    songs_delete(row,index){
    this.songs.splice(1,index)
    this.playnext();
    },
  /*   test1(scope){
       console.log(scope.row)
    }, */
    changevol(val){
     this.$refs.audio.volume = val/100

    },
  async  searchpage_db(id){
    console.log('点到了！')
    const {data:res} = await this.$http.get('/song/url',{params:{id:id}})
    console.log(res.data)
    this.$refs.audio.src = res.data[0].url
    const {data:res1} = await this.$http.get('/song/detail',{params:{ids:id}})
   // console.log(res1)
   this.onplayInfo = res1.songs[0]
   this.songs.unshift(this.onplayInfo)
   console.log(this.songs)
    this.play();
    },
    test(){
      this.$refs.audio.src ="http://m701.music.126.net/20220908235637/8902beb7984c6df3ac3d6fbfb0b5162d/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/7153162885/e6db/86cf/8c3d/ede1a2995ecc4beb712f0e44f258721e.mp3"
    },
    changeprogress(time){
     this.$refs.audio.currentTime = this.getDuration()*time/100;
    },
    getDuration(){
       let duration = parseInt(this.$refs.audio.duration)
    return duration
    },
    pause(){
   this.playstatus =0;
  this.$refs.audio.pause();
    },
    play(){
      this.playstatus =1;
      
      this.$refs.audio.play();
   },
   getcurrenttime(){
    const currentTime = this.$refs.audio.currentTime
    this.value = currentTime/this.getDuration()*100;
    return this.value
   // console.log( this.value)
   },
   async search(){
      if( this.searchwords != '')
      {
         //this.$router.go(0)
          
        this.$router.push({path:'/search', query:{keyword:this.searchwords}})
       // this.reload()
       
      }

    }
   
  }
}

</script>

<style lang='less' scoped>
.maincard{
  padding-left: 0px;
 padding-top: 0px;
 height: 79vh;
}
.board{
  padding-left :150px;
  padding-right :150px;
  padding-top :60px;
  padding-bottom :100px;
}
.head{
  border-bottom:solid ;
  border-bottom-color:#e5e0e0;
  border-bottom-width: 1.5px;
  height:10%;
  padding-bottom: 40px;
}
.footer{
    border-top:solid ;
  border-top-color:#e5e0e0;
  border-top-width: 1.5px;
  height: 90px;
  padding-top:10px
}
.aside{
  border-right:solid;
   border-right-color: #e5e0e0;
   border-right-width: 1.5px;
}
.el-container{
    height: 71vh;
    width:100%;
    padding-left:10px
}
.search-bar{
  padding-top: 5px;
  form{
    height:420px
  }
  input{
     
    width:400px;
    border-radius:45px;
    border: none;
    background:#efefed;
    transition: .3s linear;
     padding-left:43px;
     padding-top: 10px;
     padding-bottom: 10px;
    font-size: 16px;
    color: #6e6e6e;
    outline:none;
    }
  }
.search-bar button{
  background: none;
  top:-2px;
  right:0;
}
.search-bar button:before{
  content:;
  font-family: FontAwesome;
  color:#324b4e;
}
.el-icon-search{
  display: block;
  position: absolute;
  top:35%;
  left:35.2%
}
/deep/.el-menu-item-group__title {
  font-size: 16px;
}
/deep/.el-menu-item.is-active{
  color:#6e6e6e
}
/deep/.el-menu-item:hover{
  background-color: #e2e2e2;
  border-radius:10px;
}
/deep/.el-menu-item{
  font-size:15.5px;
  height:45px;
  line-height: 45px;
}
/deep/.el-menu{
  padding-right:5px
  
}
/deep/.el-slider__button{
  height:0px;
  width:0px;
  border:0px
}
/deep/.el-slider__button-wrapper{
    height:0px;
  width:0px;
}
.imgbutton{
  cursor: pointer;
}
.popover{
  margin-left:-100px !important;
}

 


/deep/.el-table td{
   border-bottom-width:0px
}
/* /deep/.el-table{
el-table-row-hover-background-color: rgb(239, 239, 239) !important
}
 */
/deep/.el-table--enable-row-hover .el-table__body tr:hover>td{

background-color: rgb(239, 239, 239) !important;
border-radius: 2px;
} 
.mylist--enable-row-hover .el-table__body tr:hover>td{

background-color: rgb(239, 239, 239) !important;
border-radius: 2px;
} 
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
/deep/.is-scrolling-none::-webkit-scrollbar {
  width: 6px;
  height: 200px;
}

/*滚动条滑块*/
/deep/.is-scrolling-none::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  box-shadow: inset 0 0 5px #acaaaa;
  background: #ffffff;
}

/*滚动条轨道*/
/deep/.is-scrolling-none::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px #e7e3e3;
  border-radius: 10px;
  background: rgb(224, 224, 224);
}
</style>
<style >

</style>
