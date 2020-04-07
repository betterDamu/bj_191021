### vant
  官网: https://youzan.github.io/vant/#/zh-CN/
  安装: npm i vant -S
  使用方式:
    1.使用前要安装babel的插件 npm i babel-plugin-import -D
    2.配置babel ; 在.babelrc 中添加配置
      {
        "plugins": [
          ["import", {
            "libraryName": "vant",
            "libraryDirectory": "es",
            "style": true
          }]
        ]
      }
    3.引入方式一
      import Vue from 'vue';
      import { Button } from 'vant';
      Vue.use(Button);
    4.引入方式二
        import { Button } from 'vant';
        export default {
          components:{
            [Button.name]:Button
          }
        }

### van-contact-card
  type="add"
  add-text="添加联系人信息"
    添加联系人;以及添加联系人面板的文案
  type="edit"
  name="damu"
  tel="15851802777"
    编辑联系人;以及联系人的信息

### axios官网
  http://www.axios-js.com/zh-cn/docs/
