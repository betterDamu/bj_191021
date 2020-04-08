export default {
  chaneSerachName(state,serachName){
    state.serachName = serachName;
  },
  changeList(state,list){
    state.list = list;
  },
  reqing(state){
    state.showMsg = false;
    state.showLoading = true;
    state.showNoBody = false;
  },
  reqSuccessHasData(state){
    state.showMsg = false;
    state.showLoading = false;
    state.showNoBody = false;
  },
  reqSuccessHasNoData(state){
    state.showMsg = false;
    state.showLoading = false;
    state.showNoBody = true;
  }
}
