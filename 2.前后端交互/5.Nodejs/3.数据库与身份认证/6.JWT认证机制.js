// 1.了解Session认证的局限性
// Session认证机制需要配合Cookie 才能实现。
// 由于Cookie默认不支持跨域访问，所以，当涉及到前端跨域请求后端接口的时候，
// 需要做很多额外的配置，才能实现跨域Session认证。
// 注意:
// 当前端请求后端接口不存在跨域问题的时候，【推荐使用Session身份认证机制。】
// 当前端需要跨域请求后端接口的时候，不推荐使用Session身份认证机制，【推荐使用JWT认证机制。】
// 浏览器从一个域名的网页去请求另一个域名的资源时，出现域名、端口、协议任一不同，都属于跨域。

// 2.什么是JWT
// JWT(英文全称:JSON Web Token)是目前最流行的跨域认证解决方案。

// 1.浏览器----->服务器  请求 客户端登录：提交账号和密码
// 2. 服务器验证账号和密码
//    验证通过后，将用户信息对象，经过加密之后生成token字符串
// 3.浏览器<-----服务器  响应：把加密的token发送给客户端
// 4.客户端把token（加密的用户信息）存储到LocalStorage或者SessionStorage中
// 5.浏览器----->服务器  请求：客户端再次发起请求时，通过请求头的Authorization字段，将Token发送给服务器
// 6.服务器把token字符串还原成用户的信息对象
//    服务器端：用户身份认证成功后，服务器针对当前用户生成特定的相应内容
//    服务器响应：把当前用户对应的页面相应给浏览器

// img:token 

// 服务器做了加密和解密

// 1.客户第一次请求：验证身份信息    登陆成功后：服务器整个加密的卡给客户
// 2.客户把卡存起来
// 3.客户再次请求：顺便用请求头的Authorization把卡拿着 让服务器看
// 4.服务器把加密的卡解密，验证成功后把用户请求的内容响应回去

// 加密和解密用的是同一个密钥，只有加密的那个人才知道，那个人也就是后端，所以只有后端能够解密回字符串，那个密钥不会轻易被别人知道的，安全性还是有的

// 4.JWT字符串的组成部分
// JWT通常由三部分组成，分别是Header(头部)、Payload(有效荷载)、Signature (签名)。
// 三者之间使用英文的“.”分隔，格式如下:

// Header.Payload.Signature   .仅仅是分割的意思
//例如
//agsggsg21adsv1.davgsdgs165.vdagsdgdv
// 头部  agsggsg21adsv1
// 有效荷载  davgsdgs165
// 签名  vdagsdgdv

// Payload部分才是真正的用户信息，它是用户信息经过加密之后生成的字符串。
// Header和Signature是安全性相关的部分，只是为了保证Token 的安全性。
// 中间的才是真正的用户信息加密后的，其余两个是保证他安全的保镖


// 5.JWT的使用方式      带着加密卡去找服务器时候
// 客户端收到服务器返回的JWT之后，通常会将它储存在localStorage或sessionStorage 中。
// 此后，客户端每次与服务器通信，都要带上这个JWT的字符串，从而进行身份认证。
// 推荐的做法是把JWT放在HTTP请求头的Authorization字段中，格式如下:
// Authorization:Bearer <token>



// 6.安装JWT相关的包----------------------------------
// 运行如下命令，安装如下两个JWT相关的包:
//  npm install jsonwebtoken express-jwt
//  其中:
// jsonwebtoken用于生成JWT字符串        生成加密卡时候        加密
// express-jwt用于将JWT字符串解析还原成JSON对象     解密时候  解密

//7.导入JWT相关的包------------------------------
//加密和解密都是服务器做的！！！！！！！
//(1)导入用于生成JWT字符串的包  加密
const jwt = require('jsonwebtoken')
//(2)导入用于客户端发来的JWT字符串，解密还原成JSON对象的包
const expressJWT = require('express-jwt')

//8.定义secret密钥
// 为了保证JWT字符串的安全性，防止JWT字符串在网络传输过程中被别人破解，
// 我们需要专门定义一个用于加密和解密的secret密钥:
//     当生成JWT字符串的时候，需要使用secret密钥对用户的信息进行加密，最终得到加密好的JWT字符串
//     当把JWT字符串解析还原成JSON对象的时候，需要使用secret密钥进行解密

// secret本质：就是一个字符串
const secretKey = 'lisa AN ^_^'


//9.【在登录成功后】生成JWT字符串
// 调用jsonwebtoken包提供的sign()方法，将用户的信息加密成WT字符串，响应给客户端:
//登陆接口
app.post('/api/login', (req, res) => {
    let userinfo = req.body
    if (userinfo.username !== 'lisa' || userinfo.password !== 'l123456') {
        return res.send({ status: 400, msg: '登陆失败' })
    }
    //登陆成功后
    //调用jwt.sign()生成JwT字符串，三个参数分别是:用户信息对象、加密密钥、配置对象
    res.send({
        status: 200,
        msg: '登陆成功',
        token: jwt.sign(//！！！！！！！！！！！！！！
            { username: userinfo.username },     //用户信息对象
            secretKey,                           //加密密钥      加密的会员卡
            { expiresIn: '30s' }                 //配置对象  //token字符串的有效期
        )
    })
})

//10.将JWT字符串还原为JSON对象
// 客户端每次在访问那些有权限接口的时候，
// 都需要主动通过【请求头中的Authorization字段】，
// 将Token字符串发送到服务器进行身份认证。
// 此时，服务器可以通过 express-jwt这个中间件，
// 自动将客户端发送过来的Token解析还原成JSON对象:

//使用app.use()来注册中间件
// expressJWT({secret:secretKey}) 来解析Token的中间件
// .unless({path:[/^\/api\//]}) 用来指定哪些接口不需要访问权限  凡是以/api开头的
app.use(expressJWT({ secret: secretKey }).unless({ path: [/^\/api\//] }))


//11.使用req.auth获取用户信息    req.user淘汰了
//  [2022-9-5]: req.user 已经不是最新的了，官方最新的是 req.auth
// 当express-jwt这个中间件（服务端解密）配置成功之后，即可在那些【有权限的接口】中，
// 使用req.auth对象，来访问从JWT字符串中解析出来的用户信息了，示例代码如下:
app.get('/admin/getinfo', function (req, res) {
    console.log(req.auth)
    res.send({
        status: 200,
        msg: '获取用户信息成功',
        data: req.auth
    })
})
// expressJWT中间件配置好解密成功后之后，会自动就会把解析出来的用户信息 挂载req.auth上
//就可以在有权限的接口中，直接获取解析出来的用户信息 req.auth
// req.auth中的用户信息是你自己决定的，看你把啥加密了 我加密了用户姓名 //最终解析出来的时候也是就是用户姓名
// const tokenStr = jwt.sign(  //加密的卡
// { username: userinfo.username },//把用户的姓名加密给发回去
// secretKey,                 //'lisa AN ^_^'
// { expiresIn: '30s' }//token字符串的有效期
// )
//最好不要 token时候携带密码 因为密码非常重要













// session用户信息是保存到服务端的
// JWT token 用户信息是保存在 客户端的
