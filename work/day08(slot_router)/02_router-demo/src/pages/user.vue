<template>
    <div>
      user组件 : 当前登录的用户是{{$route.params.id}}号;用户名为{{$route.query.name}}
    </div>
</template>

<script>
    export default {
        name: "user",
        mounted(){
          console.log("user.mounted")
        },
        watch:{
          $route(){
            console.log("user.watch.$route")
          }
        }
    }
</script>

<style scoped>

</style>
