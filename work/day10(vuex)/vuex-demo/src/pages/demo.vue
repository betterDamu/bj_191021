<template>
  <div>
     <span style="color: red;font-size: 40px;font-weight: 800" @click="handleC">{{num}}</span>
     <br/>
     <button @click="handleCAsync">async add</button>
  </div>
</template>

<script>
    export default {
        name: "demo",
        computed:{
          num(){
            return this.$store.state.num
          }
        },
        methods:{
          handleC(){
            //1. vue的调试工具记录不到这种修改
            //2. 这种修改破坏了整个vuex使用的规则 仓库中的数据只能由仓库中的工具来进行修改
            // this.$store.state.num++

            //修改数据一定要通过mutation  commit的第二个参数 我们称为载荷
            // this.$store.commit("inc",2)
            this.$store.dispatch("inc",2)
          },
          handleCAsync(){
              // this.$store.commit("incAsync",2)
              /*
                setTimeout(()=>{
                  this.$store.commit("inc",2)
                },2000)
              */
              this.$store.dispatch("incAsync",2)
          }
        }
    }
</script>

<style scoped>

</style>
