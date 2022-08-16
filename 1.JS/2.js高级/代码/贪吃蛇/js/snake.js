
// 2.有一个蛇属性

// 我们可以把蛇也看成是一个类
// 有一个数组属性，存储蛇的每一节身体
// 有一个方向属性，用于控制蛇的方向
// 蛇增长的方法
// 蛇转向的方法


function Snake(img) {
    //存储蛇每一节的坐标  数组第一个成员是头  最后一个是尾
    this.arr = [
        { x: 6, y: 4 },
        { x: 5, y: 4 },
        { x: 4, y: 4 },
    ]
    //存储图片
    this.img=img
    // this.headImg = img.head
    // this.bodyImg = img.body
    // this.tailImg = img.tail
    //方向 默认的   左37 上38 右39  下40   用这几个数-36 就求出左对应哪个图的名，。。
    //(direction-37).png  头图 数组中图片的索引值
    //(direction-37).png  尾图 数组中图片的索引值  尾部图片始终和她紧挨着的身体方向一样
    this.direction = 39
    this.headImage=this.img.head[this.direction-37]
    this.bodyImage=this.img.body
    this.tailImage=this.img.tail[this.direction-37]

}