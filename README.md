# 优云交付前端

### 需要预先安装的技术栈

* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/) npm i -g bower
* [Gulp](http://gulpjs.com/) npm i -g gulp
* [Babel](https://babeljs.io/) npm i -g babel-cli

### 其它使用到的技术栈及其文档

* [Webpack](http://webpack.github.io/docs/)
* [React](https://facebook.github.io/react/docs/)
* [React Router](https://github.com/rackt/react-router/)
* [ECharts](http://echarts.baidu.com/)
* [lodash](https://lodash.com/)
* [SASS](http://sass-lang.com/)

### 安装

* `git clone <repository-url>` this repository
* change into the new directory
* 解压缩 node_modules.7z 至当前目录
* `bower install`
* `gulp conf_office`
* `gulp`

### 启动开发环境

* `gulp server`
* 访问 [http://localhost:2016](http://localhost:2016).

### 监控文件变化

* `gulp watch`

### 发布

* `gulp release`

### 其它说明

* javascript的编译打包从 webpack.config.js 设定的 "./scripts/index.js" 文件开始，用ES6的import语法打包为一个单一的文件：build/index.pack.js
* 部分外部依赖使用gulp打包为另一个单一文件：vendors.js
* css代码使用sass二次编译生成为一个单一的文件：content/main.css（在gulp脚本中已处理）
* js代码基本遵循ES6语法，需要使用Babel编译为ES5（在gulp脚本中已处理）
* 如果提示某些外部依赖缺失，尝试执行 bower install
