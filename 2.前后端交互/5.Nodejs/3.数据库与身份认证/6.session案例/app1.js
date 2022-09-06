// 前提准备

// 1.打开案例中的package.json 看看需要下载哪些包
// 发现只有 express包
// "dependencies": {
//     "express": "^4.17.1"
//   }
// 运行 npm i 就可以把dependencies里的包下载
// 2.装express-session的中间件   npm i express-session
// 3.导入session中间件
//   配置session中间件

// session是服务端操作   cookie是存储到客户端的
// status是状态码的意思  0是成功 1是异常 不成功  自己定义的


//注意：
// req.session.destroy()只会清空当前用户对应的session
// 比如有好几个用户请求服务器，有一个用户要退出登录，只会清空他的session
//-------------------------------------------------------
const express = require('express')
const app = express()

// TODO_01：配置session中间件
const session = require('express-session')
app.use(session({
    secret: 'lalisaya',//secret属性的值可以任意字符串 负责对session加密的
    resave: false,//固定写法
    saveUninitialized: true//固定写法
}))

//托管静态页面，客户端可以访问本地的文件
// 如果在托管静态资源之后还是无法访问，就把相对路径改成绝对路径，添加path模块先，设置方法：express.static(path.join(__dirname, './pages'))
app.use(express.static('./pages'))
//解析post提交过来的表单数据
app.use(express.urlencoded({ extended: false }))


//----------------登录的API接口
app.post('/api/login', (req, res) => {
    //判断用户提交的登录信息是否正确
    if (req.body.username !== 'admin' || req.body.password !== '000000') {
        return res.send({ status: 1, msg: '登陆失败' })
    }
    // TODO_02： 如果正确请将登陆成功后的用户信息，保存到session中
    // 注意:只有成功配置了express-session这个中间件之后，才能够通过req点出来 session这个属性
    // req.session.user 最后这个单词自己起名，起啥都行，你想往session里存的数据的名字
    // 其实就是在session里面用一个自定义属性user将消息存起来了 
    req.session.user = req.body  //存储用户信息
    req.session.isLogin = true   //存储用户登录状态
    res.send({ status: 0, msg: '登陆成功' })
})


//-------------获取用户姓名的接口
app.get('/api/username', (req, res) => {
    // TODO_03：从session中获取用户姓名   先判断用户是否登录
    if (!req.session.isLogin) return res.send({ status: 1, msg: '登陆失败' })
     res.send({
        status: 0,
        msg: '登陆成功',
        username: req.session.user.username
    })
})



//--------------退出登录的接口
app.post('/api/logout', (req, res) => {
    // TODO_04：清空用户的session信息
    req.session.destroy()
    res.send({
        status: 0,
        msg: '退出登陆成功'
    })
})

 



app.listen(3000, () => {
    console.log('running at http://192.168.56.1:3000');
    //http://127.0.0.1:3000/也行
})





//bug:因为status写错了  直接进入了主页 然后输入密码啥的点击登录没反应
//  然后去控制台network看状态显示是1 也登陆成功了啊但是页码不跳转
// 去login看一眼说
// if (res.status === 0) {
//     location.href = './index.html'
//   } else {
//     alert('登录失败！')
//   }
//   然后又去app1.js中看了一样 给用户返回的成功的状态码写错了

//bug：一打开就进入了主页 没有最开始提示的您尚未登陆 然后去主页看了一样
// if (res.status !== 0) {
//     alert('您尚未登录，请登录后再执行此操作！')
//     location.href = './login.html'
//   } else {
//     alert('欢迎您：' + res.username)
//   }
//   然后又去app1.js看了一样status成功的码又写错了

//请求地址写错了

//注意：前台请求的接口地址和后台相应回去的接口地址一定要一致！！！！！！