### 题外话
  自研项目:
        代码是写给人看的;顺便让机器运行一下
        在项目特别复杂的情况下,我们写出来的代码 ,应该也要尽量的易读(便于以后项目的维护;便于以后新增需求)
  外包项目:
    写完就走人;不要我们维护的

### axios的二次封装
    当前版本的缺点:
      请求的代码太冗余;在接口规范不一致的情况下(接口需要的参数可能不同类型的)会导致前端代码特别难以维护;
      业务逻辑很难梳理
    优化后的版本:
      请求是配置化的;自动化的;
      可以抹平传参的差异;不管你接口要什么参数;组件上发请求时只传对象

### axios二次封装的目录设计
    body = await this.$http.contact.createContactByForm({name,tel,id})
    body = await this.$http.user.getUsers()
        //$http对象代表的是项目中所有模块请求需要的方法
        this.$http:{      contact:{                       user:{
          contact,          createContactByForm(){}         getUsers(){}
          user            }                               }
        }


    http
      contact
        axios.js : 提供发送请求的工具给util.http.js  被util.http.js引用
        config.js: 提供发送请求的配置给util.http.js  被util.http.js引用
        index.js : 暴露contact模块所需要的请求方法组成的对象 被http.index.js引用
      user
        axios.js
        config.js
        index.js : 暴露user模块所需要的请求方法组成的对象 被http.index.js引用
    index.js : 暴露整个项目所需要的请求方法组成的对象


    util
      http.js : 返回对应模块请求方法组成的对象 被每一个模块的index.js文件引用

### 实现util.http.js
    当前这个js文件 主要是根据axios实例 & config配置对象 来生成对应的请求方法组成的对象



