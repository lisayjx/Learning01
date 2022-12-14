// 了解中间件的5个使用注意事项

// 1.一定要在路由之前注册中间件
// 2.客户端发送过来的请求，可以连续调用多个中间件进行处理
// 3.执行完中间件的业务代码之后，不要忘记调用next()函数
// 4.为了防止代码逻辑混乱，调用next()函数后不要再写额外的代码
// 5.连续调用多个中间件时，多个中间件之间，共享req和res 对象



 // req.query是客户端发来的get请求体数据-------------- 包含URL的查询参数（在URL的？后的参数）。
 // req.body是客户端发来的post请求体数据--------------
 // req.params包含路由参数（在URL的路径部分）

//  JSON就是类似对象一样的数据 前后端交互不能传对象
//  就可以利用JSON这种字符串格式传递，
//  urlEncoded是表单格式以键值对发送不会像query一样拼接在url后面