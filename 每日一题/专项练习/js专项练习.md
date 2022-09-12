# js专项练习

## 1.0.1+0.2

```js
  console.log(0.1 + 0.2);//0.30000000000000004
        // 为什么呢？
        // 因为0.1和0.2转换为二进制计算被截取的只有64位所以丢失精度了而结果不准确
        // 解决方法
        console.log((0.1 * 10 + 0.2 * 10) / 10) //0.3
```

## 2.null和undefined

```js
 //undefined字面量，Undefined就表示数据类型
        //场景一：
        let a
        console.log(a)//undefined
        //场景二：
        let obj = {}
        console.log(obj.name)//undefined
        //场景三：
        function fn() {

        }
        console.log(fn())//undefined
        //场景四：
        function fn1(x, y) {
            console.log(y)
        }
        fn(1)
        //只传了一个形参过去相当于：x=1,y=undefined

        console.log('-----------------------------------------------')

        //null
        // 场景一：未来会给obj1再赋值，先用null占位
        let obj1 = null
        function fn1() {
            return {}
        }
        obj1 = fn1()

        // 场景二:dom操作里
        console.log(document.querySelector('nav'))//因为没有这个元素 所以输出null

        //场景三：正则
        'hello'.match(/a/)//在字符串hello匹配不到a 所以 null
```

 **相同点：**

​    1.一个对象字面量值 undefined和null

​    2.undefined和null=false

​    3.如果想将null或者undefined类型的值转换成对象的话都会抛出异常

​     4.在非严格时 undefined==null是true  在严格时候 undefined===null 是false



​    **不同点：**

​    1.null是关键字，undefined是全局变量 挂载在window上的 

2. typeof undefined 打印Undefined

​        typeof null    打印 Object

​    3.类型检测

​    Object.prototype.toString.call(null)  //[object Null]

​    Object.prototype.toString.call(undefined) //[object Undefined]

​    4.进行字符串类型转换时

​    null+'aaa'--->'nullaaa'

​    undefined+'aaa'-->'undefinedaaa'

​    5.在参与数值运算时

​    null+1=1   null会变成0

​    undefined+1 NaN  因为undefined变成数值型就是Nan然后Nan加任何数都是NaN

## 3.isNaN和Number.isNaN

*  NaN存在的意义？not a number  number类型数值
* 比如0/0会不对，就有了NaN出现让程序不会报错
*  NaN和任何类型的值操作都返回NaN
* isNaN()  ES5  来确定一个变量是不是NaN
*  Number.isNaN()  ES6
* Number.isNaN(NaN) true  传入其他都是false

```js
 //例子
        console.log(isNaN({}));   //判断空对象是不是NaN，输出true
        //不对啊，对象是object也不是数值型啊
        //1.参与运算时：算不出来一个数 比如0/0=NaN
        //2.强制类型转换失败会得到NaN  1+'a'

        //----------------------------------------------

        // Number.isNaN()  ES6
        //他不会存在类型转换，他只会判断你传入的值是不是NaN
        console.log(Number.isNaN(NaN))//true
        console.log(Number.isNaN(0+'a'))//false
        // 这里面只有传入NaN才是true，其他传什么都是false！！！！！！！！！！！！！

        console.log('-----------------------------')

        //例子    记住isNaN会提前进行类型转换 Number.isNaN不会
        console.log(isNaN(NaN))//true   !!  
        console.log(isNaN(12))//false
        console.log(isNaN('12'))//false !!
        console.log(isNaN('a'))//true
        console.log(isNaN('0xd'))//false  16进制 是数字
        console.log(isNaN('21215sda'))//true
        console.log(NaN===NaN)//false
        console.log(NaN===undefined)//false
        console.log(typeof NaN)//number
        console.log(Object.prototype.toString.call(NaN))//[object Number]
        console.log('-----------------------------')
        console.log(Number.isNaN(NaN))//true!!!
        console.log(Number.isNaN(12))//false
        console.log(Number.isNaN('a'))//false
        console.log(Number.isNaN('12ss'))//false

```

## 4.字符串逆序输出

* 实现字符串逆序输出
* 写一个reverseString()函数，将传入字符串以相反顺序输出

​    四种方式！！！！！

1.  一：借助数组的reverse方法

```js
 // 一：借助数组的reverse方法
        //前情提要 
        // 1.数组的reverse()方法
        // [1,2,3,4].reverse()  输出[4,3,2,1]
        // 2.字符串-->数组  'abc'.split('')  //以abc中有的东西进行分割
        //   数组--->字符串  [ "a", "b", "c" ].join('*')  中间用*分割 举个例子

    function reverseString1(str) {
            //先把字符串转换成数组
            // console.log( str.split(''));//[ "a", "b", "c" ]
            // console.log(str.split('').reverse());//[ "c", "b", "a" ]
            //再把数组转回到字符串
            return str.split('').reverse().join('')
        }
        let re = reverseString1('abc')
        console.log(re);//c，b，a

```

2. 方法二：使用字符串的charAt()方法

```js
// charAt(索引值) 会找到对应字符
        function reverseString2(str) {
            let re = ''//最终输出的结果
            for (let i = str.length - 1; i >= 0; i--) {
                re += str.charAt(i)
            }
            return re
        }
        console.log(reverseString2('asdf'))//fdsa
```

3.  方法三：使用递归去获取charAt()值

```js
 // strIn 
        // pos索引位
        // strOut最终的结果
        function reverseString3(strIn, pos, strOut) {
            //如果索引位小于0 就是没有了 就退出
            if (pos < 0) {
                return strOut
            }
            //如果索引位不小于0
            // 通过charAt找到对应字符 拼接到结果字符串上 然后 索引位变化--
            strOut += strIn.charAt(pos)
            pos--
            return reverseString3(strIn, pos, strOut)

        }
        let s = 'qwe'
        let p = s.length - 1
        let so = ''
        reverseString3(s, p, so)
```

4. 方法四：使用call，动态地去调用属于数组的方法slice() 截取

   ```js
     //方法四：使用call，动态地去调用属于数组的方法slice() 截取，
           //把字符串变成数组然后就可以reverse
           // [1,2,3].slice() =[1,2,3]
           // [1,2,3].slice(0)=[1,2,3]
           // [1,2,3].slice(1)=[2,3]
           // [1,2,3].slice(1,2)=[2]
           function reverseString4(str) {
               //数组原型上有slice方法，用str去调用slice方法
             let arr=  Array.prototype.slice.call(str)
             return  arr.reverse().join('') 
             //join()什么都不传 默认逗号分割 所以传空字符串
           }
         console.log(reverseString4('ert'))  
   ```

   