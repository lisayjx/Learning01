//     模块化路由
// 为了方便对路由进行模块化的管理，Express 不建议将路由直接挂载到app 上，
// 而是推荐将路由抽离为单独的模块。将路由抽离为单独模块的步骤如下:
// 1.创建路由模块对应的.js文件
// 2.调用express.Router()函数创建路由对象
// 3.向路由对象上挂载具体的路由
// 4.使用module.exports向外共享路由对象
// 5.使用app.use()函数注册路由模块

// 创建一个路由文件，这个文件写的代码就专门用来处理路由，在入口文件调用路由文件就行了，这样后期维护就很明了
//创建的路由模块在7.创建路由模块router.js中


//----------- 注册 路由模块-------------------------
// //1.导入路由模块
// const userRouter = require('./7.创建路由模块router')
// //2.使用app.use()注册路由模块  让他生效
// app.use(userRouter)



//------例子------------------
//导入 express
const express = require('express')
// 创建web服务器
const app = express()

1.导入路由模块
const router = require('./7.创建路由模块router.js')
//2.把router挂在app身上 让他生效
app.use(router)

//3.监听 启动服务器
app.listen(80, () => {
    console.log('express server running at http://192.168.56.1');
})

//利用postcode模拟一下
//先开启服务器 nodemon 7.使用路由模块.js      这个nodemon可以不用改一次代码就重启一次服务器 但是 node 7.xx那个必须每次改完就重启
// http://192.168.56.1/user/list  get  得到get user list
// http://192.168.56.1/user/add   post 得到add users is ok

// app. use()函数的作用，就是来注册全局中间件
// router和express.static都是中间件


//---------为路由模块添加前缀-----------------------
// 类似于托管静态资源时，为静态资源统一挂载访问前缀一样，路由模块添加前缀的方式也非常简单:

//1.导入路由模块
const router = require('./7.创建路由模块router.js')
//2.把router挂在app身上 让他生效  使用app.use()注册路由模块，并添加统一的访问前缀/api
app.use('/api',router)

//这回访问时候就要加前缀
// http://192.168.56.1/api/user/list
// http://192.168.56.1/api/user/add