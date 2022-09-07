//数组求和函数 导出
// sum是累加变量
export const getArraySum = arr => arr.reduce((sum, val) => {
    //对每个值执行什么操作
    sum = sum + val
    return sum
}, 0)