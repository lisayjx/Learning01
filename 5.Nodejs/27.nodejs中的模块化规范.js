Node.,js遵循了CommonJS模块化规范，
CommonJS规定了  模块的特性  和  各模块之间如何相互依赖。


CommonJS规定:
每个模块内部， module 变量 代表【当前模块】。
module变量是一个对象，它的exports属性(即 module.exports)是【对外的接口】.
加载某个模块，其实是加载该模块的module.exports属性。【require()方法用于加载模块。】

