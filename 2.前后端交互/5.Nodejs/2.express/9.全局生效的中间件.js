//先启动服务器

const express = require('express')
const app = express()



//--------------1.定义中间件函数
// 写接口必须要中间件，根据业务不同使用不同的中间件
//常量mw所指向的,就是一个中间件函数
// const mw = function (req, res, next) {
//     console.log('这是一个最简单的中间件函数');
//     //注意:在当前中间件的业务处理完毕后，必须调用next()函数
//     //表示把流转关系转交给下一个中间件或路由
//     next()
// }

//--------------2.全局生效的中间件   使用app.use()定义的中间件
// 客户端发起的任何请求，到达服务器之后，[都会触发的中间件]，叫做全局生效的中间件。
// 通过调用app.use(中间件函数)，即可定义一个[全局生效]的中间件，示例代码如下:
// 不使用app.use()定义的中间件，叫做局部生效的中间件
const mw = function (req, res, next) {
    console.log('这是一个最简单的中间件函数');
    next()
}
//将mw全局生效的中间件
app.use(mw)

//这样,客户端的请求会先到达中间件,然后next放行之后才能到达下一个中间件 或者路由进行处理

//路由/
app.get('/', (req, res) => {
    res.send('调用了/这个路由')
})
//路由/user
app.get('/user', (req, res) => {
    res.send('调用了/user这个路由')
})

//调用路由/
//流程,postcode发起请求,http://192.168.56.1/
// 会先执行中间件,所以打印了'这是一个最简单的中间件函数'这句话
// 然后执行中间件后面的东西比如下一个中间件或者路由 客户端就收到了'调用了/这个路由'


//调用路由/user
//流程,postcode发起请求,http://192.168.56.1/user
// 会先执行中间件,所以打印了'这是一个最简单的中间件函数'这句话
// 然后执行中间件后面的东西比如下一个中间件或者路由 客户端就收到了'调用了/user这个路由'



//--------------2.全局生效的中间件简化形式
// const mw = function (req, res, next) {
//     console.log('这是一个最简单的中间件函数');
//     next()
// }
// app.use(mw)

//----把上面两步合体
app.use(function (req, res, next) {
    console.log('这是一个最简单的中间件函数');
    next()
})





app.listen(80, () => {
    console.log('express server running at http://192.168.56.1');
})