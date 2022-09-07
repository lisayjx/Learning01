// 问题1: webpack打包时,默认入口和出口在哪个文件?
// src/index.js默认入口，dist/main.js默认出口 

//修改默认入口和出口----------------
// [配置文档](https://webpack.docschina.org/concepts/#entry)
 
// 在webpack.config.js文件里写
// const path = require('path');
// module.exports = {
//   entry: './path/to/my/entry/file.js',  //设置入口得
//   output: {///设置出口的
//     path: path.resolve(__dirname, 'dist'),   对应的文件夹
//     filename: 'my-first-webpack.bundle.js',  对应输出的文件名
//   },
// };

//注意：webpack.config.js需要自己建，放在src得外面，和package.json一个级别
//修改了默认入口和出口之后 重新打包 记得若是新建了一个入口文件，要把写得代码复制过去


//问题：执行 yarn build 都经过了哪些流程呢？
// img:yarnbuild打包流程.png
//所有要被打包的资源都要和入口产生 直接/间接得引用关系
// img :间接引入.png

//出现了问题：node终端执行 没打包之前的js 为什么出现 不能使用import得报错？
// 因为node默认用commonjs 得规范，得用require('方式引入模块') 所以执行打包后得js代码
// 问题2: yarn下载的包,能否作用在前端网页上呢?

