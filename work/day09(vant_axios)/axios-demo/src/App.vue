<template>
  <div id="app">
      app
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name:"app",
    async mounted(){
      const appAxios = axios.create({
        baseURL:"http://localhost:9000/api2"
      });

      //为appAxios定义拦截器
      // 添加请求拦截器
      appAxios.interceptors.request.use(function (config) {
        config.headers.Authorization = "damu";
        return config;
      });

      // 添加响应拦截器
      appAxios.interceptors.response.use(function (response) {
        return response.data;
      }, function (error) {
        console.log(error,"---")
        return Promise.reject(error);
      });



      const body = await appAxios.get("/contactList")
      console.log(body)
    }
  };
</script>

<style scoped>

</style>
