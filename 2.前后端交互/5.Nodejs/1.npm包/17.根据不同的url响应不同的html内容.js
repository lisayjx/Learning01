//       核心实现步骤
// 1.获取请求的url地址      (客户想获取的url地址)
// 2.设置默认的响应内容为404 Not found
// 3.判断用户请求的是否为/或/index.html首页
// 4.判断用户请求的是否为/about.html关于页面
// 5.设置Content-Type响应头，防止中文乱码使用res.end()把内容响应给客户端


// 根据不同页面响应不同内容
const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {

    //1.获取客户端请求的url地址,客户端输入的 得从客户端获取
    const url = req.url
    //2.设置默认内容
    let content = `<h1>404 Not found!</h1>`    //注意这里用了let
    //3.
    if (url === '/' || url === '/index.html') {
        content = `<h1>首页</h1>`
    } else if (url === '/about.html') {
        content = `<h1>关于页面</h1>`
    }


    //为了防止中文乱码,需要设置
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    //把内容发送给客户端
    res.end(content)

})

server.listen(80, () => {
    console.log('http server running at http://192.168.56.1')
})

//bug!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 因为我把 content定义成了const 常量  其实它需要被修改的!!!!!!!!!

 




