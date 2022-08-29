// 获取路径中的文件名

// Path.basename(path[,ext])
// [必写]路径,拓展名    都是字符串

// 使用path.basename()方法，可以获取路径中的最后一部分，
// 经常通过这个方法获取路径中的文件名，语法格式如下:

const path = require('path')



const fpath = 'a/b/index.html'

//获取带拓展名的文件名
let fullName = path.basename(fpath)
console.log(fullName);//index.html

//获取不带拓展名的文件名
let nameWithExt=path.basename(fpath,'.html')
console.log(nameWithExt);//index



//-------------------------------------------------
// path.extname() 专门获取路径中的拓展名部分
console.log(path.extname(fpath)); //.html