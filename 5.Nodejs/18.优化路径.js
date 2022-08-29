//优化路径资源
// 在网页输入http://192.168.56.1/  访问根路径应该默认到index首页 但是此时是404
// 在网页输入http://192.168.56.1/clock/index.html 能找到页面 但是太麻烦了 
// 我想在输入网页输入http://192.168.56.1/index.html 这样的也能访问怎么设置?
// //所以有两个需求,
// 1.想访问http://192.168.56.1/时候直接到首页
// 2.想http://192.168.56.1/index.html直接这样输入 省略clock





//1.导入http,fs,path模块
const http = require('http')
const fs = require('fs')
const path = require('path')

//2.创建web服务器
const server = http.createServer()
//3.监听客户端的请求
server.on('request', (req, res) => {
    //3.1获取客户端要请求的url地址  
    const url = req.url

    //3.3路径拼接
    // const fpath = path.join(__dirname, url)  

    //预定义空的文件存放路径      用let
    let fpath = ''
    //如果输入的是http://192.168.56.1/,那么直接把地址变成http://192.168.56.1/clock/index.html
    if (url === '/') {
        fpath=path.join(__dirname, './clock/index.html')
    } else {//如果是具体地址,缺少clokc的,我们手动帮用户加上去clock
        //url是用户输入的
        fpath=path.join(__dirname, './clock', url)
    }






    //4.读取本地文件的内容,并且响应给客户端
    fs.readFile(fpath, 'utf8', (err, dataStr) => {
        if (err) return res.end('404')


        res.end(dataStr)
    })



})
//启动服务器
server.listen(80, () => {
    console.log('http server running at http://192.168.56.1')//:80可以省略
})