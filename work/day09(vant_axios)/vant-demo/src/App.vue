<template>
  <div id="app">
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
        @save="onSave"
        @delete="onDelete"
      />
    </van-popup>
  </div>
</template>

<script>
  import { ContactCard, ContactList, ContactEdit,popup } from 'vant';
  export default {
    data() {
      return {
        chosenContactId: null,
        editingContact: {},
        showList: false, //默认情况下列表不显示
        showEdit: false, //默认情况下编辑不显示
        isEdit: false,
        list: [{
          name: '张三',
          tel: '13000000000',
          id: 0
        }]
      };
    },
    computed: {
      cardType() {
        // console.log(this.chosenContactId !== null)
        return this.chosenContactId !== null ? 'edit' : 'add';
      },

      currentContact() {
        const id = this.chosenContactId; //新增那条数据的id
        return id !== null ? this.list.filter(item => item.id === id)[0] : {};
      }
    },
    methods: {
      // 添加联系人
      onAdd() {
        this.editingContact = { id: this.list.length };
        this.isEdit = false; // 添加联系人时 不管怎么样删除按钮都不应该出现
        this.showEdit = true; // 让编辑页显示
      },

      // 编辑联系人
      onEdit(item) {
        this.isEdit = true;
        this.showEdit = true;
        this.editingContact = item;
      },

      // 选中联系人
      onSelect() {
        this.showList = false;
      },

      // 保存联系人
      onSave(info) {
        this.showEdit = false; //隐藏编辑页
        this.showList = false; //隐藏列表页

        if (this.isEdit) {
          this.list = this.list.map(item => item.id === info.id ? info : item);
        } else {
          //info就是编辑页表单中录入的数据 (包括id)
          this.list.push(info);
        }

        //新增的那一条自动变为选中状态
        this.chosenContactId = info.id;
      },

      // 删除联系人
      onDelete(info) {
        this.showEdit = false;
        this.list = this.list.filter(item => item.id !== info.id);
        if (this.chosenContactId === info.id) {
          this.chosenContactId = null;
        }
      }
    },
    components:{
      [ContactCard.name]:ContactCard,
      [ContactList.name]:ContactList,
      [ContactEdit.name]:ContactEdit,
      [popup.name]:popup
    }
  };
</script>

<style scoped>

</style>
