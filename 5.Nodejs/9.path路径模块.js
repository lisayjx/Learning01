// 什么是path路径模块
// path模块是Node., js 官方提供的、用来处理路径的模块。它提供了一系列的方法和属性，用来满足用户对路径的处理需求。
// 例如:
// path.join()方法，用来将多个路径片段拼接成一个完整的路径字符串
// path.basename()方法，用来从路径字符串中，将文件名解析出来
// 如果要在JavaScript代码中，使用path模块来处理路径，则需要使用如下的方式先导入它:


//先导入path模块
const path = require('path')

//1.path.join()语法格式
// path.join( 路径片段,路径片段,.. )
//返回值是字符串

// 例一
const re = path.join('/a', '/b/c', '../', './d', 'e')
console.log(re);//\a\b\d\e
//../会把紧挨着它前面的路径抵消掉   所以没有c了

// 例二

//---------------完美写法 join 和 dirname用到有./或者../时候-----------------
const re2 = path.join(__dirname + './test/1.txt') 
    console.log(re2);
 //D:\爱创学习资料\2.前后端交互\5.Nodejs.\test\1.txt