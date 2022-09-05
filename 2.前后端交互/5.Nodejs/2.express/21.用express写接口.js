//1.导入express
const express = require('express')
//2.创建web服务器
const app = express()
//导入解决跨域问题的模块
const cors = require('cors')

//----写接口-----------------


//为了post接口2写的中间件
// 如果要获取URL-encoded格式的请求体数据，必须配置中间件app.use(express.urlencoded({extended:false} ))
// 【urlencoded格式】：又叫form格式，或者是x-www-form-urlencoded格式。例如：name=zs&age=16
//可以把查询字符串解析成对象
app.use(express.urlencoded({extended:false} ))


// //若是要配置JSONP（解决跨域 不推荐） 必须写在cors之前配置JSONP接口，没写在接口模块中
// app.get(' /api/jsonp ', (req, res) => {
//     //1．获取客户端发送过来的回调函数的名字
//     const funcName = req.query.callback
//     //2．得到要通过JSONP形式发送给客户端的数据
//     const data = { name: 'zs ', age: 22 }
//     // 3．根据前两步得到的数据，拼接出一个函数调用的字符串  小括号代表要调用这个函数
//     const scriptStr = `${funcName}(${JSON.stringify(data)}) `
//     //4、把上一步拼接得到的字符串，响应给客户端的<script>标签进行解析执行
//     res.send(scriptStr)
// })

 

 // 在路由之前调用app.use(cors())配置中间件 解决跨域问题  全局可用
app.use(cors())

 //-------------------------------
//路由 模块化 在另一个文件里呢
//导入路由模块 
const router = require('./21.apiRouter.js')
//把路由模块注册到app上
app.use('/api', router)

 
//---------------------------------------------------



//3.启动web服务器 监听端口
app.listen(80, () => {
    console.log('express server running at http://192.168.56.1');
})

//测试接口1
//运行nodemon 21.用express写接口
// postcode get :  http://192.168.56.1/api/get 在后面写查询字符串或者params面板中写都行 送过去一些数据 send
// !!!!!!!!!别忘了/api
//客户端:
// {"status":0,"msg":"GET请求成功!","data":{"id":"1","age":"18"}}

//测试接口2
// http://192.168.56.1/api/post  body面板-x-ww.. 输入  
//客户端:
// {"status":0,"msg":"POST请求成功","data":{"id":"1","name":"zs"}}