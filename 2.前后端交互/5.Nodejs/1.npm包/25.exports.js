// 1.exports对象
// 由于module.exports单词写起来比较复杂，为了简化向外共享成员的代码，
// Node提供了exports对象。默认情况下，exports和module.exports指向同一个对象。
// 最终共享的结果，还是以module.exports指向的对象为准。！！！！！！
console.log(exports);// {}
console.log(module.exports);// {}
console.log(module.exports === exports);// true
//指向同一个对象


// ************** 自定义模块页面**************

// //挂载一个私有成员 向外共享
// const name = 'zs'
// exports.name = name

// exports.age = 20
// exports.sayHI = function () { console.log('hi'); }


// ***************** 外界页面********************
// const c = require('./自定义模块页面')
// console.log(c);
// {name:'zs',age:20,sayHi: [Function (anonymous)]}