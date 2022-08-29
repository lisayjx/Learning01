// //引入http模块
// const http = require('http')
// //创建服务器
// const server = http.createServer()
// //创建服务器实例
// server.on('request', (req, res) => {
//     let str = `Your request url is ${req.url},Your request method is ${req.method}`
//     console.log(str);


//     //调用res.end()方法,向客户端相应回去一些内容
//     res.end(str)
//     //把str给客户端发过去并结束请求的处理过程
//     //会在网页中看到Your request url is /,Your request method is GET
// })
// //启动服务
// server.listen(80, () => {
//     console.log('http server running at http://192.168.56.1')
// })


//--------------------------------------
// 5.解决中文乱码问题
// 当调用res.end)方法，向客户端发送中文内容的时候，会出现乱码问题，此时，需要手动设置内容的编码格式:

const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
    let str = `您请求的url地址是 ${req.url},您请求的method类型是 ${req.method}`
    console.log(str);

    //为了防止中文乱码,需要设置
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    res.end(str)

})

server.listen(80, () => {
    console.log('http server running at http://192.168.56.1')
})

//注意每次修改代码都要重新启动服务器!!!!!!!!!// ctrl+c结束服务器