<template>
    <li>
      <label>
        <!--item 组件 不能直接修改 app组件中的数据-->
        <!-- v-model脏数据 -->
        <input type="checkbox" v-model="checked" />
        <span>{{item.text}}</span>
      </label>
      <button class="btn btn-danger" @click="delItem">删除</button>
    </li>
</template>

<script>
    export default {
        name: "Item",
        props:{
          item:Object
        },
        computed:{
          checked:{
            get(){return this.item.checked},
            set(val){
              // console.log(val,this.item.id);
              this.$bus.$emit("changeChecked",val,this.item.id)
            }
          }
        },
        methods:{
          delItem(){
            //跟app进行一次 爷孙之间的通信
            this.$bus.$emit("delItem",this.item.id)
          }
        }
    }
</script>

<style scoped>
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
