const express = require('express')
const app = express()




//中间件  把客户端发来的json格式数据变成对象格式的
app.use(express.json())



//路由
app.post('/user', (req, res) => {
    //在服务器，可以使用req.body这个属性，来接收客户端发送过来的请求体数据
   //默认情况下，如果不配置解析表单数据的中间件，则req.body默认等于undefined

    console.log(req.body);//在服务器终端打印客户端发来的数据 已经被中间件解析完了
    
    res.send('post请求成功')
})



app.listen(80, () => {
    console.log('express server running at http://192.168.56.1');
})



//测试一:express.json解析JSON格式的请求体数据,http://192.168.56.1/user
      // 我们在postcode向服务器发送post一个json格式的数据,body面板-raw-下拉菜单:输入json格式数据
      //客户端接收到了'post请求成功'
      //服务器终端打印了 { name: 'lisa' } 对象格式