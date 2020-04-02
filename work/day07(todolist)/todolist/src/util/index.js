export default {
  get(key,defVal){
    let val = localStorage.getItem(key);
    return val ? JSON.parse(val) : defVal;
  }
}
