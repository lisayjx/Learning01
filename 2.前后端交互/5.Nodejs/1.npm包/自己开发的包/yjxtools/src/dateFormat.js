//----功能1:格式化日期----------
function dateFormat(dateStr) {
    //创建一个实例对象  这个是现在的时间
    const dt = new Date(dateStr)

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

 

module.exports={
    dateFormat
}