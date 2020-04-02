<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <todo-header @addItem="addItem"></todo-header>
        <todo-list :listArr="listArr"></todo-list>
        <todo-footer></todo-footer>
      </div>
    </div>
  </div>
</template>

<script>
  import header from "components/header.vue"; //vue-loader 就帮我们生成了一个组件的配置对象
  import list from "components/list.vue";
  import footer from "components/footer.vue";
  export default {
    name: 'App',
    data(){
      return {
        listArr:[
          {id:0,text:"找到一个3级头",checked:false},
          {id:1,text:"打穿一个3级甲",checked:false},
          {id:2,text:"舔到一个3级包",checked:false}
        ]
      }
    },
    methods:{
      addItem(item){
        this.listArr.unshift(item)
      },
      delItem(id){
        this.listArr = this.listArr.filter((item)=>{
          return item.id !== id;
        })
      },
      changeChecked(checked,id){
        //id: item传递过来的id;代表要删除的item
        this.listArr.forEach((item)=>{
          if(item.id === id){
            item.checked =checked;
          }
        })
      }
    },
    created(){
      this.$bus.$on("delItem",this.delItem),
      this.$bus.$on("changeChecked",this.changeChecked)
      /*this.$bus.$on("delItem",(id)=>{
        //id: item传递过来的id;代表要删除的item
        this.listArr = this.listArr.filter((item)=>{
          return item.id !== id;
        })
      }),
      this.$bus.$on("changeChecked",(checked,id)=>{
        //id: item传递过来的id;代表要删除的item
        this.listArr.forEach((item)=>{
          if(item.id === id){
            item.checked =checked;
          }
        })
      })*/
    },
    components:{
      "todo-header":header,
      "todo-list":list,
      "todo-footer":footer
    }
  }
</script>

<style scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
