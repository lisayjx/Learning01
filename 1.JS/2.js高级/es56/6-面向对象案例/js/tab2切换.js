/////////看oneNote笔记  JS-面向对象里写了过程
//实现4个功能
// 1．点击 tab栏,可以切换效果.
// 2．点击＋号,可以添加tab项和内容项.
// 3．点击x号,可以删除当前的tab项和内容项.
// 4．双击tab项文字或者内容项文字可以修改里面的文字内容.

//   面向对象：
// 1.把公共的属性和方法抽取出来放在类中  
// 2.根据类再去实例化各种对象

//1.就抽取 tab栏  抽取Tab对象
//2.根据这个对象有什么样的功能 划分成若干个模块

//4个大方法
// 1．该对象具有切换功能
// 2. 该对象具有添加功能
// 3．该对象具有删除功能
// 4．该对象具有修改功能

// 谨记：
// 函数方法中的this指向他的调用者 谁调用这个函数 里面的this就指向谁
// constructor中的this指向调用它的实例对象

//----------------------------------------------------------------
let that  //想让函数方法中的this 能不指向他的调用者 而去指向constructor中的this调用者
// that 是constructor里面的this 记住这一点就行
class Tab {
    //构造函数，用户接收实例对象传来的实参
    constructor(id) {
        that = this
        //1.获取元素----------------
        //根据传过来的id名获取元素
        this.main = document.querySelector(id)//拿到了id名叫tab的盒子，用main接收

        //为了添加功能获取+元素和 fisrstnav的第一个ul也就是li 的父亲
        this.add = this.main.querySelector('.tabadd')
        this.ul = this.main.querySelector('.firstnav ul:first-child')
        //获取section的父亲
        this.tabscon = this.main.querySelector('.tabscon')

        // 2.初始化---------------绑定元素
        //别忘了写this  让页面加载就自动执行init()里得东西（绑定事件）
        this.init()//你实例化了哪个对象，哪个对象就调用init方法
        //init写在获取元素得后面 要不不好使

    }
    //初始化init       init初始化操作让相关的元素绑定事件
    //要一打开页面所有的小选项卡已经绑定好了事件，页面一打开就先绑定事件
    init() {
        // 0.获取元素li 和section
        this.updateNode()
        //1.切换 就要给所有li绑定点击事件
        for (let i = 0; i < this.lis.length; i++) {
            //给每个小li设置单独的索引号，给每个li添加了index属性作为索引号，存着当前li的索引
            //index就是为了保存每次循环得i
            this.lis[i].index = i
            //因为点击小li就执行切换函数 所以把切换的函数名放这里
            //别加()要不就直接调用了 想点击完调用
            this.lis[i].addEventListener('click', this.toggleTab)
        }
        //2.给添加按钮绑定事件 按钮就一个所以写在循环外面
        this.add.addEventListener('click', this.addTab)
    }

    //0.获取 所有li和section 的方法 
    //这个方法什么时候用呢？一初始化就要调用这个函数
    //为了防止后面新添加的li和section绑定不上事件 因为之前在上面写的获取li和section
    // 只是为准备好的li和section绑定事件，但是我们新添加的绑定不上，所以干脆把li和section
    // 获取拿出来在外面封装成一个函数 专门获取所有li 和section，然后等到初始化就调用这个函数
    updateNode() {
        //1.实现切换功能要把小选项卡和下面跟着变化的内容获取过来 tab中的li和section
        this.lis = this.main.querySelectorAll('li')//获取大盒子#tab中的所有li
        this.sections = this.main.querySelectorAll('section')//获取大盒子#tab中的所有section
    }
    //1.切换
    toggleTab() {
        that.clearClass()//that指向constrouctor中

        //这个this指向函数调用者this.lis[i]
        // console.log(this.index);//拿到了当前索引号
        //点击完以后就让当前li添加样式 去边框的liactive类，其余兄弟移除这个类
        //点击完以后就让当前li对应的section添加conactive类，其余兄弟移除这个类
        //记住这个函数里的li指向调用者 this.lis[i]！！！！
        this.className = 'liactive'   // this.className('liactive')不对
        that.sections[this.index].className = 'conactive'
        //此时会报错！！！！！因为this.sections[this.index]，this指向li，li没有sections这个属性
        //这个this要是constructor中的this就好了 在上面声明一个全局变量that



    }
    //2.添加
    // 点击＋可以实现添加新的选项卡和内容
    // 第一步:创建新的选项卡li和新的内容section
    // 第二步:把创建的两个元素追加到对应的父元素中.
    addTab() {
        //点击添加就先把所有兄弟的样式清除掉 只留我自己
        that.clearClass()


        //  1.创建li和section 
        let li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>'
        let section = ' <section class="conactive">测试1</section>'
        //  2.把这两个元素追加到对应父元素 以前的做法:动态创建元素createElement，但是元素里面内容较多,需要innerHTML赋值在appendChild追加到父元素里 
        //  现在高级做法:利用insertAdjacentHTML()可以直接把字符串格式元素添加到父元素中 插入相邻的
        // 不是模版字符串的问题，这一步是省掉了创建元素，跟追加元素，是三合一
        // appendChild不支持追加字符串的子元素, insertAdjacentHTML支持追加字符串的元素
        // 追加到li的父元素中，就是firstnav的ul，要去上面先获取一下
        that.ul.insertAdjacentHTML('beforeend', li)//把li这个字符串追加到父元素ul中的最后
        //这里的this指向调用者add按钮，但是这个按钮中没有ul，所以变成that
        that.tabscon.insertAdjacentHTML('beforeend', section)

        //解决后添加的li和section绑定不上事件的问题
        // 还要再addTab()的最后在 this.init()一下，
        // 因为init（）函数中第一步是获取新的li，然后为所有li和section绑定事件
        // 点击添加按钮先创建好li和section然后再init === 获取到新的元素就要为元素绑定事件
        that.init()
    }
    //3.删除
    removeTab() { }
    //4.修改
    editTab() { }

    //5.清除东西 //清除所有li 和section的类
    clearClass() {
        for (let i = 0; i < this.lis.length; i++) {
            //清除地方1
            this.lis[i].className = ''
            //清除地方2
            this.sections[i].className = ''
        }

    }
}
let tab = new Tab('#tab')

