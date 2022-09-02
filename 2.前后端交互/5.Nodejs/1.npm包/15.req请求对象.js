//导入http模块
const http = require('http')
//创建服务器实例
let server = http.createServer()
//为服务器绑定监听客户端的事件
server.on('request', (req,res) => {
    // console.log('Someone visit your visit');
    console.log(
        `Your request url is ${req.url},
        and request method is ${req.method}
        `
    );
})

//启动服务器          结束服务器ctrl+c
server.listen(80, () => {
    // console.log('http server running at http://127.0.0.1:80');
    console.log('http server running at http://192.168.56.1');

})

// 去网页复制ttp://192.168.56.1,就会在终端打印出有人请求你的服务器 
// Your request url is xxx,      这里的url是从端口号后面开始的
// and request method is GET 

// 要是在postman中 像服务器发起一个post请求也可以 在postman中post下输入http://192.168.56.1
// 或者输入 http://192.168.56.1/index.html 随便加点东西  终端也会打印出东西
// Your request url is xxx,
// and request method is POST 


//注意每次修改代码都要重新启动服务器!!!!!!!!!// ctrl+c结束服务器
