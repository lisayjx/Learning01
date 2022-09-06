//1.安装express-session中间件
// 在Express项目中，只需要安装express-session中间件，即可在项目中使用Session认证:
// npm install express-session

//2.express-session中间件安装成功后，需要通过app.use()来注册session中间件  配置成全局的

// （1）导入session中间件
const session = require('express-session')
// （2）配置session中间件
app.use(session({//session是配置对象，他有三个属性
    secret: 'keyboard cat',  //secret属性的值可以任意字符串 负责对session加密的
    resave: false,           //固定写法
    saveUninitialized: true  //固定写法
}))

//去看6.session案例

//（3）向session中存数据
// 当express-session中间件配置成功后，
// 即可通过 req.session 来访问和使用session对象，
// 从而存储用户的关键信息:
req.session.user = req.body  //将用户信息，存储到session中
req.session.islogin = true   //将用户的登陆状态存储到session中

//（4）从session中取数据
app.get('/api/name', (req, res) => {//需要客户端发起get请求，他们可以获取用户自己姓名的接口
    //判断用户是否登录
    if (!req.session.isLogin) {//如果登陆状态是false
        return res.send({ status: 1, msg: 'fail' })//给用户发 fail
    }
    //如果登陆状态是true 给用户发一堆包括用户验证身份的用户名
    res.send({status:0,msg:'success',name:req.session.user.name})
})

// //（5）清空session
// req.session.destroy()只会清空当前用户对应的session
// 比如有好几个用户请求服务器，有一个用户要退出登录，只会清空他的session
// 调用req.session.destroy()函数，即可清空服务器保存的session信息。
app.post('/api/logout',(req,res)=>{
    //清空当前客户端对应的session信息
    req.session.destroy()
    res.send({
        status:0,
        msg:'退出登陆成功'
    })
})