//---功能2：转义HTML----------防止用户提交表单时侯填写html字符串
// 全局匹配<或者>或者"或者&，match就是匹配成功的字符
// 要全部执行的，怎么能加break
function htmlEscape(htmlStr) {
    return htmlStr.replace(/<|>|"|&/g, (match) => {
        switch (match) {
            case '<':
                return '&lt;'
            case '>':
                return '&gt;'
            case '"':
                return '&quot;'
            case '&':
                return '&amp;'
        }
    })
}

//--功能3：还原html方法-----------
// return是结束函数并且带着返回值给调用者
function htmlUnEscape(str) {
    return str.replace(/&lt;|&gt;|&amp;|&quot;/g, (match) => {
        switch (match) {
            case '&lt;':
                return '<'
            case '&gt;':
                return '>'
            case '&quot;':
                return '"'
            case '&amp;':
                return '&'
        }
    })
}

///向外暴露
module.exports={
    htmlEscape,
    htmlUnEscape
}