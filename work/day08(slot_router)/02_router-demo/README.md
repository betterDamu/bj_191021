### vue 路由环境的搭建
  1. 要定义路由组件
      pages
  2. 定义路由(将路由组件 与 一个路径相映射)
      routes
  3. 定义路由器
      router
        将vueRouter定义成vue的插件
        将路由注册到vueRouter中
  4. 将路由器交给vue管理
  5. 最终路由组件的跳转依赖于 router-link组件
  6. 最终路由组件的显示依赖于 router-view组件

