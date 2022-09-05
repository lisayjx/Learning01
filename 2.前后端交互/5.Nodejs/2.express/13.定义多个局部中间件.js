const express = require('express')
const app = express()

//定义多个局部中间件
const mw1 = function (req, res, next) {
    next()
}
const mw2 = function (req, res, next) {
    next()
}

//定义路由
//以下两种写法完全等价,写哪种都行
app.get('/', mw1, mw2, function (req, res) {
    res.send('home page')
})
// app.get('/', [mw1,mw2],function(req,res){
//     res.send('home page')
// })
app.get('/user', (req, res) => {
    res.send('user page')
})
app.get('/users', (req, res) => {
    res.send('user page')
})


app.listen(80, () => {
    console.log('express server running at http://192.168.56.1');
})