import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

/*vuex的核心:
  1. 仓库中的数据怎么读取
  2. 仓库中的数据怎么修改*/
export default new Vuex.Store({
    state:{
      msg:"hello vuex"
    }
})

