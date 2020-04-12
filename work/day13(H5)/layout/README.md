### layout项目的初始化
    1. 使用@vue/cli创建项目
    2. 添加vue.config.js配置文件;对脚手架创建的项目做一些环境的配置
    3. 安装husky 修改package.json 为husky添加配置文件
            关闭eslint 在文件保存时的检验
                lintOnSave:false
            关闭eslint 在代码提交前的钩子(下述配置不加)
                "husky": {
                    "hooks": {
                      "pre-commit": "npm run lint"
                    }
                  }
    4. mock数据 ; 安装mock.js 拦截请求
    5. 搭建axios的环境; 安装vant
            因为axios的轻提示依赖于vant ; 所以我们要安装vant;
            如果你的项目中不会使用到vant;那么请把toast.js中的轻提示 换成其他轻量级的库
    6. 搭建vue-router的环境
    7. 搭建vuex的环境

