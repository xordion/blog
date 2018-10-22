# shma

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 安装deployd
$ npm install deployd-cli -g
deployd官方文档： http://docs.deployd.com/docs/getting-started/your-first-api.html

#安装mongodb
https://www.mongodb.com/download-center/v2/community 去servers下载安装对应系统的mongodb;
注意运行安装mongodb的msi包后要在Windows的path下配置路径，否则deployd找不到它;
这里会出现一个问题，bootstrap-vue搭配使用的bootstrap会在运行dpd命令时报错，我暂时删除了bootstrap，拷贝了css保存在src/assets目录下，只在入口模版文件里调用了样式。

#启动数据服务
dpd -p [port]