//导入服务器包
const express = require('express')
//创建服务器
const app = express()


// 可以使用app.use()连续定义多个全局中间件。
// 客户端请求到达服务器之后，会按照中间件定义的先后顺序依次进行调用 


//创建多个中间件
app.use(function (req, res, next) {
    console.log('调用第一个全局中间件') 
    next()
})
app.use(function (req, res, next) {
    console.log('调用第二个全局中间件') 
    next()
})
app.use(function (req, res, next) {
    console.log('调用第三个全局中间件') 
    next()
})
app.use(function (req, res, next) {
    console.log('调用第四个全局中间件') 
    next()
})
//创建路由
app.get('/user', (req, res) => {///请求这个路由，会依次触发上述四个全局中间件
    res.send('user page')
})


 
 

//启动并且监听服务器
app.listen(80, () => {
    console.log('express server running at http://192.168.56.1');
})

//用postcode,get:http://192.168.56.1/user
//终端打印出
// 调用第一个全局中间件
// 调用第二个全局中间件
// 调用第三个全局中间件
// 调用第四个全局中间件
// postcode打印出user page