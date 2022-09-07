// 需求:2个js文件->打包成1个js文件分析:
// ①:新建src下的资源
// ②: add.js一定义求和函数并导出
// 3: index.js -引入add模块并使用函数输出结果
// ④:执行`yarn build`自定义命令，进行打包(确保终端路径在src的父级文件夹)
// ⑤:打包后默认生成dist和main.js，观察其中代码

 
// 1.js代码被打包的流程-------------
// 文件夹src（只能叫src）
// src: {
//     1.add文件夹{add.js}
//     2.index.js 入口文件
// }
// 1.先去add.js写个求和函数并且导出 
// 2.去入口函数index.js 使用这个函数
//         import {addFn} from './add/add.js'
//         console.log(addFn(10,20));
// 3.输入命令 yarn build
// 打包生成 确保终端路径在src的父级文件夹 也就是4.webpack这个文件夹下运行终端
// 因为你敲完命令他会在当前文件夹下找src再找入口index.js 
//4.会自动出现dist文件夹里面有main.js


// 被打包的js文件需要和入口文件建立连接
//入口文件index.js需要引入被打包的js文件
// 【被打包的js文件---->src/index.js】-->node环境+webpack打包-->自动生成dist/main.js

//总结：想要打包的东西必须都得被入口文件引入
// img：js代码被打包流程

//如果以后代码增加了，如果再打包呢？？？？

//2.更新打包-----------------------
// 需求:代码增加后,如何打包呢?分析:
// 1. src下新增tool/tool.js:定义数组求和函数导出
// 2. index.js-引入tool模块的函数并使用,打印结果
// 3. 执行 `yarn build`自定义命令，进行打包(确保终端路径在src的父级文件夹)
