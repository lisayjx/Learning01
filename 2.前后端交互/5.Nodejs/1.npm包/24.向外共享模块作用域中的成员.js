// 1.module对象
// 在每个.js自定义模块中都有一个module对象，
// 它里面存储了和当前模块有关的信息，打印如下:

console.log(module);
// Module {
//     id: '.',
//     path: 'D:\\爱创学习资料\\2.前后端交互\\5.Nodejs',
//     exports: {},
//     filename: 'D:\\爱创学习资料\\2.前后端交互\\5.Nodejs\\24.向外共享模块作用域中的成员.js',
//     loaded: false,
//     children: [],
//     paths: [
//       'D:\\爱创学习资料\\2.前后端交互\\5.Nodejs\\node_modules',
//       'D:\\爱创学习资料\\2.前后端交互\\node_modules',
//       'D:\\爱创学习资料\\node_modules',
//       'D:\\node_modules'
//     ]
//   }

// path：当前模块存放路径
// filename：当前模块完整的路径和名称
// 通过module.exports就可以向外共享成员了

//------------module.exports-------------------------------
// 在自定义模块中，可以使用module.exports对象，将模块内的成员共享出去，供外界使用。
// 外界用require()方法导入自定义模块时，得到的就是 module.exports所指向的对象。

// --------- 自定义模块页面----------
//  在一个自定义模块中，默认情况下 module.exports = {}
// 在自定义模块中，可以使用module.exports对象，将模块内的成员共享出去，供外界使用。


// --------- 外界页面------------
//  在外界使用require 导入一个自定义模块的时候，得到的成员，
// 就是那个模块中，通过module.exports 指向的那个对象
const m = require('./自定义模块')
console.log(m);//{}








//---------共享成员时得注意点-----------------------
// 使用require()方法导入模块时，导入的结果，永远以module.exports指向的对象为准。

// ~~~~~~~~~~~~1.自定义模块页面------------

// module.exports.username = 'zs'

// module.exports.sayHI = function () {
//         console.log('hello');
// }

// 这个不是覆盖，是永远指向，放在最前面也不会被覆盖，也是指向它
// 是指向一个新地址 之前的地址仍然存在 怎么叫覆盖
// 前面的相当于往默认的空对象里面添加数据，后面址接给个新对象
// 下面这个相当于重新指向一个新的堆地址
// //让module.exports 指向一个全新的对象
// module.exports = {
//         nickname: '小莎',
//         sayHi() {
//                 console.log('hi');
//         }
// }

// ~~~~~~~~~~~~~2.外界页面~~~~~~~~~~~~~~~~~~~~~~
// const c = require('./1.自定义模块页面')
// console.log(c); 
// //{ nickname: '小莎', sayHi: [Function (anonymous)] }
 