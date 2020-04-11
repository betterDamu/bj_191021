module.exports = {
    outputDir:"damu",
    lintOnSave:false,
    devServer:{
        host: "127.0.0.1",
        port: 4001
    },
    configureWebpack:{
       //原生webpack的配置
      devServer:{
          open: true
      }
    }
}