##安装

```
npm install yjxtools
```

##导入
```js
const yjxtools=require('ytools')
```


##格式化时间
```
//调用dateFormat对事件格式化
const dt = yjxtools.dateFormat(new Date())
console.log(dt);
```


##格式化html字符
```
//  转义 HTML中的特殊字符   调用htmlEscape
const htmlStr = `<h1 style="color:red">你好！&copy; <span>小李！</span></h1>`
const str = yjxtools.htmlEscape(htmlStr)
console.log(str);


 //还原html方法  调用htmlUnEscape
const htmlStr1=`&lt;h1&gt;你好&lt;/h1&gt;`
const str1=yjxtools.htmlUnEscape(htmlStr1)
console.log(str1);

```

##开源协议
ISC