const express = require('express')
const app = express()
const moment = require('moment')//导入了个格式化时间的包


//写个中间件
const mw = function (req, res, next) {
    console.log('这是个简单的中间件')
    //获取到请求到达服务器的时间
    //Date.now()是javascript中的内置函数,获取当前时间
    // const time = Date.now()
    //获取当前格式化时间   上面那个不是格式化的
    const time = moment().format('YYYY-MM-DD HH:mm:ss');
    //为req对象挂载自定义属性,从而把时间共享给后面的所有路由
    req.startTime = time

    next()
}
app.use(mw)




//----------------1.中间件的作用       降低耦合度
// 路由 和 中间件 是公用一个 req 和 res 的那么我们可以在中间件处理函数中 添加属性和方法 然后路由那边就可以直接访问并使用
// 多个中间件之间，[共享同一份req和res]。
// 基于这样的特性，我们可以在[上游]的中间件中，
// [统一]为req或res 对象添加自定义的属性或方法，
// 供[下游]的中间件或路由进行使用。
/* <img src='./img/10.png'> */
//  应用就是登录的token验证
// 就是在真正对客户端做出响应之前对请求和响应做很多的逻辑处理
// 可以理解为很多个分支往主分支里添加属性和和方法，一个请求就相当于一个主分支
// 你可以将中间件理解成，大家都要干的事，就是它干


//需求:请求到达服务器之后,让每个路由都得到到达服务器的时间
//路由/
app.get('/', (req, res) => {
    res.send('调用了/这个路由 ,服务器到达的时间' + req.startTime)
})
//路由/user
app.get('/user', (req, res) => {
    res.send('调用了/user这个路由,服务器到达的时间' + req.startTime)
})
















app.listen(80, () => {
    console.log('express server running at http://192.168.56.1');
})