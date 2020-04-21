import routes from "@/routes";
import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import {AUTOLOGIN} from "@/store/mutation_types.js";
import {Toast} from "vant";
Vue.use(VueRouter);


let router = new VueRouter({
    /*当前端路由为history模式时;
            1.要保证前端路由和后台路由不要产生冲突
            2.所有的未知请求 404 请求;要让后台程序员 或者 运维的同学配到首页去
    */
    mode:"history",
    routes,
    linkActiveClass:"active"
})


//定义路由的全局守卫
//全局前置守卫
router.beforeEach(async (to, from, next) => {
    /*
    *  只要去的不是login组件
    *  我们都应该去检查一下token的合法性
    *  如果合法 自动登录
    *  如果不合法 直接拦下来 转到登录页
    * */
    if(to.path !== "/Login"){
        await store.dispatch(AUTOLOGIN);
        //通过仓库中的user信息来判断 token是否合法
        //如果user信息存在 合法的
        //如果user信息不存在 不合法
        if(store.state.user._id){
            //如果合法 自动登录
            next()
        }else {
            //果不合法 直接拦下来 转到登录页
            Toast.fail({
                message:"请先登录",
                duration:2000,
                onClose(){
                    next("/Login")
                }
            })
        }
    }else{
        next()
    }

})

/*//全局解析守卫
router.beforeResolve ((to, from, next) => {
    console.log("全局解析守卫")
    next()
})

//全局后置守卫
router.afterEach((to, from) => {
    console.log("全局后置守卫")
})*/

export default router;
