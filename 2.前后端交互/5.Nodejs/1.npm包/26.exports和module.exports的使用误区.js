// 时刻谨记，require()模块时，得到的永远是module.exports指向的对象:
//js里小知识点 182.有图
//例一：-----------------------------------------
exports.username = 'zs'
module.exports = {
    gender: '男',
    age: 22
}
//外界得到{gender:'男',age:22}
//因为module.exports后面紧跟着得是=号,要是变成这种
module.exports.obj = {
    gender: '男',
    age: 22
}
//就输出{username:'zs',ender:'男',age:22}


// 本来他俩都指向一个对象，然后后来module.exports指向了新对象，exports还没变
// 此时exports指向一个，
// module.exports指向一个
// 听谁的？？？？
// 但是最终以module.exports为准
外界得到{ gender: '男', age: 22 }

//例二：-------------------------------------------
module.exports.username = 'zs'
exports = {
    gender: '男',
    age: 22
}

// module.exports.username = 'zs'并没有换指向对象，只是添加了个属性正常输出
// exports换了指向对象
// 他俩都有指向 你说听谁得？
外界得到{ username: 'zs' }


//例三：-------------------------------------------
exports.username = 'zs'
module.exports.gender = '男'
// 他俩并没有改变指向，都是添加了属性
外界得到{ username: 'zs', gender: '男' }


//例四：-------------------------------------------
exports = {
    username='zs',
    gender: '男'
}
module.exports = exports
module.exports.age = '22'
// exports指向了一个空对象，然后把exports赋值给module.exports
// 他俩都指向一个空对象下了 然后又给module.exports加了个属性 指向不变
{ username: 'zs', gender: '男' ,age:"22"}