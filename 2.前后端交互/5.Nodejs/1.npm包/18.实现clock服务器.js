//实现clock时钟的web服务器
//将拆分后的clock文件让客户端可以访问 


//  实现步骤
// 1.导入需要的模块
// 2.创建基本的web 服务器
// 3.将资源的请求url地址映射为文件的存放路径
// 4.读取文件内容并响应给客户端
// 5.优化资源的请求路径


//1.导入http,fs,path模块
const http = require('http')
const fs = require('fs')
const path = require('path')

//2.创建web服务器
const server = http.createServer()
//3.监听客户端的请求
server.on('request', (req, res) => {
    //3.1获取客户端要请求的url地址  
    //若是请求index.html就是在网页输入 /clock/index.html  是不完整的
    //但是我们读取文件时候需要完整的路径 所以需要下面的拼接
    const url = req.url
    //把客户端请求的地址 映射到本地文件的存放路径
    //3.3路径拼接
    const fpath = path.join(__dirname, url)     //__dirname当前文件存储路径+url地址

    //4.读取本地文件的内容,并且响应给客户端
    fs.readFile(fpath, 'utf8', (err, dataStr) => {
        if (err) return res.end('404')



        //5.如果读取文件成功,将读取成功的内容相应给客户端
        //css和js没生效，是因为设置了res.setHeader(),写死了所有资源以同一content-type展示
     //   res.setHeader('Content-Type', 'text/html;charset=utf-8'); 本来是设置传回给用户的中文防止乱码
    //  只有是html文件的时候 才加上res.setHeader("Content-Type", "text/html; charset=utf-8"); 有css js时候不加它 
     res.end(dataStr)
    })

 
     
})
//启动服务器
server.listen(80, () => {
    console.log('http server running at http://192.168.56.1:80')//:80可以省略
})

//详情请看图clock服务器



//---------------------------------------------------
//优化路径资源
// 在网页输入http://192.168.56.1/  访问根路径应该默认到index首页 但是此时是404
// 在网页输入http://192.168.56.1/clock/index.html 能找到页面 但是太麻烦了 
// 我想在输入网页输入http://192.168.56.1/index.html 这样的也能访问怎么设置?
// //所以有两个需求,
// 1.想访问http://192.168.56.1/时候直接到首页
// 2.想http://192.168.56.1/index.html直接这样输入 省略clock


// bug:
// 1.防止中文乱码那行代码会影响css,要给注释
// 2.clock中的index.html文件里的css和js链接地址写错了