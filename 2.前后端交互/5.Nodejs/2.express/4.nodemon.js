// 1.为什么要使用nodemon
// 在编写调试Node.js 项目的时候，如果修改了项目的代码，
// 则需要频繁的手动close掉，然后再重新启动，非常繁琐。
 
// 现在，我们可以使用nodemon 
// (https://www.npmjs.com/package/nodemon)这个工具，
// 它能够监听项目文件的变动，当代码被修改后，
// nodemon 会自动帮我们重启项目，极大方便了开发和调试。
//安装为全局可用的工具
//  npm install -g nodemon


//  当基于Nodejs编写了一个网站应用的时候，传统的方式，是运行node appjs 命令，
//  来启动项目。这样做的坏处是:代码被修改之后，需要手动重启项目。
// 现在，我们可以将node命令替换为nodemon命令，使用nodemon app.js 来启动项目。
// 这样做的好处是:代码被修改之后，会被nodemon监听到，从而实现自动重启项目的效果。
//   node app.js
//  将上面的终端命令，替换为下面的终端命令，即可实现自动重启项目的效果
//  nodemon app.js


// 如果报错的可以使用  ==> npx nodemon  文件名
// 若无法使用nodemon，管理员权限打开终端输入：set-ExecutionPolicy RemoteSigned然后再y
// 打开文件所在文件夹，点击左上角的“文件”选项，鼠标放到“打开Windows powershell”，选择以管理员身份打开，输入 set-ExecutionPolicy RemoteSigned，Y