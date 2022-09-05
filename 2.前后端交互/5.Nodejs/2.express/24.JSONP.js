// 概念:浏览器端通过<script>标签的 src属性，请求服务器上的数据，
// 同时，服务器返回一个函数的调用。这种请求数据的方式叫做JSONP。
// 特点:
// JSONP 不属于真正的Ajax请求，因为它没有使用XMLHttpRequest这个对象。
// JSONP仅支持GET请求，不支持POST、PUT、DELETE 等请求。


// 好像在ajax学过


// 2.创建JSONP接口的注意事项
// 如果项目中已经配置了CORS跨域资源共享，为了防止冲突，
// 必须在配置CORS中间件之前声明JSONP的接口。
// 否则JSONP接口会被处理成开启了CORS的接口。示例代码如下:

//优先创建JSONP接口（这个接口不会被处理成CORS接口）
app.get('/api/jsonp', (req, res) => {

})
//再配置CORS中间件（后续所有接口都会被处理成CORS接口）
app.use(cors())

//这是开启了一个CORS接口
app.get('/api/get', (req, res) = {

})


//--------------------
// 3.实现JSONP接口的步骤
// 【获取】客户端发送过来的回调函数的名字
// 【得到要】通过JSONP形式发送给客户端的数据
// 根据前两步得到的数据，拼接出一个函数调用的字符串
// 把上一步拼接得到的字符串，响应给客户端的<script>标签进行解析执行
// 客户端通过script标签把一个函数的名字发送给服务器
// 希望服务器返回一个函数的调用，在调用期间把数据传回来


app.get(' /api/jsonp ', (req, res) => {
    //1．获取客户端发送过来的回调函数的名字  【得到函数名】
    const funcName = req.query.callback
    //2．得到要通过JSONP形式发送给客户端的数据  【定义要发送到客户端的数据对象】
    const data = { name: 'zs ', age: 22 }
    // 3．根据前两步得到的数据，拼接出一个函数调用的字符串  小括号代表要调用这个函数  【拼接处一个函数调用】
    const scriptStr = `${funcName}(${JSON.stringify(data)}) `
    //4、把上一步拼接得到的字符串，响应给客户端的<script>标签进行解析执行   【把拼接的字符串，相应给客户端】
    res.send(scriptStr)
})///前端定义的函数参数就是响应结果