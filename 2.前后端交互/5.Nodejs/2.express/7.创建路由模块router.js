//这是路由模块

//1.导入express模块
const express = require('express')
//2.创建路由对象
const router = express.Router()

//3.把获取用户列表的路由挂载到router对象上
router.get('/user/list',(req,res)=>{
    res.send('get user list')
})
//4.把添加用户的路由挂载到router对象上
router.post('/user/add',(req,res)=>{
    res.send('add users is ok')
})

//向外导出路由对象
module.exports=router