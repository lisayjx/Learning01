//导入自定义格式化时间的模块
const time = require('./29.格式化时间传统做法.js')
// console.log(time);
//调用方法，进行实践的格式化
const dt = new Date()//创建现在的时间
 console.log(dt);//没格式化过的时间
const newDT = time.dateFormat(dt)
console.log(newDT);//格式化后的时间

// 2022-08-29T11:52:04.049Z
// 2022-08-29  19:52:04
