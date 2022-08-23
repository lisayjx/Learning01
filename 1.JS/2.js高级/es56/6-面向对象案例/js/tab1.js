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


//----------------------------------------------------------------
class Tab {
    //构造函数，用户接收实例对象传来的实参
    constructor(id) {

        //1.获取元素----------------
        //根据传过来的id名获取元素
        this.main = document.querySelector(id)//拿到了id名叫tab的盒子，用main接收
        //1.实现切换功能要把小选项卡和下面跟着变化的内容获取过来 tab中的li和section
        this.lis = this.main.querySelectorAll('li')//获取大盒子#tab中的所有li
        this.sections = this.main.querySelectorAll('section')//获取大盒子#tab中的所有section
       
        // 2.初始化---------------绑定元素
        //别忘了写this  让页面加载就自动执行init()里得东西（绑定事件）
        this.init()//你实例化了哪个对象，哪个对象就调用init方法
        //init写在获取元素得后面 要不不好使

    }
    //初始化init       init初始化操作让相关的元素绑定事件
    //要一打开页面所有的小选项卡已经绑定好了事件，页面一打开就先绑定事件
    init() {
        //1.切换 就要给所有li绑定点击事件
        for (let i = 0; i < this.lis.length; i++) {
            //给每个小li设置单独的索引号，给每个li添加了index属性作为索引号，存着当前li的索引
            this.lis[i].index = i
            this.lis[i].addEventListener('click', function () {
                console.log(this.index); //试着打印一下索引
            })
        }
    }
    //1.切换
    toggleTab() { }
    //2.添加
    addTab() { }
    //3.删除
    removeTab() { }
    //4.修改
    editTab() { }
}
let tab = new Tab('#tab')

