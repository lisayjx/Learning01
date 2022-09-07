//目标一：

// 按需导入  累加函数
import { addFn } from './add/add.js'
console.log(addFn(10, 20));

//导入数组求和函数
import { getArraySum } from './tool/tool.js'
console.log(getArraySum([1, 2, 3, 4]))


//目标二：隔行变色
//  yarn下的包,在js引入，能否直接作用在前端网页上?不能
import $ from 'jquery'
$("#myUL>li:nth-child(2n+1)").css('color', 'yellow')
$("#myUL>li:nth-child(2n)").css('color', 'green')