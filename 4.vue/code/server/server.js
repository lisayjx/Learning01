const express = require('express')
// 解决history404的中间件
const history = require('connect-history-api-fallback')

const app = express()

app.use(history())  //写在静态资源前面

// 让服务器认识这个页面
app.use(express.static(__dirname + '/static'))

//   /person后端的接口
app.get('/person', (req, res) => {
    res.send({ //发送给客户端得
        name: 'tom',
        age: 18
    })
})

app.listen(5005, (err) => {
    if (!err) console.log('服务器启动在5005成功了')
})

// node server 启动服务器