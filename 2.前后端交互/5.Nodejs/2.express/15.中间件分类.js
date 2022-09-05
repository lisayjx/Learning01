// 为了方便大家理解和记忆中间件的使用，
// Express 官方把常见的中间件用法，分成了5大类，分别是:
// 1.应用级别的中间件
// 2.路由级别的中间件
// 3.错误级别的中间件
// 4.Express内置的中间件
// 5.第三方的中间件

const express = require("express");
const app = express()

//----------1.应用级别中间件------------
// 通过app.use()或 apj.get()或 app.post()，绑定到app实例上的中间件，叫做应用级别的中间件，代码示例如下:
//就是挂在app身上的

//全局中间件
app.use((req, res, next) => {
    next()
})

//局部中间件
const wm = function (req, res, next) {
    next()
}
app.get('/', wm, (req, res) => {//使用中间件的路由
    res.send('home page')
})

//--------2.路由级别的中间件-----------绑在router身上
// 绑定到  express.Router()  实例上的中间件，叫做路由级别的中间件。
// 它的用法和应用级别中间件没有任何区别。
// 只不过，成用级别中间件是绑定到 app实例上，
// 路由级别中间件绑定到router实例上，代码示例如下:
//          应用级别:绑定在app实例上 
//          路由级别:router实例上
// 一个是绑服务器，一个是绑模块
const express = require('express')
const router = express.Router()
//路由级别中间件
router.use(function (req, res, next) {
    console.log('time', Date.now())
    next()
})
app.use('/', router)


//---------3.错误级别的中间件  比较特殊=====错误中间件必须注册在所有路由之后
// 错误级别中间件的作用:专门用来捕获整个项目中发生的异常错误，
// 从而防止项目异常崩溃的问题。
//用了use  全局

// 格式:错误级别中间件的function处理函数中，必须有4个形参，
// 形参顺序从前到后，分别是(err, req, res, next)。
app.get('/', function (req, res) {//路由
    throw new Error('服务器内部发生了错误')//抛出了一个自定义错误
    res.send('home page')//发生错误后这行代码没执行
})
//中间件 若是没有这个的话 上面的错误就会导致项目崩溃  他是捕获错误的
app.use((err, req, res, next) => {//错误级别的中间件 写在所有路由后 可以不加next
    console.log('发生了错误,' + err.message)//在服务器中断打印错误信息
    res.send(err.message)//向客户端响应错误相关内容
    // 异常消息给了客户端了   这不就执行结束了  就不需要next了
})


//--------4.express内置中间件---------------------
// 自Express 4.16.0 版本开始，Express 内置了3个常用的中间件，
// 极大的提高了Express项目的开发效率和体验:

// 1.express.static (无兼容性)快速托管静态资源的内置中间件， 例如:HTML文件、图片、CSS样式等（无兼容性)
 
// 2.express.json解析JSON格式的请求体数据（有兼容性，仅在4.16.0+版本中可用)
    // 把客户端发来的json格式数据--到了服务器转成对象
// 3.express.urlencoded解析URL-encoded格式的请求体数据（有兼容性，仅在4.16.0+版本中可用)
    //    把客户端发来的键值对格式数据--到了服务器转成对象


//配置解析application/json格式数据的内置中间件
app.use(express.json())
//配置解析application/x-www-form-urlencoded格式数据的内置中间件,解析这种格式的表单数据
app.use(express.urlencoded({extend:false}))

//2.3都是解析数据的!!!!!!! 





// ---------5.第三方中间件-----------
// 非Express官方内置的，而是由第三方开发出来的中间件，叫做第三方中间件。
// 在项目中，大家可以按需下载并配置第三方中间件，从而提高项目的开发效率。

// 例如:在express@4.16.0之前的版本中，经常使用body-parser这个第三方中间件，
// 来解析请求体数据。使用步骤如下:
// 1.运行npm install body-parser安装中间件
// 2.使用require 导入中间件
// 3.调用app.use()注册并使用中间件
 

//--------------6.自定义中间件-----------------

// 写在了19








//-------------------------------------------------------------
// 启动服务器
app.listen(80, () => {
    console.log('express server running at http://192.168.56.1');
})
