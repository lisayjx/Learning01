//1.监听客户端get或者post请求
//  通过app.get()方法，可以监听客户端的GET请求 
//  通过app.post()方法，可以监听客户端的POST请求 
// 参数1:客户端请求的URL地址（字符串）
// 参数2:请求对应的处理函数
// req:请求对象(包含了与请求相关的属性与方法)
// res:响应对象(包含了与响应相关的属性与方法)
//       app.get('请求URL', function (req, res) {/*处理函数*/ })
//       app.post('请求URL', function (req, res) {/*处理函数*/ })
// 这行代码的意思：
// 我们希望监听客户端的get或者post请求，请求这样一个url地址，如果匹配成功
// 就说明你发起的是get请求，请求这样的url地址，
// 对应的我们就会调用后面的处理函数，对这次请求进行处理


// 2.把内容响应给客户端
// 通过res.send()方法，可以把处理好的内容，发送给客户端:
//（1）把用户的get请求的结果相应回去
// app.get('/user', (req, res) => {
//     //向客户端发送 JSON对象
//     res.send({ name: 'zs', age: 18, gender: '男' })
// })
//（2）把用户的post请求的结果相应回去
// app.post('/user', (req, res) => {
//     //向客户端发送文本内容
//     console.log('请求成功');
// })

//3.获取URL中携带的查询参数
// 通过req.query对象，可以访问到客户端通过【查询字符串】的形式，发送到服务器的参数:
// app.get('/', (req, res) => {
//     //req.query默认是个空对象  传过来了之后它就不是空的了就存的?name=zs&age=20 
//     //客户端使用?name=zs&age=20 这种查询字符串的形式，发送到服务器的参数
//     //可以通过req.query对象访问到   因为req就是和请求相关的属性与方法
//     console.log(req.query);//访问客户端传来的查询字符串就不用返回给客户端了 所以没用res.send()
//     res.send(req.query)//这句话意思是把获取到的url查询字符串返回给客户端

// })


//4.获取 URL中的动态参数
// 通过req.params对象，可以访问到URL中，通过:冒号 匹配到的动态参数 
// 例如 :id 这个位置是动态参数，你可以在这个位置去写任意的值，只要你请求了这个地址
// 我们在服务端就会把你写的值匹配出来，当作id的值
// 冒号后的字符串是自己随便写就行 合法合理就行
// :id/:name   意思就是匹配2个参数
// 请求时候后面写 1/zs 试试
// app.get('/user/:id', (req, res) => {
//     //  req.params默认是一个空对象  当你填写了对应值之后 就不是空的了 会给你匹配出来
//     //里面存放着通过:动态匹配到的参数值
// })







//------------------例子    每次修改代码都要重启服务器

//1.导入express模块
const express = require('express')
//2.创建服务器
const app = express()

//-----------------------
// 4.监听客户端的get和post请求，并且向客户端响应具体内容
//  send会自动把普通对象变成json对象。
// express中的send会把普通对象解析为json对象 如果是http中的res.end就不行
app.get('/user', (req, res) => {
    //调用express 提供的res.send()方法，向客户端响应一个JSON对象
    res.send({ name: 'zs', age: 18 })
})
app.post('/user', (req, res) => {
    //调用express提供的res.send()方法，向客户端响应一个文本字符串
    res.send('请求成功');
})



//-5.--得到客户端发请求时携带的查询字符串--------------------
app.get('/', (req, res) => {
    //req.query默认是个空对象  传过来了之后它就不是空的了就存的?name=zs&age=20 
    //客户端使用?name=zs&age=20 这种查询字符串的形式，发送到服务器的参数
    //可以通过req.query对象访问到   因为req就是和请求相关的属性与方法
    console.log(req.query);//访问客户端传来的查询字符串就不用返回给客户端了 所以没用res.send()
    res.send(req.query)//这句话意思是把获取到的url查询字符串返回给客户端

})
//-6.--得到客户端发请求时携带的动态参数串--------------------
// 我们在服务端就会把你写的值匹配出来，当作id的值
// 冒号后的字符串是自己随便写就行 合法合理就行
// :id/:name   意思就是匹配2个参数
// 请求时候后面写 1/zs 试试
app.get('user/:id', (req, res) => {
    // req.params是动态匹配到的url参数
    console.log(req.params);
    res.send(req.params)
})



//3.启动服务器
app.listen(80, () => {
    console.log('express server running at http://192.168.56.1');
})

//-----4的测试请求
// 前提把服务器先关闭ctrl+c，然后在成功开启 node 2.express使用.js
// 打开postcode-->选择get-->http://192.168.56.1/user-->send  在客户端发起get请求
// 打开postcode-->选择post-->http://192.168.56.1/user-->-->send  在客户端发起post请求
//请求成功的图片放在了img中 2.jpg  和2.1jpg


//----5的测试请求
// 打开postcode-->选择get-->http://192.168.56.1/?name=zs&age=20

//----6的测试请求   没成功明天再试试
// 例如这里就随便输入了个id的值
// http://192.168.56.1/user/1
// {
//     "id": "1"
// }