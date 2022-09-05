const express = require('express')
const router = express.Router()

//在这里挂在对应的路由

//接口1:编写get接口
router.get('/get', (req, res) => {
    //调用req.query获取客户端通过查询字符串发送到服务器的数据
    const query = req.query
    console.log(query);
    //调用res.send()向客户端相应处理的结果
    res.send({
        status: 0,           //0表示处理成功,1表示处理失败
        msg: 'GET请求成功!', //状态的描述
        data: query          //需要相应给客户端的数据
        // 数据在中间件加工,最后流转到这里,所以这里只要原封不动返回给客户端就行了
    })
})
//接口2:编写post接口
// 注意:如果要获取URL-encoded格式的请求体数据，必须配置中间件app.use(express.urlencoded({extended:false} ))
// 【urlencoded格式】：又叫form格式，或者是x-www-form-urlencoded格式。例如：name=zs&age=16
//可以把查询字符串解析成对象
router.post('/post', (req, res) => {
    //获取客户端通过请求体发送到服务器的URL-encoded数据
    const body = req.body
    console.log(body)
    //把数据相应回给客户端
    res.send({
        status: 0,
        msg: 'POST请求成功',
        data: body     //服务器接收过来客户端的查询字符串转变成了对象,但是相应回给客户端时是回去的JSON数据
    })
})


//3.编写 cors跨域问题 的预检请求 的delete接口
router.delete('/delete',(req,res)=>{
    res.send({
        status: 0,
        msg: 'DELETE请求成功',
    })
})




//把router对象暴露出去
module.exports = router










// get请求,服务器端获取请求数据用req.query
// post请求,服务器端获取请求数据用req.body