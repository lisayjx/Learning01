//导入nodejs内置的querystring模块  把查询字符串变成对象的
const qs = require('querystring')



const bodyParser = (req, res, next) => {
    //中间件的业务逻辑


    // 2.监听req的data事件
    let str = ''
    req.on('data', (chunk) => {
        str += chunk
    })
    // 3.监听req的end事件
    req.on('end', () => {

        //4.使用querystring模块把字符串格式的请求体数据,解析成对象格式
        let body = qs.parse(str)
        console.log(body); 


        //5.将解析出来的数据对象挂载为req.body
        req.body = body

        //这个千万别忘了 要不就连接不上下面的路由了
        next()

    })


}

//把bodyParser函数导出去
module.exports=bodyParser