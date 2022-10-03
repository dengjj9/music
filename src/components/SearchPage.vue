<template>
    <div>
    <h1>{{this.keywords}}</h1>
    逆天！
      {{this.keywords}}
      

  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="热门歌曲" name="first">

    <el-table
      :data="Songlist"
      style="width: 100%"
      @row-dblclick = "dbclick">
      <el-table-column
       prop="name"
        label="歌曲名"
        width="180">
       
      </el-table-column>


      <el-table-column
        prop="artists[0].name"
        label="歌手"
        width="180">

      </el-table-column>



      <el-table-column
        label="专辑"
        prop="album.name">

         
      </el-table-column>

            <el-table-column
        prop="time"
        label="时间">
      </el-table-column>
    </el-table>

  <div >
  
    <el-pagination
       
      @current-change="handleCurrentChange"
      :current-page="queryInfo.pagenum"
      :page-sizes="[1, 2, 5, 10]"
      :page-size="queryInfo.pagesize"
      layout="prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>




    </el-tab-pane>


    <el-tab-pane label="歌单" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="MV" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="专辑" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>


    </div>
</template>

<script>

export default{
    name:"searchpage",
    data(){
        return{
          
        Songlist:[],
        keywords:"",
        total:1,
        queryInfo:{
         pagenum:1,
         pagesize:6,
        }
        }
    },
    activated(){
    //    console.log(this.$route.query)
  //   this.keywords = this.$route.query.keyword;
   //   this.search()
    },
    created(){
      console.log("zheli")
     console.log(this.$route.query)
     this.keywords = this.$route.query.keyword;
  
     this.search()
    },
    methods:{
    
      handleCurrentChange(val){
         
      },
        player(){

        },
        dbclick(row){
        console.log(this)
        console.log(row)

        this.$emit('searchpage_db',row.id)
        
        },
        te(){
            console.log("s")
          console.log(this)
        },
   async  search(){
     //   console.log(this.keywords)
      const {data : res}  = await this.$http.get(`/search/?keywords=${this.keywords}&limit=${this.queryInfo.pagesize}&offset=${(this.queryInfo.pagenum-1)*this.queryInfo.pagesize}`)
      
      /*   console.log("res")
      console.log(res) */
   //         console.log(this.Songlist)
      this.Songlist= res.result.songs
     //    this.Songlist.artist = res.result.songs.artists[0].name
      //      this.Songlist.album = res.result.songs.album.name
     //          this.Songlist.id = res.result.songs.id
     //   const {data : res}  = await this.$http.get(`/search/?keywords=${this.searchwords}&limit=${this.queryInfo.pagesize}&offset=${(this.queryInfo.pagenum-1)*this.queryInfo.pagesize}`)
    //   console.log(this.$router)
    //    this.$router.options.routes[1].children[1].component.methods.search()
  //   this.$.components.SearchPage.methods.search()   ;
      
      
      //console.log("this1")
     // console.log(this)
       //  console.log(this.te())
       
     }
    }
}
</script>
<style lang="less" scoped>

</style>