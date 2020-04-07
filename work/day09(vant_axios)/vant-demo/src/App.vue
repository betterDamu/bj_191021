<template>
  <div id="app">
    <van-popup v-model="show" position="top">
        <!-- 联系人卡片 -->
        <van-contact-card
          type="add"
          name="damu"
          tel="15851802777"
          add-text="添加联系人信息"
          @click="handleC"></van-contact-card>
    </van-popup>

    <van-contact-list
       v-model="id"
       :list="list"
       add-text="add"
       default-tag-text="尚硅谷彭于晏"
       @add="addFn"
       @edit="editFn"
       @select="selectFn"></van-contact-list>

  </div>
</template>

<script>
  import { ContactCard, ContactList, ContactEdit,Popup} from 'vant';
  export default {
    name: 'App',
    components:{
      [ContactCard.name]:ContactCard,
      [ContactList.name]:ContactList,
      [ContactEdit.name]:ContactEdit,
      [Popup.name]:Popup
    },
    data(){
      return {
        show:false,
        id:0,
        list:[
          {id:0,name:"damu",tel:15851802777,isDefault:true},
          {id:1,name:"xfz",tel:15851802778},
          {id:2,name:"tt",tel:15851802779},
          {id:3,name:"yy",tel:15851802780}
        ]
      }
    },
    methods:{
      handleC(){
        console.log("-----")
      },
      addFn(){console.log("addFn")},
      editFn(item,index){console.log("editFn",item,index)},
      //当点击选中的小圆圈按钮时 当前这个事件的回调会被执行两次
      selectFn(item,index){console.log("selectFn",item,index)}
    }
  }
</script>

<style scoped>

</style>
