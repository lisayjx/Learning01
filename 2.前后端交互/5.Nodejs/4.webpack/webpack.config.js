//这里得入口出口 不是默认得 是自己设置的入口和出口

 
const path = require('path');//node内置处理路径得模块
module.exports = {
  entry: './src/indexin.js',//入口
  output: {//出口 
    path: path.resolve(__dirname, 'dist'),   //对应的文件夹
    filename: 'bundle.js',  //对应输出的文件名 默认的是main.js
  },
};

// 注意: webpack基于node,所以导出,遵守CommonJS规范

//path必须用绝对地址: path.resolve()拼接2个路径
//_dirname: node内置全局变量(值:当前文件所在文件夹的绝对路径)这里就是4.webpack文件夹
