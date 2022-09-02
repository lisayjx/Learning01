
//  需要实现的功能
//  1.格式化日期               toolP包中的 dateFormat格式化日期方法
//  2.转义HTML中的特殊字符     toolP包中的 htmlEscape转义方法
//  3.还原 HTML中的特殊字符    toolP包中的


//为啥要转义： 怕注入
// 很危险，如果这些代码内容被存入数据库，进行闭合后，服务器会执行特定的代码，网站直接寄。
// 直接查到管理员账号密码，提权成
// 比如破会你的结构，或者用alert弹出东西

//1.导入自己的包  ytools是我的包名
//此时包还没上线 要是上线了下载到本地就直接用包名，此时还是用户我自定义模块包
const ytools = require('./自己开发的包/ytools/index.js')  
//上线了用第三方库 const ytools = require('ytools') 


// const ytools = require('./自己开发的包/ytools/') 此时只给了文件夹没给具体文件为什么还能使用？
// 他自己去查找就package的main属性，自己根据main导入index.js 




//----功能1:格式化日期----------
const dt = ytools.dateFormat(new Date())
console.log(dt);  //2022-08-31  17:18:46

// --功能2:转义 HTML中的特殊字符-------
const htmlStr = `<h1 style="color:red">你好！&copy; <span>小李！</span></h1>`
const str = ytools.htmlEscape(htmlStr)
console.log(str);
//&lt;h1 style=&quot;color:red&quot;&gt;你好！&amp;copy; &lt;span&gt;小李！&lt;/span&gt;&lt;/h1&gt;

//--功能3：还原html方法-----------
const htmlStr1=`&lt;h1&gt;你好&lt;/h1&gt;`
const str1=ytools.htmlUnEscape(htmlStr1)
console.log(str1);//<h1>你好</h1>


 
















//----------------2.初始化包的基本结构----------------

// 新建toolP-tools文件夹，作为包的根目录在toolP-tools文件夹中，新建如下三个文件:
// package.json(包管理配置文件)
// index.js(包的入口文件)
// README.md(包的使用说明文档)

//--------初始化package.json--------------
// {
//     "name": "ytools",     包名 唯一（去看看官网有没有重名的） 和你当前文件夹名字可以不一致
//     "version": "1.0.0", 
//     "main" : "index.js",
//     "description": "提供了格式化时间,HTMLEscape的功能",    搜索时候的简短信息
//     "keywords": ["toolP" ,"dateFormat" , "escape"],   搜索的关键字 可以自定义
//     "license" : "ISC"        开源许可协议
//     }
// 关于更多license许可协议相关的内容，可参考https://www.jianshu.com/p/86251523e898


// -----------在index.js 中-(index最后还要分模块)----------------------
// -功能1：--------定义格式化时间的方法-----------
// function dateFormat(dateStr) {
//     //创建一个实例对象  这个是现在的时间
//     const dt = new Date(dateStr)

//     const y = dt.getFullYear()
//     const m = padZero(dt.getMonth() + 1)
//     const d = padZero(dt.getDate())

//     const hh = padZero(dt.getHours())
//     const mm = padZero(dt.getMinutes())
//     const ss = padZero(dt.getSeconds())

//     return `${y}-${m}-${d}  ${hh}:${mm}:${ss}`
// }

// //2.定义补0的函数
// function padZero(n) {
//     return n > 9 ? n : '0' + n
// }

// //3.把dataFormat暴露出去让外界可以使用
// module.exports = {
//     dateFormat
// }
//功能2：转义函数------------------
// function htmlEscape(htmlStr) {
//     return htmlStr.replace(/<|>|"|&/g, (match) => {
//         switch (match) {
//             case '<':
//                 return '&lt;'
//             case '>':
//                 return '&gt;'
//             case '"':
//                 return '&quot;'
//             case '&':
//                 return '&amp;'
//         }
//     })
// }
//--功能3：还原html方法-----------

// function htmlUnEscape(str) {
//     return str.replace(/&lt;|&gt;|&amp;|&quot;/g, (match) => {
//         switch (match) {
//             case '&lt;':
//                 return '<'
//             case '&gt;':
//                 return '>'
//             case '&quot;':
//                 return '"'
//             case '&amp;':
//                 return '&'
//         }
//     })
// }
 
// //向外界暴露这三个功能函数
// module.exports = {
//     dateFormat,
//     htmlEscape,
//     htmlUnEscape
// }


// 将不同的功能进行模块化拆分
// 将格式化时间的功能，拆分到src -> dateFormat.js 中
// 将处理HTML字符串的功能，拆分到src -> htmIEscape.js中
// 在index.js 中，导入两个模块，得到需要向外共享的方法
// 在index.js 中，使用module.exports把对应的方法共享出去

//----------------------------
// 8.编写包的说明文档
// 包根目录中的README.nd文件，是包的使用说明文档。
// 通过它，我们可以事先把包的使用说明，以markdown的格式写出来，方便用户参考。
 
// README文件中具体写什么内容，没有强制性的要求;只要能够清晰地把包的作用、用法、注意事项等描述清楚即可。我们所创建的这个包的README.md文档中，会包含以下6项内容:
// 安装方式、导入方式、格式化时间、转义HTML 中的特殊字符、还原HTML中的特殊字符、开源协议


//------------发布npm包-----------------------------
// 1.注册npm账号
// 访问https://www.npmjs.com/网站，点击 sign up按钮，进入注册用户界面
// ②填写账号相关的信息:Full Name、Public Email、Username、Password
// 3点击Create an Account按钮，注册账号

// 账号：lisalisayjx
// 密码：wogaisi521.

// 2登录npm账号
// npm账号注册完成后，可以在终端中执行 npm login 命令，
// 依次输入用户名、密码、邮箱后，即可登录成功。

// 注意:在运行npm login命令之前，必须先把下包的服务器地址切换为npm的官方服务器。否则会导致发布包失败!
//所以在登录这个之间检查你登陆的哪个服务器 nrm ls  切换到官方的服务器

//---------把包发布到npm上------------------------
// 将终端切换到包的根目录之后，运行npm publish命令，即可将包发布到npm上(注意:包名不能雷同)。
