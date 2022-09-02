//1.导入模块
const fs = require('fs')
//2.写入内容
fs.writeFile('test/2.txt', 'hello world', function (err) {
   //如果文件写入成功 err是null  写入失败err是错误对象
// console.log(err);
  
    //如果文件写入成功 err是null  写入失败err是错误对象
    if (err) {
        //错误就提示后就return出去
        return console.log('写入失败'+err.message);
    }
      console.log('写入成功' );
})

// 写入失败加return是为了不执行下面的写入成功的代码，写入成功的代码被执行的时候已经是最后一条语句，不需要return