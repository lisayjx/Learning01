
//导入服务器模块 创建服务器
const express = require("express");
const app = express()
//1.导入自己封装的中间件模块
const customBodyParser=require('./20.custom-body-parse.js')

// 2.将自己封装的中间件 注册为全局可用的中间件
app.use(customBodyParser)

 

//路由
app.post('/user', (req, res) => {

    res.send(req.body)
})

 
//启动监听服务器
app.listen(80, () => {
    console.log('express server running at http://192.168.56.1:80');
})

//客户端收到的
// {"name":"lisa","age":"18"}
//服务端终端打印的
// { name: 'lisa', age: '18' }


