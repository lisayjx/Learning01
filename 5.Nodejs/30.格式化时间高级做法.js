//   格式化时间的高级做法
// 1.使用npm包管理工具，在项目中安装格式化时间的包moment
// 2.使用require()导入格式化时间的包
// 3.参考moment的官方API文档对时间进行格式化


//     在项目中安装包的命令
// 如果想在项目中安装指定名称的包，需要运行如下的命令:
//  npm install 包的完整名称
// npm i moment
// 去找moment的文档看看怎么用https://www.npmjs.com/

//导入包   导入的名称就是装包时候的名称 必须是字符串
//按住ctrl+moment可以看到源文件
const moment = require('moment')
//只要调用moment()就会得到当前时间 然后.format()就会格式化
//format是moment的一个方法，你调用才能格式时间
// YYYY-MM-DD HH:mm:ss  按照这个格式，这个格式可以改 现在用的是补0 的形式
const dt=moment().format('YYYY-MM-DD HH:mm:ss'); 
console.log(dt);//2022-08-29 20:11:31
//--------------------
// 或者在 ES6 语法中：

// import moment from 'moment';
// moment().format('YYYY-MM-DD HH:mm:ss');