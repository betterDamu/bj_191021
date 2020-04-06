<template>
  <ul class="todo-main">
    <todo-item v-for="item in listArr" :key="item.id" :item="item">
      <template slot-scope="{text}">
        <slot :text="text"></slot>
      </template>
      <!--
        <template>
          <span style="color: red;font-weight: 800">html from app-1</span>
        </template>
      -->
    </todo-item>
  </ul>
</template>

<script>
    import item from "components/item"
    export default {
        name: "List",
        props:{
          listArr:Array
        },
        components:{
          "todo-item":item
        }
    }
</script>

<style scoped>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
