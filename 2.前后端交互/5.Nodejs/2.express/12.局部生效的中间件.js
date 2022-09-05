//  局部生效的中间件
// 不使用app.use(定义的中间件，叫做局部生效的中间件，示例代码如下:

const express = require('express')
const app = express()



//局部中间件wm
const wm=function(req,res,next){
    console.log('这是局部中间件') 
    next()
}

 
//路由/        这个路由有三个参数  wm就相当于之在这个路由生效 局部生效的中间件
app.get('/',wm,  (req, res) => {
    res.send('调用了/这个路由')
})
//路由/user       
app.get('/user',(req, res) => {
    res.send('调用了/user这个路由')
})

//启动并且监听服务器
app.listen(80, () => {
    console.log('express server running at http://192.168.56.1');
})