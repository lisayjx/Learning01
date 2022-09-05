// 例如:在express@4.16.0之前的版本中，经常使用body-parser这个第三方中间件，
// 来解析请求体数据。使用步骤如下:
// 1.运行npm install body-parser安装中间件
// 2.使用require 导入中间件
// 3.调用app.use()注册并使用中间件


//导入服务器模块
const express = require('express')

//创建服务器
const app = express()


//如果没有解析的中间件 req.body是undefined
//第三方中间件 body-parser 可以解析客户端发来的表单数据
//导入第三方中间件模块
const parser = require('body-parser')
//使用app.use()注册中间件
app.use(parser.urlencoded({extend: false}))

// app.use(express.urlencoded({extend: false}))这个是内置中间件

//路由
app.post('/user', (req, res) => {
    console.log(req.body);
    res.send('服务器接收到了你的请求')
})





//启动服务器
app.listen(80, () => {
    console.log('express server running at http://192.168.56.1');
})

//测试:
// 在客户端postcode中,post:http://192.168.56.1/user
// body-x-www..输入 几个键值对
//客户端postcode接收到了 '服务器接收到了你的请求'
//服务器终端打印 { name: 'lisa', age: '18' }

// 注意:Express 内置的 express.urlencoded中间件，就是基于body-parser这个第三方中间件进一步封装出来的。
