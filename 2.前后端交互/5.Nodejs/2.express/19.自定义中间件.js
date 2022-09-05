//  自定义中间件
// 1.需求描述与实现步骤
// 相当于如果请求体数据很多，分批传入，然后拼接，再进行对象转换，最后赋值到服务器中的整体请求体数据
// 自己手动模拟一个类似于express.urlencoded这样的中间件，来解析POST提交到服务器的表单数据。
// 实现步骤:
// 1.定义中间件
// 2.监听req的data事件   :
//          在中间件中，需要监听req对象的data事件，来获取客户端发送到服务器的数据。
//          如果数据量比较大，无法一次性发送完毕，则客户端会把数据[切割]后，
//          分批发送到服务器。所以data事件可能会触发多次，每”次触发data事件时，
//          获取到数据只是完整数据的一部分]，需要手动对接收到的数据进行拼接。
// 3.监听req的end事件
//          当请求体数据接收完毕之后，会自动触发req的end事件。
//          因此，我们可以在req的end 事件中，拿到并处理[完整]的请求体数据。示例代码如下:

// 4.使用querystring模块解析请求体数据
//          Node.js 内置了一个querystring模块，专门用来处理查询字符串。
//          通过这个模块提供的parse()函数，可以轻松把查询字符串，解析成对象的格式。 

// 5.将解析出来的数据对象挂载为req.body
//          上游的中间件和下游的中间件及路由之间，共享同一份req和res。
//          因此，我们可以将解析出来的数据，挂载为req的自定义属性，命名为req.body，
//          供下游使用。 

// 6.将自定义中间件封装为模块
//          为了优化代码的结构，我们可以把自定义的中间件函数，封装为独立的模块 


//导入服务器模块 创建服务器
const express = require("express");
const app = express()
//导入nodejs内置的querystring模块
const qs = require('querystring')

//------------------------------------------------
// 1.定义中间件(解析表单数据的中间件)
app.use(function (req, res, next) {
    //中间件的业务逻辑


    // 2.监听req的data事件
    //定义变量,用来存储客户端发来的请求体数据
    let str = ''
    req.on('data', (chunk) => {//chunk就 是一块块数据  用on的原因在下面
        //拼接请求体数据,隐式转换为字符串
        str += chunk
    })
    // 3.监听req的end事件
    req.on('end', () => {
        //打印完整请求体数据
        console.log(str)//name=lisa&age=18
        //4.使用querystring模块把字符串格式的请求体数据,解析成对象格式
        //qs弃用了咋办,ctrl+长按qs，将弹出来的代码里面的@deprecated Legacy删除，再保存，就能用了
        //或者可以使用第三方插件 npm i querystringify 用法一致
        let body = qs.parse(str)
        console.log(body);//{ name: 'lisa', age: '18' }


        //5.将解析出来的数据对象挂载为req.body
        req.body = body

        //这个千万别忘了 要不就连接不上下面的路由了
        next()
        // 因为内部是异步执行，如果不写在里面next会先执行
        // 大坑：next一定要在end监听函数内调用！否则变成异步的了 next先执行就完了
    })





})

//----------------

//路由
app.post('/user', (req, res) => {

    res.send(req.body)
})

//------------------
//启动监听服务器
app.listen(80, () => {
    console.log('express server running at http://192.168.56.1:80');
})





// express框架中用req.body接收post客户端的数据；req.query接收get请求
// nodejs用req.on(data)接收客户端的数据；或者你需要载入body-parser中间件才可以使用req.body

//测试1:没转换数据前
// 在客户端postcode中,post:http://192.168.56.1/user
// body-x-www..输入 几个键值对
//客户端postcode接收到了 '服务器接收到了你的请求'
//服务器终端打印 name=lisa&age=18

//测试二:转换数据后 挂在到req.body上后
// 在客户端postcode中,post:http://192.168.56.1/user
// body-x-www..输入 几个键值对
//客户端postcode接收到了  { name: 'lisa', age: '18' } 
//服务器终端打印
// {
//     "name": "lisa",
//     "age": "18"
// }