# FastCodeJS
* 这是一套快速开发TypeScript 或者 JavaScript ES6项目的 一键编译环境
* 抛弃繁琐的配置流程,直接使用;
* 集成vsvode + nodejs + typeScript + rollup html5模块化开发环境
# 作者
* [badyoo](https://github.com/badyoo)
* QQ:547243998

# 网站
* http://www.616ko.com/
* 微博:http://weibo.com/badyoo

# 用法
* 下载最新版的vscode https://code.visualstudio.com/
* 给vscode安装以下插件：
  * 谷歌浏览器调试工具
  * Debugger for Chrome;
  * 当然你需要中文界面就打个中文补丁
  * Chinese (Simplified);
* TypeScript迷直接拷贝一份TSEmpty用vscode打开文件夹即可
* JavaScript ES6迷直接拷贝一份JSEmpty用vscode打开文件夹即可
* 按f5熟悉的编译环境就回来了，抛弃nodejs环境的烦劳

* 目前测试通过windows系统完美没问题，Mac 理论上应该没问题

# 功能
* TypeScript编译器是最新版的，目测~
* 都支持断点调试
* 其他功能？好像没啥功能了吧~ 度娘：TypeScript JavaScript ES6入门到精通

# 注意
* 项目目录必须跟FastCodeJS同级
* 目前导出都是es6 的JavaScript 
* 如果你要兼容ie8 需要导出万能的ES5只能使用TypeScript编写
  修改tsconfig.json里的 "target": "ES5" 即可


### License
[MIT License](https://github.com/badyoo/FastCodeJS/blob/master/LICENSE)
