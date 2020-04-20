export default {
  name:"wrap",
  // baseUrl:"http://localhost:4000",
  api:{
      getPosition:{
          url:"/position/40.10038,116.36867",
          method:"get",
          corsUrl:"/4000"
      },
      getCategories:{
          url:"/index_category",
          method:"get",
          corsUrl:"/4000",
          token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNzA3ZDc2MDBjYzdhNGRmODhmMjNiMSIsImlhdCI6MTU4NzM1Mzg5MiwiZXhwIjoxNTg3OTU4NjkyfQ.lu1K_XyKLXCNpls-FgO2nf8xrEyqrhMQnnJ3UQX5OM0"
      },
      getShops:{
          url:"/shops?latitude=40.10038&longitude=116.36867",
          method:"get",
          corsUrl:"/4000",
          token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNzA3ZDc2MDBjYzdhNGRmODhmMjNiMSIsImlhdCI6MTU4NzM1Mzg5MiwiZXhwIjoxNTg3OTU4NjkyfQ.lu1K_XyKLXCNpls-FgO2nf8xrEyqrhMQnnJ3UQX5OM0"
      },
      getCode:{
          url:"/sendcode",
          method:"get",
          corsUrl:"/4000"
      },
      loginByPwd:{
          url:"/login_pwd",
          method:"post",
          corsUrl:"/4000"
      },
      loginBySms:{
          url:"/login_sms",
          method:"post",
          corsUrl:"/4000"
      }
  }
  // hooks:{
  //     beforeReq(axiosConfig){
  //         axiosConfig.headers.Authorization = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNzA3ZDc2MDBjYzdhNGRmODhmMjNiMSIsImlhdCI6MTU4NzM1Mzg5MiwiZXhwIjoxNTg3OTU4NjkyfQ.lu1K_XyKLXCNpls-FgO2nf8xrEyqrhMQnnJ3UQX5OM0"
  //     }
  // }
}
