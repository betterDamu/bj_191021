import {Toast} from "vant";
import http from "@/http"
import router from "@/router"
import {GETSELLER,GETGOODS,GETRATINGS,
    GETADDRESSS,GETCATEGORIES,GETSHOPS,GETUSER} from "./mutation_types"
const OK=0;
const ERROR=1;

function loginSuccess(commit,user){
    commit(GETUSER,user);
    //编程式路由
    router.replace("/Profile")
};
function loginFail(){
    Toast.fail({
        message:"登录失败 请重新登录",
        duration:2000
    })
};


export default {
    async [GETSELLER]({commit},id){
        console.log(id,"actions")
        const {code,data} = await http.shop.getSeller();
        if(code === OK)
            commit(GETSELLER,data)
    },
    async [GETGOODS]({commit}){
        const {code,data} = await http.shop.getGoods()
        if(code === OK)
            commit(GETGOODS,data)
    },
    async [GETRATINGS]({commit}){
        const {code,data} = await http.shop.getRatings()
        if(code === OK)
            commit(GETRATINGS,data)
    },
    async [GETADDRESSS]({commit}){
        const {code,data} = await http.wrap.getPosition()
        if(code === OK)
            commit(GETADDRESSS,data)
    },
    async [GETCATEGORIES]({commit}){
        const {code,data} = await http.wrap.getCategories()
        if(code === OK)
            commit(GETCATEGORIES,data)
    },
    async [GETSHOPS]({commit}){
        const {code,data} = await http.wrap.getShops()
        if(code === OK)
            commit(GETSHOPS,data)
    },
    async [GETUSER]({commit},{loginWay,name,pwd,captcha,phone,code}){
        //发送登录的请求 最终去调用一个mutation
        let body = "";
        if(loginWay === "message"){
            //手机号 + 短信
            body =await http.wrap.loginBySms({
                phone,
                code
            })
        }else if(loginWay === "password"){
            //用户名 + 密码 + 验证码
            body = await http.wrap.loginByPwd({
                name,
                pwd,
                captcha
            })
        }

        if(body.code === OK) loginSuccess(commit,body.data)
        if(body.code === ERROR) loginFail()
    }
}