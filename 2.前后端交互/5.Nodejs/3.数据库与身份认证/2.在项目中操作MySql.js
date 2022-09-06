//    在项目中操作数据库的步骤
// 1.安装操作 MySQL数据库的第三方模块(mysql) 
// 2.通过mysql模块连接到MySQL 数据库
// 3.通过mysql模块执行SQL语句
// img:2.png

// mysql模块是托管于npm 上的第三方模块。
// 它提供了在Node.js项目中连接和操作MySQL数据库的能力。
// 想要在项目中使用它，需要先运行如下命令，将mysql安装为项目的依赖包:
// npm i mysql

// 在使用mysql模块操作MySQL数据库之前，必须先对 mysql模块进行必要的配置，
// 主要的配置步骤如下;

//1.导入mysql模块
const mysql = require('mysql')
//2.建立与MyAQL数据库的连接
const db = mysql.createPool({
    host: '127.0.0.1',     //数据库的IP地址（操作哪台电脑上的mysql 啊本机的）
    user: 'root',          //登录数据库的账号
    password: 'root',  //登录数据库的密码
    database: 'db_01'   // 指定要操作哪个数据库 数据库名
})
// 如果端口号不是3306的同学，在写完数据库名后加上，port:'端口号'

//---------3.-测试mysql模块能否正常工作-------------
// 测试mysql模块能否正常工作
// 调用db.query()函数，指定要执行的SQL语句，通过回调函数拿到执行的结果:
db.query('SELECT 1', (err, results) => {//SELECT 1是sql语句
    //mysql模块工作期间报错了
    if (err) return console.log(err.message);
    //只要能打印出 [RowDataPacket { '1': 1 }]的结果，就证明数据库连接正常
    console.log(results);
})
//要是出现问题
// 朋友们网上五花八门都没用听我的:用npm i mysql2然后把代码里的mysql模块换成mysql2
// 报错Access denied for user 'root'@'localhost' (using password: YES)的，可以加上端口号试试看
// 如果不对的 可以修改一下mysql加密规则就好了

//------查询数据---------------
// 比如要查询user表的所有name
db.query('SELECT * FROM user', (err, results) => {
    //查询失败
    if (err) return console.log(err.message);
    //查询成功
    console.log(results);
})//RowDataPacket是对象的类型
// [ RowDataPacket { '1': 1 } ]
// [
//   RowDataPacket { id: 1, name: 'lisa' },
//   RowDataPacket { id: 2, name: 'rose' },
//   RowDataPacket { id: 3, name: 'jennie' },
//   RowDataPacket { id: 4, name: '智秀' }
// ]
// 是不是这么个流程：前端发送get请求，服务器获取get请求数据，通过中间件处理数据，再去数据库查询获取相应的用户需要的数据，流转给路由，返回给客户



//注意：如果sql语句是查询：那么结果是个数组

//-----新增数据----------
//要插入到user表中的数据对象
const user = { id: 5, name: 'zs' }
//待执行的sql语句，其中英文的?表示占位符
const sqlStr = 'INSERT INTO user (id,name) VALUES(?,?)'
//使用数组形式，依次为？占位符指定具体的值
db.query(sqlStr, [user.id, user.name], (err, results) => {
    //新增失败
    if (err) return console.log(err.message);
    //新增成功
    if (results.affectedRows === 1) { console.log('插入成功') }
})
//results.affectedRows影响的行数

//插入数据之后返回的结果results是个对象 不是个数组了 查询语句是数组
//可以用affectedRows属性来判断是否插入数据成功 

//-------新增数据便捷方式
// 向表中新增数据时，如果数据对象的每个属性和数据表的字段一一对应，则可以通过如下方式快速插入数据:
//要插入到user表中的数据对象
const user1 = { id: 6, name: 'zs2' }
//待执行的sql语句，其中英文的?表示占位符
const sqlStr1 = 'INSERT INTO user  SET ?'
//使用数组形式，依次为？占位符指定具体的值
db.query(sqlStr1, user1, (err, results) => {
    //新增失败
    if (err) return console.log(err.message);
    //新增成功
    if (results.affectedRows === 1) { console.log('插入成功') }
})

//---------更新数据
//把id是6的那个人的名字和年龄改咯
const user2 = { id: 6, name: 'pp', age: 19 }
const sqlStr2 = 'update user set name=?,age=? where id=?'
db.query(sqlStr2, [user2.name, user2.age, user2.id], (err, results) => {
    //更新失败
    if (err) return console.log(err.message);
    //更新成功
    if (results.affectedRows === 1) { console.log('更新成功') }
})
//注意∶执行了update 语句之后，执行的结果，也是一个对象，可以通过 affecEedRows判断是否更新成功

//-----更新数据便捷方式-------
//把id是5的那个人的名字和年龄改咯
const user3 = { id: 5, name: 'hh', age: 20 }
const sqlStr3 = 'update user set ? where id=?'
db.query(sqlStr3, [user3,user3.id], (err, results) => {  //因为上边有2个问号
    if (err) return console.log(err.message)
    if (results.affectedRows >= 1) { console.log('更新成功') }
})

//--------删除id为3的用户
// 注意:如果SQL语句中有多个占位符?，则必须使用数组为每个占位符指定具体的值
// 如果SQL语句中只有一个占位符，则可以省略数组

const sqlStr4='delete from user where id=?'
db.query(sqlStr4,3,(err,results)=>{
    if(err) return console.log(err.message)
    if(results.affectedRows>=1) { console.log('删除成功') }
})
// 注意:执行delete语句之后，结果也是一个对象，也会包含affectedRows属性
//增删改  只要是数据进行了变动就是返回的是对象，results就会有affectedRows属性


//-------标记删除-------------
// 使用DELETE语句，会把真正的把数据从表中删除掉。为了保险起见，推荐使用标记删除的形式，来模拟删除的动作。
// 这个很重要，写系统管理的时候，有一步就是删除之后，恢复的功能
// 当用户执行了删除的动作时，我们并没有执行DELETE语句把数据删除掉，而是执行了UPDATE语句，
// 将这条数据对应的status字段标记为删除即可。数据设置的是0是存在，1是删除
//把0更新成1就是模拟删除了
//模拟删除id为4的人
const  sqlStr5='update user set status=? where id=?'
db.query(sqlStr5,[1,6],(err,results)=>{
    if(err) return console.log(err.message)
    if(results.affectedRows>=1) { console.log('标记删除成功') }
})