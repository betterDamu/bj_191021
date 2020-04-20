<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
    import FooterGuide from "components/FooterGuide/FooterGuide"
    export default {
        name:"app",
        components:{
            FooterGuide
        },
        created(){
            //1. 拥有token 而且token没有过期 : 会返回token对应的用户信息 状态200
                      /*{
                          "code": 0,
                          "data": {
                              "_id": "5e9a9933c9f2ab44248ad0de",
                              "name": "damu"
                          }
                      }*/
            //2. 拥有token 可是token已经过期 : 会返回"message": "token过期，请重新登录"   状态401
            //3. 没有token 会返回:{"code": 1,"msg": "请先登陆"} 状态200

            // 发送检验token的请求;根据token的状态;我们在app的created钩子中 做出不同的动作
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    overflow hidden
</style>
