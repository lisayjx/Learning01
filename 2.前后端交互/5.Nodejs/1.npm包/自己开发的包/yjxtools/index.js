//这是包得入口文件
//把分别写好的功能的js引入，因为别人找到我们的包是在index.js中找 他是入口文件
//所以在这里引入功能包 并且向外部暴露包
const date = require('./src/dateFormat.js')
const escape = require('./src/htmlEscape.js')

// date是个对象，包含成员 dateFormat
// escape是个对象，包含成员htmlEscape    htmlUnEscape



//向外界暴露这三个功能函数
module.exports = {
    
    //展开对象，把对象中的属性展开
    ...date,//   dateFormat,
    ...escape// htmlEscape,htmlUnEscape
}
 

//  将不同的功能进行模块化拆分
// 将格式化时间的功能，拆分到src -> dateFormat.js 中
// 将处理HTML字符串的功能，拆分到src -> htmIEscape.js中
// 在index.js 中，导入两个模块，得到需要向外共享的方法
// 在index.js 中，使用module.exports把对应的方法共享出去
