// express 提供了一个非常好用的函数，叫做 express.static()，
// 通过它，我们可以非常方便地创建一个静态资源服务器，例如，
// 通过如下代码就可以将public目录下的图片、CSS文件、JavaScript 文件对外开放访问了:
// const express = require("express");
// const app = express()

// app.use(express.static('public'))  //public是文件夹名称  他绝对不会出现在url中
// 现在，你就可以访问public目录中的所有文件了:
// http://localhost:3000/img/2.png
// http://localhost:3000/css/style.css
// http://localhost:3000/js/login.js

// 注意:Express在【指定的】静态目录中查找文件，并对外提供资源的访问路径。
// 因此，存放静态文件的目录名不会出现在URL中。


//例子   把clock文件夹变成静态文件夹 向外提供

const express = require("express");
const app = express()

// 在这里，用use调用express.static()方法，快速的对外提供静态资源
app.use(express.static('./clock'))


//启动服务器
app.listen(80,()=>{
    console.log('express server running at http://192.168.56.1');
})
//打开谷歌浏览器 别出现文件夹名
// 输入http://192.168.56.1或者http://192.168.56.1/index.css ..


//----------------托管多个静态资源目录----------------
// 如果要托管多个静态资源目录，请多次调用express.static)函数:
// app.use(express.static('./clock'))
// app.use(express.static('file'))
// 访问静态资源文件时，express.static()函数会根据目录的添加顺序查找所需的文件。
// 如果你要访问index.css，他会先在第一个文件夹找，没有再去第二个找
 

//----------------挂载路径前缀----------------------------------
// 如果希望在托管的静态资源访问路径之前，挂载路径前缀，则可以使用如下的方式:
app.use('/clock',express.static('./clock'))
// 必须写成  /clock    不能写成clock
// 现在，你就可以通过带有/public前缀地址来访问public目录中的文件了:
// http://localhost:3000/public/images/kitten.jpg
// http://localhost:3000/publicIcss/style.css
// http://localhost:3000/publicljs/app.js
