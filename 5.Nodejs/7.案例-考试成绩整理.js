
//        练习-考试成绩整理
// 使用fs文件系统模块，将素材目录下成绩.txt文件中的考试数据，整理到成绩-ok.txt文件中。
// 整理前，成绩.txt文件中的数据格式如下:
// 小红=99 小白=100 小黄=70 小黑=66 小绿=88
// 整理完成之后，希望得到的成绩-ok.txt文件中的数据格式如下:
// 小红:99
// 小白: 100
// 小黄:70
// 小黑:66
// 小绿:88

// 核心实现步骤
// 1.导入需要的fs文件系统模块
// 2.使用fs.readFile)方法，读取素材目录下的成绩.txt文件
// 3.判断文件是否读取失败
// 4.文件读取成功后，处理成绩数据
// 5.将处理完成的成绩数据，调用fs.writeFile()方法，写入到新文件成绩-ok.txt中





//1.导入fs模块
const fs = require('fs')
//2.读取文件
fs.readFile('test/成绩.txt', 'utf8', function (err, dataStr) {
    //3.判断文件是否读取失败
    if (err) {
        return console.log('文件读取失败' + err.message);
    }
    //读取成功
    console.log('读取成功' + dataStr);
    //4.成功的话 处理成绩数据
    //   1.先按照空格进行分割 将字符串分割成数组
    //   2.循环数组 将=替换成:
    //   3.将数组拼接成字符串
    const oldArr = dataStr.split(' ')
    const newArr = []
    oldArr.forEach(item => {
        newArr.push(item.replace('=', ":"))
    });
    const re = newArr.join('\r\n') //写两个兼容ios和win
    console.log(re);
 

    //5.写入到新文件
    //本来没有这个文件的话 会自动创建一个
    fs.writeFile('test/成绩ok.txt',re,function(err){
        if(err){
          return  console.log('写入失败'+err.message);
        }
        console.log('文件写入成功');
    })
})
