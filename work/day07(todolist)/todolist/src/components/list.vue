<template>
  <div>
    <todo-item></todo-item>
    <todo-item></todo-item>
    <todo-item></todo-item>
  </div>
</template>

<script>
    import item from "./item"
    export default {
        name: "List",
        components:{
          "todo-item":item
        }
    }
</script>

<style>

</style>
