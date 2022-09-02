//向外界共享username    在module.exports对象上挂载username
module.exports.username = 'zs'
//向外界共享sayHI方法    在module.exports对象上挂载sayHI方法
module.exports.sayHI = function () {
    console.log('hello');
}

//向外界分享一个常量
const age = 18
module.exports.age = age//不写这句话age是私有成员不能向外界暴露