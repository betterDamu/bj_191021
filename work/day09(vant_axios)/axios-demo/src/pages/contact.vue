<template>
  <div id="contact">
    <!-- 联系人卡片 -->
    <van-contact-card
      :type="cardType"
      :name="currentContact.name"
      :tel="currentContact.tel"
      @click="showList = true"
    />

    <!-- 联系人列表 -->
    <van-popup v-model="showList" position="bottom">
      <van-contact-list
        v-model="chosenContactId"
        :list="list"
        @add="onAdd"
        @edit="onEdit"
        @select="onSelect"
      />
    </van-popup>

    <!-- 联系人编辑 -->
    <van-popup v-model="showEdit" position="bottom">
      <van-contact-edit
        :contact-info="editingContact"
        :is-edit="isEdit"
        :tel-validator="validator"
        @save="onSave"
        @delete="onDelete"
      />
    </van-popup>
  </div>
</template>

<script>
  import { ContactCard, ContactList, ContactEdit,popup } from 'vant';
  const OK = 200;
  export default {
    name:"contact",
    data() {
      return {
        chosenContactId: null,
        editingContact: {},
        showList: false,
        showEdit: false,
        isEdit: false,
        list: []
      };
    },
    computed: {
      cardType() {
        return this.chosenContactId !== null ? 'edit' : 'add';
      },

      currentContact() {
        const id = this.chosenContactId;
        return id !== null ? this.list.filter(item => item.id === id)[0] : {};
      }
    },
    methods: {
      // 添加联系人
      onAdd() {
        this.editingContact = { };
        this.isEdit = false;
        this.showEdit = true;
      },

      // 编辑联系人
      onEdit(item) {
        this.isEdit = true;
        this.showEdit = true;
        this.editingContact = item;
      },

      // 保存联系人(新增时的保存  修改时的保存)
      async onSave({name,tel}) {
        this.showEdit = false;
        this.showList = false;

        let body = "" ;
        if (this.isEdit) {
          this.list = this.list.map(item => item.id === info.id ? info : item);
        } else {
          //新增联系人 数据库中加了一条 而list数据没有被同步 不要忘了同步list
          body = await this.$http({
            url:"/contact/new/json",
            method:"post",
            data:{name, tel}
          })
          //更新list  这是一个异步的更新!!!
          //更新list为什么要发请求? 而不是拿到list去进行一次push
          // this.list.push(body.data)
          await this.updateList() //为了得到实时的数据!!!
        }

        //是选中的id先更新 还是 list先更新
        //91行没有await 先更新了id 再更新list
        //91行有await 先更新list 再更新id
        if(body.code === OK)
          this.chosenContactId = body.data.id;
      },

      // 删除联系人
      onDelete(info) {
        this.showEdit = false;
        this.list = this.list.filter(item => item.id !== info.id);
        if (this.chosenContactId === info.id) {
          this.chosenContactId = null;
        }
      },

      // 选中联系人
      onSelect() {
        this.showList = false;
      },

      //手机号不做检验
      validator(){
        return true
      },

      //初始化&更新list
      async updateList(){
        const {code,data} = await this.$http({
          url:"/contactList",
          method:"get"
        })
        if(code === OK)
          this.list = data
      }
    },
    components:{
      [ContactCard.name]:ContactCard,
      [ContactList.name]:ContactList,
      [ContactEdit.name]:ContactEdit,
      [popup.name]:popup
    },
    async mounted(){
        //初始化渲染
        this.updateList()
    }
  };
</script>

<style scoped>

</style>
