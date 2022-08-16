// 1.有一个地图属性(类):
// 我们可以把地图看成一个类
// 有一个行属性  行数 row
// 有一个列属性  列数 col
// 有宽度属性(总宽度) width
// 有高度属性（总高度) height
// 有一个数组属性是一个二维数组，里面存储的都是一个小方格元素

function Map(row, col, width, height) {
    this.row = row
    this.col = col
    this.width = width
    this.height = height
    //二维数组
    this.arr = []
    //定义容器元素
    this.dom = document.createElement('div')
}
//初始化
Map.prototype.init = function () {
    //遍历行列：地图首先是一行然后为一行添加一堆元素 所以先绘制行 再绘制列
    for (let i = 0; i < this.row; i++) {
        //创建行元素
        let rowDom = document.createElement('div')
        //设置类名
        rowDom.className = 'row'
        //给每个单元格设置宽高     总高度/行数
        rowDom.style.height = this.height / this.row + 'px'
        //定义行数组  然后往行里添加元素  第一维代表每一行，第二维代表每个列
        let rowArr = []


        //遍历该行的每一列
        for (let j = 0; j < this.col; j++) {
            //创建每一个列元素
            let colDom = document.createElement('div')
            //设置类名
            colDom.className = 'col'
            //将列单元格放入行元素内
            rowDom.appendChild(colDom)
            //在数组中存储对单元格的映射
            rowArr.push(colDom)//行数组中后面加入列数组
        }
        //最终要把行数组放入二维数组中，行元素放入容器元素中
        //将行元素渲染 并存储  把行元素存储到dom容器
        this.dom.appendChild(rowDom)
        //把每一行数组存储到二维数组rowArr中
        this.arr.push(rowArr)
    }
    //设置容器元素类名
    this.dom.className = 'box'
    //给box设置宽高
    this.dom.style.width = this.width + 'px'
    this.dom.style.height = this.height + 'px'




    //把装有二维数组和行列元素的容器dom显示到页面
    document.body.appendChild(this.dom)
    // console.log(this.arr);//可以看数组的映射 每个div对应一个单元格 相当于数组中的每个成员，操作成员就相当于操作页面中的元素
    // 所以做映射是让他们一一对应

}