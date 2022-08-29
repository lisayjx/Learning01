
//  需要实现的功能
//  1.格式化日期               toolP包中的 dateFormat格式化日期方法
//  2.转义HTML中的特殊字符     toolP包中的 htmlEscape转义方法
//  3.还原 HTML中的特殊字符    toolP包中的


//为啥要转义： 怕注入
// 很危险，如果这些代码内容被存入数据库，进行闭合后，服务器会执行特定的代码，网站直接寄。
// 直接查到管理员账号密码，提权成
// 比如破会你的结构，或者用alert弹出东西

//1.导入自己的包  ytools是我的包名
//此时包还没上线 要是上线了下载到本地就直接用包名，此时还是用户我自定义模块包
const ytools = require('./自己开发的包/ytools/index.js')  
//上线了用第三方库 const ytools = require('ytools') 


// const ytools = require('./自己开发的包/ytools/') 此时只给了文件夹没给具体文件为什么还能使用？
// 他自己去查找就package的main属性，自己根据main导入index.js 




//----功能1:格式化日期----------
const dt = ytools.dateFormat(new Date())
console.log(dt);  //2022-08-29  21:54:46

// --功能2:转义 HTML中的特殊字符-------
const htmlStr = `<h1 style="color:red">你好！&copy; <span>小李！</span></h1>`
const str = toolP.htmlEscape(htmlStr)
console.log(str);
















//----------------2.初始化包的基本结构----------------

// 新建toolP-tools文件夹，作为包的根目录在toolP-tools文件夹中，新建如下三个文件:
// package.json(包管理配置文件)
// index.js(包的入口文件)
// README.md(包的使用说明文档)

//--------初始化package.json--------------
// {
//     "name": "ytools",     包名 唯一（去看看官网有没有重名的） 和你当前文件夹名字可以不一致
//     "version": "1.0.0", 
//     "main" : "index.js",
//     "description": "提供了格式化时间,HTMLEscape的功能",    搜索时候的简短信息
//     "keywords": ["toolP" ,"dateFormat" , "escape"],   搜索的关键字 可以自定义
//     "license" : "ISC"        开源许可协议
//     }
// 关于更多license许可协议相关的内容，可参考https://www.jianshu.com/p/86251523e898

// ---------在index.js 中定义格式化时间的方法-----------
// function dateFormat(dateStr) {
//     //创建一个实例对象  这个是现在的时间
//     const dt = new Date(dateStr)

//     const y = dt.getFullYear()
//     const m = padZero(dt.getMonth() + 1)
//     const d = padZero(dt.getDate())

//     const hh = padZero(dt.getHours())
//     const mm = padZero(dt.getMinutes())
//     const ss = padZero(dt.getSeconds())

//     return `${y}-${m}-${d}  ${hh}:${mm}:${ss}`
// }

// //2.定义补0的函数
// function padZero(n) {
//     return n > 9 ? n : '0' + n
// }

// //3.把dataFormat暴露出去让外界可以使用
// module.exports = {
//     dateFormat
// }
  
