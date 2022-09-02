// -----------1.创建web 服务器的基本步骤
// 1.导入 http模块
// 2.创建web 服务器实例 .createServer()
// 3.为服务器实例绑定request事件，监听客户端的请求  .on方法绑定事件
// 4.启动服务器 .listen


// 1.导入 http模块
const http = require('http')
// 2.创建web 服务器实例
const server = http.createServer()

// 3.为服务器实例绑定request事件，监听客户端的请求
server.on('request', (req, res) => {
    //只要有客户端来请求我们自己的服务器,就会触发request事件,从而掉用这个事件处理函数
    //只要有人请求http://127.0.0.1:80这个地址,在终端就会有这个打印出来
    console.log('Someone visit our web server.');

})

// 4.启动服务器
//调用server.listen(端口号，cb回调)方法，即可启动web服务器
// 希望服务器运行在电脑的80端口的服务器,服务器启动成功会执行回调函数
server.listen(80, () => {
    console.log('http server running at http://127.0.0.1:80');

    // 127.0.0.1无法访问直接输入localhost就可以了
    // 192.168.56.1但我这个电脑的ip地址是这个  通过cmd中的ipconfig 
    // 然后去网址中搜这个ip地址 就会在终端打印出Someone visit our web server
})



// 只要是动态语言都能写后台,所以js也能,
// nodejs是js实现后台的一种环境,现在这个算是后台的内容,但是是属性大前端要会的内容

// ctrl+c停止服务器

//------------req  请求对象 
// req中存储的都是和客户端相关的一些东西
// req是请求对象，它包含了与客户端相关的数据和属性，
//  req.url是客户端请求的 URL地址   这里的url是从端口号后面开始的
//  req.method 是客户端的 method 请求类型

//-------------res  响应对象
// 在服务器的request事件处理函数中，如果想访问与服务器相关的数据或属性，
// 可以使用如下的方式:
// 向客户端发送指定的内容，并结束这次请求的处理过程 res.end(str)
 

//注意每次修改代码都要重新启动服务器!!!!!!!!!
// ctrl+c结束服务器
