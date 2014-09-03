BootStrap3 + Angular网站基础架构
============
-基于BootStrap3 + Angular框架
-采用bower和gulp实行包管理和文件管理
-基于livereload实现页面自动刷新
-其目标是做一个单页网站的基础框架。

当前进展：刚刚开始。

============
文件结构
    .
    ├── app
    │   ├── index.html
    │   └── css
    │   │   ├── less/
    │   │   └── style.css
    │   └── js
    │   │   └── *.js
    │   └── images/
    │       └── *.png
    ├── node_modules/
    ├── bower.json
    ├── package.json
    └── README.md

============
注意：

1. clone下去之后，请先确保有node环境和npm包管理，
   全局安装bower（npm install -g bower）
   然后执行npm install和bower install命令，以便对grunt环境进行初始化。
   之后就可以用gulp来启动服务器进行查看和调试了。
   

