// 服务器做了加密和解密

// 1.客户第一次请求：验证身份信息    登陆成功后：服务器整个加密的卡给客户
// 2.客户把卡存起来
// 3.客户再次请求：顺便用请求头的Authorization把卡拿着 让服务器看
// 4.服务器把加密的卡解密，验证成功后把用户请求的内容响应回去
//---------------------------------------------------------------------




const express = require('express')
const app = express()
//安装并导入JWT加密和解密的包
const jwt = require('jsonwebtoken')
const expressJWT = require('express-jwt')
// 7x版本要这样导入const { expressjwt } = require('express-jwt')





//--------------中间件
//允许资源跨域共享 中间件
const cors = require('cors')
app.use(cors())
//解析 post 表单数据的 中间件   为了 req.body服务
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))



//定义 secret 密钥，建议将密钥命名为 secretKey
const secretKey = 'lisa AN ^_^'


//注册全局可用的 将JWT字符串还原成JSON对象的中间件  解密的
//解密并且，unless()用来指定哪些接口不需要访问权限  凡是以/api开头   \是转义
// 新版的express-jwt导出的是个对象，导入const{expressjwt} =require()改一下，或者app.use(expressJWT.expressjwt())
// app.use(expressJWT({secret:tokenStr}).unless({path:[/^\/api\//]} ) )   
app.use(expressJWT({ secret: secretKey, algorithms: ['HS256'] }).unless({ path: [/^\/api\//] }))
// expressJWT中间件配置好解密成功后之后，会自动就会把解析出来的用户信息 挂载req.auth上
//就可以在有权限的接口中，直接获取解析出来的用户信息 req.auth
// req.auth中的用户信息是你自己决定的，看你把啥加密了 我加密了用户姓名，  //最好不要 token时候携带密码 因为密码非常重要
//最终解析出来的时候也是就是用户姓名
// const tokenStr = jwt.sign(  //加密的卡
// { username: userinfo.username },//把用户的姓名加密给发回去
// secretKey,                 //'lisa AN ^_^'
// { expiresIn: '30s' }//token字符串的有效期
// )











//----------------接口
//1.用户请求登录的接口
app.post('/api/login', (req, res) => {
    //获取身份
    let userinfo = req.body
    //验证身份信息
    if (userinfo.username !== 'lisa' || userinfo.password !== 'l123456') {
        return res.send({ status: 400, msg: '登陆失败' })
        //错误就直接结束 所以有return
    }
    //如果信息正确把状态和加密的卡给用户发过去   这里的send已经是返回的意思 所以不用return 结束
    //调用jwt.sign()生成JwT字符串，三个参数分别是:用户信息对象、加密密钥、配置对象
    const tokenStr = jwt.sign(  //加密的卡
        { username: userinfo.username },//把用户的姓名加密给发回去
        secretKey,                 //'lisa AN ^_^'
        { expiresIn: '30s' }//token字符串的有效期
    )
    res.send({//返回给用户的
        status: 200,
        msg: '登陆成功',
        token: tokenStr   //加密的卡
    })
})

//2.有权限的接口（有加密的卡的用户可以用的接口）
// 本来req中是没有 req.auth的，但是配置了解密的expressJWT包后就有了
app.get('/admin/getinfo', (req, res) => {
    console.log(req.auth)
    res.send({
        status: 200,
        msg: '获取用户信息成功',
        data: req.auth //发给客户端的用户信息
    })
})


 

//启动监听服务器
app.listen(80, () => {
    console.log('running at http://127.0.0.1:80');
})

//启动服务器
//打开postcode   发起一个post请求进行登录，因为登陆成功后服务器会相应给客户端token字符串
// token紧接着就会调用有权限的接口 看能否从token字符串中解析出用户信息 如果能解析出来说明token能正常解析和生成