//统一暴露
let name = 'rose'
function sing() {
    console.log('跳舞');
}
//在花括号里写你要暴露的数据
export { name, sing }