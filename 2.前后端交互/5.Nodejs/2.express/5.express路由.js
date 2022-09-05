// 现实生活中的路由：  在这里的路由 就是 [按键]和[服务]之间的 映射关系

const express = require("express")
const app = express()
// 给10086打电话:
// 按键1 ->业务查询
// 按键2 ->手机充值
// 按键3 ->业务办理

// 在Express 中，路由指的是客户端的请求与服务器处理函数之间的映射关系。
// Express 中的路由分3部分组成，分别是请求的类型、请求的URL地址、处理函数，格式如下:

// app.METHOD(PATH, HANDLER)
// 客户端:
//     METHOD: get, post
//     path: url地址
// 服务端:
//     handler: 处理函数

//---------例子
//第一个路由
// app.get('/', function (req, res) {
//     res.send('hello')
// })



//第二个路由
app.post('/', function (req, res) {
    res.send('Got a POST request')
})




//启动服务器
app.listen(80,()=>{
    console.log('express server running at http://192.168.56.1');
})