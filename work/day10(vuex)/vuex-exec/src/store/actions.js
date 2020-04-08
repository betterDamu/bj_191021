import axios from "@/http"
export default {
  chaneSerachName(store,serachName){
    //提交一个mutation来修改serachName
    store.commit("chaneSerachName",serachName)
  },
  async search(store){
    //发送请求前 就应该把showMsg调整为false
    store.commit("reqing")
    //发送请求前 无论如何 loading是该显示的
    //发送ajax请求 拿到返回的数据 去修改仓库state中的list
    const {items:list} = await axios({
      url:"/search/users",
      method:"get",
      params:{
        q:store.state.serachName
      }
    });
    //提交一个mutation来修改list
    store.commit("changeList",list)

    //发送请求成功 请求有数据 请求没有数据
    if(list.length){
      //请求成功 并且有数据
      store.commit("reqSuccessHasData")
    }else{
      //请求成功 并且有数据
      store.commit("reqSuccessHasNoData")
    }

  }
}
