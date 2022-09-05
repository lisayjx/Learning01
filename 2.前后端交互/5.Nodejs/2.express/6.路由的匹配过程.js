 
    // <img src="./img/6.png" alt="">
    


        // 5.路由的匹配过程
        // 每当一个请求到达服务器之后，需要先经过路由的匹配，
        // 只有匹配成功之后，才会调用对应的处理函数。
        // 在匹配时，会按照路由的顺序进行匹配，
        // 如果请求类型和请求的URL同时匹配成功，
        // 则 Express 会将这次请求，转交给对应的function 函数进行处理。
        // 可以简单想成这是switch


        // **路由匹配的注意点:
        // 1.按照定义的先后顺序进行匹配
        // 2.[请求类型]和[请求的URL]同时匹配成功，才会调用对应的处理函数

        // express是服务器端处理 客户端发来的请求
        // ajax像是 从客户端像服务器端发起请求

        const express = require('express')
        const app = express()

        //挂载路由  把路由挂载到app身上也就是express创建的服务器身上
        // 路由1:监听客户端的get请求  然后向客户端响应回去消息
        // 路由2:监听客户端的post请求
        app.get('/',(req,res)=>{console.log(res.send('我服务器接收到了你客户端的发来的get请求并且和你说ok'));})
        app.post('/',(req,res)=>{console.log(res.send('我服务器接收到了你客户端发来的post请求并且和你说哈哈'));})


        //启动web服务器 监听
        app.listen(80,()=>{console.log('server running at http://192.168.56.1');})

 
        //在终端启动服务器 nodemon 6.xxx
        //去cscode左侧找插件postcode 去模拟客户端向服务器发送请求
        // get-->http://192.168.56.1,会得到 :我服务器接收到了你客户端的发来的get请求并且和你说ok
        // post-->http://192.168.56.1,会得到hello  :我服务器接收到了你客户端发来的post请求并且和你说哈哈

        //咱们现在用express创建服务器呢,是模拟服务器接收客户端发来的请求
        