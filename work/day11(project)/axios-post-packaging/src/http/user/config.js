export default {
  api:{
    getUser:{
      url:"/search/users",
      method:"get",
      data:{
        q:"damu"
      }
    }
  },
  baseUrl:"https://api.github.com",
  timeout:8000,
  name:"user"
}
