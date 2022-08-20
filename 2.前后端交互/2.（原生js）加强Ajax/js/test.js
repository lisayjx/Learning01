// test()函数是我们自定义的Ajax函数，
// 它接收一个配置对象作为参数，配置对象中可以配置如下属性:
// method  请求的类型
// url     请求的URL地址
// data    请求携带的数据
// success 请求成功之后的回调函数


// 1.中间转换  2.创建xhr对象





// ---------------1.处理data参数（为了test（）准备的前提） ：为了帮test（）拼接查询字符串
// 我的理解大致底层原理是 先把用户传递的data 对象 转化成带有$的字符串 
// 判断用户传递的method 类型是post还是get

// 我们封装这个ajax时候我们希望用户提交的是对象（因为对象有利于用户操作），
// 但是在底层通过XHR对象发请求的时候呢
// 无论是get还是post请求，所有的参数都是通过查询字符串（?id=1）提交给服务器的
// 所以我们现在作为 用户和服务器 的中间人，要把用户提交的对象--->转化成查询字符串格式 

// 总结：把用户传到服务器的数据对象转化成-----> 查询字符串

// 需要把data对象，转化成查询字符串的格式，从而提交给服务器，
// 因此提前定义resolveData函数如下:

// data是需要发送到服务器的数据 用户整出来的
// string是 拼接好的查询字符串 name=zs&age=10

//对象-->数组-->字符串      resolveData是处理用户传来data数据对象的方法

function resolveData(data) {//data是用户传的数据对象
    let arr = []
    //遍历对象
    for (let k in data) {
        arr.push(`${k}=${data[k]}`)
    }
    return arr.join('$')
}
let re = resolveData({ name: 'zs', age: 20 })
// console.log(re);//name=zs$age=20

//----------ajax工作流程-------------------- （重要）定义test()函数体---------------------------
// 在test()函数中，
// 需要创建xhr对象，并监听onreadystatechange事件（监听为了拿到服务器响应回来的数据） 
function test(options) {   //options是服务器传过来的对象参数
    //1.创建XHR对象
    let xhr = new XMLHttpRequest()
    //2.用上面定的方法 拼接查询字符串   也就是用户传到服务器携带的数据
    let qs = resolveData(options.data)//把用户传的数据对象转化成 查询字符串 给服务器
    //3.判断请求方式
    if (options.method.toUpperCase() === 'GET') {
        xhr.open(options.method, options.url + '?' + qs)
        xhr.send()
    } else if (options.method.toUpperCase() === 'POST') {
        xhr.open(options.method, options.url)
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.send(qs)
    }
    //4.监听请求状态改变的事件
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            //把返回来的数据 转化成 对象 给客户端 用户看
            let result = JSON.parse(xhr.responseText)
            //手动回调=帮用户执行了成功以后的操作 把result的结果传给它options
            options.success(result)
        }
    }
}
// success（）是成功回调函数  当数据成功返回来的时候 要执行一些操作
//在success中用户指定了一些操作，但是这些操作依赖于服务器成功返回的数据
//所以我们在最后把服务器返回的数据给success传进去


 

// 本来jquery用ajax 让服务器和客户端传输数据 是 $.ajax({..})啥的
// 这回我们用原生方法封装了一个 
// 以后在主页面 直接 test({..})  跟上面一样





//----------------2.（为了服务test函数）判断请求的类型-----------------
// 不同的请求类型，对应xhr对象的不同操作，因此需要对请求类型进行if ... else ...的判断:
// 如果的get请求那么设置的请求方式就是get..
// toUpperCase()  变成大写的意思  因为用户不一定写的是小写还是大写 所以统一一下
//options感觉应该是用户传的数据 option是我们写的要提交给服务器的那一串东西
if (options.method.toUpperCase() === 'GET') {
    //如果用户传的方法是GET 就发起GET请求
    //options.method是'GET'  
    // options.url是请求的url+查询字符串（携带的条件）
    xhr.open(options.method, options.url + '?' + qs)
    //发送
    xhr.send()
} else if (options.method.toUpperCase() === 'POST') {
    //如果用户的方式是POST方式，就发送POST请求
    xhr.open(options.method, options.url)
    //这个content-type格式记不住，可以取postman发送请求界面的body找到
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded') //固定写法
    xhr.send(qs)   //qs是查询字符串 （携带的数据条件） 和get的不同之处
}
