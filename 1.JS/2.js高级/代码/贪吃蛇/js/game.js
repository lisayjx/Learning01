// Game类控制其他四个类 所以要存储他们
function Game(Snake, map, food, block) {
    //存储属性
    this.snake = Snake
    this.map = map
    this.food = food
    this.block = block
    //初始化
    this.init()
}
//实现初始化方法
Game.prototype.init = function () {
    //将地图初始化
    this.map.init()
    //渲染地图
    this.renderMap()
    //渲染食物
    this.renderFood()
    //绘制障碍物
    this.renderBlock()
}
//渲染地图
Game.prototype.renderMap = function () {
    this.map.init()
}

//渲染食物
Game.prototype.renderFood = function () {
    //根据食物的横纵坐标，在地图中找到对应元素，设置其背景图片
    this.map.arr[this.food.y][this.food.x].style.backgroundImage = 'url(' + this.food.img + ')'
}

//绘制障碍物
Game.prototype.renderBlock = function () {
    //遍历障碍物成员  那个数组
    for (let i = 0; i < this.block.arr.length; i++) {
        //y对应行  x对应列
        this.map.arr[this.block.arr[i].y][this.block.arr[i].x].style.backgroundImage = 'url(' + this.block.img + ')'
    }
}

// 绘制渲染蛇
Game.prototype.renderSnake = function () {
    //特殊绘制头和尾
    let head = this.snake.arr[0]
    let tail = this.snake.arr[this.snake.arr.length - 1]
    //绘制头
    this.map.arr[head.y][head.x].style.backgroundImage = 'url(' + this.snake.headImage + ')'
    //绘制身体
    for (let i = 1; i < this.snake.arr.length-1; i++) {
        let body = this.snake.arr[i]//缓存身体元素
        this.map.arr[body.y][body.x].style.backgroundImage = 'url(' + this.snake.bodyImage + ')'
    }
    //绘制尾部
    this.map.arr[tail.y][tail.x].style.backgroundImage= 'url(' + this.snake.tailImage + ')'

}
