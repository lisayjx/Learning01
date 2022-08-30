// 1.打开命令行窗口
// win: 左下角开始，找到运行，点击，输入cmd，回车
// win: win+r快速打开命令行窗口
// mac: command＋空格，输入terminal



// 2.选择盘符:盘符名加冒号    E:
// 3.查看盘符及目录下文件与文件夹: win:dir mac: ls
// 4.清空命令行信息: win:cls mac: clear
// 5.进入文件夹或目录: cd文件夹名称返回到上一级目录: cd../
//     6.快速补全目录或文件夹名称: tab
// 7.创建文件夹: mkdir 文件夹名称
// 8.查看历史输入过的命令: 上下按键

// babel: 安装在你的项目得根目录下
// 直接在vscode文件右键 - 在集成终端打开

// 第一步: 安装Babel
// npm install--save - dev @babe1/core

// 第二步: 配置文件.babelrc
// Babel的配置文件是.babelrc，存放在项目的根目录下。使用Babel 的第一步，就是配置这个文件。该文件用来设置转码规则和插件，基本格式如下
// {
//         "presets": [],
//         "plugins": []4
// }

// 第三步:转码规则
// presets字段设定转码规则，官方提供以下的规则集，你可以根据需要安装
//  npm install --save-dev @babe1/preset-env

// 第四步：将规则加入
// {
//     "presets": ["@babel/env"],
//     "plugins": []
// }

// Babel提供命令行工具@babelcli，用于命令行转码
//  npm install --save-dev @babe1/cli

// 基本用法：
// 1.转码结果输出到标准输出   输出在控制台
// npx babel example.js
// 2.转码结果写入一个文件
// --out-file 或-o参数指定输出文件
// npx babel example.js --out-file compiled . js或者
// npx babel example.js -o compiled.js
// 3.整个目录转码
// --out-dir或-d参数指定输出目录
// npx babel src --out-dir lib或者
// npx babel src -d lib
