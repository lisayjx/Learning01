// 1.将时钟素材文件夹下的index.html页面，拆分成三个文件，分别是:
// index.css
// index.jsindex.html
// 并且将拆分出来的3个文件，存放到clock目录中。 


// ⒉案例的实现步骤
// 创建两个正则表达式，分别用来匹配<style>和<script>标签
// 使用fs模块，读取需要被处理的HTML文件
// 自定义resolveCSS方法，来写入index.css样式文件
// 自定义resolveJS方法，来写入index.js 脚本文件
// 自定义resolveHTML方法，来写入index.html文件

//重点是拆分文件   不是写页面!!!!!!!!

//4.案例的两个注意点!!!!!!
// fs.writeFile()方法只能用来创建文件，不能用来创建路径
    // 比如clock文件夹不能没有  里面的可以没有
// 重复调用fs.writeFile()写入同一个文件，新写入的内容会覆盖之前的旧内容









// 1.导入 fs模块 要读取和写入文件
const fs = require('fs')
// 2.导入path模块 要进行地址拼接或者 找文件名
const path = require('path')

//创建正则  匹配<style></style>和<script></script>标签
// 内嵌的<style>和<script>标签和里面内容替换为外联的<link>和<script>标签
// \s匹配空白字符 \S匹配非空白字符  加一起就是匹配所有字符     \是转移
//     [\s\S]*  意思就是前面的任意字符可以出现任意多次
const reg1 = /<style>[\s\S]*<\/style>/
const reg2 = /<script>[\s\S]*<\/script>/


//读取被处理的index.html
fs.readFile(path.join(__dirname, './时钟素材/index.html'), 'utf8', function (err, dataStr) {
    if (err) {
        return console.log('文件读取失败' + err.message);
    }
    // console.log('文件读取成功');
    //成功,调用对应三个方法,分别拆解出 css  js  html 文件
    //成功的数据传到 每个函数中当实参
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
})












//-------------------------------创建三个方法----------------------------
// 正则表达式.exec(字符串)
//会检索出与正则表达式匹配的字符 返回数组  如果找不到返回null
//数组[0] 就是和正则表达式匹配的文本

//1.创建resolveCSS方法
// htmlStr是读取过来的html字符串

function resolveCSS(htmlStr) {
    //找到和正则表达式匹配的数组
    const r1 = reg1.exec(htmlStr)

    //将取出来的字符串进行处理,把多余的style标签删除  (变为空)
    // r1[0]正则返回的是数组,[0]是数组里第一个 是字符文本
    const newCSS = r1[0].replace('<style>', '').replace('</style>', '')


    //将提取出来的css文本 传入到 index.css文件中
    fs.writeFile(path.join(__dirname, './clock/index.css'), newCSS, function (err) {
        if (err) return console.log('写入失败' + err.message);
        console.log('写入css样式成功');
    })

}
// resolveCSS(dataStr) 实参dataStr传入形参htmlStr



//2.创建resolveJS方法
function resolveJS(htmlStr) {
    const r2 = reg2.exec(htmlStr)
    const newJS = r2[0].replace('<script>', '').replace('</script>', '')

    fs.writeFile(path.join(__dirname, './clock/index.js'), newJS, function (err) {
        if (err) return console.log('写入js失败' + err.message);
        console.log('写入js成功');
    })
}

//3.写入 resolveHtML 方法 
// 使用字符串replace方法,把内嵌的<style>和<script>标签替换为外联的<link>和<script>标签 
function resolveHTML(htmlStr) {
    const newHTML = htmlStr.replace(reg1, '<link rel="stylesheet" href="./clock/index.css">')
        .replace(reg2, '<script src="./clock/index.js"></script>')

    //将处理完的html代码写入 clock中的index.html
    fs.writeFile(path.join(__dirname, './clock/index.html'), newHTML, function (err) {
        if (err) return console.log('写入文件失败' + err.message)
        console.log('写入html成功');
    })



}