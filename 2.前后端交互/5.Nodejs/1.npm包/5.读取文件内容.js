//1.导入模块 来操作文件
const fs = require('fs')
//2.读取指定文件中的内容
// err读取失败后的结果，dataStr读取成功的结果
fs.readFile('test/1.txt', 'utf8', function (err, dataStr) {
    // //打印失败的结果
    // console.log(err);
    // console.log('------');
    // //打印成功的结果
    // console.log(dataStr);


    if (err) {//如果错误就提示后return出去
        return console.log('文件读取失败' + err.message);
    }
    console.log('文件读取成功' + dataStr);
})
    //如果成功，err的值为null
    //如果失败，dataStr的值是undefined

// ctrl+~打开终端 输入 node .\js\1.读取文件内容.js
//PS D:\爱创学习资料\2.前后端交互\5.Nodejs> node .\js\1.读取文件内容.js


// 写入失败加return是为了不执行下面的写入成功的代码，写入成功的代码被执行的时候已经是最后一条语句，不需要return