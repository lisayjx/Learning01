// 需求:用yarn下载jquery,新建public/index.html,在indexin.js编写代码实现如下效果

//1.先下载yarn add jquery
//2.在4.webpack下建public文件夹/index.html，  public文件夹建在src隔壁（以后的vue脚手架用）
//3.在index.html中写页面样式
//4.去src下的入口文件indexin.js中引入index.html中用到的东西
// 在yarn下的包,在js引入，能否直接作用在前端网页上
//5.在index.html中引入刚才在入口文件写的代码

//  yarn下的包,在js引入，能否直接作用在前端网页上?不能
//解决方法  webpack打包：用yarn下载的包和语法都翻译成js代码直接作用在前端
// 步骤:
// 1: yarn下载jquery,新建public/index.html，准备一些li标签
// 2: src/main.js 引入jquery,编写js代码实现隔行变色
// 3:执行打包命令yarn build
// 4：复制index.html到dist下，然后引入打包后的js,运行html观察效果(以后dist文件夹部署到线上)
// 5：以后都要运行打包后的文件

//打包后的代码都会被送到bundle.js中
//把public中的index.html复制到dist文件夹中
// 在index.html中不能引入打包前的代码了 要引入dist下的bundle.js
//以后把dist文件夹发给运维小伙伴就可以
//  img：隔行变色.png

// 1．用yarn下的包,如何作用在前端项目?借助webpack，把模块和代码打包
// 把打包后js文件、 引入到html中运行
