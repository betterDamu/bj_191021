### 如何修改windows的环境变量
    set : 查看当前windows操作系统所有的环境变量
    set name : 查看指定的环境变量的值
    set name=val : 设置环境变量(一次性的 关闭命令行窗口后 当前的设置就会失效)
    set name= : 删除环境变量

### npm相关的知识
    npm root -g : 查看用户本地安装的全局包
        C:\Users\alienware\AppData\Roaming\npm\node_modules
        window + E : 打开我的电脑
        window + R : 打开dos窗口


    npm uninstall @vue/cli -g : 全局卸载

    npm cache clean -f : 强力清除npm的缓存

    npm脚本:
        只能运行在含义package.json文件的目录下
        运行start脚本 是不用加run; npm start
        运行其他脚本   都要加run; npm run 脚本名
        "scripts": {
            "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
            "start": "npm run dev",
            "lint": "eslint --ext .js,.vue src",
            "build": "node build/build.js"
          },

    早期npm不会对包的命名做规范;可是后来npm团队发现一个问题:
        包很混乱  本身不属于vue生态的包 为了蹭vue的热度 故意以vue-开头命名
        为了防止以上的情况;npm推出了一个叫域的概念:
            @npm域名 : @vue 只有vue官方团队才有资格使用@vue这个域

    下载一个npm包,下载回来的包的类型;分两种
        第三方库/框架: jQuery,vue,react
        第三方命令行工具: babel postcss less webpack

### vue脚手架2.0
    安装脚手架:
        npm install -g vue-cli
            npm 帮你生成了脚手架对应的命令
                vue,vue-init,vue-list
            命令存放的目录 被配置了环境变量的path中

    查阅一下脚手架可支持的模板
        vue list

    使用脚手架生成项目(以下命令得运行在项目的包裹目录下)
         vue init <template-name> <project-name>

    启动项目
        npm run dev
        npm start