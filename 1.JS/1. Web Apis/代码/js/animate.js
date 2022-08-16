function animate(obj, target, callback) {
    clearInterval(obj.timer)

    obj.timer = setInterval(function () {
        let step = (target - obj.offsetLeft) / 10
        step = step > 0 ? Math.ceil((target - obj.offsetLeft) / 10) : Math.floor((target - obj.offsetLeft) / 10)
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer)
            //回调函数写在定时器结束的里面
            //如果有callback函数就调用那个函数
            //等到动画执行完他才执行
            if (callback) {
                callback()
            }
        } else {
            //把每次加1这个步长值改为一个慢慢变小的值
            obj.style.left = obj.offsetLeft + step + 'px'
        }

    }, 10)
}