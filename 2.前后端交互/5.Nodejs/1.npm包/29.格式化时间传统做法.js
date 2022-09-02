// 29.格式化时间传统做法


// 1.创建格式化时间的自定义模块
// 2.定义格式化时间的方法
// 3.创建补零函数
// 4.从自定义模块中导出格式化时间的函数


// 5.导入格式化时间的自定义模块
// 6.调用格式化时间的函数


//1.定义格式化时间的方法
// dtStr是时间的字符串
function dateFormat(dtStr) {
    //创建一个实例对象  这个是现在的时间
    const dt = new Date(dtStr)

    const y = dt.getFullYear()
    const m = padZero(dt.getMonth() + 1)
    const d = padZero(dt.getDate())

    const hh = padZero(dt.getHours())
    const mm = padZero(dt.getMinutes())
    const ss = padZero(dt.getSeconds())

    return `${y}-${m}-${d}  ${hh}:${mm}:${ss}`
}

//2.定义补0的函数
function padZero(n) {
    return n > 9 ? n : '0' + n
}

//3.把dataFormat暴露出去让外界可以使用
module.exports = {
    dateFormat
}

//麻烦之处就是自己要定义一个格式化函数