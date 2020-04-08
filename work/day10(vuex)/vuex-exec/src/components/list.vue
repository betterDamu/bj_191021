<template>
  <div class="row">
    <div class="card" v-for="item in list" :key="item.id">
      <a :href="item.html_url" target="_blank">
        <img :src="item.avatar_url" style='width: 100px'/>
      </a>
      <p class="card-text">{{item.login}}</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "list",
        data(){
          return {
            list:[]
          }
        },
        mounted(){
           this.$bus.$on("Search",async (searchName)=>{
             //发送请求
             const body =  await this.$axios({
                url:"/search/users",
                method:"get",
                params:{
                  q:searchName
                }
             })
             this.list = body.items;
          })
        }
    }
</script>

<style scoped>

</style>
