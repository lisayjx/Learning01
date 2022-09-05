const express = require('express')
const app = express()





//中间件  express.urlencoded解析URL-encoded格式的客户端发来的数据
//把客户端发来的键值对格式数据--到了服务器转成对象
// 表单和ajax传输数据的格式就是url-encoded格式
app.use(express.urlencoded({extended:false}))

 
//路由
app.post('/user', (req, res) => {
    //在服务器，可以使用req.body这个属性，来接收客户端发送过来的请求体数据
   //默认情况下，如果不配置解析表单数据的中间件，则req.body默认等于undefined
    console.log(req.body);//在服务器终端打印客户端发来的数据 已经被中间件解析完了
    // req.query是客户端发来的get请求体数据-------------- 包含URL的查询参数（在URL的？后的参数）。
    // req.body是客户端发来的post请求体数据--------------
   // req.params包含路由参数（在URL的路径部分）
    res.send('post请求成功')
})


 


app.listen(80, () => {
    console.log('express server running at http://192.168.56.1');
})

//测试一:express.json解析JSON格式的请求体数据,http://192.168.56.1/user
      // 我们在postcode向服务器发送post一个URL-encoded格式的数据 ,body面板-x-www..,输入键值对 bookname  水浒传
      //客户端接收到了'post请求成功'
     //服务器终端看到了 [Object: null prototype] { bookname: '水浒传' }


     
    //  该中间件有一个extended参数，用于控制解析数据是选择qs模块还是querystring模块
    // extended:false的意思是：不使用第三方的解析方式，只使用自身的解析方式；如果是true就使用第三方解析方式