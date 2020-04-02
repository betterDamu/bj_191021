<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-list></todo-list>
    <todo-footer></todo-footer>
  </div>
</template>

<script>
  import header from "./components/header.vue"; //vue-loader 就帮我们生成了一个组件的配置对象
  import list from "./components/list.vue";
  import footer from "./components/footer.vue";
  export default {
    name: 'App',
    components:{
      "todo-header":header,
      "todo-list":list,
      "todo-footer":footer
    }
  }
</script>

<style>

</style>
